const Panda=({bow,scarf,pend,x})=>(<g transform={`translate(${x} 0)`}>
  <circle cx="30" cy="38" r="17" fill="#222"/><circle cx="110" cy="38" r="17" fill="#222"/>
  <ellipse cx="70" cy="85" rx="55" ry="48" fill="#fff"/>
  <ellipse cx="48" cy="78" rx="12" ry="16" fill="#222" transform="rotate(20 48 78)"/><ellipse cx="92" cy="78" rx="12" ry="16" fill="#222" transform="rotate(-20 92 78)"/>
  <circle cx="48" cy="78" r="5" fill="#7a4a2a"/><circle cx="92" cy="78" r="5" fill="#7a4a2a"/><circle cx="50" cy="76" r="1.8" fill="#fff"/><circle cx="94" cy="76" r="1.8" fill="#fff"/>
  <ellipse cx="70" cy="95" rx="6" ry="4" fill="#222"/><path d="M62 104 q8 8 16 0" stroke="#222" strokeWidth="2" fill="none"/>
  {bow&&<g fill={bow}><path d="M95 42 l22 -10 v22z"/><path d="M95 42 l-2 -14 l24 4z"/></g>}
  <ellipse cx="70" cy="135" rx="46" ry="34" fill="#fff"/><path d="M28 124 q42 22 84 0 l4 14 q-46 24 -92 0z" fill={scarf}/>
  <path d="M70 140 l-10 -8 a6 6 0 0 1 10 -6 a6 6 0 0 1 10 6z" fill={pend}/></g>);
export default function Pandas({size=300}){return(<svg viewBox="0 0 300 175" width={size} role="img" aria-label="Two baby pandas"><Panda x={0} bow="#FFC4DE" scarf="#F48FB1" pend="#E8639A"/><Panda x={150} scarf="#CDB8FF" pend="#8B5CF6"/></svg>);}
