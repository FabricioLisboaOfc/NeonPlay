window.startBloco = function({canvas,ctx,portal}) {
  // Quebra-cabeça original de bloco em grade, inspirado no gênero de plataformas isométricas.
  const levels=[
    {w:5,h:5,start:[0,2],goal:[4,2],holes:[[2,0],[2,1],[2,3],[2,4]]},
    {w:6,h:5,start:[0,1],goal:[5,3],holes:[[1,3],[2,3],[3,1],[3,2]]},
    {w:6,h:6,start:[1,0],goal:[4,5],holes:[[2,1],[2,2],[4,2],[1,4],[2,4]]},
    {w:7,h:6,start:[0,0],goal:[6,5],holes:[[2,0],[2,1],[4,2],[4,3],[1,4],[2,4]]},
    {w:7,h:7,start:[0,3],goal:[6,3],holes:[[2,1],[2,2],[2,4],[2,5],[4,0],[4,1],[4,5],[4,6]]}
  ];
  let level=0,pos,steps=0,running=false,raf=0;
  const tileW=78,tileH=40;
  function resetLevel(){pos={x:levels[level].start[0],y:levels[level].start[1]};steps=0;draw();}
  function draw(){
    const L=levels[level];ctx.fillStyle="#06101d";ctx.fillRect(0,0,canvas.width,canvas.height);
    const ox=(canvas.width-(L.w+L.h)*tileW/2)/2+tileW/2,oy=65;
    function point(x,y){return {x:ox+(x-y)*tileW/2,y:oy+(x+y)*tileH/2};}
    const holeSet=new Set(L.holes.map(p=>p.join(",")));
    for(let y=0;y<L.h;y++)for(let x=0;x<L.w;x++){if(holeSet.has(`${x},${y}`))continue;const p=point(x,y);
      ctx.fillStyle=(x===L.goal[0]&&y===L.goal[1])?"#14583f":"#17304a";ctx.strokeStyle="#39f5ff88";ctx.lineWidth=1;
      ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+tileW/2,p.y+tileH/2);ctx.lineTo(p.x,p.y+tileH);ctx.lineTo(p.x-tileW/2,p.y+tileH/2);ctx.closePath();ctx.fill();ctx.stroke();
      if(x===L.goal[0]&&y===L.goal[1]){ctx.fillStyle="#42ffb0";ctx.beginPath();ctx.arc(p.x,p.y+tileH/2,8,0,Math.PI*2);ctx.fill();}
    }
    const p=point(pos.x,pos.y);ctx.fillStyle="#c45cff";ctx.shadowColor="#c45cff";ctx.shadowBlur=15;
    ctx.beginPath();ctx.moveTo(p.x,p.y-18);ctx.lineTo(p.x+tileW/2,p.y+tileH/2-18);ctx.lineTo(p.x,p.y+tileH-18);ctx.lineTo(p.x-tileW/2,p.y+tileH/2-18);ctx.closePath();ctx.fill();ctx.shadowBlur=0;
    ctx.fillStyle="#eefaff";ctx.font="bold 17px Arial";ctx.textAlign="left";ctx.fillText(`FASE ${level+1}/${levels.length}   MOVIMENTOS: ${steps}`,22,28);
    portal.setStatus(`Fase ${level+1}/${levels.length}`,`Movimentos: ${steps}`);
  }
  function start(){running=true;portal.hideOverlay();draw();}
  function move(dx,dy){if(!running)return;const L=levels[level],nx=pos.x+dx,ny=pos.y+dy;
    if(nx<0||ny<0||nx>=L.w||ny>=L.h||L.holes.some(p=>p[0]===nx&&p[1]===ny)){portal.setStatus("Cuidado!","O bloco não pode cair no vazio.");return;}
    pos={x:nx,y:ny};steps++;draw();
    if(pos.x===L.goal[0]&&pos.y===L.goal[1]){
      running=false;
      portal.showOverlay("Fase concluída!",level===levels.length-1?`Você venceu todas as ${levels.length} fases em ${steps} movimentos!`:`Você resolveu a fase ${level+1}. Prepare-se para a próxima.` ,level===levels.length-1?"Jogar novamente":"Próxima fase",()=>{
        if(level===levels.length-1)level=0;else level++;resetLevel();start();
      });
    }
  }
  function keydown(e){const m={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0]};const v=m[e.key]||m[e.key.toLowerCase()];if(v){e.preventDefault();move(v[0],v[1]);}}
  window.addEventListener("keydown",keydown);resetLevel();
  portal.showOverlay("Desafio do Bloco","Leve o bloco roxo até o portal verde sem cair nas lacunas. Complete 5 fases.","Começar",start);
  return {stop(){running=false;window.removeEventListener("keydown",keydown);}};
};
