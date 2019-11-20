function store(){
    var user = document.getElementsByName("login_user_name")[0].value;
localStorage.setItem("userName", user);
}

