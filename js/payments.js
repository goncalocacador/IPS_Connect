const mbwayBtn =
document.getElementById("mbwayBtn");

mbwayBtn.addEventListener(
"click",
function(){

```
const confirmar =
confirm(
"Pretende efetuar o pagamento de 450,00 €?"
);

if(confirmar){

    document.getElementById(
    "saldo"
    ).innerText = "0,00 €";

    mbwayBtn.innerHTML =
    "✓ Pagamento Efetuado";

    mbwayBtn.disabled = true;

    mbwayBtn.style.background =
    "#16a34a";

    alert(
    "Pagamento efetuado com sucesso!"
    );

}
```

});
