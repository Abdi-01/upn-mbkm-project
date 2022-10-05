import db from "../database/models";
const users = db.users;
import { validationResult } from 'express-validator';
import Crypto from 'crypto';
import { createToken } from '../middleware/encript';
import { transporterSMTP } from "../middleware/mailer";

export const getUsers = async (req, res, next) => {
    try {
        console.log(req.dataToken); // data from translate token
        if (req.dataToken.role === 'admin') {
            // hasil penerjemahan
            let get = await users.findAll({ where: req.query });
            res.status(200).send({
                success: true,
                message: "GET data success ✅",
                data: get
            })
        } else {
            res.status(401).send({
                success: false,
                msg: "Not authenticate to access API ❌"
            })
        }
    } catch (error) {
        next(error);
    }
}

export const auth = async (req, res, next) => {
    try {

        let validation = validationResult(req);
        if (!validation.isEmpty()) {
            res.status(400).send(validation.errors)
        } else {
            // 1. Hashing Password
            req.body.password = Crypto.createHmac("sha256", process.env.HASH_KEY)
                .update(req.body.password).digest("hex");

            // 2. get data user
            let login = await users.findAll({
                where: {
                    username: req.body.username,
                    password: req.body.password
                },
                attributes: ['iduser', 'username', 'email', 'imgProfile', 'role', 'status']
            })

            // 3. Generate token
            let token = createToken({ ...login[0].dataValues });

            console.log(login[0].dataValues)
            res.status(200).send({
                success: true,
                message: "Auth data success ✅",
                data: { ...login[0].dataValues, token }
            })
        }

    } catch (error) {
        next(error);
    }
}

export const regis = async (req, res, next) => {
    try {
        // Hashing password
        req.body.password = Crypto.createHmac("sha256", process.env.HASH_KEY)
            .update(req.body.password)
            .digest("hex");

        let result = await users.create(req.body);

        // Generate token
        let token = createToken({ ...result.dataValues }, '1h');
        // Mengirim email
        await transporterSMTP.sendMail({
            from: 'Admin',
            to: req.body.email,
            subject: 'Confirmation Register Account',
            html: `<div>
            <h3>Klik link dibawah ini untuk verifikasi akun <b>${req.body.username}</b></h3>
            <a href='${process.env.FE_URL}/verification?_t=${token}'>Klik disini</a>
            </div>`
        })


        res.status(200).send({
            success: true,
            msg: 'Regis success ✅'
        })
    } catch (error) {
        next(error)
    }
}

export const verify = async (req, res, next) => {
    try {
        let result = await users.update(req.body, {
            where: {
                iduser: req.dataToken.iduser
            }
        })

        res.status(200).send({
            success: true,
            msg: "Your account is verified now ✅"
        })
    } catch (error) {
        next(error)
    }
}

export const editImg = async (req, res, next) => {
    try {
        let result = await users.update({
            imgProfile: `/imgProfile/${req.files[0].filename}`
        }, {
            where: {
                iduser: req.dataToken.iduser
            }
        })
        res.status(200).send({
            success: true,
            msg: "Upload image success ✅"
        })
    } catch (error) {
        next(error)
    }
}