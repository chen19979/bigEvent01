$(function() {
    //1.获取用户的个人信息
    function getUserInfo() {

        //发送ajax请求
        axios.get('/my/userinfo').then(res => {
            console.log(res);
        })

    }

    getUserInfo()













})