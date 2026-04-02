// Theme — apply saved preference immediately to avoid flash
(function() {
  const saved = localStorage.getItem("ds_theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
})();

// NHL Players — 2024-25 final regular season stats (Goals, Assists, Points)
const PLAYERS = [
  { name: "Nikita Kucherov", team: "TBL", position: "RW", goals: 37, assists: 84, points: 121 },
  { name: "Nathan MacKinnon", team: "COL", position: "C", goals: 32, assists: 84, points: 116 },
  { name: "Leon Draisaitl", team: "EDM", position: "C", goals: 52, assists: 54, points: 106 },
  { name: "David Pastrnak", team: "BOS", position: "RW", goals: 43, assists: 63, points: 106 },
  { name: "Mitch Marner", team: "TOR", position: "RW", goals: 27, assists: 75, points: 102 },
  { name: "Connor McDavid", team: "EDM", position: "C", goals: 26, assists: 74, points: 100 },
  { name: "Kyle Connor", team: "WPG", position: "LW", goals: 41, assists: 56, points: 97 },
  { name: "Jack Eichel", team: "VGK", position: "C", goals: 28, assists: 66, points: 94 },
  { name: "Cale Makar", team: "COL", position: "D", goals: 30, assists: 62, points: 92 },
  { name: "Sidney Crosby", team: "PIT", position: "C", goals: 33, assists: 58, points: 91 },
  { name: "Brandon Hagel", team: "TBL", position: "LW", goals: 35, assists: 55, points: 90 },
  { name: "Clayton Keller", team: "UTA", position: "RW", goals: 30, assists: 60, points: 90 },
  { name: "Artemi Panarin", team: "NYR", position: "LW", goals: 37, assists: 52, points: 89 },
  { name: "Nick Suzuki", team: "MTL", position: "C", goals: 30, assists: 59, points: 89 },
  { name: "Mikko Rantanen", team: "DAL", position: "RW", goals: 32, assists: 56, points: 88 },
  { name: "Jesper Bratt", team: "NJD", position: "LW", goals: 21, assists: 67, points: 88 },
  { name: "Mark Scheifele", team: "WPG", position: "C", goals: 39, assists: 48, points: 87 },
  { name: "William Nylander", team: "TOR", position: "RW", goals: 45, assists: 39, points: 84 },
  { name: "Martin Necas", team: "COL", position: "C", goals: 27, assists: 56, points: 83 },
  { name: "Brayden Point", team: "TBL", position: "C", goals: 42, assists: 40, points: 82 },
  { name: "Matt Duchene", team: "DAL", position: "C", goals: 30, assists: 52, points: 82 },
  { name: "Dylan Strome", team: "WSH", position: "C", goals: 29, assists: 53, points: 82 },
  { name: "Zach Werenski", team: "CBJ", position: "D", goals: 23, assists: 59, points: 82 },
  { name: "Sam Reinhart", team: "FLA", position: "C", goals: 39, assists: 42, points: 81 },
  { name: "Robert Thomas", team: "STL", position: "C", goals: 21, assists: 60, points: 81 },
  { name: "Jake Guentzel", team: "TBL", position: "LW", goals: 41, assists: 39, points: 80 },
  { name: "Jason Robertson", team: "DAL", position: "LW", goals: 35, assists: 45, points: 80 },
  { name: "Lucas Raymond", team: "DET", position: "LW", goals: 27, assists: 53, points: 80 },
  { name: "Tim Stutzle", team: "OTT", position: "LW", goals: 24, assists: 55, points: 79 },
  { name: "Auston Matthews", team: "TOR", position: "C", goals: 33, assists: 45, points: 78 },
  { name: "Filip Forsberg", team: "NSH", position: "LW", goals: 31, assists: 45, points: 76 },
  { name: "Travis Konecny", team: "PHI", position: "RW", goals: 24, assists: 52, points: 76 },
  { name: "Quinn Hughes", team: "VAN", position: "D", goals: 16, assists: 60, points: 76 },
  { name: "John Tavares", team: "TOR", position: "C", goals: 38, assists: 36, points: 74 },
  { name: "Kirill Marchenko", team: "CBJ", position: "RW", goals: 31, assists: 43, points: 74 },
  { name: "Sebastian Aho", team: "CAR", position: "C", goals: 29, assists: 45, points: 74 },
  { name: "Alexander Ovechkin", team: "WSH", position: "LW", goals: 44, assists: 29, points: 73 },
  { name: "Adrian Kempe", team: "LAK", position: "LW", goals: 35, assists: 38, points: 73 },
  { name: "Matt Boldy", team: "MIN", position: "LW", goals: 27, assists: 46, points: 73 },
  { name: "Tage Thompson", team: "BUF", position: "C", goals: 44, assists: 28, points: 72 },
  { name: "Wyatt Johnston", team: "DAL", position: "C", goals: 33, assists: 38, points: 71 },
  { name: "Aleksander Barkov", team: "FLA", position: "C", goals: 20, assists: 51, points: 71 },
  { name: "Alex DeBrincat", team: "DET", position: "LW", goals: 39, assists: 31, points: 70 },
  { name: "Cole Caufield", team: "MTL", position: "RW", goals: 37, assists: 33, points: 70 },
  { name: "Jordan Kyrou", team: "STL", position: "C", goals: 36, assists: 34, points: 70 },
  { name: "Rickard Rakell", team: "PIT", position: "RW", goals: 35, assists: 35, points: 70 },
  { name: "Dylan Larkin", team: "DET", position: "C", goals: 30, assists: 40, points: 70 },
  { name: "Jack Hughes", team: "NJD", position: "C", goals: 27, assists: 43, points: 70 },
  { name: "J.T. Miller", team: "NYR", position: "C", goals: 22, assists: 48, points: 70 },
  { name: "Nico Hischier", team: "NJD", position: "C", goals: 35, assists: 34, points: 69 },
  { name: "JJ Peterka", team: "BUF", position: "RW", goals: 27, assists: 41, points: 68 },
  { name: "Drake Batherson", team: "OTT", position: "RW", goals: 26, assists: 42, points: 68 },
  { name: "Rasmus Dahlin", team: "BUF", position: "D", goals: 17, assists: 51, points: 68 },
  { name: "Alex Tuch", team: "BUF", position: "RW", goals: 36, assists: 31, points: 67 },
  { name: "Nazem Kadri", team: "CGY", position: "C", goals: 35, assists: 32, points: 67 },
  { name: "Seth Jarvis", team: "CAR", position: "RW", goals: 32, assists: 35, points: 67 },
  { name: "Roope Hintz", team: "DAL", position: "C", goals: 28, assists: 39, points: 67 },
  { name: "Connor Bedard", team: "CHI", position: "C", goals: 23, assists: 44, points: 67 },
  { name: "Anze Kopitar", team: "LAK", position: "C", goals: 21, assists: 46, points: 67 },
  { name: "Mark Stone", team: "VGK", position: "RW", goals: 19, assists: 48, points: 67 },
  { name: "Evan Bouchard", team: "EDM", position: "D", goals: 14, assists: 53, points: 67 },
  { name: "Alexei Protas", team: "WSH", position: "C", goals: 30, assists: 36, points: 66 },
  { name: "Mikael Granlund", team: "DAL", position: "C", goals: 22, assists: 44, points: 66 },
  { name: "Pierre-Luc Dubois", team: "WSH", position: "LW", goals: 20, assists: 46, points: 66 },
  { name: "Victor Hedman", team: "TBL", position: "D", goals: 15, assists: 51, points: 66 },
  { name: "Lane Hutson", team: "MTL", position: "D", goals: 6, assists: 60, points: 66 },
  { name: "Tom Wilson", team: "WSH", position: "RW", goals: 33, assists: 32, points: 65 },
  { name: "Bryan Rust", team: "PIT", position: "RW", goals: 31, assists: 34, points: 65 },
  { name: "Logan Cooley", team: "UTA", position: "C", goals: 25, assists: 40, points: 65 },
  { name: "Dylan Holloway", team: "STL", position: "LW", goals: 26, assists: 37, points: 63 },
  { name: "Matvei Michkov", team: "PHI", position: "RW", goals: 26, assists: 37, points: 63 },
  { name: "Macklin Celebrini", team: "SJS", position: "C", goals: 25, assists: 38, points: 63 },
  { name: "Nikolaj Ehlers", team: "WPG", position: "LW", goals: 24, assists: 39, points: 63 },
  { name: "Nick Schmaltz", team: "UTA", position: "C", goals: 20, assists: 43, points: 63 },
  { name: "Ryan Donato", team: "CHI", position: "C", goals: 31, assists: 31, points: 62 },
  { name: "Jonathan Huberdeau", team: "CGY", position: "LW", goals: 28, assists: 34, points: 62 },
  { name: "Mika Zibanejad", team: "NYR", position: "C", goals: 20, assists: 42, points: 62 },
  { name: "Josh Morrissey", team: "WPG", position: "D", goals: 14, assists: 48, points: 62 },
  { name: "Tomas Hertl", team: "VGK", position: "C", goals: 32, assists: 29, points: 61 },
  { name: "Gabriel Vilardi", team: "WPG", position: "C", goals: 27, assists: 34, points: 61 },
];

// Seeded random based on date — same player for everyone each day
function getDayIndex() {
  const now = new Date();
  const start = new Date(2025, 0, 1);
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diff;
}

function seededShuffle(arr, seed) {
  const copy = [...arr];
  let s = seed;
  for (let i = copy.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getTodaysPlayer() {
  const dayIndex = getDayIndex();
  const shuffled = seededShuffle(PLAYERS, dayIndex + 7919);
  return { player: shuffled[0], dayNumber: dayIndex + 1 };
}

function getGameDateKey() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
}

// State
let submitted = false;

// Elements
const welcomeModal = document.getElementById("welcome-modal");
const welcomeOverlay = document.getElementById("welcome-overlay");
const welcomeNew = document.getElementById("welcome-new");
const welcomeReturning = document.getElementById("welcome-returning");
const welcomePlayed = document.getElementById("welcome-played");
const welcomeDailyLabel = document.getElementById("welcome-daily-label");
const welcomePlayer = document.getElementById("welcome-player");
const welcomePlayedLabel = document.getElementById("welcome-played-label");
const welcomeScore = document.getElementById("welcome-score");
const welcomeScoreLabel = document.getElementById("welcome-score-label");
const gameScreen = document.getElementById("game-screen");
const resultModal = document.getElementById("result-modal");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const teamBadge = document.getElementById("team-badge");
const positionBadge = document.getElementById("position-badge");
const playerNameEl = document.getElementById("player-name");
const seasonLabel = document.getElementById("season-label");
const gameNumber = document.getElementById("game-number");
const submitBtn = document.getElementById("submit-btn");
const copyBtn = document.getElementById("copy-btn");
const challengeBtn = document.getElementById("challenge-btn");
const modalCopiedMsg = document.getElementById("modal-copied-msg");
const copiedMsg = document.getElementById("copied-msg");
const playCta = document.getElementById("play-cta");
const shareBar = document.getElementById("share-bar");
const viewResultBtn = document.getElementById("view-result-btn");
const shareCopyBtn = document.getElementById("share-copy-btn");
const shareChallengeBtn = document.getElementById("share-challenge-btn");
const currentStreakEl = document.getElementById("current-streak");
const currentStreakLabel = document.getElementById("current-streak-label");
const bestStreakEl = document.getElementById("best-streak");
const yesterdayScoreEl = document.getElementById("yesterday-score");

const goalsSlider = document.getElementById("goals");
const assistsSlider = document.getElementById("assists");
const goalsValue = document.getElementById("goals-value");
const assistsValue = document.getElementById("assists-value");
const pointsValue = document.getElementById("points-value");

function updatePoints() {
  pointsValue.textContent = parseInt(goalsSlider.value) + parseInt(assistsSlider.value);
}

// Slider updates — both sliders update their own display + derived points
goalsSlider.addEventListener("input", () => { goalsValue.textContent = goalsSlider.value; updatePoints(); });
assistsSlider.addEventListener("input", () => { assistsValue.textContent = assistsSlider.value; updatePoints(); });

// Haptic feedback on slider change
[goalsSlider, assistsSlider].forEach(slider => {
  slider.addEventListener("input", () => {
    if (navigator.vibrate) navigator.vibrate(5);
  });
});

// Compute yesterday's date key for comparison
function getYesterdayDateKey() {
  const y = new Date();
  y.setDate(y.getDate() - 1);
  return `${y.getFullYear()}-${y.getMonth()}-${y.getDate()}`;
}

function loadUserStats() {
  const streak = parseInt(localStorage.getItem("ds_streak") || "0");
  const best = parseInt(localStorage.getItem("ds_bestStreak") || "0");

  // Current streak display
  if (streak === 0) {
    currentStreakEl.textContent = "0";
    currentStreakLabel.textContent = "Start your streak today";
  } else {
    currentStreakEl.textContent = streak;
    currentStreakLabel.textContent = "Streak";
  }

  // Best streak
  bestStreakEl.textContent = best;

  // Yesterday's score — only show if last played was yesterday
  const lastPlayed = localStorage.getItem("ds_lastPlayed");
  const yesterdayKey = getYesterdayDateKey();
  if (lastPlayed === yesterdayKey) {
    const lastResult = JSON.parse(localStorage.getItem("ds_lastResult") || "null");
    yesterdayScoreEl.textContent = lastResult ? lastResult.score : "\u2014";
  } else {
    yesterdayScoreEl.textContent = "\u2014";
  }
}

// Init game
function init() {
  const { player, dayNumber } = getTodaysPlayer();
  const dateKey = getGameDateKey();

  loadUserStats();

  // Always set up the game screen with today's player
  gameNumber.textContent = `#${dayNumber}`;
  playerNameEl.textContent = player.name;
  positionBadge.textContent = player.position;
  teamBadge.textContent = player.team;
  seasonLabel.textContent = "2024\u201325 Season Stats";

  // 3-state detection
  const lastPlayed = localStorage.getItem("ds_lastPlayed");
  const lastResult = localStorage.getItem("ds_lastResult");
  const isPlayedToday = lastPlayed === dateKey;
  const isReturning = lastPlayed != null || lastResult != null;

  if (isPlayedToday) {
    // State 3: Already played today — show score recap
    const data = JSON.parse(lastResult || "null");
    welcomeNew.classList.add("hidden");
    welcomePlayed.classList.remove("hidden");
    welcomePlayedLabel.textContent = `Daily StatLine #${dayNumber}`;
    if (data && data.score != null) {
      welcomeScore.textContent = `${data.score} / 100`;
      welcomeScoreLabel.textContent = getScoreLabel(data.score);
    }
    playCta.textContent = "View Result";
    showSavedResult();
  } else if (isReturning) {
    // State 2: Returning user, not played today — daily challenge
    welcomeNew.classList.add("hidden");
    welcomeReturning.classList.remove("hidden");
    welcomeDailyLabel.textContent = `Daily StatLine #${dayNumber}`;
    welcomePlayer.textContent = player.name;
  }
  // else: State 1 — first-time user, full onboarding (default HTML state)
}

function submitGuess() {
  if (submitted) return;
  submitted = true;

  const { player, dayNumber } = getTodaysPlayer();
  const goalsGuess = parseInt(goalsSlider.value);
  const assistsGuess = parseInt(assistsSlider.value);
  const guesses = {
    goals: goalsGuess,
    assists: assistsGuess,
    points: goalsGuess + assistsGuess,
  };

  const results = calculateResults(player, guesses);
  const score = calculateScore(player, guesses);

  console.log("PLAYED");

  // Save
  const dateKey = getGameDateKey();
  localStorage.setItem("ds_lastPlayed", dateKey);
  localStorage.setItem("ds_lastResult", JSON.stringify({
    player: player.name,
    team: player.team,
    dayNumber,
    guesses,
    actual: { goals: player.goals, assists: player.assists, points: player.points },
    results,
    score,
  }));

  // Update streak and best streak
  let streak = parseInt(localStorage.getItem("ds_streak") || "0");
  if (score >= 50) {
    streak++;
  } else {
    streak = 0;
  }
  localStorage.setItem("ds_streak", streak.toString());

  const best = parseInt(localStorage.getItem("ds_bestStreak") || "0");
  if (streak > best) {
    localStorage.setItem("ds_bestStreak", streak.toString());
  }

  showResult(player, guesses, results, score, dayNumber);
}

function calculateResults(player, guesses) {
  // Goals: exact or within ±3 is close
  // Assists: exact or within ±5 is close
  return {
    goals: getMatch(guesses.goals, player.goals, 3),
    assists: getMatch(guesses.assists, player.assists, 5),
  };
}

function getMatch(guess, actual, closeThreshold) {
  if (guess === actual) return "exact";
  if (Math.abs(guess - actual) <= closeThreshold) return "close";
  return "miss";
}

function calculateScore(player, guesses) {
  // Score = 50 pts for Goals accuracy + 50 pts for Assists accuracy
  // Each stat: 0 diff = full 50, then linear falloff to 0 at max range
  // Goals max range = 70, Assists max range = 100
  const goalsDiff = Math.abs(guesses.goals - player.goals);
  const goalsScore = Math.max(0, Math.round(50 * (1 - goalsDiff / 35)));

  const assistsDiff = Math.abs(guesses.assists - player.assists);
  const assistsScore = Math.max(0, Math.round(50 * (1 - assistsDiff / 50)));

  return Math.min(goalsScore + assistsScore, 100);
}

function getScoreLabel(score) {
  if (score >= 90) return "Elite";
  if (score >= 75) return "Sharp";
  if (score >= 50) return "Solid";
  if (score >= 25) return "Casual Fan";
  return "Benchwarmer";
}

function getReaction(score) {
  if (score >= 90) return "Too easy.";
  if (score >= 75) return "Almost had it.";
  if (score >= 50) return "Not bad.";
  if (score >= 25) return "That was tougher than I thought.";
  return "I have no idea what I'm doing.";
}

function getPlayerLine(name, score) {
  if (score >= 90) return `${name} was light work.`;
  if (score >= 75) return `Almost had ${name}.`;
  if (score >= 50) return `${name} got me a bit.`;
  if (score >= 25) return `${name} got me.`;
  return `I had no shot with ${name}.`;
}

function getEmoji(result) {
  if (result === "exact") return "🟩";
  if (result === "close") return "🟨";
  return "🟥";
}

// Lock sliders and show share bar (used after submit and on revisit)
function lockGame(guesses) {
  goalsSlider.value = guesses.goals;
  goalsSlider.disabled = true;
  goalsValue.textContent = guesses.goals;

  assistsSlider.value = guesses.assists;
  assistsSlider.disabled = true;
  assistsValue.textContent = guesses.assists;

  const pts = guesses.points != null ? guesses.points : guesses.goals + guesses.assists;
  pointsValue.textContent = pts;

  submitBtn.textContent = "Played Today";
  submitBtn.disabled = true;

  shareBar.classList.remove("hidden");
}

// Populate modal content
function populateModal(player, guesses, results, score, dayNumber) {
  document.getElementById("player-reveal").textContent = `${player.name} — ${player.team}`;

  const guessedPoints = guesses.points != null ? guesses.points : guesses.goals + guesses.assists;
  const stats = [
    { name: "Goals", guess: guesses.goals, actual: player.goals, result: results.goals },
    { name: "Assists", guess: guesses.assists, actual: player.assists, result: results.assists },
    { name: "Points", guess: guessedPoints, actual: player.points, result: "info" },
  ];

  document.getElementById("result-stats").innerHTML = stats.map(s => `
    <div class="stat-row">
      <span class="stat-row-name">${s.name}</span>
      <div class="stat-row-values">
        <span class="stat-guess ${s.result}">${s.guess}</span>
        <span class="stat-arrow">&rarr;</span>
        <span class="stat-actual-val">${s.actual}</span>
      </div>
    </div>
  `).join("");

  const emojiStr = `${getEmoji(results.goals)}${getEmoji(results.assists)}`;
  document.getElementById("result-emoji").textContent = emojiStr;
  document.getElementById("result-score").innerHTML = `${score} <span>/ 100</span>`;
  document.getElementById("result-score-label").textContent = getScoreLabel(score);

  const reaction = getReaction(score);
  document.getElementById("result-reaction").textContent = reaction;

  // Build share text
  const gDiff = Math.abs(guesses.goals - player.goals);
  const aDiff = Math.abs(guesses.assists - player.assists);
  const pDiff = Math.abs(guessedPoints - player.points);

  const shareText = [
    `Daily StatLine NHL #${dayNumber}`,
    ``,
    player.name,
    ``,
    `G: +${gDiff}`,
    `A: +${aDiff}`,
    `P: +${pDiff}`,
    ``,
    `Score: ${score} ${emojiStr}`,
    ``,
    reaction,
    ``,
    `Can you beat this?`,
    window.location.origin,
  ].join("\n");

  function copyAndFlash(msgEl) {
    navigator.clipboard.writeText(shareText).then(() => {
      msgEl.classList.remove("hidden");
      setTimeout(() => msgEl.classList.add("hidden"), 2000);
    });
  }

  const challengeMsg = document.getElementById("challenge-msg");
  const barChallengeMsg = document.getElementById("bar-challenge-msg");

  // Modal buttons
  copyBtn.onclick = () => copyAndFlash(modalCopiedMsg);
  challengeBtn.onclick = () => copyAndFlash(challengeMsg);

  // Share bar buttons (on locked game screen)
  shareCopyBtn.onclick = () => copyAndFlash(copiedMsg);
  shareChallengeBtn.onclick = () => copyAndFlash(barChallengeMsg);
}

function openModal() {
  resultModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  resultModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// After submit: lock game, populate + open modal
function showResult(player, guesses, results, score, dayNumber) {
  lockGame(guesses);
  populateModal(player, guesses, results, score, dayNumber);
  openModal();
}

// On revisit same day: restore locked state, populate modal (but don't open it)
function showSavedResult() {
  const data = JSON.parse(localStorage.getItem("ds_lastResult"));
  if (!data) return;

  const actual = data.actual;

  // Validate saved data has the correct season-stat fields
  if (!actual || actual.goals == null || actual.assists == null || actual.points == null
      || data.guesses?.goals == null || data.guesses?.assists == null) {
    localStorage.removeItem("ds_lastPlayed");
    localStorage.removeItem("ds_lastResult");
    location.reload();
    return;
  }

  const { player: name, team, dayNumber, guesses, results, score } = data;
  const player = { name, team, ...actual };

  submitted = true;
  lockGame(guesses);
  populateModal(player, guesses, results, score, dayNumber);
  // Don't open modal — user can tap "View Result" to see it
}

// Close welcome modal
function closeWelcome() {
  welcomeModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// Events
submitBtn.addEventListener("click", submitGuess);
playCta.addEventListener("click", () => {
  closeWelcome();
  // If already played today, open results modal immediately
  if (submitted) {
    openModal();
  }
});
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!resultModal.classList.contains("hidden")) closeModal();
    else if (!welcomeModal.classList.contains("hidden")) closeWelcome();
  }
});
viewResultBtn.addEventListener("click", openModal);

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("ds_theme", next);
});

// Start
init();
