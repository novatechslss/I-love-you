import {Music,Pause} from 'lucide-react';
export default function MusicPlayer({audio,playing,setPlaying}){
 const toggle=()=>{const a=audio.current;if(!a)return;if(a.paused){a.play().then(()=>setPlaying(true)).catch(()=>{});}else{a.pause();setPlaying(false);}};
 return(<button className={'music glass '+(playing?'on':'')} onClick={toggle} aria-label={playing?'Pause music':'Play music'}>
  {playing?<Pause size={16}/>:<Music size={16}/>}<span className="bars"><i/><i/><i/><i/></span></button>);}
