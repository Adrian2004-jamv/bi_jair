"use strict";

// Fuente única de contenido para la ficha y sus secciones.
const syllabus = {
  course: {
    name: "Sistemas de Información para la Inteligencia de Negocios",
    academicYear: "2026–2027",
    university: "Universidad Técnica de Cotopaxi",
    faculty: "Facultad de Ciencias de la Ingeniería y Aplicadas",
    degree: "Carrera de Sistemas de Información",
    campus: "Sede Latacunga",
    cycle: "Octavo (PAO 8)",
    parallel: "A",
    code: "ISISI805",
    credits: 3,
    period: "12/10/2026 al 21/02/2027",
    totalHours: 144,
    teachingHours: 48,
    practiceHours: 48,
    autonomousHours: 48,
    instructor: "Ing. Luis René Quisaguano Collaguazo, Mg."
  },
  overview: [
    {
      icon: "bi-bar-chart-line",
      label: "01 / DESCRIPCIÓN",
      title: "Leer la organización a través de sus datos",
      text: "La asignatura analiza los fundamentos, características y modelamiento de la inteligencia de negocios para apoyar decisiones empresariales basadas en el procesamiento de datos con software especializado. Se centra en reunir, almacenar, analizar y visualizar información para que las organizaciones identifiquen oportunidades de negocio."
    },
    {
      icon: "bi-diagram-3",
      label: "02 / APORTE AL PERFIL",
      title: "Información útil para quien decide",
      text: "Construir procesos de extracción, combinación, depuración y distribución de información hacia los usuarios finales, en organizaciones con grandes volúmenes de datos."
    },
    {
      icon: "bi-bullseye",
      label: "03 / OBJETIVO GENERAL",
      title: "Comprender cómo implementar BI",
      text: "Analizar los fundamentos, características y modelamiento de la inteligencia de negocios para entender cómo implementar estas herramientas en una organización, describiendo las etapas necesarias para su correcta ejecución."
    }
  ],
  units: [
    {
      id: "u1",
      short: "Unidad 1",
      title: "Fundamentos y gestión de la inteligencia de negocios",
      problem: "La gestión de BI requiere conocer los fundamentos, herramientas y componentes de BI.",
      outcome: "Identificar los conceptos básicos, herramientas y componentes de BI aplicando herramientas de BI.",
      methodology: "Aprendizaje Cooperativo",
      topics: [
        { name: "Conceptos básicos", teaching: 3, practice: 3 },
        { name: "Componentes de la inteligencia de negocios", teaching: 3, practice: 3 },
        { name: "Los sistemas de información y la generación de valor, ventaja corporativa", teaching: 3, practice: 3 },
        { name: "Principales herramientas de BI", teaching: 6, practice: 6 }
      ],
      autonomousHours: 15,
      strategies: ["Cuadro comparativo", "Debate", "Lluvia de ideas", "Mapa mental", "Mentefactos", "Preguntas"],
      evaluation: { technique: "Redacción de ensayos, informes, reportes y artículos académicos", instrument: "Rúbrica" },
      environments: ["Aula física", "Aula virtual", "Laboratorio"]
    },
    {
      id: "u2",
      short: "Unidad 2",
      title: "Sistemas de soporte a la administración y Data Warehouse",
      problem: "Dificultad para analizar el uso de bases de datos multidimensionales para la toma de decisiones.",
      outcome: "Explotar esquemas de bases de datos multidimensionales usando herramientas de visualización, análisis y consultas, con una adecuada administración.",
      methodology: "Aprendizaje Basado en Problemas",
      topics: [
        { name: "Variables de medición y análisis", teaching: 3, practice: 3 },
        { name: "Data Warehouse", teaching: 6, practice: 6 },
        { name: "Sistemas de gestión del conocimiento", teaching: 3, practice: 3 },
        { name: "Patrones: evaluación, interpretación y visualización", teaching: 3, practice: 3 }
      ],
      autonomousHours: 15,
      strategies: ["Práctica de laboratorio", "Resolución de ejercicios", "Simulación"],
      evaluation: { technique: "Portafolio", instrument: "Lista de cotejo" },
      environments: ["Aula física", "Aula virtual", "Laboratorio"]
    },
    {
      id: "u3",
      short: "Unidad 3",
      title: "Sistema de soporte para la toma de decisiones empresariales",
      problem: "Evaluar los objetivos de negocio requiere implementar procesos para organizar grandes cantidades de datos.",
      outcome: "Construir una solución de BI para un caso práctico, modelando la información organizacional.",
      methodology: "Aprendizaje Basado en Proyectos",
      topics: [
        { name: "Vistas multidimensionales, hipercubos de datos", teaching: 3, practice: 3 },
        { name: "Procesos ETL", teaching: 3, practice: 3 },
        { name: "Reporteadores", teaching: 6, practice: 6 },
        { name: "Alertas, tableros de control (dashboards) y KPIs, más aspectos técnicos del proyecto", teaching: 6, practice: 6 }
      ],
      autonomousHours: 18,
      strategies: ["Juego de roles", "Lluvia de ideas", "Mesa redonda", "Redacción de informes", "Salida de campo"],
      evaluation: { technique: "Proyectos", instrument: "Rúbrica" },
      environments: ["Aula física", "Aula virtual", "Laboratorio", "Territorio"]
    }
  ],
  hours: {
    components: [
      { key: "teaching", label: "Docencia", total: 48, color: "#174d3c" },
      { key: "practice", label: "Prácticas", total: 48, color: "#f07859" },
      { key: "autonomousHours", label: "Autónomas", total: 48, color: "#b9d84f" }
    ]
  },
  evaluations: [
    { name: "EVAL1", date: "2026-11-22T23:59:00", label: "22/11/2026 · 23:59", focus: "Primer corte de evaluación" },
    { name: "EVAL2", date: "2027-01-10T23:59:00", label: "10/01/2027 · 23:59", focus: "Segundo corte de evaluación" },
    { name: "EVAL3", date: "2027-02-14T23:59:00", label: "14/02/2027 · 23:59", focus: "Evaluación final" }
  ],
  softSkills: [
    { icon: "bi-laptop", name: "Competencia digital", description: "Usar herramientas y entornos digitales con criterio.", contribution: "Procesa, analiza y comunica información con software especializado." },
    { icon: "bi-lightbulb", name: "Creatividad", description: "Explorar alternativas y conectar ideas.", contribution: "Diseña visualizaciones y maneras útiles de explicar hallazgos." },
    { icon: "bi-shield-check", name: "Ética", description: "Actuar con responsabilidad y respeto por los datos.", contribution: "Promueve el uso responsable de información organizacional y ambiental." },
    { icon: "bi-people", name: "Liderazgo", description: "Orientar el trabajo colaborativo hacia un propósito común.", contribution: "Coordina el desarrollo y la comunicación de soluciones de BI." },
    { icon: "bi-search", name: "Pensamiento crítico", description: "Contrastar fuentes, supuestos e interpretaciones.", contribution: "Evalúa la calidad de los datos antes de sustentar decisiones." },
    { icon: "bi-puzzle", name: "Resolución de problemas", description: "Descomponer retos y elegir respuestas viables.", contribution: "Traduce necesidades de negocio en procesos y modelos de información." }
  ],
  project: {
    label: "Proyecto articulador · Investigación formativa",
    title: "PlasTrack: Monitoreo inteligente de microplásticos mediante datos Copernicus para la conservación de ecosistemas insulares",
    description: "La asignatura aporta a transformar datos satelitales de Copernicus y CMEMS en dashboards, KPIs y alertas tempranas. Estas herramientas acercan información útil al sector pesquero y a los gestores ambientales para apoyar la conservación de ecosistemas insulares."
  },
  bibliography: [
    {
      category: "Básica · eLibro UTC",
      icon: "bi-book",
      resources: [
        { title: "¿Cómo planificar un proyecto de inteligencia de negocio?", url: "https://elibro.net/es/lc/utcotopaxi/titulos/58548" },
        { title: "Base de datos", url: "https://elibro.net/es/lc/utcotopaxi/titulos/121283" },
        { title: "La toma de decisiones en la práctica", url: "https://elibro.net/es/lc/utcotopaxi/titulos/227386" },
        { title: "Excel y Power BI: el cóctel perfecto", url: "https://elibro.net/es/lc/utcotopaxi/titulos/282827" }
      ]
    },
    {
      category: "Complementaria",
      icon: "bi-journals",
      resources: [
        { title: "Introducción al Business Intelligence", url: "http://cursos.yura.website/wp-content/uploads/2020/03/Introduccion_al_Business_Intelligence.pdf" },
        { title: "Análisis comparativo de herramientas web para visualizaciones interactivas", url: "https://dialnet.unirioja.es/servlet/articulo?codigo=10387164" },
        { title: "Power BI vs Qlik Sense en tableros estratégicos de indicadores clave", url: "http://technologyrain.com.ar/index.php/trj/article/view/30" }
      ]
    },
    {
      category: "Sitios recomendados",
      icon: "bi-link-45deg",
      resources: [
        { title: "Tecnologías .NET y Chart.js para un tablero de indicadores clave", url: "https://ecuciencia.utc.edu.ec/media/articulo/articulo-005-corregido.pdf" },
        { title: "BI como generación de valor y ventaja competitiva en microempresas", url: "https://investigacion.utc.edu.ec/index.php/ciya/es/article/view/391" },
        { title: "Documentación oficial de Power BI", url: "https://learn.microsoft.com/es-es/power-bi/" }
      ]
    }
  ]
};

