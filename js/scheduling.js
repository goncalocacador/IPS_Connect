// Seleção de horas

const hourButtons =
document.querySelectorAll(".hour-btn");

hourButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        hourButtons.forEach(b =>
            b.classList.remove("selected")
        );

        btn.classList.add("selected");

    });

});

// Confirmar agendamento

const scheduleButton =
document.getElementById("scheduleBtn");

scheduleButton.addEventListener(
"click",
() => {

    const service =
    document.getElementById("service")
    .value;

    const selectedHour =
    document.querySelector(
    ".hour-btn.selected"
    );

    if(!selectedHour){

        alert(
        "Selecione uma hora."
        );

        return;

    }

    const appointment = {

        service: service,

        date: "24 Mai 2024",

        hour:
        selectedHour.innerText

    };

    localStorage.setItem(
        "appointment",
        JSON.stringify(
        appointment
        )
    );

    alert(
    "Agendamento confirmado!"
    );

});