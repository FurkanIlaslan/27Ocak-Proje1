// ! Filtreleme İşlemleri İçin;
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let searchTerm = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".col-6");
    // console.log(cards);

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if(productName.includes(searchTerm)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }
})

// searchBtn.addEventListener("click", function(){
//     // console.log(searchInput.value);
//     let searchTerm = searchInput.value.toLowerCase();

//     let cards = document.querySelectorAll(".col-6");
//     // console.log(cards);

//     for(let i = 0; i < cards.length; i++){
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

//         if(productName.includes(searchTerm)){
//             card.style.display = "block";
//         }else{
//             card.style.display = "none";
//         }
//     }
// })


// searchInput.addEventListener("keypress", function(e){
//     if(e.key == "Enter"){
//     e.preventDefault();

//     console.log(e.key)
//     let searchTerm = searchInput.value.toLowerCase();
//     console.log(searchTerm)

//     let cards = document.querySelectorAll(".col-6");
//     // console.log(cards);

//     for(let i = 0; i < cards.length; i++){
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

//         if(productName.includes(searchTerm)){
//             card.style.display = "block";
//         }else{
//             card.style.display = "none";
//         }
//     }
//     }
// })


// ! Sepeti artırıp azaltmak için;
const row = document.querySelector(".row");
const result = document.querySelector("#result");
const bilgiMesaji = document.querySelector("#bilgiMesaji");

row.addEventListener("click", function(e){
    // console.log(e.target);
    if(e.target.className.includes("add-to-cart")){
        result.innerHTML++;
    }else if(e.target.className.includes("remove-to-cart")){
        if(result.innerHTML != 0){
            result.innerHTML--;
        }
    }else if(e.target.className.includes("delete-to-cart")){
        let col6 = e.target.parentElement.parentElement.parentElement;
        col6.style.display = "none";

        bilgiMesaji.innerHTML = "Ürün Başarıyla Silindi.";
        bilgiMesaji.classList.add("text-success");
        bilgiMesaji.classList.add("text-center");
        bilgiMesaji.classList.add("mt-2");
        bilgiMesaji.classList.add("fw-bold");

        setTimeout(function(){
            bilgiMesaji.classList.add("d-none");
        },2000)
    }
})



// ! Markalar Sekmesinde İstediğim elemana göre filtreleme yapmak için;
const renault = document.querySelector("#renault");
const togg = document.querySelector("#togg");
const toyota = document.querySelector("#toyota");

renault.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-6");
    // console.log(cards);

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if(productName.includes("renault")){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }
})

togg.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-6");
    // console.log(cards);

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if(productName.includes("togg")){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }
})

toyota.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-6");
    // console.log(cards);

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if(productName.includes("toyota")){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }
})
