const timeHelper = require('../time')

function time(ctx) {
    ctx.body = timeHelper.getDateTime()
}

module.exports = time