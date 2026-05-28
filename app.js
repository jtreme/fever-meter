const sampleGame = {
  id: "2026-05-22-gsv-at-ind",
  date: "May 22",
  opponent: "vs Golden State",
  result: "W 90-82",
  label: "May 22, 2026: Valkyries at Fever",
  scoreline: "IND 90 - GSV 82",
  feverMeter: 86,
  commentary:
    "Clark's 33-foot logo three changed the whole feel of the game. Indiana erased the halftime drag, Boston owned the glass, Kelsey lived at the line, and the Fever won through a chippy foul-heavy finish that made it harder to watch.",
  logoAlert: {
    title: "Broadcast-Noted Deep Range",
    copy:
      "Clark made four threes, and Yahoo Sports reported the third-quarter logo three as 33 feet. This is logged as media-reported distance rather than official shot-location tracking.",
  },
  cards: [
    {
      label: "Clark Watch",
      value: "22 / 9",
      meta: "22 points, 9 assists, and 4 made threes in her return from a one-game absence.",
    },
    {
      label: "Logo Three Alert",
      value: "33 ft",
      meta: "The headline bomb, plus two other big Clark threes that kept the arena buzzing.",
      visual: "logo-three",
    },
    {
      label: "Kelsey Heat Check",
      value: "19 pts",
      meta: "Mitchell added 19 points and went a perfect 11-for-11 from the free-throw line.",
      visual: "fire",
    },
    {
      label: "Boston Board Room",
      value: "20 & 16",
      meta: "Boston posted 20 points, 16 rebounds, and 3 assists for another double-double.",
      visual: "boards",
    },
    {
      label: "Supporting Cast Pulse",
      value: "Sophie 11",
      meta: "Sophie Cunningham scored 11 off the bench and made 2 threes; Natasha Howard also reached double figures.",
    },
    {
      label: "Raven Ready",
      value: "7 pts",
      meta: "Johnson gave Indiana 14:36 off the bench, hit a big third-quarter three, and found Boston for a key assist.",
      visual: "raven",
    },
    {
      label: "Fever Vibe Shift",
      value: "29-17 Q3",
      meta: "Indiana trailed 44-37 at halftime, then outscored Golden State by 12 in the third.",
    },
    {
      label: "Clutch Pulse",
      value: "+8 final",
      meta: "Golden State cut the margin to four late, but Indiana closed it out at the foul line.",
    },
  ],
  scoreBreakdown: [
    { label: "Win + close", value: "+22", meta: "90-82 win and late-game control" },
    { label: "Clark engine", value: "+22", meta: "22 points, 9 assists, 4 threes" },
    { label: "Team core", value: "+24", meta: "Boston double-double, Mitchell pressure, Sophie bench pop" },
    { label: "Vibe shift", value: "+16", meta: "29-17 third quarter comeback" },
    { label: "Logo moment", value: "+7", meta: "33-foot reported logo three" },
    { label: "Watch-flow drag", value: "-5", meta: "Fouls, reviews, challenges, and chippiness made it harder to watch" },
  ],
  incidentScore: 8,
  foulContext: [
    { label: "This game", totalFouls: "50", foulsPerTeam: "25.0", note: "24 GSV + 26 IND" },
    { label: "Fever games 2026", totalFouls: "49.3", foulsPerTeam: "24.7", note: "24.0 Fever + 25.3 opp; 6 GP" },
    { label: "2026 WNBA pace", totalFouls: "43.2", foulsPerTeam: "21.6", note: "Freedom-of-movement emphasis" },
    { label: "2021-25 WNBA avg", totalFouls: "35.1", foulsPerTeam: "17.5", note: "Recent historical norm" },
  ],
  foulWatch: {
    title: "To Watch",
    detail:
      "Fever games are running well above the early WNBA whistle pace so far: 49.3 total fouls/game vs 43.2 league pace.",
    tag: "Track again after the next game",
  },
  contactShare: [
    { label: "Clark", value: 8, note: "Rewatch-tagged fouls drawn" },
    { label: "Other Fever", value: 15, note: "All other Indiana players" },
    { label: "GSV offensive", value: 1, note: "Offensive foul by Golden State" },
  ],
  gsvFoulsByQuarter: [
    { label: "Q1", value: 0 },
    { label: "Q2", value: 5 },
    { label: "Q3", value: 9 },
    { label: "Q4", value: 10 },
  ],
  incidents: [
    {
      type: "Technical fouls",
      detail: "End-of-half scuffle: Clark / Janelle Salaun received double technicals.\n\nHull also picked up a technical.",
      impact: "Raises intensity",
    },
    {
      type: "Trash talk",
      detail: "Clark / Salaun kept talking after the double techs.\n\nClark / Tiffany Hayes also exchanged words after the 33-foot logo three tied the game.",
      impact: "Adds rivalry heat",
    },
    {
      type: "Flagrant review",
      detail: "Clark was assessed a Flagrant 1 after review, adding to a game with 2 reviews and 2 challenges.",
      impact: "Hurts flow",
    },
    {
      type: "Whistle drag",
      detail: "50 total fouls, 2 reviews, 2 challenges, 1 defensive tech, multiple player techs, and a Clark flagrant.",
      impact: "High whistle game",
    },
  ],
  missedAssistScore: 4,
  missedAssists: [
    {
      label: "Paint chances",
      value: "2",
      meta: "Billings and Timpson chances that could have turned setup passes into assists.",
    },
    {
      label: "Hull threes",
      value: "2",
      meta: "Two Hull three-point looks that were good enough to tag as missed-assist chances.",
    },
  ],
  turnoverScore: 6,
  turnoverNote:
    "Clark had 6 official turnovers. Four came in Q4, and the most costly was the Flagrant 1 booked as an offensive-foul turnover.",
  turnovers: [
    {
      label: "By quarter",
      value: "0 / 2 / 0 / 4",
      meta: "Turnover trouble was specifically a late-game story.",
    },
    {
      label: "Bad-pass turnovers",
      value: "4",
      meta: "2 in Q2, 2 in Q4. 3 became steals.",
    },
    {
      label: "Teammate drop",
      value: "1",
      meta: "Logged as Clark bad pass; rewatch tags it as a dropped catchable pass.",
    },
    {
      label: "Flagrant TO",
      value: "1",
      meta: "Q4 offensive-foul turnover became a Flagrant 1 after review.",
    },
  ],
  assists: [["Boston", 4], ["Cunningham", 2], ["Johnson", 1], ["Mitchell", 1], ["Hull", 1]],
  shots: [
    {
      player: "Clark",
      label: "33-foot logo three",
      distanceFeet: 33,
      confidence: "media-reported",
      source: "Yahoo Sports report; not official shot-location tracking",
      x: 50,
      y: 25,
    },
  ],
};

