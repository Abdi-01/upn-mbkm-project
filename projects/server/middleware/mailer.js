import nodemailer from 'nodemailer';

export const transporterSMTP = nodemailer.createTransport({
    pool: true,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export const transporterGMAIL = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

export const checkSMTP = () => {
    transporterSMTP.verify((error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`SMTP is ready ✅`, result);
        }
    })
}

export const checkGMAIL = () => {
    transporterGMAIL.verify((error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`GMAIL is ready ✅`, result);
        }
    })
}