import db from "../database/models";
const pm_merdekas = db.pm_merdekas;

export const getData = async (req, res, next) => {
    try {

        let get;
        if (JSON.stringify(req.query) == '{}') {
            get = await pm_merdekas.findAll();
        } else {
            get = await pm_merdekas.findAll({
                where: {
                    [req.query.type]: req.query.value
                }
            });
        }

        res.status(200).send({
            success: true,
            message: "GET data success ✅",
            data_pmmerdeka: get
        })

    } catch (error) {
        console.log(error)
        next(error);
    }
}