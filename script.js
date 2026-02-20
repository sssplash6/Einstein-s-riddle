const BASE_ITEMS = {
  color: [
    { id: "yellow", variant: "yellow" },
    { id: "blue", variant: "blue" },
    { id: "red", variant: "red" },
    { id: "green", variant: "green" },
    { id: "white", variant: "white" },
  ],
  nationality: [
    { id: "norwegian" },
    { id: "dane" },
    { id: "brit" },
    { id: "german" },
    { id: "swede" },
  ],
  drink: [
    { id: "water" },
    { id: "tea" },
    { id: "milk" },
    { id: "coffee" },
    { id: "beer" },
  ],
  cigarette: [
    { id: "dunhill" },
    { id: "blends" },
    { id: "pallmall" },
    { id: "prince" },
    { id: "bluemaster" },
  ],
  pet: [
    { id: "cat" },
    { id: "horse" },
    { id: "birds" },
    { id: "fish" },
    { id: "dogs" },
  ],
};

const SOLUTION = {
  color: {
    1: "yellow",
    2: "blue",
    3: "red",
    4: "green",
    5: "white",
  },
  nationality: {
    1: "norwegian",
    2: "dane",
    3: "brit",
    4: "german",
    5: "swede",
  },
  drink: {
    1: "water",
    2: "tea",
    3: "milk",
    4: "coffee",
    5: "beer",
  },
  cigarette: {
    1: "dunhill",
    2: "blends",
    3: "pallmall",
    4: "prince",
    5: "bluemaster",
  },
  pet: {
    1: "cat",
    2: "horse",
    3: "birds",
    4: "fish",
    5: "dogs",
  },
};

