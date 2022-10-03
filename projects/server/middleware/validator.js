import { check, validationResult } from 'express-validator';

export const checkUser = async (req, res, next) => {
    try {
        // Validation proses
        await check('username').notEmpty().isAlphanumeric().run(req);
        await check('password').notEmpty().isStrongPassword({
            minLength: 5,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
            minNumbers: 1
        }).run(req);

        const validation = validationResult(req);
        if (!validation.isEmpty()) {
            res.status(400).send({
                success: false,
                msg: 'Validation invalid ❌'
            });
        } else {
            // Melanjutkan ke middleware/controller berikutnya
            next()
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
}