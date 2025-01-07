// const bcrypt = require('bcrypt');
const { Timetracking } = require('../postgresql/models')
// const generateToken = require('../middleware/jwt.middleware');
// const { update_time } = require('../controller/task/task.controller');
const track_time = async (request) => {
    console.log(request,"pp");
    
    return await Timetracking.create(request)
}
const get_time_track = async (request) => {
    return await Timetracking.findAll({ where: { user_id: request } })
}


module.exports = {
    track_time, get_time_track
}
