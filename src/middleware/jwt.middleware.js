const jwt = require("jsonwebtoken");
const VERIFY = async (req, res, next) => {
    if (req.url.includes('sign_up') )
        return next()
    const token = req.body.token || req.query.token || req.headers["access-token"];
    try {
        if (!token) throw "unauthorized You need to Login"
        const decrypt = await jwt.verify(token, "test");
        req.user = decrypt
        next()
    }
    catch (error) {
        next(error)
    }
}
const GENERATE = async (request) => {
    try {
        const token = jwt.sign(request, "test", {
            expiresIn: "8h",
        })
        return { token, id: request.id };
    } catch (e) {
        return null;
    }
}
module.exports = {
    VERIFY, GENERATE
}