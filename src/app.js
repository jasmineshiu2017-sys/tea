const ingredients = [
  { id: "honeysuckle", name: "金銀花", sprite: 0, clue: "花色淡黃，常用於五花茶。", prep: "摘走粗梗" },
  { id: "chrysanthemum", name: "菊花", sprite: 1, clue: "泡開像一朵小太陽，茶色清亮。", prep: "輕輕沖洗" },
  { id: "kapok", name: "木棉花", sprite: 2, clue: "香港街邊常見樹花，曬乾後可入茶。", prep: "抖走碎屑" },
  { id: "pueraria", name: "葛花", sprite: 3, clue: "名字有個葛字，花香溫和。", prep: "分開花瓣" },
  { id: "sophora", name: "槐花", sprite: 4, clue: "細小花粒，常和其他花材同煲。", prep: "篩走細沙" },
  { id: "herbBundle", name: "廿四味草藥包", sprite: 5, clue: "材料最多，味道最深，名字有個數字。", prep: "打開藥包" },
  { id: "selfheal", name: "夏枯草", sprite: 6, clue: "紫褐色花穗，名字聽起來像盛夏。", prep: "剪成小段" },
  { id: "jigucao", name: "雞骨草", sprite: 7, clue: "藤莖幼長，名字有雞但不是肉。", prep: "捲成小束" },
  { id: "hempseed", name: "火麻仁", sprite: 8, clue: "細細粒，煲出來較滑。", prep: "輕磨外殼" },
  { id: "monkfruit", name: "羅漢果", sprite: 9, clue: "圓圓啡色，甜味自然。", prep: "拍開果殼" },
  { id: "mistletoe", name: "桑寄生", sprite: 10, clue: "枝葉入茶，名字像寄住在樹上。", prep: "折短枝葉" },
  { id: "sugarcane", name: "竹蔗", sprite: 11, clue: "一節一節，清甜多汁。", prep: "切成短段" },
  { id: "imperatae", name: "茅根", sprite: 12, clue: "白色幼根，常與竹蔗一起煲。", prep: "洗淨泥沙" },
  { id: "rocksugar", name: "冰糖", sprite: 13, clue: "透明結晶，用來調甜。", prep: "敲成小粒" },
  { id: "water", name: "清水", sprite: 14, clue: "所有涼茶都要先落它。", prep: "量好水位" },
  { id: "pot", name: "瓦煲", sprite: 15, clue: "慢火煲茶最穩陣的器具。", prep: "預熱瓦煲" }
];