const chartInstances = [];
const themeStorageKey = "bi-en-juego-theme";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderCourse() {
  const course = syllabus.course;
  document.querySelector("#silabo-title").textContent = course.name;
  document.querySelector("#academic-year").textContent = course.academicYear;
  document.querySelector("#institution-line").textContent = `${course.university} · ${course.faculty} · ${course.degree} · ${course.campus}`;
  document.querySelector("#hours-description").textContent = `${course.totalHours} horas en total, distribuidas entre acompañamiento, práctica y trabajo autónomo.`;

  const kpis = [
    { icon: "bi-mortarboard", label: "Ciclo", value: course.cycle },
    { icon: "bi-people", label: "Paralelo · Código", value: `${course.parallel} · ${course.code}` },
    { icon: "bi-award", label: "Créditos", value: String(course.credits) },
    { icon: "bi-clock-history", label: "Horas totales", value: String(course.totalHours) }
  ];
  document.querySelector("#course-kpis").innerHTML = kpis.map((item, index) => `
    <article class="silabo-kpi" style="--kpi-index:${index}">
      <span class="silabo-kpi-label"><i class="bi ${item.icon}" aria-hidden="true"></i>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
    </article>`).join("");

  const facts = [
    { label: "Período académico", value: course.period, icon: "bi-calendar3" },
    { label: "Docencia", value: `${course.teachingHours} horas`, icon: "bi-easel2" },
    { label: "Prácticas", value: `${course.practiceHours} horas`, icon: "bi-pc-display" },
    { label: "Trabajo autónomo", value: `${course.autonomousHours} horas`, icon: "bi-person-workspace" },
    { label: "Docente", value: course.instructor, icon: "bi-person-vcard" }
  ];
  document.querySelector("#course-facts").innerHTML = facts.map((fact) => `
    <div class="course-fact"><i class="bi ${fact.icon}" aria-hidden="true"></i><span><small>${escapeHtml(fact.label)}</small><strong>${escapeHtml(fact.value)}</strong></span></div>`).join("");
}