const LANGUAGES = {
  en: {
    rows: {
      color: "Color",
      nationality: "Nationality",
      drink: "Drink",
      cigarette: "Cigarette",
      pet: "Pet",
    },
    columns: ["House 1", "House 2", "House 3", "House 4", "House 5"],
    labels: {
      color: {
        yellow: "Yellow",
        blue: "Blue",
        red: "Red",
        green: "Green",
        white: "White",
      },
      nationality: {
        norwegian: "Norwegian",
        dane: "Dane",
        brit: "Brit",
        german: "German",
        swede: "Swede",
      },
      drink: {
        water: "Water",
        tea: "Tea",
        milk: "Milk",
        coffee: "Coffee",
        beer: "Beer",
      },
      cigarette: {
        dunhill: "Dunhill",
        blends: "Blends",
        pallmall: "Pall Mall",
        prince: "Prince",
        bluemaster: "Blue Master",
      },
      pet: {
        cat: "Cat",
        horse: "Horse",
        birds: "Birds",
        fish: "Fish",
        dogs: "Dogs",
      },
    },
    clues: [
      "The Brit lives in the red house.",
      "The Swede keeps dogs as pets.",
      "The Dane drinks tea.",
      "The green house is directly left of the white house.",
      "The green house owner drinks coffee.",
      "The person who smokes Pall Mall rears birds.",
      "The owner of the yellow house smokes Dunhill.",
      "The man in the center house drinks milk.",
      "The Norwegian lives in the first house.",
      "The man who smokes Blends lives next to the one who keeps cats.",
      "The man who keeps horses lives next to the man who smokes Dunhill.",
      "The man who smokes Blue Master drinks beer.",
      "The German smokes Prince.",
      "The Norwegian lives next to the blue house.",
      "The man who smokes Blends has a neighbor who drinks water.",
    ],
    ui: {
      heroEyebrow: "Einstein's Riddle",
      heroTitle: "Sketch the Houses. Drag the Clues.",
      heroSubtitle:
        "Drag each piece into the grid. Auto-check will quietly confirm correct placements as you go.",
      autoLabel: "Auto-check",
      resetBtn: "Reset Grid",
      statusOff: "Auto-check off",
      statusSolved: "Solved!",
      statusProgress: "{correct}/25 correct",
      tipDefault:
        "Tip: Drag a piece onto the matching row. Double-click a placed item to clear it.",
      hintNice: "Nice!",
      hintWrongRow: "That row does not match this piece. Try the correct category.",
      hintDropOnGrid: "Drop on a grid cell.",
      hintReset: "Grid cleared. Start dragging pieces again.",
      hintAutoOn: "Auto-check enabled.",
      hintAutoOff: "Auto-check disabled. You can still drag pieces.",
      riddleTitle: "The Riddle",
      riddleSubtitle: "Use the clues to place every item in the grid.",
      paletteTitle: "Pieces",
      paletteSubtitle: "Drag from here into the sketched grid.",
      homeLabel: "Language",
      winEyebrow: "Solved",
      winTitle: "Einstein would approve.",
      winBody: "You placed every clue correctly.",
      winButton: "Keep Exploring",
      languageTitle: "Einstein's Riddle",
      languageSubtitle: "Choose a language to begin.",
    },
  },
  uz: {
    rows: {
      color: "Rang",
      nationality: "Millat",
      drink: "Ichimlik",
      cigarette: "Sigaret",
      pet: "Hayvon",
    },
    columns: ["Uy 1", "Uy 2", "Uy 3", "Uy 4", "Uy 5"],
    labels: {
      color: {
        yellow: "Sariq",
        blue: "Havorang",
        red: "Qizil",
        green: "Yashil",
        white: "Oq",
      },
      nationality: {
        norwegian: "Norvegiyali",
        dane: "Daniyali",
        brit: "Ingliz",
        german: "Nemis",
        swede: "Shved",
      },
      drink: {
        water: "Suv",
        tea: "Choy",
        milk: "Sut",
        coffee: "Kofe",
        beer: "Pivo",
      },
      cigarette: {
        dunhill: "Dunhill",
        blends: "Marlboro",
        pallmall: "Pall Mall",
        prince: "Rothmans",
        bluemaster: "Winfield",
      },
      pet: {
        cat: "Mushuk",
        horse: "Ot",
        birds: "Qushlar",
        fish: "Baliq",
        dogs: "Itlar",
      },
    },
    clues: [
      "Ingliz qizil uyda yashaydi.",
      "Shved it boqadi.",
      "Daniyali kishi choy ichadi.",
      "Yashil uy oq uydan chapda joylashgan.",
      "Yashil uy egasi kofe ichadi.",
      "\"Pall Mall\" chekuvchi kishi qush boqadi.",
      "O'rtadagi uyda yashovchi odam sut ichadi.",
      "Sariq uyda yashovchi kishi \"Dunhill\" chekadi.",
      "Norvegiyali kishi birinchi uyda turadi.",
      "\"Marlboro\" chekuvchi odam mushuk boquvchi kishi oldida yashaydi.",
      "Ot boqadigan odam \"Dunhill\" chekadigan kishi oldida istiqomat qiladi.",
      "\"Winfield\" tamakisini chekuvchi kishi pivo ichadi.",
      "Norvegiyali havo rang uy oldida yashaydi.",
      "Nemis \"Rothmans\" chekadi.",
      "\"Marlboro\" chekuvchi odam suv ichadigan kishiga qo'shni turadi.",
    ],
    ui: {
      heroEyebrow: "Einstein topishmog'i",
      heroTitle: "Mahallani yasang. Elementlarni moslashtiring.",
      heroSubtitle:
        "Har bir bo'lakni jadvalga qo'ying. Avto-tekshiruv joylarni tekshirib boradi.",
      autoLabel: "Avto-tekshiruv",
      resetBtn: "Jadvalni tozalash",
      statusOff: "Avto-tekshiruv o'chirilgan",
      statusSolved: "Yechildi!",
      statusProgress: "{correct}/25 to'g'ri",
      tipDefault:
        "Maslahat: Bo'lakni mos qatorga torting. Joylanganni ikki marta bosing.",
      hintNice: "Zo'r!",
      hintWrongRow: "Bu qator mos emas. To'g'ri kategoriyani tanlang.",
      hintDropOnGrid: "Jadval katagiga tashlang.",
      hintReset: "Jadval tozalandi. Bo'laklarni qayta joylang.",
      hintAutoOn: "Avto-tekshiruv yoqildi.",
      hintAutoOff: "Avto-tekshiruv o'chirildi. Bo'laklarni tortishda davom eting.",
      riddleTitle: "Topishmoq",
      riddleSubtitle: "Ishoralarga tayanib jadvalni to'ldiring.",
      paletteTitle: "Bo'laklar",
      paletteSubtitle: "Bu yerdan olib, chizilgan jadvalga joylang.",
      homeLabel: "Til",
      winEyebrow: "Yechildi",
      winTitle: "Einstein ma'qullaydi.",
      winBody: "Barcha ishoralar to'g'ri joylandi.",
      winButton: "Davom etish",
      languageTitle: "Einstein topishmog'i",
      languageSubtitle: "Boshlash uchun tilni tanlang.",
    },
  },
  ru: {
    rows: {
      color: "Цвет",
      nationality: "Национальность",
      drink: "Напиток",
      cigarette: "Сигареты",
      pet: "Животное",
    },
    columns: ["Дом 1", "Дом 2", "Дом 3", "Дом 4", "Дом 5"],
    labels: {
      color: {
        yellow: "Жёлтый",
        blue: "Синий",
        red: "Красный",
        green: "Зеленый",
        white: "Белый",
      },
      nationality: {
        norwegian: "Норвежец",
        dane: "Датчанин",
        brit: "Англичанин",
        german: "Немец",
        swede: "Швед",
      },
      drink: {
        water: "Вода",
        tea: "Чай",
        milk: "Молоко",
        coffee: "Кофе",
        beer: "Пиво",
      },
      cigarette: {
        dunhill: "Данхилл",
        blends: "Ротманс",
        pallmall: "Пелл Мелл",
        prince: "Мальборо",
        bluemaster: "Филипп Моррис",
      },
      pet: {
        cat: "Кошки",
        horse: "Лошади",
        birds: "Птицы",
        fish: "Рыбки",
        dogs: "Собаки",
      },
    },
    clues: [
      "Норвежец живет в первом доме.",
      "Англичанин живет в красном доме.",
      "Зеленый дом находится левее белого.",
      "Датчанин пьет чай.",
      "Тот, кто курит Rothmans, живет рядом с тем, кто выращивает кошек.",
      "Тот, кто живет в желтом доме, курит Dunhill.",
      "Немец курит Marlboro.",
      "Тот, кто живет в центре, пьет молоко.",
      "Сосед того, кто курит Rothmans, пьет воду.",
      "Тот, кто курит Pall Mall, выращивает птиц.",
      "Швед выращивает собак.",
      "Норвежец живет рядом с синим домом.",
      "Тот, кто выращивает лошадей, живет в синем доме.",
      "Тот, кто курит Philip Morris, пьет пиво.",
      "В зеленом доме пьют кофе.",
    ],
    ui: {
      heroEyebrow: "Загадка Эйнштейна",
      heroTitle: "Нарисуйте дома. Расставьте подсказки.",
      heroSubtitle:
        "Перетаскивайте элементы в сетку. Автопроверка подтвердит верные.",
      autoLabel: "Автопроверка",
      resetBtn: "Очистить сетку",
      statusOff: "Автопроверка выключена",
      statusSolved: "Решено!",
      statusProgress: "{correct}/25 верно",
      tipDefault:
        "Совет: перетащите элемент в нужную строку. Дважды щелкните, чтобы убрать.",
      hintNice: "Отлично!",
      hintWrongRow: "Эта строка не подходит. Попробуйте правильную категорию.",
      hintDropOnGrid: "Опустите на ячейку сетки.",
      hintReset: "Сетка очищена. Начните заново.",
      hintAutoOn: "Автопроверка включена.",
      hintAutoOff: "Автопроверка выключена. Можно продолжать расстановку.",
      riddleTitle: "Подсказки",
      riddleSubtitle: "Используйте подсказки, чтобы заполнить таблицу.",
      paletteTitle: "Элементы",
      paletteSubtitle: "Перетащите отсюда в нарисованную сетку.",
      homeLabel: "Язык",
      winEyebrow: "Решено",
      winTitle: "Эйнштейн бы одобрил.",
      winBody: "Все подсказки расставлены верно.",
      winButton: "Продолжить",
      languageTitle: "Загадка Эйнштейна",
      languageSubtitle: "Выберите язык, чтобы начать.",
    },
  },
};