const upcomingGame = {
  ...sampleGame,
  id: "2026-05-28-ind-at-gsv",
  date: "May 28",
  opponent: "at Golden State",
  result: "Pregame",
  label: "May 28, 2026: Fever at Valkyries",
  scoreline: "Pregame · 10 PM ET",
  feverMeter: 0,
  commentary:
    "Pregame shell for the rematch. Add box-score stats, rewatch notes, contact tags, missed assists, turnovers, and game-temperature events after the game.",
  cards: [
    {
      label: "Clark Watch",
      value: "TBD",
      meta: "Track points, assists, threes, turnovers, fouls drawn, and deep-shot moments.",
    },
    {
      label: "Logo Three Alert",
      value: "TBD",
      meta: "Log any 30+ foot makes or broadcast-noted deep range shots.",
      visual: "logo-three",
    },
    {
      label: "Kelsey Heat Check",
      value: "TBD",
      meta: "Track Mitchell scoring bursts, threes, and free-throw pressure.",
      visual: "fire",
    },
    {
      label: "Boston Board Room",
      value: "TBD",
      meta: "Track Boston rebounds, paint touches, efficiency, and defensive plays.",
      visual: "boards",
    },
    {
      label: "Supporting Cast Pulse",
      value: "TBD",
      meta: "Log Sophie, Hull, Raven, Myisha, Billings, Timpson, and bench swing moments.",
    },
    {
      label: "Raven Ready",
      value: "TBD",
      meta: "Track Raven's spot minutes, assists, defense, and momentum plays.",
      visual: "raven",
    },
    {
      label: "Fever Vibe Shift",
      value: "TBD",
      meta: "Find the run or quarter that changed the game.",
    },
    {
      label: "Clutch Pulse",
      value: "TBD",
      meta: "Track late-game execution, free throws, turnovers, and stops.",
    },
  ],
  scoreBreakdown: [
    { label: "Result", value: "TBD", meta: "Add win/loss and margin after final" },
    { label: "Clark engine", value: "TBD", meta: "Points, assists, threes, turnovers, and gravity" },
    { label: "Team core", value: "TBD", meta: "Boston, Mitchell, and supporting cast impact" },
    { label: "Vibe shift", value: "TBD", meta: "Runs, momentum swings, and comeback energy" },
    { label: "Logo moment", value: "TBD", meta: "Deep threes or viral shot moments" },
    { label: "Watch-flow drag", value: "TBD", meta: "Fouls, reviews, challenges, and chippiness" },
  ],
  incidentScore: 0,
  foulContext: [
    { label: "This game", totalFouls: "TBD", foulsPerTeam: "TBD", note: "Add final team foul split" },
    { label: "Fever games 2026", totalFouls: "49.3", foulsPerTeam: "24.7", note: "Update after this game" },
    { label: "2026 WNBA pace", totalFouls: "43.2", foulsPerTeam: "21.6", note: "Freedom-of-movement emphasis" },
    { label: "2021-25 WNBA avg", totalFouls: "35.1", foulsPerTeam: "17.5", note: "Recent historical norm" },
  ],
  foulWatch: {
    title: "To Watch",
    detail:
      "Does the rematch keep Fever games above the early WNBA whistle pace? Update total fouls after the final.",
    tag: "Pregame tracker",
  },
  contactShare: [
    { label: "Clark", value: 0, note: "Add rewatch count" },
    { label: "Other Fever", value: 0, note: "Add rewatch count" },
    { label: "GSV offensive", value: 0, note: "Add offensive fouls" },
  ],
  gsvFoulsByQuarter: [
    { label: "Q1", value: 0 },
    { label: "Q2", value: 0 },
    { label: "Q3", value: 0 },
    { label: "Q4", value: 0 },
  ],
  incidents: [
    { type: "Technical fouls", detail: "Add any techs after rewatch.", impact: "TBD" },
    { type: "Trash talk", detail: "Add visible exchanges or broadcast-noted moments.", impact: "TBD" },
    { type: "Reviews", detail: "Track reviews and challenges that slow the game.", impact: "TBD" },
    { type: "Whistle drag", detail: "Add total fouls and stoppage notes.", impact: "TBD" },
  ],
  missedAssistScore: 0,
  missedAssists: [
    { label: "Paint chances", value: "0", meta: "Add missed layup/paint chances from Clark passes." },
    { label: "Open threes", value: "0", meta: "Add clean three-point looks that did not become assists." },
  ],
  turnoverScore: 0,
  turnoverNote: "Add Clark turnover context after the game.",
  turnovers: [
    { label: "By quarter", value: "TBD", meta: "Add turnover timing." },
    { label: "Bad-pass turnovers", value: "TBD", meta: "Separate true bad passes from teammate drops." },
    { label: "Teammate drop", value: "TBD", meta: "Add any catchable-pass turnovers." },
    { label: "Offensive foul TO", value: "TBD", meta: "Add any offensive-foul turnovers." },
  ],
  assists: [["TBD", 0]],
  shots: [],
};

