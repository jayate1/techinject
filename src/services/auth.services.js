const bcrypt = require('bcrypt');
const { User, User_sessions } = require('../postgresql/models')
const generateToken = require('../middleware/jwt.middleware')
const DeviceDetector = require("device-detector-js");
const sign_up = async (request) => {
    request.password = await bcrypt.hash(request.password, 10)
    const [user, created] = await User.findOrCreate({
        where: { email: request.email },
        defaults: request,
        raw: true,
    });
    if (created)
        return { message: "user created successfully", data: await generateToken.GENERATE(user.dataValues) }
    throw "user already exists"
}
const sign_in = async (request, data) => {
    let user_agent = (new DeviceDetector().parse(data.user_agent).device).type;
    const password = request.password
    request = await User.findOne({
        where: {
            id: request.id, email: request.email
        }, attributes: ['password'], raw: true
    })
    if (!request)
        throw "Invaid email"
    const compare = await bcrypt.compare(password, request.password);
    if (compare) {
        let session_data = {
            user_agent,
            token: data.token,
            ip_address: data.ip_address,
            is_active: true,
            user_id: data.id
        }
        let user_session = await User_sessions.create(session_data)
        return "user logged successfully"
    }
    throw "invaid user"
}
module.exports = {
    sign_up, sign_in
}