const teas = [
  {
    id: "five-flower",
    name: "五花茶",
    sprite: 0,
    summary: "花香清爽，街坊最熟悉的入門款。",
    story: "五花茶用幾款乾花同煲，香氣輕，顏色清。涼茶鋪通常會把它放在當眼位置，適合第一次玩的人。",
    taste: "花香、微甜、茶色金黃",
    water: 1800,
    time: 25,
    ingredients: ["honeysuckle", "chrysanthemum", "kapok", "pueraria", "sophora"]
  },
  {
    id: "twenty-four",
    name: "廿四味",
    sprite: 1,
    summary: "味道最深，材料最多，挑戰感最高。",
    story: "廿四味是涼茶鋪的招牌硬功夫。每間店的配方略有不同，重點是苦味、草本味和火候要平衡。",
    taste: "深褐、草本、回甘",
    water: 2200,
    time: 45,
    ingredients: ["herbBundle", "selfheal", "jigucao", "rocksugar"]
  },
  {
    id: "chrysanthemum-tea",
    name: "菊花茶",
    sprite: 2,
    summary: "茶色明亮，容易入口，最考水量。",
    story: "菊花茶看似簡單，但太久會澀，太短又未出香。茶姨會特別看你有沒有掌握時間。",
    taste: "清香、淡黃、入口順",
    water: 1500,
    time: 15,
    ingredients: ["chrysanthemum", "rocksugar", "water"]
  },
  {
    id: "selfheal-tea",
    name: "夏枯草",
    sprite: 3,
    summary: "香氣沉實，紫褐花穗是重點。",
    story: "夏枯草茶在老式涼茶鋪很常見。先大火滾起，再轉細火，茶味會更圓。",
    taste: "微苦、草香、茶色深",
    water: 1700,
    time: 30,
    ingredients: ["selfheal", "rocksugar", "water"]
  },
  {
    id: "jigucao-tea",
    name: "雞骨草茶",
    sprite: 4,
    summary: "草本味乾淨，材料要先整理好。",
    story: "雞骨草名字有趣，實物是藤莖草本。處理時要捲好，不然落煲會散開。",
    taste: "草青、清爽、輕微回甘",
    water: 1800,
    time: 35,
    ingredients: ["jigucao", "selfheal", "rocksugar"]
  },
  {
    id: "hempseed-tea",
    name: "火麻仁茶",
    sprite: 5,
    summary: "口感較滑，火候太猛會失分。",
    story: "火麻仁茶的口感和一般花茶不同，煲得好會較滑。這關最考轉細火的時機。",
    taste: "滑身、淡香、柔和",
    water: 1400,
    time: 20,
    ingredients: ["hempseed", "rocksugar", "water"]
  },
  {
    id: "monkfruit-tea",
    name: "羅漢果茶",
    sprite: 6,
    summary: "天然甜味，拍開果殼才出味。",
    story: "羅漢果不用太多糖也有甜味。準備時拍開果殼，香味會快些釋放。",
    taste: "清甜、果香、深琥珀",
    water: 1600,
    time: 25,
    ingredients: ["monkfruit", "imperatae", "water"]
  },
  {
    id: "mistletoe-tea",
    name: "桑寄生茶",
    sprite: 7,
    summary: "枝葉香氣慢慢出，適合耐心煲。",
    story: "桑寄生茶常見於傳統糖水和涼茶鋪。枝葉要折短，茶味才均勻。",
    taste: "木香、微甜、茶色深",
    water: 1700,
    time: 35,
    ingredients: ["mistletoe", "rocksugar", "water"]
  },
  {
    id: "sugarcane-root",
    name: "竹蔗茅根",
    sprite: 8,
    summary: "清甜亮身，材料圖像最好認。",
    story: "竹蔗茅根是老少都容易接受的涼茶。竹蔗切段，茅根洗淨，水量準就很穩。",
    taste: "清甜、淡金、根莖香",
    water: 2000,
    time: 30,
    ingredients: ["sugarcane", "imperatae", "rocksugar"]
  }
];

const $ = (selector) => document.querySelector(selector);
const teaGrid = $("#tea-grid");
const guide = $("#ingredient-guide");
const stageLabel = $("#stage-label");
const stageTitle = $("#stage-title");
const coachLine = $("#coach-line");

let activeTea = null;
let gathered = new Set();
let selectedIngredient = null;
let prepIndex = 0;
let prepScore = 0;
let needle = 0;
let needleDirection = 1;
let needleTimer = null;
let water = 0;
let heat = "off";
let cookTime = 0;
let cookTimer = null;

function spriteStyle(type, index) {
  const columns = type === "tea" ? 3 : 4;
  const rows = type === "tea" ? 3 : 4;
  const col = index % columns;
  const row = Math.floor(index / columns);
  return [
    `--sprite: url("/assets/${type === "tea" ? "tea-sprite.webp" : "ingredient-sprite.webp"}")`,
    `--sprite-size: ${columns * 100}% ${rows * 100}%`,
    `--sprite-pos: ${columns === 1 ? 0 : (col / (columns - 1)) * 100}% ${rows === 1 ? 0 : (row / (rows - 1)) * 100}%`
  ].join(";");
}

function ingredientById(id) {
  return ingredients.find((item) => item.id === id);
}

function renderTeaGrid() {
  teaGrid.innerHTML = teas
    .map(
      (tea) => `
        <button class="tea-card" type="button" data-tea="${tea.id}">
          <span class="tea-image sprite" style='${spriteStyle("tea", tea.sprite)}' role="img" aria-label="${tea.name}圖片"></span>
          <span class="tea-card-content">
            <h3>${tea.name}</h3>
            <p>${tea.summary}</p>
          </span>
        </button>
      `
    )
    .join("");
}

function renderGuide() {
  guide.innerHTML = ingredients
    .map(
      (item) => `
        <article class="ingredient-card">
          <span class="ingredient-image sprite" style='${spriteStyle("ingredient", item.sprite)}' role="img" aria-label="${item.name}圖片"></span>
          <strong>${item.name}</strong>
          <p>${item.clue}</p>
        </article>
      `
    )
    .join("");
}

function setStage(name, title, label) {
  document.querySelectorAll(".stage").forEach((stage) => stage.classList.remove("active-stage"));
  $(`#${name}-screen`).classList.add("active-stage");
  stageTitle.textContent = title;
  stageLabel.textContent = label;
}