const TOTAL_CELLS = 25;

const state = {
  color: {},
  nationality: {},
  drink: {},
  cigarette: {},
  pet: {},
};

const itemById = new Map();

const statusEl = document.getElementById("status");
const autoToggle = document.getElementById("autoToggle");
const resetBtn = document.getElementById("resetBtn");
const hintEl = document.getElementById("hint");
const homeBtn = document.getElementById("homeBtn");
const winOverlay = document.getElementById("winOverlay");
const winClose = document.getElementById("winClose");
const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");
const languageOverlay = document.getElementById("languageOverlay");
const languageButtons = document.querySelectorAll(".lang-option");

const heroEyebrow = document.getElementById("heroEyebrow");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const autoLabel = document.getElementById("autoLabel");
const riddleTitle = document.getElementById("riddleTitle");
const riddleSubtitle = document.getElementById("riddleSubtitle");
const cluesEl = document.getElementById("clues");
const paletteTitle = document.getElementById("paletteTitle");
const paletteSubtitle = document.getElementById("paletteSubtitle");
const winEyebrow = document.getElementById("winEyebrow");
const winTitle = document.getElementById("winTitle");
const winBody = document.getElementById("winBody");
const languageTitle = document.getElementById("languageTitle");
const languageSubtitle = document.getElementById("languageSubtitle");

