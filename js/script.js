"use strict";

// Datos ficticios para el caso educativo de Liga Pro Ecuador 2026.
const teams = [
  { name: "Independiente del Valle", short: "IDV", played: 9, wins: 5, draws: 2, losses: 2, goalsFor: 17, goalsAgainst: 8, points: 17, attendance: 14200, positions: [4, 3, 2, 1, 1, 1] },
  { name: "LDU Quito", short: "LDU", played: 9, wins: 5, draws: 2, losses: 2, goalsFor: 15, goalsAgainst: 8, points: 17, attendance: 22100, positions: [2, 1, 1, 2, 2, 2] },
  { name: "Barcelona SC", short: "BAR", played: 9, wins: 5, draws: 1, losses: 3, goalsFor: 16, goalsAgainst: 11, points: 16, attendance: 24100, positions: [1, 2, 3, 3, 3, 3] },
  { name: "Emelec", short: "EME", played: 9, wins: 4, draws: 3, losses: 2, goalsFor: 13, goalsAgainst: 9, points: 15, attendance: 18700, positions: [6, 7, 5, 5, 4, 4] },
  { name: "Universidad Católica", short: "UCA", played: 9, wins: 4, draws: 2, losses: 3, goalsFor: 14, goalsAgainst: 11, points: 14, attendance: 8200, positions: [3, 4, 4, 4, 5, 5] },
  { name: "Aucas", short: "AUC", played: 9, wins: 4, draws: 1, losses: 4, goalsFor: 12, goalsAgainst: 12, points: 13, attendance: 9600, positions: [5, 5, 6, 6, 6, 6] },
  { name: "Orense SC", short: "ORE", played: 9, wins: 3, draws: 2, losses: 4, goalsFor: 11, goalsAgainst: 13, points: 11, attendance: 7600, positions: [8, 8, 8, 7, 7, 7] },
  { name: "Macará", short: "MAC", played: 9, wins: 2, draws: 3, losses: 4, goalsFor: 9, goalsAgainst: 13, points: 9, attendance: 6100, positions: [7, 6, 7, 8, 8, 8] },
  { name: "Deportivo Cuenca", short: "CUE", played: 9, wins: 2, draws: 2, losses: 5, goalsFor: 8, goalsAgainst: 15, points: 8, attendance: 11300, positions: [9, 9, 9, 9, 9, 9] },
  { name: "Mushuc Runa", short: "MUR", played: 9, wins: 1, draws: 2, losses: 6, goalsFor: 7, goalsAgainst: 22, points: 5, attendance: 5300, positions: [10, 10, 10, 10, 10, 10] }
];

const quizQuestions = [
  {
    question: "¿Cuál es el propósito principal de Business Intelligence?",
    choices: ["Guardar todos los datos disponibles", "Convertir datos en información útil para decidir", "Automatizar cualquier decisión humana"],
    answer: 1,
    explanation: "BI organiza y analiza datos para apoyar decisiones informadas; no se trata solo de almacenarlos."
  },
  {
    question: "Una tienda combina ventas y existencias para anticipar qué productos reponer. ¿Qué está haciendo?",
    choices: ["Tomando decisiones basadas en datos", "Ejecutando únicamente una carga ETL", "Reemplazando el análisis con intuición"],
    answer: 0,
    explanation: "Está usando evidencia de distintas fuentes para orientar una acción concreta."
  },
  {
    question: "¿Qué ocurre durante la etapa de transformación de ETL?",
    choices: ["Se recopilan datos desde las fuentes", "Se limpian y estandarizan los datos", "Se presenta el dashboard a los usuarios"],
    answer: 1,
    explanation: "Transformar prepara los datos: corrige inconsistencias, combina fuentes y normaliza formatos."
  },
  {
    question: "¿En qué orden se ejecuta el proceso ETL?",
    choices: ["Transformar, cargar, extraer", "Cargar, extraer, transformar", "Extraer, transformar, cargar"],
    answer: 2,
    explanation: "Primero se extraen los datos, luego se preparan y finalmente se cargan en el destino."
  },
  {
    question: "Un gráfico muestra que las ventas bajaron. ¿Qué enfoque favorece una buena decisión?",
    choices: ["Actuar de inmediato sin revisar el contexto", "Investigar causas y contrastar con otras evidencias", "Descartar los datos si contradicen una expectativa"],
    answer: 1,
    explanation: "Los datos orientan preguntas; contrastar contexto y evidencia ayuda a elegir una acción razonable."
  }
];

