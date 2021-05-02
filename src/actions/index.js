const  userActions = require("./userActions")
const  counterActions = require("./counterActions")

module.exports = {
    loginAction: userActions.userLoginAction,
    logoutAction: userActions.userLogoutAction,
    addCounter: counterActions.counterAdd,
    SubstractCounter: counterActions.counterSubstract
}