let dragging = null;
let hoverCell = null;
let solvedShown = false;
let confettiAnimationId = null;
let confettiPieces = [];
let currentLang = "en";

function setText(el, text) {
  if (!el) return;
  el.textContent = text;
}

function t(key, vars = {}) {
  const template = LANGUAGES[currentLang]?.ui?.[key] || "";
  return template.replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : match
  );
}

function applyLanguage(lang) {
  const langData = LANGUAGES[lang];
  if (!langData) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  setText(heroEyebrow, langData.ui.heroEyebrow);
  setText(heroTitle, langData.ui.heroTitle);
  setText(heroSubtitle, langData.ui.heroSubtitle);
  setText(autoLabel, langData.ui.autoLabel);
  setText(resetBtn, langData.ui.resetBtn);
  setText(riddleTitle, langData.ui.riddleTitle);
  setText(riddleSubtitle, langData.ui.riddleSubtitle);
  setText(paletteTitle, langData.ui.paletteTitle);
  setText(paletteSubtitle, langData.ui.paletteSubtitle);
  setText(homeBtn, langData.ui.homeLabel);
  setText(winEyebrow, langData.ui.winEyebrow);
  setText(winTitle, langData.ui.winTitle);
  setText(winBody, langData.ui.winBody);
  setText(winClose, langData.ui.winButton);
  setText(languageTitle, langData.ui.languageTitle);
  setText(languageSubtitle, langData.ui.languageSubtitle);

  document.querySelectorAll(".col-head").forEach((col, index) => {
    col.textContent = langData.columns[index];
  });

  document.querySelectorAll("[data-row-key]").forEach((row) => {
    const key = row.dataset.rowKey;
    row.textContent = langData.rows[key];
  });

  document.querySelectorAll("[data-group-key]").forEach((group) => {
    const key = group.dataset.groupKey;
    group.textContent = langData.rows[key];
  });

  buildClues(langData.clues);
  buildPalette(langData.labels);
  updatePlacedLabels(langData.labels);

  hintKey("tipDefault", false);
  updateChecks();
}

function buildClues(clues) {
  if (!cluesEl) return;
  cluesEl.innerHTML = "";
  clues.forEach((text) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    label.appendChild(input);
    label.append(` ${text}`);
    li.appendChild(label);
    cluesEl.appendChild(li);
  });
}

function buildPalette(labels) {
  itemById.clear();
  Object.entries(BASE_ITEMS).forEach(([category, items]) => {
    const container = document.getElementById(`tokens-${category}`);
    if (!container) return;
    container.innerHTML = "";
    const shuffled = shuffleArray([...items]);
    shuffled.forEach((item) => {
      const label = labels?.[category]?.[item.id] || item.id;
      const enriched = { ...item, label };
      itemById.set(item.id, { ...enriched, category });
      const token = createTokenElement(enriched, category);
      container.appendChild(token);
    });
  });
}

function updatePlacedLabels(labels) {
  document.querySelectorAll(".placed").forEach((placed) => {
    const id = placed.dataset.id;
    const category = placed.dataset.category;
    const label = labels?.[category]?.[id];
    if (label) {
      placed.textContent = label;
    }
  });
}

function createTokenElement(item, category) {
  const el = document.createElement("div");
  const classes = ["token", `token--${category}`];
  if (category === "color" && item.variant) {
    classes.push(`token--${item.variant}`);
  }
  el.className = classes.join(" ");
  el.textContent = item.label;
  el.dataset.id = item.id;
  el.dataset.category = category;
  el.addEventListener("pointerdown", handlePointerDown);
  return el;
}

