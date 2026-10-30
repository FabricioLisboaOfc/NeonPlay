(() => {
  const menu = document.getElementById("menu");
  const gameScreen = document.getElementById("game-screen");
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const overlay = document.getElementById("overlay");
  const overlayTitle = document.getElementById("overlay-title");
  const overlayText = document.getElementById("overlay-text");
  const overlayButton = document.getElementById("overlay-button");
  const title = document.getElementById("current-title");
  const statusMain = document.getElementById("status-main");
  const statusExtra = document.getElementById("status-extra");
  const help = document.getElementById("controls-help");
  let activeGame = null;
  let currentKey = "";

  window.GamePortal = {
    canvas, ctx,
    setStatus(main, extra = "") { statusMain.textContent = main; statusExtra.textContent = extra; },
    showOverlay(head, text, buttonText, action) {
      overlayTitle.textContent = head; overlayText.textContent = text;
      overlayButton.textContent = buttonText; overlay.classList.remove("off");
      overlayButton.onclick = action;
    },
    hideOverlay() { overlay.classList.add("off"); },
    get running() { return Boolean(activeGame); }
  };

  const games = {
    nave: {title:"Nave Espacial", help:"Mover: ← → ou A/D • Atirar: Espaço • Pausar: P", start:window.startNave},
    cobrinha: {title:"Cobrinha", help:"Mover: setas ou WASD • No celular, deslize sobre o tabuleiro.", start:window.startCobrinha},
    pacman: {title:"Pac-Man Neon", help:"Mover: setas ou WASD • Coma todos os pontos.", start:window.startPacman},
    corrida: {title:"Corrida Neon", help:"Mover: ← → ou A/D • Desvie dos carros e sobreviva.", start:window.startCorrida},
    bloco: {title:"Desafio do Bloco", help:"Mover o bloco: setas ou WASD • Alcance o portal verde.", start:window.startBloco}
  };

  function openGame(key) {
    if (activeGame && activeGame.stop) activeGame.stop();
    currentKey = key;
    const game = games[key];
    menu.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    title.textContent = game.title;
    help.textContent = game.help;
    activeGame = game.start({canvas, ctx, portal:window.GamePortal});
  }
  function backToMenu() {
    if (activeGame && activeGame.stop) activeGame.stop();
    activeGame = null;
    currentKey = "";
    window.removeEventListener("keydown", globalKeys);
    gameScreen.classList.add("hidden");
    menu.classList.remove("hidden");
    overlay.classList.remove("off");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    statusMain.textContent = "Escolha seu próximo desafio";
    statusExtra.textContent = "";
  }
  function globalKeys(e) {
    if (e.key === "Escape") backToMenu();
  }
  document.querySelectorAll("[data-game]").forEach(button => {
    button.addEventListener("click", () => {
      window.addEventListener("keydown", globalKeys);
      openGame(button.dataset.game);
    });
  });
  document.getElementById("exit-game").addEventListener("click", backToMenu);
  document.getElementById("back-to-menu").addEventListener("click", backToMenu);
  overlayButton.addEventListener("click", () => {});
})();