function selectTea(teaId) {
  activeTea = teas.find((tea) => tea.id === teaId);
  gathered = new Set();
  selectedIngredient = null;
  prepIndex = 0;
  prepScore = 0;
  water = 0;
  heat = "off";
  cookTime = 0;
  stopNeedle();
  stopCooking();
  coachLine.textContent = `你揀咗${activeTea.name}。先記住水量 ${activeTea.water} ml，時間 ${activeTea.time} 分鐘。`;
  renderHistory();
  location.hash = "game-panel";
}

function renderHistory() {
  $("#history-screen").innerHTML = `
    <div class="history-layout">
      <div class="history-visual sprite" style='${spriteStyle("tea", activeTea.sprite)}' role="img" aria-label="${activeTea.name}圖片"></div>
      <div class="history-copy">
        <h3>${activeTea.name}</h3>
        <p>${activeTea.story}</p>
        <div class="fact-strip" aria-label="煲茶目標">
          <div><span>水量</span><strong>${activeTea.water} ml</strong></div>
          <div><span>時間</span><strong>${activeTea.time} 分鐘</strong></div>
          <div><span>味道</span><strong>${activeTea.taste}</strong></div>
        </div>
        <button class="solid-button" type="button" id="start-gather">入材料房</button>
      </div>
    </div>
  `;
  $("#start-gather").addEventListener("click", renderGather);
  setStage("history", activeTea.name, "涼茶故事");
}

function renderGather() {
  selectedIngredient = null;
  const targetIds = activeTea.ingredients;
  $("#gather-screen").innerHTML = `
    <div class="section-heading">
      <h3>認出正確材料</h3>
      <p>按材料卡回答茶姨問題。全部答中才可以入砧板位。</p>
    </div>
    <div class="ingredient-pick-grid">
      ${targetIds
        .map((id) => {
          const item = ingredientById(id);
          const found = gathered.has(id);
          return `
            <button class="ingredient-card" type="button" data-ingredient="${id}" aria-pressed="${found}">
              <span class="ingredient-image sprite" style='${spriteStyle("ingredient", item.sprite)}' role="img" aria-label="${item.name}圖片"></span>
              <strong>${found ? item.name : "未確認材料"}</strong>
              <p>${found ? "已放入藤籃。" : "按下聽提示。"}</p>
            </button>
          `;
        })
        .join("")}
    </div>
    <div id="riddle-box" class="riddle-box" hidden></div>
    <div class="feedback-box">
      <p>已確認 ${gathered.size} / ${targetIds.length} 款材料。</p>
      <button class="solid-button" id="go-prep" type="button" ${gathered.size === targetIds.length ? "" : "disabled"}>去砧板位</button>
    </div>
  `;
  $("#go-prep").addEventListener("click", renderPrep);
  document.querySelectorAll("[data-ingredient]").forEach((button) => {
    button.addEventListener("click", () => openRiddle(button.dataset.ingredient));
  });
  setStage("gather", "材料房", "認材料");
}

function openRiddle(id) {
  if (gathered.has(id)) return;
  selectedIngredient = ingredientById(id);
  const wrong = ingredients
    .filter((item) => item.id !== id && !activeTea.ingredients.includes(item.id))
    .slice(0, 2);
  const choices = [selectedIngredient, ...wrong].sort(() => Math.random() - 0.5);
  $("#riddle-box").hidden = false;
  $("#riddle-box").innerHTML = `
    <p><strong>茶姨問：</strong>${selectedIngredient.clue}</p>
    <div class="choice-row">
      ${choices
        .map((item) => `<button class="choice-button" type="button" data-answer="${item.id}">${item.name}</button>`)
        .join("")}
    </div>
  `;
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => verifyIngredient(button.dataset.answer));
  });
}

function verifyIngredient(answerId) {
  if (answerId === selectedIngredient.id) {
    gathered.add(answerId);
    coachLine.textContent = `好眼力。${selectedIngredient.name}入籃。`;
    renderGather();
  } else {
    coachLine.textContent = "未中。睇清楚圖像同提示，再試多次。";
  }
}

function renderPrep() {
  prepIndex = 0;
  prepScore = 0;
  renderPrepStep();
  setStage("prep", "砧板位", "快手處理");
}