const games = [sampleGame, upcomingGame];

const schemaCards = [
  {
    label: "Box Score Fields",
    value: "Easy",
    meta: "points, assists, rebounds, threes, turnovers, plus/minus, minutes",
  },
  {
    label: "Shot Coordinates",
    value: "Needed",
    meta: "x/y coordinates or distance unlock logo threes and longest bomb.",
  },
  {
    label: "API Boundary",
    value: "Server",
    meta: "Licensed vendor keys should live behind a serverless endpoint.",
  },
  {
    label: "Public Payload",
    value: "JSON",
    meta: "The browser only needs normalized game summaries and shot events.",
  },
];

const gameLog = document.querySelector("#game-log");
const cardGrid = document.querySelector("#card-grid");
const assistList = document.querySelector("#assist-list");
const scoreList = document.querySelector("#score-list");
const incidentList = document.querySelector("#incident-list");
const incidentScore = document.querySelector("#incident-score");
const foulContextList = document.querySelector("#foul-context-list");
const missedAssistList = document.querySelector("#missed-assist-list");
const missedAssistScore = document.querySelector("#missed-assist-score");
const turnoverList = document.querySelector("#turnover-list");
const turnoverScore = document.querySelector("#turnover-score");
const turnoverNote = document.querySelector("#turnover-note");
const shotDots = document.querySelector("#shot-dots");
const longestShotLabel = document.querySelector("#longest-shot-label");
const distanceBeam = document.querySelector("#distance-beam");
const distanceBeamLabel = document.querySelector("#distance-beam-label");
const viewButtons = document.querySelectorAll("[data-view]");
const localDataKey = "fever-meter-game-json";
let activeGame = games[0];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatJson(game) {
  return JSON.stringify(game, null, 2);
}