function renderOverview() {
  document.querySelector("#overview-cards").innerHTML = syllabus.overview.map((item, index) => `
    <article class="overview-card" style="--card-index:${index}">
      <div class="overview-card-top"><span>${escapeHtml(item.label)}</span><i class="bi ${item.icon}" aria-hidden="true"></i></div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>`).join("");
}

function renderUnits() {
  const tabs = document.querySelector("#unit-tabs");
  const content = document.querySelector("#unit-tab-content");

  syllabus.units.forEach((unit, index) => {
    const active = index === 0;
    const tabId = `tab-${unit.id}`;
    const paneId = `pane-${unit.id}`;
    const tab = document.createElement("button");
    tab.className = `nav-link unit-tab${active ? " active" : ""}`;
    tab.id = tabId;
    tab.type = "button";
    tab.setAttribute("data-bs-toggle", "tab");
    tab.setAttribute("data-bs-target", `#${paneId}`);
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", paneId);
    tab.setAttribute("aria-selected", String(active));
    tab.innerHTML = `<span class="unit-tab-number">0${index + 1}</span><span>${escapeHtml(unit.short)}</span>`;
    tabs.append(tab);

    const pane = document.createElement("article");
    pane.className = `tab-pane fade unit-pane${active ? " show active" : ""}`;
    pane.id = paneId;
    pane.setAttribute("role", "tabpanel");
    pane.setAttribute("aria-labelledby", tabId);
    pane.innerHTML = renderUnit(unit, index);
    content.append(pane);
  });
}

