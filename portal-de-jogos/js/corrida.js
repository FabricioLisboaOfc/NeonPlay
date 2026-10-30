window.startCorrida = function({canvas,ctx,portal}) {
  let running=false,raf=0,last=0,elapsed=0,score=0,speed=3,playerX=canvas.width/2,obstacles=[],keys={},spawn=0;
  const laneX=[canvas.width*.3,canvas.width*.5,canvas.width*.7];
  function start(){running=true;portal.hideOverlay();last=performance.now();raf=requestAnimationFrame(loop);}
  function end(win){running=false;cancelAnimationFrame(raf);portal.showOverlay(win?"Corrida concluída!":"Batida!",`Pontuação: ${score}.`, "Correr novamente",()=>{elapsed=0;score=0;speed=3;playerX=laneX[1];obstacles=[];spawn=0;start();});}
  function loop(now){if(!running)return;const dt=Math.min(32,now-last);last=now;elapsed+=dt;spawn+=dt;speed=3+elapsed/6500;
    if(keys.ArrowLeft||keys.a||keys.A)playerX-=6;if(keys.ArrowRight||keys.d||keys.D)playerX+=6;playerX=Math.max(canvas.width*.22,Math.min(canvas.width*.78,playerX));
    if(spawn>Math.max(330,950-speed*80)){spawn=0;obstacles.push({x:laneX[Math.floor(Math.random()*3)],y:-70});}
    obstacles.forEach(o=>o.y+=speed*2.5);obstacles=obstacles.filter(o=>{if(o.y>canvas.height+70){score+=10;return false;}if(Math.abs(o.x-playerX)<38&&Math.abs(o.y-(canvas.height-80))<58){end(false);}return true;});
    if(elapsed>60000){end(true);return;}
    ctx.fillStyle="#10151f";ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#202b39";ctx.fillRect(canvas.width*.18,0,canvas.width*.64,canvas.height);
    ctx.strokeStyle="#eafaff88";ctx.setLineDash([25,20]);ctx.lineWidth=4;ctx.lineDashOffset=-(now/10)%45;ctx.beginPath();ctx.moveTo(canvas.width*.39,0);ctx.lineTo(canvas.width*.39,canvas.height);ctx.moveTo(canvas.width*.61,0);ctx.lineTo(canvas.width*.61,canvas.height);ctx.stroke();ctx.setLineDash([]);
    function car(x,y,color){ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=12;ctx.fillRect(x-18,y-30,36,60);ctx.fillStyle="#07101c";ctx.fillRect(x-12,y-17,24,15);ctx.fillRect(x-12,y+12,24,10);ctx.shadowBlur=0;}
    car(playerX,canvas.height-80,"#39f5ff");obstacles.forEach(o=>car(o.x,o.y,"#ff5d85"));
    portal.setStatus(`Pontos: ${score}`,`Velocidade: ${speed.toFixed(1)}x`);raf=requestAnimationFrame(loop);
  }
  function keydown(e){if(["ArrowLeft","ArrowRight"].includes(e.key))e.preventDefault();keys[e.key]=true;}
  function keyup(e){keys[e.key]=false;}
  window.addEventListener("keydown",keydown);window.addEventListener("keyup",keyup);
  portal.showOverlay("Corrida Neon","Use as setas ou A/D para desviar dos carros. Sobreviva por 60 segundos!","Ligar motor",start);
  return {stop(){running=false;cancelAnimationFrame(raf);window.removeEventListener("keydown",keydown);window.removeEventListener("keyup",keyup);}};
};