function handlePointerDown(event) {
  if (event.button !== 0 && event.pointerType !== "touch") return;
  const target = event.currentTarget;
  const item = itemById.get(target.dataset.id);
  if (!item) return;

  event.preventDefault();
  target.setPointerCapture(event.pointerId);

  const rect = target.getBoundingClientRect();
  const ghost = target.cloneNode(true);
  ghost.classList.add("drag-ghost");
  document.body.appendChild(ghost);

  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  dragging = {
    item,
    ghost,
    source: target,
    offsetX,
    offsetY,
  };

  target.classList.add("token--dragging");
  moveGhost(event);

  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerup", handlePointerUp, { once: true });
}

function handlePointerMove(event) {
  if (!dragging) return;
  moveGhost(event);
  const cell = findCellUnderPointer(event.clientX, event.clientY);
  updateHover(cell, dragging.item.category);
}

function handlePointerUp(event) {
  if (!dragging) return;
  window.removeEventListener("pointermove", handlePointerMove);

  const cell = findCellUnderPointer(event.clientX, event.clientY);
  const isValid = cell && cell.dataset.row === dragging.item.category;

  if (isValid) {
    animateDrop(dragging.ghost, cell);
    placeItem(dragging.item, cell);
    hintKey("hintNice", false);
  } else {
    dragging.ghost.remove();
    hintKey(cell ? "hintWrongRow" : "hintDropOnGrid", true);
  }

  if (dragging.source) {
    dragging.source.classList.remove("token--dragging");
  }

  clearHover();
  dragging = null;
}

function moveGhost(event) {
  const { ghost, offsetX, offsetY } = dragging;
  ghost.style.left = `${event.clientX - offsetX}px`;
  ghost.style.top = `${event.clientY - offsetY}px`;
  ghost.style.transform = `rotate(-2deg)`;
}

function animateDrop(ghost, cell) {
  const rect = cell.getBoundingClientRect();
  const targetX = rect.left + rect.width / 2 - ghost.offsetWidth / 2;
  const targetY = rect.top + rect.height / 2 - ghost.offsetHeight / 2;

  const animation = ghost.animate(
    [
      {
        left: ghost.style.left,
        top: ghost.style.top,
        transform: "rotate(-2deg) scale(1)",
      },
      {
        left: `${targetX}px`,
        top: `${targetY}px`,
        transform: "rotate(0deg) scale(0.96)",
      },
    ],
    {
      duration: 220,
      easing: "cubic-bezier(0.22, 0.7, 0.2, 1)",
      fill: "forwards",
    }
  );

  animation.addEventListener("finish", () => ghost.remove());
}

function findCellUnderPointer(x, y) {
  const element = document.elementFromPoint(x, y);
  if (!element) return null;
  return element.closest(".cell");
}

function updateHover(cell, category) {
  if (hoverCell === cell) return;
  clearHover();
  if (!cell) return;
  hoverCell = cell;
  hoverCell.classList.add("cell--hover");
  if (cell.dataset.row !== category) {
    hoverCell.classList.add("cell--invalid");
  }
}

function clearHover() {
  if (!hoverCell) return;
  hoverCell.classList.remove("cell--hover", "cell--invalid");
  hoverCell = null;
}

function placeItem(item, cell) {
  const row = cell.dataset.row;
  const col = cell.dataset.col;

  if (row !== item.category) return;

  const existing = cell.querySelector(".placed");
  if (existing) {
    clearCell(cell);
  }

  const previousCell = document.querySelector(
    `.cell[data-row="${row}"] .placed[data-id="${item.id}"]`
  );
  if (previousCell) {
    clearCell(previousCell.closest(".cell"));
  }

  const placed = createTokenElement(item, row);
  placed.classList.add("placed");
  placed.addEventListener("dblclick", () => clearCell(cell));
  cell.appendChild(placed);

  state[row][col] = item.id;

  if (autoToggle.checked) {
    updateChecks();
  }
}

function clearCell(cell) {
  const row = cell.dataset.row;
  const col = cell.dataset.col;
  const placed = cell.querySelector(".placed");
  if (placed) {
    placed.remove();
  }
  if (state[row][col]) {
    delete state[row][col];
  }
  cell.classList.remove("cell--correct", "cell--wrong");
  if (autoToggle.checked) {
    updateChecks();
  }
}

