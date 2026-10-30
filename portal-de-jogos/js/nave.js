window.startNave = function({canvas,ctx,portal}) {
  let running=false, raf=0, timer=0, last=0, level=1, lives=3, score=0, shots=[], enemies=[], keys={}, spawn=0;
  const player={x:canvas.width/2,y:canvas.height-55,w:34,h:30,speed:5};
  function resetLevel(){shots=[];enemies=[];spawn=0;timer=0;player.x=canvas.width/2;}
  function drawShip(x,y){ctx.fillStyle="#39f5ff";ctx.shadowColor="#39f5ff";ctx.shadowBlur=14;ctx.beginPath();ctx.moveTo(x,y-18);ctx.lineTo(x-17,y+14);ctx.lineTo(x,y+7);ctx.lineTo(x+17,y+14);ctx.closePath();ctx.fill();ctx.shadowBlur=0;}
  function start(){running=true;portal.hideOverlay();last=performance.now();raf=requestAnimationFrame(loop);}
  function finish(win){running=false;cancelAnimationFrame(raf);portal.showOverlay(win?"Você venceu!":"Nave destruída!",win?`Você completou os 10 níveis! Pontuação: ${score}.`:`Pontuação final: ${score}.`, "Jogar novamente",()=>{level=1;lives=3;score=0;resetLevel();start();});}
  function loop(now){if(!running)return;const dt=Math.min(32,now-last);last=now;timer+=dt;spawn+=dt;
    ctx.fillStyle="#030711";ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<55;i++){ctx.fillStyle=i%3?"#18334a":"#39f5ff";ctx.fillRect((i*137)%canvas.width,(i*71+Math.floor(now/35))%canvas.height,2,2);}
    if(keys.ArrowLeft||keys.a||keys.A)player.x-=player.speed*(level*.16+1);
    if(keys.ArrowRight||keys.d||keys.D)player.x+=player.speed*(level*.16+1);
    player.x=Math.max(20,Math.min(canvas.width-20,player.x));
    if(keys[" "]&&now-(player.lastShot||0)>230){shots.push({x:player.x,y:player.y-15});player.lastShot=now;}
    if(spawn>Math.max(240,850-level*65)){spawn=0;enemies.push({x:25+Math.random()*(canvas.width-50),y:-20,s:1+level*.35});}
    shots.forEach(s=>{s.y-=8;if(s.y<-10)s.dead=true;});
    enemies.forEach(e=>{e.y+=e.s;if(e.y>canvas.height+20)e.dead=true;
      if(Math.abs(e.x-player.x)<24&&Math.abs(e.y-player.y)<24){e.dead=true;lives--;if(lives<=0)finish(false);}
      shots.forEach(s=>{if(!s.dead&&Math.abs(s.x-e.x)<17&&Math.abs(s.y-e.y)<18){s.dead=true;e.dead=true;score+=10;}});
    });
    shots=shots.filter(s=>!s.dead);enemies=enemies.filter(e=>!e.dead);
    if(score>=level*100&&level<10){level++;enemies=[];portal.setStatus(`Nível ${level}/10`,"Velocidade crescente");}
    if(level===10&&score>=1000&&enemies.length===0){finish(true);return;}
    drawShip(player.x,player.y);
    ctx.fillStyle="#c45cff";ctx.shadowColor="#c45cff";ctx.shadowBlur=10;
    enemies.forEach(e=>{ctx.fillRect(e.x-12,e.y-10,24,20);ctx.fillRect(e.x-18,e.y-3,36,6);});
    ctx.shadowBlur=0;ctx.fillStyle="#39f5ff";shots.forEach(s=>ctx.fillRect(s.x-2,s.y-9,4,12));
    portal.setStatus(`Nível ${level}/10`,`Vidas: ${"♥ ".repeat(lives)} • Pontos: ${score}`);
    raf=requestAnimationFrame(loop);
  }
  function keydown(e){if(["ArrowLeft","ArrowRight"," "].includes(e.key))e.preventDefault();keys[e.key]=true;if(e.key.toLowerCase()==="p"&&running){running=false;cancelAnimationFrame(raf);portal.showOverlay("Jogo pausado","Sua nave está segura. Continue quando quiser.","Continuar",start);}}
  function keyup(e){keys[e.key]=false;}
  window.addEventListener("keydown",keydown);window.addEventListener("keyup",keyup);
  portal.setStatus("Nível 1/10","Vidas: ♥ ♥ ♥");portal.showOverlay("Nave Espacial","Destrua os inimigos. Você tem 3 vidas e até 10 níveis. Atire com Espaço.","Começar",start);
  return {stop(){running=false;cancelAnimationFrame(raf);window.removeEventListener("keydown",keydown);window.removeEventListener("keyup",keyup);}};
};