function renderUnit(unit, index) {
  const topicRows = unit.topics.map((topic) => `
    <tr><th scope="row">${escapeHtml(topic.name)}</th><td>${topic.teaching} h</td><td>${topic.practice} h</td></tr>`).join("");
  const teachingTotal = unit.topics.reduce((sum, topic) => sum + topic.teaching, 0);
  const practiceTotal = unit.topics.reduce((sum, topic) => sum + topic.practice, 0);
  const chips = (values, styleClass) => values.map((value) => `<span class="${styleClass}">${escapeHtml(value)}</span>`).join("");

  return `
    <div class="unit-pane-heading"><div><span class="unit-eyebrow">UNIDAD 0${index + 1} / APRENDIZAJE</span><h3>${escapeHtml(unit.title)}</h3></div><div class="unit-method"><i class="bi bi-lightning-charge" aria-hidden="true"></i><span><small>METODOLOGÍA</small><strong>${escapeHtml(unit.methodology)}</strong></span></div></div>
    <div class="unit-outcomes-grid">
      <article class="unit-info-block"><span class="unit-info-label"><i class="bi bi-question-circle" aria-hidden="true"></i> Problema profesional</span><p>${escapeHtml(unit.problem)}</p></article>
      <article class="unit-info-block outcome-block"><span class="unit-info-label"><i class="bi bi-check2-circle" aria-hidden="true"></i> Resultado de aprendizaje</span><p>${escapeHtml(unit.outcome)}</p></article>
    </div>
    <div class="unit-details-grid">
      <section class="unit-topics-block" aria-label="Temas y horas">
        <div class="unit-subheading"><div><span class="chart-index">CONTENIDOS</span><h4>Temas y horas</h4></div><span class="autonomous-pill"><i class="bi bi-person-workspace" aria-hidden="true"></i> ${unit.autonomousHours} h autónomas</span></div>
        <div class="table-responsive unit-table-wrap"><table class="table unit-table"><thead><tr><th scope="col">Tema</th><th scope="col">Docencia</th><th scope="col">Prácticas</th></tr></thead><tbody>${topicRows}</tbody><tfoot><tr><th scope="row">Total de unidad</th><td>${teachingTotal} h</td><td>${practiceTotal} h</td></tr></tfoot></table></div>
      </section>
      <aside class="unit-side-details">
        <div class="unit-detail-group"><span class="unit-info-label"><i class="bi bi-signpost-split" aria-hidden="true"></i> Estrategias</span><div class="tag-list">${chips(unit.strategies, "learning-tag")}</div></div>
        <div class="unit-detail-group"><span class="unit-info-label"><i class="bi bi-clipboard-check" aria-hidden="true"></i> Evaluación</span><p><strong>Técnica</strong>${escapeHtml(unit.evaluation.technique)}</p><p><strong>Instrumento</strong>${escapeHtml(unit.evaluation.instrument)}</p></div>
        <div class="unit-detail-group"><span class="unit-info-label"><i class="bi bi-geo-alt" aria-hidden="true"></i> Ambientes de aprendizaje</span><div class="tag-list">${chips(unit.environments, "environment-tag")}</div></div>
      </aside>
    </div>`;
}

function renderHoursLegends() {
  const componentLegend = syllabus.hours.components.map((component) => `
    <span class="hours-legend-item"><i style="--legend-color:${component.color}"></i>${escapeHtml(component.label)}</span>`).join("");
  document.querySelector("#unit-hours-legend").innerHTML = componentLegend;
  document.querySelector("#total-hours-legend").innerHTML = componentLegend;
  document.querySelector("#hours-total").textContent = `${syllabus.course.totalHours} h en total`;
  document.querySelector("#hours-chart-total").textContent = `${syllabus.course.totalHours} HORAS`;
  document.querySelector("#hours-donut-total").textContent = String(syllabus.course.totalHours);
}

