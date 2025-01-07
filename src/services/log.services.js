
const { Task_logs } = require('../postgresql/models')
const create_logs = async (request) => {
    return await Task_logs.create(request)
}
const get_logs = async (user_id) => {
    return await Task_logs.findAll({ where: user_id  })
}


module.exports = {
    create_logs, get_logs
}
