import {useEffect,useState} from 'react';
const TARGET=new Date('2026-11-02T00:00:00'); // local device time
const calc=()=>{let d=Math.max(0,TARGET-Date.now())/1000|0;return{done:TARGET-Date.now()<=0,Days:d/86400|0,Hours:d%86400/3600|0,Minutes:d%3600/60|0,Seconds:d%60};};
export default function Countdown(){
 const [t,setT]=useState(calc);useEffect(()=>{const id=setInterval(()=>setT(calc()),1000);return()=>clearInterval(id);},[]);
 return(<section className="count"><h2 className="script">Happy 6 Months Anniversary L + S ❤️</h2>
 {!t.done&&<div className="cards">{['Days','Hours','Minutes','Seconds'].map(k=><div className="cd" key={k}><b>{String(t[k]).padStart(2,'0')}</b><small>{k}</small></div>)}</div>}</section>);}
