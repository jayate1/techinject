// const bcrypt = require('bcrypt');
const { Task } = require('../postgresql/models')
// const generateToken = require('../middleware/jwt.middleware');
// const { update_time } = require('../controller/task/task.controller');
const create_task = async (request) => {
    return await Task.create({ ...request, current_time: '0:0' })
}
const get_task = async (request) => {
    return await Task.findAll({ where: { user_id: request } })
}


module.exports = {
    create_task, get_task
}