function renderHoursCharts() {
  if (typeof Chart === "undefined") {
    document.querySelectorAll(".silabo-chart").forEach((container) => {
      const message = document.createElement("p");
      message.className = "chart-fallback";
      message.textContent = "Los gráficos requieren conexión con Chart.js.";
      container.append(message);
    });
    return;
  }

  const isDark = document.documentElement.dataset.theme === "dark";
  const textColor = isDark ? "#d1ddd3" : "#68746c";
  const gridColor = isDark ? "#39463d" : "#e9ece5";
  Chart.defaults.font.family = '"DM Sans", sans-serif';
  Chart.defaults.color = textColor;

  const unitChart = new Chart(document.querySelector("#unit-hours-chart"), {
    type: "bar",
    data: {
      labels: syllabus.units.map((unit) => unit.short),
      datasets: syllabus.hours.components.map((component) => ({
        label: component.label,
        data: syllabus.units.map((unit) => component.key === "autonomousHours"
          ? unit.autonomousHours
          : unit.topics.reduce((sum, topic) => sum + topic[component.key], 0)),
        backgroundColor: component.color,
        borderRadius: 2,
        maxBarThickness: 48
      }))
    },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => ` ${context.dataset.label}: ${context.raw} horas` } } },
      scales: {
        x: { stacked: true, grid: { display: false }, border: { display: false }, ticks: { color: textColor } },
        y: { stacked: true, beginAtZero: true, max: 60, grid: { color: gridColor }, border: { display: false }, ticks: { color: textColor, stepSize: 15, callback: (value) => `${value} h` } }
      }
    }
  });

  const totalChart = new Chart(document.querySelector("#total-hours-chart"), {
    type: "doughnut",
    data: {
      labels: syllabus.hours.components.map((component) => component.label),
      datasets: [{
        data: syllabus.hours.components.map((component) => component.total),
        backgroundColor: syllabus.hours.components.map((component) => component.color),
        borderColor: isDark ? "#202a24" : "#fffefa",
        borderWidth: 3,
        hoverOffset: 5
      }]
    },
    options: {
      maintainAspectRatio: false,
      cutout: "71%",
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => ` ${context.label}: ${context.raw} horas` } } }
    }
  });
  chartInstances.push(unitChart, totalChart);
}

function renderEvaluations() {
  const timeline = document.querySelector("#evaluation-timeline");
  timeline.innerHTML = syllabus.evaluations.map((evaluation, index) => `
    <article class="evaluation-item" data-evaluation-index="${index}">
      <span class="evaluation-marker"><i class="bi bi-flag" aria-hidden="true"></i></span>
      <div class="evaluation-card"><span class="evaluation-name">${escapeHtml(evaluation.name)}</span><h3>${escapeHtml(evaluation.focus)}</h3><time datetime="${escapeHtml(evaluation.date)}">${escapeHtml(evaluation.label)}</time><p class="evaluation-countdown" aria-live="polite"></p></div>
    </article>`).join("");
  updateEvaluationCountdowns();
  window.setInterval(updateEvaluationCountdowns, 60000);
}

function updateEvaluationCountdowns() {
  const now = new Date();
  syllabus.evaluations.forEach((evaluation, index) => {
    const [year, month, day] = evaluation.date.slice(0, 10).split("-").map(Number);
    const [, hour, minute] = evaluation.date.match(/T(\d{2}):(\d{2})/);
    const deadline = new Date(year, month - 1, day, Number(hour), Number(minute));
    const remaining = Math.ceil((deadline.getTime() - now.getTime()) / 86400000);
    const item = document.querySelector(`[data-evaluation-index="${index}"]`);
    const countdown = item.querySelector(".evaluation-countdown");
    const expired = remaining <= 0;
    countdown.textContent = expired ? "Finalizada" : `Faltan ${remaining} ${remaining === 1 ? "día" : "días"}`;
    item.classList.toggle("is-finished", expired);
    item.classList.toggle("is-next", !expired && !syllabus.evaluations.slice(0, index).some((previous) => {
      const [previousYear, previousMonth, previousDay] = previous.date.slice(0, 10).split("-").map(Number);
      const [, previousHour, previousMinute] = previous.date.match(/T(\d{2}):(\d{2})/);
      return new Date(previousYear, previousMonth - 1, previousDay, Number(previousHour), Number(previousMinute)) >= now;
    }));
  });
}

