/* Vee 深夜曲单：original score playback; no remote API or copyrighted songs */
(async function(){
try{
  const zipped=Uint8Array.from(atob("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"),c=>c.charCodeAt(0));
  const stream=new Blob([zipped]).stream().pipeThrough(new DecompressionStream('gzip'));
  const nightSongs=JSON.parse(await new Response(stream).text());
  for (const spec of nightSongs) {
    if (!songs.some(s=>s.id===spec.id)) songs.unshift(spec);
  }
  refreshLibrary();renderTransport();
  const studio=document.getElementById('songStudio');
  if(!studio || document.getElementById('veeNightSection'))return;
  const wrap=document.createElement('section');wrap.id='veeNightSection';
  wrap.setAttribute('aria-label','Vee 的深夜曲单');
  wrap.style.cssText='margin:11px 0 13px;padding:13px;border-radius:15px;background:linear-gradient(130deg,#17182d,#2c2342);border:1px solid #9979b588;box-shadow:0 8px 26px #08091755;color:#f4eaff';
  const header=document.createElement('div');header.style.cssText='display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap';
  const title=document.createElement('strong');title.textContent='☾ Vee 的深夜曲单';title.style.cssText='font-size:16px;letter-spacing:.03em';
  const continuous=document.createElement('button');continuous.type='button';continuous.textContent='▶ 三首连播';
  continuous.style.cssText='background:#7a5a92;color:white;border:1px solid #c4a2d3;border-radius:10px;padding:9px 12px;min-height:40px;font-size:12px';
  header.append(title,continuous);
  const intro=document.createElement('p');intro.style.cssText='color:#cdbedc;font-size:12px;margin:7px 0 10px;line-height:1.5';
  intro.textContent='慢爵士、轻柔律动与深夜钢琴。点选即演奏；可以和琴键一起合奏。';
  const tracks=document.createElement('div');tracks.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px';
  const info=['慵懒爵士 · 约 1 分 25 秒','轻柔律动 · 约 1 分 28 秒','温柔夜曲 · 约 1 分 13 秒'];
  const buttons=[];let playThrough=false,lastAdvanced='';
  function refresh(){
    continuous.textContent=playThrough?'■ 关闭连播':'▶ 三首连播';
    continuous.setAttribute('aria-pressed',String(playThrough));
    continuous.style.background=playThrough?'#ad659b':'#7a5a92';
    buttons.forEach(([b,s])=>{
      const current=chosenSong?.id===s.id;
      b.style.borderColor=current?'#f4cce7':'#665778';
      b.style.background=current?'#624361':'#25233a';
      b.setAttribute('aria-pressed',String(current));
    });
  }
  nightSongs.forEach((s,i)=>{
    const button=document.createElement('button');button.type='button';
    button.style.cssText='text-align:left;padding:11px;border-radius:11px;background:#25233a;color:#fff;border:1px solid #665778;min-height:64px;line-height:1.55';
    const name=document.createElement('strong');name.textContent=(i+1)+'. '+s.name;
    const sub=document.createElement('small');sub.textContent='♫ '+info[i];sub.style.cssText='display:block;color:#d8c8e5;font-size:11px';
    button.append(name,sub);
    button.onclick=()=>{if(loopSong&&playThrough)loopPlay.click();selectAndPlay(s);lastAdvanced='';refresh()};
    tracks.append(button);buttons.push([button,s]);
  });
  continuous.onclick=()=>{
    playThrough=!playThrough;lastAdvanced='';
    if(playThrough){
      if(loopSong)loopPlay.click();
      if(!nightSongs.some(s=>s.id===chosenSong?.id))selectAndPlay(nightSongs[0]);
    }
    refresh();
  };
  wrap.append(header,intro,tracks);
  const heading=studio.querySelector('.song-heading');if(heading)heading.after(wrap);else studio.prepend(wrap);
  // Preserve the existing piano transport. When a night score finishes, advance to the next.
  setInterval(()=>{
    if(playThrough && !loopSong && chosenSong && nightSongs.some(s=>s.id===chosenSong.id)
       && performance && !performance.running && performance.pos>=chosenSong.totalBeats-.005){
      const token=chosenSong.id+':'+performance.start+':'+performance.pos;
      if(token!==lastAdvanced){
        lastAdvanced=token;
        const i=nightSongs.findIndex(s=>s.id===chosenSong.id);
        selectAndPlay(nightSongs[(i+1)%nightSongs.length]);
      }
    }
    refresh();
  },700);
  refresh();
}catch(err){console.error('深夜曲单加载失败',err)}
})();