function updateChecks() {
  let correct = 0;
  let filled = 0;
  document.querySelectorAll(".cell").forEach((cell) => {
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const placed = cell.querySelector(".placed");

    cell.classList.remove("cell--correct", "cell--wrong");

    if (!placed) return;
    filled += 1;

    const isCorrect = SOLUTION[row][col] === placed.dataset.id;
    if (isCorrect) {
      correct += 1;
      cell.classList.add("cell--correct");
    } else {
      cell.classList.add("cell--wrong");
    }
  });

  if (!autoToggle.checked) {
    statusEl.textContent = t("statusOff");
    return;
  }

  if (filled === TOTAL_CELLS && correct === TOTAL_CELLS) {
    statusEl.textContent = t("statusSolved");
    showWin();
  } else {
    statusEl.textContent = t("statusProgress", { correct, total: TOTAL_CELLS });
  }
}

function hintMessage(message, warn) {
  hintEl.textContent = message;
  hintEl.classList.toggle("tip--warn", Boolean(warn));
}

function hintKey(key, warn, vars) {
  hintMessage(t(key, vars), warn);
}

function resetGrid(showResetHint = true) {
  document.querySelectorAll(".cell").forEach((cell) => {
    clearCell(cell);
  });
  solvedShown = false;
  hideWin();
  updateChecks();
  hintKey(showResetHint ? "hintReset" : "tipDefault", false);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showLanguageOverlay() {
  languageOverlay.classList.add("is-visible");
  languageOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("language-locked");
}

function hideLanguageOverlay() {
  languageOverlay.classList.remove("is-visible");
  languageOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("language-locked");
}

function showWin() {
  if (solvedShown) return;
  solvedShown = true;
  winOverlay.classList.add("is-visible");
  winOverlay.setAttribute("aria-hidden", "false");
  startConfetti();
}

function hideWin() {
  winOverlay.classList.remove("is-visible");
  winOverlay.setAttribute("aria-hidden", "true");
  stopConfetti();
}

function startConfetti() {
  const { width, height } = winOverlay.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  confettiCanvas.width = width * dpr;
  confettiCanvas.height = height * dpr;
  confettiCanvas.style.width = `${width}px`;
  confettiCanvas.style.height = `${height}px`;
  confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const colors = [
    "#f2d24b",
    "#4f8ac9",
    "#c75549",
    "#59a570",
    "#f7f7f4",
    "#b24a3b",
  ];

  confettiPieces = Array.from({ length: 160 }, () => ({
    x: Math.random() * width,
    y: -Math.random() * height,
    size: 6 + Math.random() * 6,
    speed: 1 + Math.random() * 2.6,
    drift: (Math.random() - 0.5) * 1.4,
    rotation: Math.random() * Math.PI,
    rotationSpeed: (Math.random() - 0.5) * 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  const loop = () => {
    confettiCtx.clearRect(0, 0, width, height);
    confettiPieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.drift;
      piece.rotation += piece.rotationSpeed;

      if (piece.y > height + 20) {
        piece.y = -20;
        piece.x = Math.random() * width;
      }

      confettiCtx.save();
      confettiCtx.translate(piece.x, piece.y);
      confettiCtx.rotate(piece.rotation);
      confettiCtx.fillStyle = piece.color;
      confettiCtx.fillRect(
        -piece.size / 2,
        -piece.size / 2,
        piece.size,
        piece.size
      );
      confettiCtx.restore();
    });

    confettiAnimationId = window.requestAnimationFrame(loop);
  };

  if (confettiAnimationId) {
    window.cancelAnimationFrame(confettiAnimationId);
  }
  loop();
}

function stopConfetti() {
  if (confettiAnimationId) {
    window.cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

function init() {
  applyLanguage("en");
  showLanguageOverlay();

  autoToggle.addEventListener("change", () => {
    if (autoToggle.checked) {
      updateChecks();
      hintKey("hintAutoOn", false);
    } else {
      document
        .querySelectorAll(".cell")
        .forEach((cell) =>
          cell.classList.remove("cell--correct", "cell--wrong")
        );
      statusEl.textContent = t("statusOff");
      hideWin();
      hintKey("hintAutoOff", false);
    }
  });

  resetBtn.addEventListener("click", () => resetGrid(true));
  homeBtn.addEventListener("click", () => {
    hideWin();
    showLanguageOverlay();
  });
  winClose.addEventListener("click", hideWin);
  winOverlay.addEventListener("click", (event) => {
    if (event.target === winOverlay) hideWin();
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      applyLanguage(lang);
      resetGrid(false);
      hideLanguageOverlay();
    });
  });
}

init();
