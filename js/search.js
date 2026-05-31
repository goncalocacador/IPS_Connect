const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener(
"keyup",
function(){

    let search =
    this.value.toLowerCase();

    let cards =
    document.querySelectorAll(
    ".result-card"
    );

    cards.forEach(card=>{

        let text =
        card.innerText.toLowerCase();

        card.style.display =
        text.includes(search)
        ? "flex"
        : "none";

    });

});