function renderPrepStep() {
  const item = ingredientById(activeTea.ingredients[prepIndex]);
  $("#prep-screen").innerHTML = `
    <div class="prep-board">
      <div class="prep-target">
        <span class="ingredient-image sprite" style='${spriteStyle("ingredient", item.sprite)}' role="img" aria-label="${item.name}圖片"></span>
        <h3>${item.name}</h3>
        <p>${item.prep}</p>
      </div>
      <div class="control-group">
        <h3>在綠色區域按下</h3>
        <p>玩法靈感來自節奏料理小遊戲，但角色和圖像都是原創。</p>
        <div class="timing-track" aria-label="時機條">
          <span id="timing-needle" class="timing-needle"></span>
        </div>
        <div class="scorebar">
          <div><span>處理分</span><strong>${prepScore}</strong></div>
          <div><span>材料</span><strong>${prepIndex + 1}/${activeTea.ingredients.length}</strong></div>
          <div><span>目標</span><strong>準</strong></div>
        </div>
        <button class="solid-button" id="prep-hit" type="button">${item.prep}</button>
      </div>
    </div>
  `;
  $("#prep-hit").addEventListener("click", hitPrep);
  startNeedle();
}

function startNeedle() {
  stopNeedle();
  needle = 0;
  needleDirection = 1;
  needleTimer = setInterval(() => {
    needle += needleDirection * 4;
    if (needle >= 100 || needle <= 0) needleDirection *= -1;
    $("#timing-needle")?.style.setProperty("--needle", needle);
  }, 34);
}

function stopNeedle() {
  if (needleTimer) clearInterval(needleTimer);
  needleTimer = null;
}

function hitPrep() {
  const hit = needle >= 37 && needle <= 63;
  prepScore += hit ? 20 : 8;
  coachLine.textContent = hit ? "靚手勢。刀工穩，材料會出味。" : "慢少少或快少少都得，再捉準節奏。";
  prepIndex += 1;
  if (prepIndex >= activeTea.ingredients.length) {
    stopNeedle();
    renderCook();
  } else {
    renderPrepStep();
  }
}