// Estado y renderizado del cuestionario.
const quizState = { questionIndex: 0, score: 0, selectedChoice: null, checked: false };
const quizElements = {
  score: document.querySelector("#quiz-score"),
  step: document.querySelector("#quiz-step-label"),
  progressLabel: document.querySelector("#quiz-progress-label"),
  progress: document.querySelector(".quiz-progress"),
  progressBar: document.querySelector("#quiz-progress-bar"),
  question: document.querySelector("#quiz-question"),
  choices: document.querySelector("#quiz-choices"),
  feedback: document.querySelector("#quiz-feedback"),
  next: document.querySelector("#quiz-next"),
  content: document.querySelector("#quiz-content"),
  result: document.querySelector("#quiz-result")
};

function renderQuizQuestion() {
  const current = quizQuestions[quizState.questionIndex];
  const progress = Math.round((quizState.questionIndex / quizQuestions.length) * 100);
  quizElements.step.textContent = `Pregunta ${quizState.questionIndex + 1} de ${quizQuestions.length}`;
  quizElements.progressLabel.textContent = `${progress}%`;
  quizElements.progress.setAttribute("aria-valuenow", String(progress));
  quizElements.progressBar.style.width = `${progress}%`;
  quizElements.question.textContent = current.question;
  quizElements.feedback.textContent = "";
  quizElements.feedback.classList.remove("is-wrong");
  quizElements.next.disabled = true;
  quizElements.next.innerHTML = 'Comprobar <span aria-hidden="true">→</span>';
  quizElements.choices.replaceChildren();

  current.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-choice";
    button.dataset.choice = String(index);
    const letter = document.createElement("span");
    letter.className = "choice-letter";
    letter.textContent = String.fromCharCode(65 + index);
    button.append(letter, document.createTextNode(choice));
    quizElements.choices.append(button);
  });
}

function showQuizResult() {
  const percent = Math.round((quizState.score / quizQuestions.length) * 100);
  let heading;
  let message;

  if (percent === 100) {
    heading = "¡Lectura impecable!";
    message = "Tienes claros los fundamentos. Ya puedes llevar esta mirada analítica a otros casos.";
  } else if (percent >= 60) {
    heading = "¡Buen criterio!";
    message = "Vas por buen camino. Repasa las respuestas que fallaste y sigue conectando datos con decisiones.";
  } else {
    heading = "Aquí empieza el análisis.";
    message = "Vuelve a los fundamentos y prueba otra vez. Cada intento ayuda a ordenar las ideas.";
  }

  quizElements.content.hidden = true;
  quizElements.result.hidden = false;
  quizElements.result.replaceChildren();
  const resultScore = document.createElement("div");
  resultScore.className = "quiz-result-score";
  resultScore.textContent = `${quizState.score} / ${quizQuestions.length}`;
  const resultHeading = document.createElement("h3");
  resultHeading.textContent = heading;
  const resultMessage = document.createElement("p");
  resultMessage.textContent = message;
  const restart = document.createElement("button");
  restart.type = "button";
  restart.className = "button-dark quiz-restart";
  restart.innerHTML = 'Intentar de nuevo <span aria-hidden="true">↻</span>';
  restart.addEventListener("click", resetQuiz);
  quizElements.result.append(resultScore, resultHeading, resultMessage, restart);
}

function resetQuiz() {
  quizState.questionIndex = 0;
  quizState.score = 0;
  quizState.selectedChoice = null;
  quizState.checked = false;
  quizElements.score.innerHTML = '0 <small>/ 5</small>';
  quizElements.content.hidden = false;
  quizElements.result.hidden = true;
  renderQuizQuestion();
}