function renderSoftSkills() {
  document.querySelector("#soft-skills").innerHTML = syllabus.softSkills.map((skill, index) => `
    <article class="soft-skill-card" style="--skill-index:${index}">
      <span class="skill-icon"><i class="bi ${skill.icon}" aria-hidden="true"></i></span>
      <h3>${escapeHtml(skill.name)}</h3>
      <p>${escapeHtml(skill.description)}</p>
      <div class="skill-contribution"><small>EN ESTA ASIGNATURA</small><span>${escapeHtml(skill.contribution)}</span></div>
    </article>`).join("");
}

function renderProject() {
  const project = syllabus.project;
  document.querySelector("#project-card").innerHTML = `
    <div class="project-symbol" aria-hidden="true"><i class="bi bi-water"></i><span>DATA<br>FOR<br>OCEANS</span></div>
    <div class="project-copy"><p class="eyebrow">${escapeHtml(project.label)}</p><h2 id="project-title">${escapeHtml(project.title)}</h2><p>${escapeHtml(project.description)}</p><div class="project-tags"><span>Copernicus</span><span>CMEMS</span><span>Dashboards</span><span>Alertas tempranas</span></div></div>
    <span class="project-index" aria-hidden="true">PF / 01</span>`;
}

function renderBibliography() {
  document.querySelector("#bibliography-list").innerHTML = syllabus.bibliography.map((group, index) => `
    <article class="bibliography-group" style="--group-index:${index}">
      <div class="bibliography-group-heading"><i class="bi ${group.icon}" aria-hidden="true"></i><h3>${escapeHtml(group.category)}</h3></div>
      <ul>${group.resources.map((resource) => `
        <li><a href="${escapeHtml(resource.url)}" target="_blank" rel="noopener"><span>${escapeHtml(resource.title)}</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></li>`).join("")}</ul>
    </article>`).join("");
}

function applyTheme(theme, persist = true) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const toggle = document.querySelector("#theme-toggle");
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
  toggle.querySelector(".theme-icon").textContent = isDark ? "☀" : "☾";
  document.querySelector("#theme-toggle-label").textContent = isDark ? "Tema claro" : "Tema oscuro";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#141b17" : "#f6f4ee";

  if (persist) {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch {
      // El cambio visual no depende del acceso al almacenamiento local.
    }
  }

  updateChartTheme();
}

function updateChartTheme() {
  const isDark = document.documentElement.dataset.theme === "dark";
  const textColor = isDark ? "#d1ddd3" : "#68746c";
  const gridColor = isDark ? "#39463d" : "#e9ece5";
  const panelColor = isDark ? "#202a24" : "#fffefa";
  if (typeof Chart !== "undefined") Chart.defaults.color = textColor;

  chartInstances.forEach((chart) => {
    chart.options.color = textColor;
    Object.values(chart.options.scales || {}).forEach((scale) => {
      if (scale.ticks) scale.ticks.color = textColor;
      if (scale.grid && scale.grid.display !== false) scale.grid.color = gridColor;
    });
    const legend = chart.options.plugins?.legend;
    if (legend?.labels) legend.labels.color = textColor;
    if (chart.config.type === "doughnut") chart.data.datasets[0].borderColor = panelColor;
    chart.update("none");
  });
}

function initializeTheme() {
  let theme = "light";
  try {
    theme = localStorage.getItem(themeStorageKey) || "light";
  } catch {
    theme = "light";
  }
  applyTheme(theme === "dark" ? "dark" : "light", false);
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
}

renderCourse();
renderOverview();
renderUnits();
renderHoursLegends();
renderEvaluations();
renderSoftSkills();
renderProject();
renderBibliography();
initializeTheme();
renderHoursCharts();