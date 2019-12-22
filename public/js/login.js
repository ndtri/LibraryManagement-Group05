window.onload = function () {
    var isLogin = localStorage.getItem('islogin');
    console.log(isLogin);
    if (isLogin === "true"){
        $('.login-btn').css("visibility", "collapse");
        $(".account-btn").css("visibility", "visible");
    }
    else {
        $('.login-btn').css("visibility", "visible");
        $(".account-btn").css("visibility", "collapse");
    }

    $("#loginBtn").click(function () {
        var username = $("#uname").val();
        var password = $("#pwd").val();

        if (username === "user" && password === "user") {
            console.log("log in success");
            $('#loginModal').modal('hide');
            $('.login-btn').css("visibility", "collapse");
            $('.account-btn').css("visibility", "visible");
            localStorage.setItem('islogin', true);
        } else {
            alert("Wrong username or password. Please try again.");
        }
    });

    $(".log-out-btn").click(function () {
        console.log("Hello");
        $('.login-btn').css("visibility", "visible");
        $(".account-btn").css("visibility", "collapse");
        localStorage.setItem('islogin', false);
    })
};