// Seleccion y comprobacion de respuestas con retroalimentacion inmediata.
quizElements.choices.addEventListener("click", (event) => {
  const choice = event.target.closest(".quiz-choice");
  if (!choice || quizState.checked) return;
  quizState.selectedChoice = Number(choice.dataset.choice);
  quizElements.choices.querySelectorAll(".quiz-choice").forEach((button) => {
    button.classList.toggle("is-selected", button === choice);
  });
  quizElements.next.disabled = false;
});

quizElements.next.addEventListener("click", () => {
  if (!quizState.checked) {
    if (quizState.selectedChoice === null) return;
    const current = quizQuestions[quizState.questionIndex];
    const correct = quizState.selectedChoice === current.answer;
    quizState.checked = true;
    if (correct) quizState.score += 1;
    quizElements.score.innerHTML = `${quizState.score} <small>/ ${quizQuestions.length}</small>`;
    quizElements.choices.querySelectorAll(".quiz-choice").forEach((button) => {
      const isAnswer = Number(button.dataset.choice) === current.answer;
      button.disabled = true;
      button.classList.toggle("is-correct", isAnswer);
      button.classList.toggle("is-wrong", !correct && Number(button.dataset.choice) === quizState.selectedChoice);
    });
    quizElements.feedback.textContent = `${correct ? "¡Correcto!" : "No exactamente."} ${current.explanation}`;
    quizElements.feedback.classList.toggle("is-wrong", !correct);
    quizElements.next.innerHTML = quizState.questionIndex === quizQuestions.length - 1
      ? 'Ver resultado <span aria-hidden="true">→</span>'
      : 'Siguiente <span aria-hidden="true">→</span>';
    return;
  }

  if (quizState.questionIndex === quizQuestions.length - 1) {
    quizElements.progressLabel.textContent = "100%";
    quizElements.progress.setAttribute("aria-valuenow", "100");
    quizElements.progressBar.style.width = "100%";
    quizElements.step.textContent = "Recorrido completado";
    showQuizResult();
    return;
  }

  quizState.questionIndex += 1;
  quizState.selectedChoice = null;
  quizState.checked = false;
  renderQuizQuestion();
});

function renderSummaryCards() {
  const leader = teams[0];
  const averageAttendance = Math.round(teams.reduce((sum, team) => sum + team.attendance, 0) / teams.length);
  const cards = [
    { label: "Líder del campeonato", value: leader.name, detail: `${leader.points} puntos · ${leader.wins} victorias`, mark: "↗" },
    { label: "Goleador del torneo", value: "J. Cazares", detail: "8 goles · Independiente del Valle", mark: "◎" },
    { label: "Promedio de asistencia", value: new Intl.NumberFormat("es-EC").format(averageAttendance), detail: "espectadores de media por club", mark: "⌂" },
    { label: "Próximo partido", value: "Barcelona vs. Emelec", detail: "Jornada 10 · Clásico del Astillero", mark: "→" }
  ];

  const grid = document.querySelector("#stats-grid");
  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "stat-card";
    const label = document.createElement("span");
    label.className = "stat-label";
    const labelText = document.createElement("span");
    labelText.textContent = card.mark;
    label.append(document.createTextNode(card.label), labelText);
    const value = document.createElement("strong");
    value.className = "stat-value";
    value.textContent = card.value;
    const detail = document.createElement("span");
    detail.className = "stat-detail";
    detail.textContent = card.detail;
    article.append(label, value, detail);
    grid.append(article);
  });
}

// Tabla de posiciones ordenada según el conjunto de datos ficticios.
function renderStandings() {
  const body = document.querySelector("#standings-body");
  teams.forEach((team, index) => {
    const row = document.createElement("tr");
    const values = [index + 1, null, team.played, team.wins, team.draws, team.losses, team.goalsFor, team.points];
    values.forEach((value, column) => {
      const cell = document.createElement("td");
      if (column === 1) {
        cell.className = "team-cell";
        const badge = document.createElement("span");
        badge.textContent = team.short;
        cell.append(badge, document.createTextNode(team.name));
      } else {
        cell.textContent = String(value);
      }
      row.append(cell);
    });
    body.append(row);
  });
}