function renderCook() {
  $("#cook-screen").innerHTML = `
    <div class="cook-layout">
      <div class="pot-visual" style="--steam-opacity: ${heat === "off" ? 0.12 : 0.62}">
        <div class="steam-column" aria-hidden="true"></div>
        <div class="pot-body" aria-label="瓦煲"></div>
      </div>
      <div class="cook-controls">
        <div class="control-group">
          <h3>水量控制</h3>
          <p>目標：${activeTea.water} ml。現在：<strong id="water-value">${water}</strong> ml。</p>
          <div class="meter-line"><span id="water-fill" class="meter-fill"></span></div>
          <div class="button-row">
            <button class="mini-button" type="button" data-water="100">加 100 ml</button>
            <button class="mini-button" type="button" data-water="500">加 500 ml</button>
            <button class="mini-button" type="button" data-water="-100">減 100 ml</button>
          </div>
        </div>
        <div class="control-group">
          <h3>火候節奏</h3>
          <p>先大火滾起，再細火慢煲。現在：<strong id="heat-value">${heatLabel()}</strong></p>
          <div class="button-row">
            <button class="mini-button" type="button" data-heat="high">大火</button>
            <button class="mini-button" type="button" data-heat="low">細火</button>
            <button class="mini-button" type="button" data-heat="off">熄火</button>
          </div>
        </div>
        <div class="control-group">
          <h3>煲茶時間</h3>
          <p>目標：${activeTea.time} 分鐘。現在：<strong id="time-value">${cookTime}</strong> 分鐘。</p>
          <div class="meter-line"><span id="time-fill" class="meter-fill"></span></div>
          <div class="button-row">
            <button class="solid-button" type="button" id="start-cook">開始計時</button>
            <button class="ghost-button" type="button" id="finish-cook">收爐評分</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.querySelectorAll("[data-water]").forEach((button) => {
    button.addEventListener("click", () => {
      water = Math.max(0, water + Number(button.dataset.water));
      updateCookUi();
    });
  });
  document.querySelectorAll("[data-heat]").forEach((button) => {
    button.addEventListener("click", () => {
      heat = button.dataset.heat;
      coachLine.textContent = heat === "low" ? "好，細火先會煲得圓。" : heat === "high" ? "大火可以起滾，但不要一直猛火。" : "熄火就準備收爐。";
      updateCookUi();
    });
  });
  $("#start-cook").addEventListener("click", startCooking);
  $("#finish-cook").addEventListener("click", renderResult);
  updateCookUi();
  setStage("cook", "瓦煲位", "水量火候");
}

function heatLabel() {
  if (heat === "high") return "大火";
  if (heat === "low") return "細火";
  return "未開火";
}

function startCooking() {
  if (cookTimer) return;
  if (heat === "off") {
    coachLine.textContent = "要先開火，茶先會滾。";
    return;
  }
  cookTimer = setInterval(() => {
    cookTime += heat === "high" ? 5 : 3;
    updateCookUi();
  }, 650);
}

function stopCooking() {
  if (cookTimer) clearInterval(cookTimer);
  cookTimer = null;
}

function updateCookUi() {
  $("#water-value") && ($("#water-value").textContent = water);
  $("#heat-value") && ($("#heat-value").textContent = heatLabel());
  $("#time-value") && ($("#time-value").textContent = cookTime);
  $("#water-fill")?.style.setProperty("--fill", `${Math.min(100, (water / activeTea.water) * 100)}%`);
  $("#time-fill")?.style.setProperty("--fill", `${Math.min(100, (cookTime / activeTea.time) * 100)}%`);
  $(".pot-visual")?.style.setProperty("--steam-opacity", heat === "off" ? 0.12 : heat === "high" ? 0.78 : 0.48);
}

function renderResult() {
  stopCooking();
  const waterPenalty = Math.min(35, Math.round(Math.abs(water - activeTea.water) / 60));
  const timePenalty = Math.min(35, Math.round(Math.abs(cookTime - activeTea.time) * 1.4));
  const heatBonus = heat === "low" || heat === "off" ? 12 : 0;
  const ingredientScore = Math.min(100, Math.round((prepScore / (activeTea.ingredients.length * 20)) * 100));
  const total = Math.max(0, Math.min(100, 54 + ingredientScore * 0.34 + heatBonus - waterPenalty - timePenalty));
  const rating = total >= 86 ? "靚" : total >= 68 ? "穩" : total >= 48 ? "再試" : "苦";
  const note =
    total >= 86
      ? "水量準，時間靚，茶味會乾淨有回甘。"
      : total >= 68
        ? "整體不錯，火候再穩一點會更好。"
        : "茶味有點失衡。下次先量水，再慢慢轉細火。";
  $("#result-screen").innerHTML = `
    <div class="result-layout">
      <div class="rating-panel">
        <div class="stamp-block">${rating}</div>
        <div class="rating">${Math.round(total)}</div>
        <p>${activeTea.name}完成。</p>
      </div>
      <div class="result-copy">
        <article>
          <h3>茶姨評語</h3>
          <p>${note}</p>
        </article>
        <article>
          <h3>你的紀錄</h3>
          <p>水量 ${water} ml，目標 ${activeTea.water} ml。時間 ${cookTime} 分鐘，目標 ${activeTea.time} 分鐘。材料處理分 ${ingredientScore}。</p>
        </article>
        <article>
          <h3>小知識</h3>
          <p>${activeTea.story}</p>
        </article>
        <div class="button-row">
          <button class="solid-button" type="button" id="play-again">再煲一杯</button>
          <a class="ghost-button" href="#tea-menu">揀另一款</a>
        </div>
      </div>
    </div>
  `;
  $("#play-again").addEventListener("click", () => selectTea(activeTea.id));
  coachLine.textContent = total >= 86 ? "好茶。可以出杯俾街坊。" : "有進步空間。茶姨等你再試。";
  setStage("result", "出杯評分", "成品");
}

function resetGame() {
  activeTea = null;
  gathered = new Set();
  selectedIngredient = null;
  prepIndex = 0;
  prepScore = 0;
  water = 0;
  heat = "off";
  cookTime = 0;
  stopNeedle();
  stopCooking();
  $("#history-screen").innerHTML = `
    <div class="empty-state">
      <div class="stamp-block">茶</div>
      <p>請先在上方選一款涼茶，茶姨會帶你入材料房。</p>
    </div>
  `;
  coachLine.textContent = "正宗玩法不是亂按。先睇材料，再記火候，最後先收爐。";
  setStage("history", "先揀一款涼茶", "未開始");
}

teaGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-tea]");
  if (card) selectTea(card.dataset.tea);
});

$("#reset-button").addEventListener("click", resetGame);

renderTeaGrid();
renderGuide();
resetGame();