function renderGameLog() {
  gameLog.innerHTML = games
    .map(
      (game) => `
        <button class="game-log__item${game.id === activeGame.id ? " is-active" : ""}" type="button" data-game-id="${escapeHtml(game.id)}">
          <span>${escapeHtml(game.date)}</span>
          <strong>${escapeHtml(game.opponent)}</strong>
          <em>${escapeHtml(game.result)}</em>
        </button>
      `,
    )
    .join("");
}

function validateGame(game) {
  if (!game || typeof game !== "object" || Array.isArray(game)) {
    throw new Error("Game data must be a JSON object.");
  }
  if (!Array.isArray(game.cards) || game.cards.length === 0) {
    throw new Error("Game data needs at least one card.");
  }
  if (!Array.isArray(game.assists) || game.assists.length === 0) {
    throw new Error("Game data needs at least one assist row.");
  }
  if (!Number.isFinite(Number(game.feverMeter))) {
    throw new Error("feverMeter must be a number.");
  }
}

function normalizeGame(game) {
  validateGame(game);
  return {
    id: String(game.id || "manual-game"),
    date: String(game.date || "Manual"),
    opponent: String(game.opponent || "Manual game"),
    result: String(game.result || game.scoreline || "Score TBD"),
    label: String(game.label || "Manual Game"),
    scoreline: String(game.scoreline || "Score TBD"),
    feverMeter: Math.max(0, Math.min(100, Number(game.feverMeter))),
    commentary: String(game.commentary || "No commentary yet."),
    logoAlert: {
      title: String(game.logoAlert?.title || "Logo Three Alert"),
      copy: String(game.logoAlert?.copy || "No deep-three alert entered."),
    },
    cards: game.cards.map((card) => ({
      label: String(card.label || "Card"),
      value: String(card.value || "-"),
      meta: String(card.meta || ""),
      visual: String(card.visual || ""),
    })),
    scoreBreakdown: Array.isArray(game.scoreBreakdown)
      ? game.scoreBreakdown.map((item) => ({
          label: String(item.label || "Score item"),
          value: String(item.value || "+0"),
          meta: String(item.meta || ""),
        }))
      : [],
    incidentScore: Math.max(0, Math.min(10, Number(game.incidentScore) || 0)),
    foulContext: Array.isArray(game.foulContext)
      ? game.foulContext.map((item) => ({
          label: String(item.label || "Foul context"),
          totalFouls: String(item.totalFouls || "0"),
          foulsPerTeam: String(item.foulsPerTeam || "0"),
          note: String(item.note || ""),
        }))
      : [],
    foulWatch: {
      title: String(game.foulWatch?.title || "To Watch"),
      detail: String(game.foulWatch?.detail || "No foul watch note entered yet."),
      tag: String(game.foulWatch?.tag || "Manual tracker"),
    },
    contactShare: Array.isArray(game.contactShare)
      ? game.contactShare.map((item) => ({
          label: String(item.label || "Contact"),
          value: Math.max(0, Number(item.value) || 0),
          note: String(item.note || ""),
        }))
      : [],
    gsvFoulsByQuarter: Array.isArray(game.gsvFoulsByQuarter)
      ? game.gsvFoulsByQuarter.map((item) => ({
          label: String(item.label || "Q"),
          value: Math.max(0, Number(item.value) || 0),
        }))
      : [],
    incidents: Array.isArray(game.incidents)
      ? game.incidents.map((item) => ({
          type: String(item.type || "Incident"),
          detail: String(item.detail || ""),
          impact: String(item.impact || "Context"),
        }))
      : [],
    missedAssistScore: Math.max(0, Number(game.missedAssistScore) || 0),
    missedAssists: Array.isArray(game.missedAssists)
      ? game.missedAssists.map((item) => ({
          label: String(item.label || "Missed assist"),
          value: String(item.value || "0"),
          meta: String(item.meta || ""),
        }))
      : [],
    turnoverScore: Math.max(0, Number(game.turnoverScore) || 0),
    turnoverNote: String(game.turnoverNote || ""),
    turnovers: Array.isArray(game.turnovers)
      ? game.turnovers.map((item) => ({
          label: String(item.label || "Turnover type"),
          value: String(item.value || "Tag"),
          meta: String(item.meta || ""),
        }))
      : [],
    assists: game.assists.map(([player, total]) => [String(player), Number(total) || 0]),
    shots: Array.isArray(game.shots)
      ? game.shots.map((shot) => ({
          player: String(shot.player || "Shot"),
          label: String(shot.label || shot.distanceFeet || "Deep range"),
          distanceFeet: Number.isFinite(Number(shot.distanceFeet))
            ? Number(shot.distanceFeet)
            : null,
          confidence: String(shot.confidence || "fan-observed"),
          source: String(shot.source || "Manual entry"),
          x: Math.max(4, Math.min(92, Number(shot.x) || 50)),
          y: Math.max(4, Math.min(86, Number(shot.y) || 28)),
        }))
      : [],
  };
}