let positionChart;

// Inicializa Chart.js y conecta el selector a la evolución de posiciones.
function renderCharts() {
  const selector = document.querySelector("#team-select");
  teams.forEach((team) => {
    const option = document.createElement("option");
    option.value = team.short;
    option.textContent = team.name;
    selector.append(option);
  });

  if (typeof Chart === "undefined") {
    document.querySelectorAll(".chart-note").forEach((note) => {
      note.textContent = "Los gráficos no están disponibles sin conexión a Chart.js.";
    });
    return;
  }

  Chart.defaults.font.family = '"DM Sans", sans-serif';
  Chart.defaults.color = "#68746c";
  const gridColor = "#e9ece5";
  const palette = ["#174d3c", "#f07859", "#b9d84f", "#78a8a1", "#e6aa49", "#8a7d68"];

  new Chart(document.querySelector("#goals-chart"), {
    type: "bar",
    data: {
      labels: teams.map((team) => team.short),
      datasets: [{
        data: teams.map((team) => team.goalsFor),
        backgroundColor: teams.map((_, index) => index === 0 ? "#174d3c" : "#aec8b8"),
        borderRadius: 2,
        maxBarThickness: 32
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { title: (items) => teams[items[0].dataIndex].name, label: (item) => `${item.raw} goles` } } },
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 9 } } },
        y: { beginAtZero: true, suggestedMax: 20, grid: { color: gridColor }, border: { display: false }, ticks: { stepSize: 5, font: { size: 9 } } }
      }
    }
  });

  const topFivePoints = teams.slice(0, 5).map((team) => team.points);
  const remainingPoints = teams.slice(5).reduce((sum, team) => sum + team.points, 0);
  const pointsTotal = teams.reduce((sum, team) => sum + team.points, 0);
  new Chart(document.querySelector("#points-chart"), {
    type: "doughnut",
    data: {
      labels: [...teams.slice(0, 5).map((team) => team.name), "Resto de equipos"],
      datasets: [{ data: [...topFivePoints, remainingPoints], backgroundColor: palette, borderColor: "#fffefa", borderWidth: 3, hoverOffset: 5 }]
    },
    options: {
      maintainAspectRatio: false,
      cutout: "65%",
      plugins: {
        legend: { position: "right", labels: { boxWidth: 8, boxHeight: 8, padding: 11, font: { size: 9 } } },
        tooltip: { callbacks: { label: (item) => ` ${item.label}: ${item.raw} pts (${Math.round(item.raw / pointsTotal * 100)}%)` } }
      }
    }
  });

  positionChart = new Chart(document.querySelector("#position-chart"), {
    type: "line",
    data: {
      labels: ["J1", "J2", "J3", "J4", "J5", "J6"],
      datasets: [createPositionDataset(teams[0])]
    },
    options: {
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: "index" },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (item) => ` Posición ${item.raw}` } } },
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 10 } } },
        y: { reverse: true, min: 1, max: 10, grid: { color: gridColor }, border: { display: false }, ticks: { stepSize: 1, font: { size: 9 } }, title: { display: true, text: "Posición", font: { size: 10 } } }
      }
    }
  });

  selector.addEventListener("change", () => {
    const selected = teams.find((team) => team.short === selector.value);
    positionChart.data.datasets = [createPositionDataset(selected)];
    positionChart.update();
  });
}

function createPositionDataset(team) {
  return {
    label: team.name,
    data: team.positions,
    borderColor: "#174d3c",
    backgroundColor: "rgba(23, 77, 60, .12)",
    pointBackgroundColor: "#f07859",
    pointBorderColor: "#fffefa",
    pointBorderWidth: 2,
    pointRadius: 4,
    pointHoverRadius: 6,
    borderWidth: 2,
    tension: .32,
    fill: true
  };
}

renderQuizQuestion();
renderSummaryCards();
renderStandings();
renderCharts();