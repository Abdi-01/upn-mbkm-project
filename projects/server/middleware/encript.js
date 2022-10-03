import jwt from 'jsonwebtoken';

export const createToken = (payload) => {
    return jwt.sign(payload, process.env.TOKEN_KEY, {
        expiresIn: '1h'
    })
}

export const readToken = (req, res, next) => {
    jwt.verify(req.token, process.env.TOKEN_KEY, (err, decode) => {
        if (err) {
            res.status(401).send({
                success: false,
                msg: "Not authenticate ❌"
            })
        }

        // hasil penerjemahan
        req.dataToken = decode;

        next()
    })
}