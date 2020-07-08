//退出登录的操作
$('#logout').on('click', function () {

    let logout = confirm('您真的要退出么？');
    if (logout) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function (response) {

                location.href = 'login.html';
            },
            error: function (xhr) {
                alert('系统错误');
            },
        });
    }


});
