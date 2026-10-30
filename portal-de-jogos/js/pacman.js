window.startPacman = function({canvas,ctx,portal}) {
  const layout=[
    "####################",
    "#........##........#",
    "#.##.###.##.###.##.#",
    "#..................#",
    "#.##.#.######.#.##.#",
    "#....#....##..#....#",
    "####.####.##.####.##",
    "#..................#",
    "#.##.##.####.##.##.#",
    "#....##...P..##....#",
    "####.##.####.##.####",
    "#..................#",
    "#.##.###.##.###.##.#",
    "#........##........#",
    "####################"
  ];
  const tile=canvas.width/20; let map,player,dir,next,ghosts,dots,running=false,raf=0,last=0,score=0,lives=3;
  function reset(){map=layout.map(r=>r.split(""));player={x:9,y:9};dir={x:0,y:0};next={x:0,y:0};ghosts=[{x:10,y:7,c:"#ff75d8"},{x:10,y:8,c:"#c45cff"}];score=0;lives=3;dots=map.flat().filter(c=>c===".").length;}
  function start(){running=true;portal.hideOverlay();last=performance.now();raf=requestAnimationFrame(loop);}
  function end(win){running=false;cancelAnimationFrame(raf);portal.showOverlay(win?"Labirinto concluído!":"Fim de jogo",`Pontos: ${score} • Vidas restantes: ${lives}`, "Jogar novamente",()=>{reset();start();});}
  function can(x,y){return map[y]&&map[y][x]&&map[y][x]!=="#";}
  function loop(now){if(!running)return;if(now-last>145){last=now;if(can(player.x+next.x,player.y+next.y))dir=next;if(can(player.x+dir.x,player.y+dir.y)){player.x+=dir.x;player.y+=dir.y;}
    if(map[player.y][player.x]==="."){map[player.y][player.x]=" ";score+=10;dots--;}
    ghosts.forEach(g=>{const opts=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}].filter(v=>can(g.x+v.x,g.y+v.y));if(opts.length){opts.sort(()=>Math.random()-.5);const toward=opts.sort((a,b)=>Math.abs(g.x+a.x-player.x)+Math.abs(g.y+a.y-player.y)-(Math.abs(g.x+b.x-player.x)+Math.abs(g.y+b.y-player.y)));if(Math.random()<.75){g.x+=toward[0].x;g.y+=toward[0].y;}else{g.x+=opts[0].x;g.y+=opts[0].y;}}});
    if(ghosts.some(g=>g.x===player.x&&g.y===player.y)){lives--;player={x:9,y:9};if(lives<=0){end(false);return;}}
    if(dots<=0){end(true);return;}
  }
  ctx.fillStyle="#030711";ctx.fillRect(0,0,canvas.width,canvas.height);
  const w=canvas.width/20,h=canvas.height/15;
  map.forEach((row,y)=>row.forEach((c,x)=>{if(c==="#"){ctx.fillStyle="#142b61";ctx.shadowColor="#39f5ff";ctx.shadowBlur=5;ctx.fillRect(x*w+1,y*h+1,w-2,h-2);ctx.shadowBlur=0;}else if(c==="."){ctx.fillStyle="#b8faff";ctx.beginPath();ctx.arc((x+.5)*w,(y+.5)*h,3,0,Math.PI*2);ctx.fill();}}));
  ctx.fillStyle="#ffe66d";ctx.shadowColor="#ffe66d";ctx.shadowBlur=12;ctx.beginPath();ctx.arc((player.x+.5)*w,(player.y+.5)*h,Math.min(w,h)*.38,.25,Math.PI*1.75);ctx.lineTo((player.x+.5)*w,(player.y+.5)*h);ctx.fill();ctx.shadowBlur=0;
  ghosts.forEach(g=>{ctx.fillStyle=g.c;ctx.shadowColor=g.c;ctx.shadowBlur=10;ctx.beginPath();ctx.arc((g.x+.5)*w,(g.y+.5)*h,Math.min(w,h)*.36,Math.PI,0);ctx.lineTo((g.x+.86)*w,(g.y+.8)*h);ctx.lineTo((g.x+.64)*w,(g.y+.7)*h);ctx.lineTo((g.x+.5)*w,(g.y+.8)*h);ctx.lineTo((g.x+.3)*w,(g.y+.7)*h);ctx.lineTo((g.x+.14)*w,(g.y+.8)*h);ctx.closePath();ctx.fill();ctx.shadowBlur=0;});
  portal.setStatus(`Pontos: ${score}`,`Vidas: ${"♥ ".repeat(lives)}`);raf=requestAnimationFrame(loop);
  }
  function keydown(e){const m={ArrowUp:{x:0,y:-1},w:{x:0,y:-1},ArrowDown:{x:0,y:1},s:{x:0,y:1},ArrowLeft:{x:-1,y:0},a:{x:-1,y:0},ArrowRight:{x:1,y:0},d:{x:1,y:0}};const v=m[e.key]||m[e.key.toLowerCase()];if(v){e.preventDefault();next=v;}}
  reset();window.addEventListener("keydown",keydown);
  portal.showOverlay("Pac-Man Neon","Coma todos os pontos do labirinto e fuja dos fantasmas. Você tem 3 vidas.","Começar",start);
  return {stop(){running=false;cancelAnimationFrame(raf);window.removeEventListener("keydown",keydown);}};
};
