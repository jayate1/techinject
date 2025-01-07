const authServices = require('../../services/auth.services')
const { asyncHandlers } = require('../../util/tryCatchHandler')
const sign_up = asyncHandlers(async (req, res, next) => {
    const data = await authServices.sign_up(req.body)
    return await res.status(201).send(data);
});
const sign_in = asyncHandlers(async (req, res, next) => {
    const data = await authServices.sign_in({ ...req.body, id: req.user.id }, { id:req.user.id,ip_address: req.headers["ip_address"], token: req.headers["access-token"], user_agent: req.headers["user-agent"] });
    return await res.status(200).send(data);
});
module.exports = {
    sign_up, sign_in
}


// token, email, password