function renderCards(cards) {
  cardGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="stat-card">
          ${card.visual ? `<div class="stat-card__visual stat-card__visual--${escapeHtml(card.visual)}"></div>` : ""}
          <div class="stat-card__label">${escapeHtml(card.label)}</div>
          <div class="stat-card__value">${escapeHtml(card.value)}</div>
          <div class="stat-card__meta">${escapeHtml(card.meta)}</div>
        </article>
      `,
    )
    .join("");
}

function renderScoreBreakdown(items) {
  scoreList.innerHTML = items
    .map(
      (item) => `
        <div class="score-item">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <span>${escapeHtml(item.meta)}</span>
        </div>
      `,
    )
    .join("");
}

function renderIncidents(game) {
  incidentScore.textContent = `${game.incidentScore}/10`;
  const foulRows = game.foulContext;
  const maxTotalFouls = Math.max(...foulRows.map((item) => Number(item.totalFouls) || 0), 50);
  const reference = Number(foulRows.find((item) => item.label === "2026 WNBA pace")?.totalFouls) || 43.2;
  const referencePosition = Math.min(100, Math.max(0, (reference / maxTotalFouls) * 100));
  const barClasses = ["is-hot", "is-fever", "is-current", "is-history"];
  const rawTotalContact = game.contactShare.reduce((sum, item) => sum + item.value, 0);
  const totalContact = rawTotalContact || 1;
  const clarkContact = game.contactShare.find((item) => item.label === "Clark")?.value || 0;
  const clarkContactPct = Math.round((clarkContact / totalContact) * 100);
  const maxQuarterFouls = Math.max(...game.gsvFoulsByQuarter.map((item) => item.value), 1);
  const secondHalfFouls = game.gsvFoulsByQuarter
    .filter((item) => item.label === "Q3" || item.label === "Q4")
    .reduce((sum, item) => sum + item.value, 0);
  const totalGsvFouls = game.gsvFoulsByQuarter.reduce((sum, item) => sum + item.value, 0);
  const secondHalfPct = totalGsvFouls ? Math.round((secondHalfFouls / totalGsvFouls) * 100) : 0;

  foulContextList.innerHTML = `
    <div class="contact-visuals">
      <div class="contact-share" style="--clark-share: ${clarkContactPct * 3.6}deg">
        <div class="contact-share__content">
          <h4>Clark drew ${escapeHtml(clarkContact)} fouls</h4>
        </div>
        <div class="contact-share__ring">
          <strong>${clarkContactPct}%</strong>
          <span>${escapeHtml(clarkContact)} of ${escapeHtml(rawTotalContact)}</span>
        </div>
        <div class="contact-share__breakdown">
          <p class="mini-label">Times Players Were Fouled By GSV</p>
          <div class="contact-legend">
            ${game.contactShare
              .map(
                (item) => `
                  <span>
                    <i aria-hidden="true"></i>
                    <strong>${escapeHtml(item.value)}</strong>
                    ${escapeHtml(item.label)}
                  </span>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="quarter-fouls">
        <div class="quarter-fouls__header">
          <p class="mini-label">GSV Fouls By Quarter</p>
          <h4>${escapeHtml(secondHalfPct)}% after halftime</h4>
        </div>
        <div class="quarter-bars">
          ${game.gsvFoulsByQuarter
            .map((item) => {
              const height = Math.round((item.value / maxQuarterFouls) * 100);
              return `
                <div class="quarter-bar">
                  <strong>${escapeHtml(item.value)}</strong>
                  <span style="--h: ${height}%"></span>
                  <em>${escapeHtml(item.label)}</em>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
    <div class="foul-bar-chart" style="--reference: ${referencePosition}%">
      <div class="foul-bar-chart__title">
        <strong>Total fouls</strong>
        <span>Bar length shows combined team fouls</span>
      </div>
      <div class="foul-bar-chart__axis" aria-hidden="true">
        <span>0</span>
        <span>10</span>
        <span>20</span>
        <span>30</span>
        <span>40</span>
        <span>50</span>
      </div>
      <div class="foul-bar-chart__reference" aria-hidden="true">
        <span>2026 pace</span>
      </div>
      ${foulRows
        .map((item, index) => {
          const total = Number(item.totalFouls) || 0;
          const width = Math.min(100, Math.max(0, (total / maxTotalFouls) * 100));
          return `
            <div class="foul-bar-row ${barClasses[index] || ""}">
              <span class="foul-bar-row__label">${escapeHtml(item.label)}</span>
              <div class="foul-bar-row__track">
                <span class="foul-bar-row__fill" style="--bar: ${width}%"></span>
              </div>
              <strong>${escapeHtml(item.totalFouls)}</strong>
            </div>
          `;
        })
        .join("")}
    </div>
    <table class="foul-context-table">
      <thead>
        <tr>
          <th>Context</th>
          <th>Total fouls</th>
          <th>Per team</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        ${game.foulContext
          .map(
            (item) => `
              <tr>
                <td>${escapeHtml(item.label)}</td>
                <td>${escapeHtml(item.totalFouls)}</td>
                <td>${escapeHtml(item.foulsPerTeam)}</td>
                <td>${escapeHtml(item.note)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
    <div class="foul-watch">
      <div>
        <strong>${escapeHtml(game.foulWatch.title)}</strong>
        <span>${escapeHtml(game.foulWatch.detail)}</span>
      </div>
      <em>${escapeHtml(game.foulWatch.tag)}</em>
    </div>
  `;
  incidentList.innerHTML = game.incidents
    .map(
      (item) => `
        <div class="incident-item">
          <strong>${escapeHtml(item.type)}</strong>
          <span>${escapeHtml(item.detail)}</span>
          <em>${escapeHtml(item.impact)}</em>
        </div>
      `,
    )
    .join("");
}

function renderMissedAssists(game) {
  missedAssistScore.textContent = `${game.missedAssistScore} missed`;
  missedAssistList.innerHTML = game.missedAssists
    .map(
      (item) => `
        <div class="missed-assist-item">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <span>${escapeHtml(item.meta)}</span>
        </div>
      `,
    )
    .join("");
}

function renderTurnovers(game) {
  turnoverScore.textContent = `${game.turnoverScore} official`;
  turnoverNote.textContent = game.turnoverNote;
  turnoverList.innerHTML = game.turnovers
    .map(
      (item) => `
        <div class="turnover-item">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <span>${escapeHtml(item.meta)}</span>
        </div>
      `,
    )
    .join("");
}

function renderAssists(assists) {
  const max = Math.max(...assists.map(([, total]) => total));
  assistList.innerHTML = assists
    .map(([player, total]) => {
      const width = max > 0 ? `${Math.round((total / max) * 100)}%` : "0%";
      return `
        <div class="assist-row">
          <span>${escapeHtml(player)}</span>
          <div class="assist-row__bar"><span style="--w: ${width}"></span></div>
          <strong>${escapeHtml(total)}</strong>
        </div>
      `;
    })
    .join("");
}

function confidenceLabel(confidence) {
  if (confidence === "measured") return "Measured";
  if (confidence === "media-reported") return "Reported";
  if (confidence === "broadcast-noted") return "Broadcast";
  return "Observed";
}

function renderShots(shots) {
  const measuredShots = shots.filter((shot) => Number.isFinite(shot.distanceFeet));
  const longestShot = measuredShots.sort((a, b) => b.distanceFeet - a.distanceFeet)[0];
  const displayShot = longestShot || shots[0];

  longestShotLabel.textContent = displayShot
    ? `${displayShot.label} · ${confidenceLabel(displayShot.confidence)}`
    : "No shot notes";

  if (displayShot && Number.isFinite(displayShot.distanceFeet)) {
    const length = Math.max(150, Math.min(330, displayShot.distanceFeet * 9.4));
    distanceBeam.hidden = false;
    distanceBeam.style.setProperty("--beam-length", `${length}px`);
    distanceBeamLabel.textContent = "";
  } else {
    distanceBeam.hidden = true;
  }

  const rimY = 91;
  const halfY = 8;
  const feetPerPercent = (41.75 - 0) / (rimY - halfY);

  shotDots.innerHTML = shots
    .map((shot) => {
      const y = Number.isFinite(shot.distanceFeet)
        ? rimY - shot.distanceFeet / feetPerPercent
        : shot.y;
      const deepClass =
        ["measured", "media-reported"].includes(shot.confidence) && shot.distanceFeet >= 30
          ? " shot-dot--deep"
          : shot.confidence === "broadcast-noted"
            ? " shot-dot--noted"
            : "";
      const label = `${shot.player} ${shot.label}`;
      const title = `${label} (${confidenceLabel(shot.confidence)}: ${shot.source})`;
      return `
        <div
          class="shot-dot${deepClass}"
          style="--x: ${shot.x}%; --y: ${Math.max(4, Math.min(86, y))}%"
          title="${escapeHtml(title)}"
        >
          <span>${escapeHtml(label)}</span>
        </div>
      `;
    })
    .join("");
}

function renderGame(game) {
  document.querySelector("#game-label").textContent = game.label;
  document.querySelector("#scoreline").textContent = game.scoreline;
  document.querySelector("#meter-score").textContent = game.feverMeter;
  document.querySelector(".meter-ring").style.setProperty("--score", game.feverMeter);
  document.querySelector("#meter-copy").textContent = game.commentary;
  document.querySelector("#score-formula-title").textContent =
    game.feverMeter > 0 ? `How The Meter Hits ${game.feverMeter}` : "Meter Formula Placeholder";
  renderCards(game.cards);
  renderScoreBreakdown(game.scoreBreakdown);
  renderIncidents(game);
  renderMissedAssists(game);
  renderTurnovers(game);
  renderAssists(game.assists);
  renderShots(game.shots);
}

function setSampleView() {
  renderGame(activeGame);
  renderGameLog();
}

function setSchemaView() {
  renderCards(schemaCards);
  renderAssists([
    ["Box score", 7],
    ["Play-by-play", 5],
    ["Shot x/y", 4],
    ["Commentary", 2],
  ]);
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    if (button.dataset.view === "schema") {
      setSchemaView();
    } else {
      setSampleView();
    }
  });
});

gameLog.addEventListener("click", (event) => {
  const button = event.target.closest("[data-game-id]");
  if (!button) return;
  const nextGame = games.find((game) => game.id === button.dataset.gameId);
  if (!nextGame) return;
  activeGame = nextGame;
  setSampleView();
});

try {
  const savedGame = localStorage.getItem(localDataKey);
  if (savedGame) {
    games[0] = normalizeGame({ ...games[0], ...JSON.parse(savedGame) });
    activeGame = games[0];
  }
} catch {
  activeGame = games[0];
  localStorage.removeItem(localDataKey);
}

setSampleView();
