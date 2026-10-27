// Netlify server-side proxy: API token is never sent to the browser.
// Provider: football-data.org; free-tier coverage and rate limits may vary.
exports.handler = async () => {
  const key=process.env.FOOTBALL_DATA_API_KEY;
  const headers={'Content-Type':'application/json','Cache-Control':'public, max-age=300'};
  if(!key)return {statusCode:503,headers,body:JSON.stringify({error:'Football provider not configured'})};
  const base='https://api.football-data.org/v4/competitions/PL';
  const get=async path=>{
    const response=await fetch(base+path,{headers:{'X-Auth-Token':key,'Accept':'application/json'},signal:AbortSignal.timeout(10000)});
    if(!response.ok)throw Error('Provider returned '+response.status);
    return response.json();
  };
  try {
    // Season 2026 means the 2026/27 Premier League. Never silently fall back to another season.
    const [table,fixtures]=await Promise.all([get('/standings?season=2026'),get('/matches?season=2026')]);
    const rows=table.standings?.find(s=>s.type==='TOTAL')?.table||[];
    const standings=rows.map(r=>({position:r.position,name:r.team?.name||'',played:r.playedGames,goalDifference:r.goalDifference,points:r.points,form:r.form||null,nextFixture:null}));
    const matches=(fixtures.matches||[]).slice().sort((a,b)=>Date.parse(b.utcDate)-Date.parse(a.utcDate)).slice(0,45).map(m=>({id:m.id,home:m.homeTeam?.name||'',away:m.awayTeam?.name||'',date:m.utcDate?new Date(m.utcDate).toLocaleString('en-GB',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit',timeZone:'Europe/London'}):'',status:m.status||'',homeScore:m.score?.fullTime?.home??null,awayScore:m.score?.fullTime?.away??null}));
    return {statusCode:200,headers,body:JSON.stringify({sourceLabel:'Football-data.org · Premier League 2026/27 · provider feed',standings,matches})};
  }catch(err){return {statusCode:502,headers,body:JSON.stringify({error:'Verified 2026/27 feed unavailable; no results shown'})};}
};
