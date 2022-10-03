import db from "../database/models";
const users = db.users;
import { validationResult } from 'express-validator';


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
            let login = await users.findAll({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
            res.status(200).send({
                success: true,
                message: "Auth data success ✅",
                data: login
            })
        }

    } catch (error) {
        next(error);
    }
}

export const regis = async (req, res, next) => {
    try {
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