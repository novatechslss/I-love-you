import {memo,useMemo} from 'react';
const r=(a,b)=>a+Math.random()*(b-a);
const Branch=({flip})=>(<svg className={'branch '+(flip?'flip':'')} viewBox="0 0 300 160" aria-hidden="true"><path d="M0 10 C80 20 140 40 220 100" stroke="#7a5a4a" strokeWidth="6" fill="none"/>{[[40,18],[90,30],[140,50],[190,80],[225,104],[70,40],[120,62]].map(([x,y],i)=>(<g key={i}><circle cx={x} cy={y+8} r="14" fill={i%2?'#CDB8FF':'#FFC4DE'} opacity=".9"/><circle cx={x} cy={y+8} r="5" fill="#FFE5A3"/><path d={`M${x} ${y+20} q-4 26 2 40`} stroke="#A8C99B" strokeWidth="2.5" fill="none"/></g>))}</svg>);
const Flower=({c,s=1})=>(<div className="flower" style={{'--c':c,'--s':s}}><i/><i/><i/><i/><i/><b/></div>);
function Garden({dense}){
  const items=useMemo(()=>({
    petals:Array.from({length:dense?14:10},()=>({l:r(0,100),d:r(7,13),dl:r(0,9)})),
    flies:Array.from({length:dense?12:8},()=>({l:r(3,97),t:r(40,95),dl:r(0,5)})),
    hearts:Array.from({length:7},()=>({l:r(5,95),d:r(9,16),dl:r(0,12),s:r(.9,1.6)})),
    bfly:Array.from({length:3},(_,i)=>({t:r(8,60),d:r(16,24),dl:i*5})),
  }),[dense]);
  return(<div className="garden" aria-hidden="true">
    <div className="sky"/><div className="waterfall"/>
    <div className="top"><Branch/><Branch flip/></div>
    {items.petals.map((p,i)=><span key={i} className="petal" style={{left:p.l+'%',animationDuration:p.d+'s',animationDelay:-p.dl+'s'}}/>)}
    {items.flies.map((f,i)=><span key={i} className="firefly" style={{left:f.l+'%',top:f.t+'%',animationDelay:-f.dl+'s'}}/>)}
    {items.hearts.map((h,i)=><span key={i} className="heart" style={{left:h.l+'%',fontSize:h.s+'rem',animationDuration:h.d+'s',animationDelay:-h.dl+'s'}}>{i%2?'💜':'💗'}</span>)}
    {items.bfly.map((b,i)=><span key={i} className="bfly" style={{top:b.t+'%',animationDuration:b.d+'s',animationDelay:-b.dl+'s'}}>🦋</span>)}
    <div className="bottom"><div className="stream"/><div className="grass"/>
      <div className="row"><Flower c="#F48FB1"/><span className="shroom">🍄</span><Flower c="#CDB8FF" s={1.2}/><Flower c="#FFC4DE"/><Flower c="#B79CFF" s={1.2}/><span className="shroom">🍄</span><Flower c="#F48FB1" s={1.1}/></div></div>
  </div>);
}
export default memo(Garden);
