
var url = "http://localhost:3000/user/"+ localStorage.getItem("userName");
fetch(url)
    .then(function(resp){
        return resp.json();
    }).then(function(book){
        
        showResults(book);

        });

    
function showResults(data) {

    data.forEach(function(book) {

        
        document.getElementsByName("create_user_name")[0].value = book.username;
        document.getElementsByName("create_full_name")[0].value =book.fullname;
        document.getElementsByName("create_email")[0].value = book.email;
        document.getElementsByName("create_password")[0].value = book.password;
        document.getElementsByName("create_address")[0].value = book.address;
    

    });
    
}

function del(){
    var url1 = 'http://localhost:3000/user/del/'+localStorage.getItem("userName");
    fetch(url1)
    .then(function(resp){
        return resp.json();
    }).then(console.log('done'));

      alert('Your Account Has been deleted. Thanks for joining to us.')

}