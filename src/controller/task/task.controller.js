const taskServices = require('../../services/task.services')
const { asyncHandlers } = require('../../util/tryCatchHandler')
const create_task = asyncHandlers(async (req, res, next) => {
    const data = await taskServices.create_task({ ...req.body, user_id: req.user.id })
    return await res.status(201).send(data);
});
const get_task = asyncHandlers(async (req, res, next) => {
    const data = await taskServices.get_task(req.user.id);
    return await res.status(200).send(data);
});
module.exports = {
    create_task, get_task
}


// token, email, password

