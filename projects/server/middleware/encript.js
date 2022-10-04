import jwt from 'jsonwebtoken';

export const createToken = (payload, expTime = "24h") => {
    return jwt.sign(payload, process.env.TOKEN_KEY, {
        expiresIn: expTime
    })
}

export const readToken = (req, res, next) => {
    console.log("Check token :", req.token);
    jwt.verify(req.token, process.env.TOKEN_KEY, (err, decode) => {
        if (err) {
            res.status(401).send({
                success: false,
                msg: "Not authenticate ❌"
            })
        }
        console.log("output :", decode)

        req.dataToken = decode;
        next()
    })
}