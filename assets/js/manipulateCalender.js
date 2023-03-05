function manipulateCalender() {
  // selecionando o mês atual
  let currentMonth = new Date().getMonth();

  // selecionando os elementos HTML relevantes
  const prevBtn = document.querySelector(".prev-month");
  const nextBtn = document.querySelector(".next-month");
  const monthHeader = document.querySelector(".month-header h3");
  const calendarTable = document.querySelector("table");

  // adicionando um evento de clique para o botão de mês anterior
  prevBtn.addEventListener("click", function () {
    currentMonth--;
    updateCalendar();
  });

  // adicionando um evento de clique para o botão de próximo mês
  nextBtn.addEventListener("click", function () {
    currentMonth++;
    updateCalendar();
  });

  // atualizando o calendário com base no mês atual
  function updateCalendar() {
    // criando um novo objeto de data com base no mês atual
    let date = new Date();
    date.setMonth(currentMonth);

    // atualizando o cabeçalho do mês
    monthHeader.textContent = date.toLocaleString("pt-BR", {
      month: "long",
      year: "numeric",
    });

    // atualizando o calendário com os dias do mês atual
    let daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    let dayOfWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let day = 1;

    for (let i = 0; i < calendarTable.rows.length; i++) {
      let row = calendarTable.rows[i];

      for (let j = 0; j < row.cells.length; j++) {
        let cell = row.cells[j];

        if (i === 1 && j === dayOfWeek) {
          cell.textContent = day;
          day++;
        } else if (day > 1 && day <= daysInMonth) {
          cell.textContent = day;
          day++;
        } else {
          cell.textContent = "";
        }
      }
    }
  }

  // chamando a função para atualizar o calendário inicialmente
  updateCalendar();
}

manipulateCalender();

export default manipulateCalender;
