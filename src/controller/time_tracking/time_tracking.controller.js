const taskServices = require('../../services/trackingtime.services')
const { asyncHandlers } = require('../../util/tryCatchHandler')
const time_track = asyncHandlers(async (req, res, next) => {
    const data = await taskServices.track_time({ ...req.body, user_id: req.user.id })
    return await res.status(201).send(data);
});
const get_time_track = asyncHandlers(async (req, res, next) => {
    const data = await taskServices.get_time_track(req.user.id);
    return await res.status(200).send(data);
});
module.exports = {
    time_track, get_time_track
}


// token, email, password

