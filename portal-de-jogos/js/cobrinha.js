window.startCobrinha = function({canvas,ctx,portal}) {
  const cols=25,rows=17,cell=canvas.width/cols;
  let snake,dir,next,food,score=0,running=false,raf=0,last=0,step=150;
  function reset(){snake=[{x:7,y:8},{x:6,y:8},{x:5,y:8}];dir={x:1,y:0};next={...dir};score=0;step=150;placeFood();}
  function placeFood(){do{food={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)};}while(snake.some(p=>p.x===food.x&&p.y===food.y));}
  function start(){running=true;portal.hideOverlay();last=performance.now();raf=requestAnimationFrame(loop);}
  function end(win){running=false;cancelAnimationFrame(raf);portal.showOverlay(win?"Você venceu!":"Fim de jogo",`Pontuação: ${score}. ${win?"Você alcançou a pontuação máxima!":"A cobrinha bateu ou o tempo acabou."}`,"Jogar novamente",()=>{reset();start();});}
  function loop(now){if(!running)return;ctx.fillStyle="#030711";ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let x=0;x<cols;x++)for(let y=0;y<rows;y++){ctx.strokeStyle="#102237";ctx.strokeRect(x*cell,y*cell,cell,cell);}
    if(now-last>step){last=now;dir=next;const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
      if(head.x<0||head.y<0||head.x>=cols||head.y>=rows||snake.some((p,i)=>i>0&&p.x===head.x&&p.y===head.y)){end(false);return;}
      snake.unshift(head);
      if(head.x===food.x&&head.y===food.y){score+=10;step=Math.max(65,step-5);placeFood();if(score>=200){end(true);return;}}
      else snake.pop();
    }
    ctx.fillStyle="#ff75d8";ctx.shadowColor="#ff75d8";ctx.shadowBlur=14;ctx.beginPath();ctx.arc((food.x+.5)*cell,(food.y+.5)*cell,cell*.32,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
    snake.forEach((p,i)=>{ctx.fillStyle=i===0?"#39f5ff":"#25b889";ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=i===0?12:3;ctx.fillRect(p.x*cell+2,p.y*cell+2,cell-4,cell-4);});ctx.shadowBlur=0;
    portal.setStatus(`Pontos: ${score}`,`Velocidade: ${Math.round(150/step*100)}%`);raf=requestAnimationFrame(loop);
  }
  function keydown(e){const map={ArrowUp:{x:0,y:-1},w:{x:0,y:-1},ArrowDown:{x:0,y:1},s:{x:0,y:1},ArrowLeft:{x:-1,y:0},a:{x:-1,y:0},ArrowRight:{x:1,y:0},d:{x:1,y:0}};const v=map[e.key]||map[e.key.toLowerCase()];if(v){e.preventDefault();if(v.x!==-dir.x||v.y!==-dir.y)next=v;}}
  function pointer(e){const r=canvas.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;if(Math.abs(x)>Math.abs(y)){next=x>0?{x:1,y:0}:{x:-1,y:0};}else next=y>0?{x:0,y:1}:{x:0,y:-1};}
  reset();window.addEventListener("keydown",keydown);canvas.addEventListener("pointerdown",pointer);
  portal.showOverlay("Cobrinha Neon","Coma os pontos rosa. Não bata nas paredes nem no próprio corpo. A velocidade aumenta com a pontuação.","Começar",start);
  return {stop(){running=false;cancelAnimationFrame(raf);window.removeEventListener("keydown",keydown);canvas.removeEventListener("pointerdown",pointer);}};
};
