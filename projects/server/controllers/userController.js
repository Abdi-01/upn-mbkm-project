import db from "../database/models";
const users = db.users;
import { validationResult } from 'express-validator';
import Crypto from 'crypto';
import { createToken } from '../middleware/encript';

export const getUsers = async (req, res, next) => {
    try {
        let get = await users.findAll({ where: req.query });
        res.status(200).send({
            success: true,
            message: "GET data success ✅",
            data: get
        })
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
                attributes: ['iduser', 'username', 'email', 'imgProfile']
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

        console.log(result);

        res.status(200).send({
            success: true,
            msg: 'Regis success ✅',
            result
        })
    } catch (error) {
        next(error)
    }
}