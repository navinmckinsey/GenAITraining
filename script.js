let data = {
  labels: [],
  months: [],
  incomes: [],
  expenses: []
};

function addData() {
  const selectedMonth = document.getElementById("month").value;
  const incomeInput = parseFloat(document.getElementById("income").value);
  const expenseInput = parseFloat(document.getElementById("expenses").value);

  if (isNaN(incomeInput) || isNaN(expenseInput)) {
    alert("Please enter valid numbers.");
    return;
  }

  data.labels.push(selectedMonth);
  data.months.push(selectedMonth);
  data.incomes.push(incomeInput);
  data.expenses.push(expenseInput);

  document.getElementById("income").value = "";
  document.getElementById("expenses").value = "";

  updateChart();
}

function updateChart() {
  const ctx = document.getElementById("summaryChart").getContext("2d");

  if (data.labels.length === 0) {
    return;
  }

  if (data.labels.length > 12) {
    data.labels.shift();
    data.months.shift();
    data.incomes.shift();
    data.expenses.shift();
  }

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Income",
          backgroundColor: "#28a745",
          data: data.incomes
        },
        {
          label: "Expenses",
          backgroundColor: "#dc3545",
          data: data.expenses
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Initial chart setup
updateChart();
