// learn how to export module to shorten you messy code in app.js and put it in here instead
exports.getDate = function () {
    const today = new Date()
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    return today.toLocaleDateString("en-US", options)
}

exports.getDay = function () {
    const today = new Date()
    const options = {
        weekday: 'long',
    }
    return day = today.toLocaleDateString("en-US", options)
}