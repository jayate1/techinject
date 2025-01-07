const taskServices = require('../../services/log.services')
const { asyncHandlers } = require('../../util/tryCatchHandler')
const create_log = asyncHandlers(async (req, res, next) => {
    const data = await taskServices.create_logs({ user_id: req.user.id, task_id: req.body.task_id, log_message: req.body.log_message })
    return await res.status(201).send(data);
});
const get_logs = asyncHandlers(async (req, res, next) => {
    const data = await taskServices.get_logs({ user_id: req.user.id});
    return await res.status(200).send(data);
});
module.exports = {
    create_log, get_logs
}


// token, email, password

