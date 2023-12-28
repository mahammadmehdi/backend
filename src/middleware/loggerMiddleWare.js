export const myLogger = function (req, res, next) {
    console.log('Logged', new Date(Date.now()))

    next()
}