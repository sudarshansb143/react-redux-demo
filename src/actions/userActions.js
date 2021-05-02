

module.exports = {
    userLoginAction: function (userObj) {
        return {
            type: 'SET_USER',
            payload: userObj
        }
    },     
    userLogoutAction :function  () {
        return {
            type: 'LOG_OUT',
        }
    }
}