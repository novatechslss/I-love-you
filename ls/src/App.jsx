import {useRef,useState,useCallback} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import MagicalGarden from './components/MagicalGarden.jsx';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import PandaVideo from './components/PandaVideo.jsx';
import LoveLetter from './components/LoveLetter.jsx';
import FinalPandaScene from './components/FinalPandaScene.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
export default function App(){
  const [stage,setStage]=useState('welcome'); // welcome|video|letter|final
  const audio=useRef(null);
  const [playing,setPlaying]=useState(false);
  const start=useCallback(()=>{
    const a=audio.current;
    if(a){a.volume=.4;a.play().then(()=>setPlaying(true)).catch(()=>{});}
    setStage('video');
  },[]);
  const fade={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.8}};
  return(<div className="app">
    <audio ref={audio} src="/music/romantic.mp3" loop preload="none" onError={()=>setPlaying(false)}/>
    <MagicalGarden dense={stage==='welcome'||stage==='final'}/>
    <AnimatePresence mode="wait">
      {stage==='welcome'&&<motion.div key="w" className="layer" {...fade}><WelcomeScreen onStart={start}/></motion.div>}
      {(stage==='video'||stage==='letter')&&<motion.div key="v" className="layer" {...fade}><PandaVideo onEnd={()=>setStage('letter')}/></motion.div>}
      {stage==='final'&&<motion.div key="f" className="layer scroll" {...fade}><FinalPandaScene/></motion.div>}
    </AnimatePresence>
    <AnimatePresence>{stage==='letter'&&<LoveLetter onClose={()=>setStage('final')}/>}</AnimatePresence>
    {stage!=='welcome'&&<MusicPlayer audio={audio} playing={playing} setPlaying={setPlaying}/>}
  </div>);
}
