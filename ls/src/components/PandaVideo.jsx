import {useEffect,useRef,useState} from 'react';
export default function PandaVideo({onEnd}){
  const v=useRef(null);const [err,setErr]=useState(false);
  useEffect(()=>{const el=v.current;if(!el)return;el.play().catch(()=>setErr(true));},[]);
  useEffect(()=>{if(err){const t=setTimeout(onEnd,1500);return()=>clearTimeout(t);}},[err,onEnd]);
  return(<div className="center videostage"><div className="videoframe">
    {err?<p className="si">වීඩියෝව පූරණය කළ නොහැක 🥺</p>:
    <video ref={v} src="/video/video.mp4" playsInline preload="auto" muted={false}
      onEnded={onEnd} onError={()=>setErr(true)} controls={false} disablePictureInPicture controlsList="nodownload noplaybackrate"/>}
  </div></div>);}
