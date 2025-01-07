exports.makeResponse = async(res, statusCode, success, message = "", payload = null, meta = {}) => {
    return await res.status(statusCode)
        .send({
            success,
            message,
            data: payload,
            meta
        });
};