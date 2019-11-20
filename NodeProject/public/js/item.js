'use strict';

const output = document.getElementById("resultID");

function fnSearch() {

    
    var url = "http://localhost:3000/item/alls";
    fetch(url)
        .then(function(resp){
            return resp.json();
        }).then(function(book){
            showResults(book);
            
        });

}
function search(){
    document.getElementById("resultID").innerHTML = "";
        var link = "http://localhost:3000/item/alls/"+document.getElementById("searchInput").value;
        fetch(link)
            .then(function(resp){
                return resp.json();
            }).then(function(book){
                
                showResults(book);
                
            });  
    
}


function showResults(data) {

    data.forEach(function(book) {

        let card = document.createElement("div");
        card.className = "col-md-3 item ajeeb"
        card.addEventListener('click', () => window.location.href = './cart.html?id=' + book.id+'&title='+book.title+'&price='+book.price+'&img='+book.image);

    
        let image = document.createElement("img");
        image.src = "images/"+book.image+".jpg";
        // image.className = "card-image";
        card.appendChild(image);

        let title = document.createElement("h3");
         title.style.textAlign = 'center';
        title.innerText = book.title;
        card.appendChild(title);

       

        let price = document.createElement("h6");
        price.style.textAlign = 'center';

        let span = document.createElement("span");

        let a = document.createElement('a');
        a.setAttribute('href',"../cart.html");
        a.innerHTML = " / Buy Now";
        span.innerText = book.price;
        span.className = "price";

        price.appendChild(span);
        price.appendChild(a);
        card.appendChild(price);
        
        output.appendChild(card);


    });
    
}
