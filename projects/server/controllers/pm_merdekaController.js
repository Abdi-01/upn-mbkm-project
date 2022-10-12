import db from "../database/models";
const pm_merdekas = db.pm_merdekas;

export const getData = async (req, res, next) => {
    try {

        let get = await pm_merdekas.findAll();

        res.status(200).send({
            success: true,
            message: "GET data success ✅",
            data: get
        })

    } catch (error) {
        console.log(error)
        next(error);
    }
}