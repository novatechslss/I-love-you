import {motion} from 'framer-motion';
import Pandas from './Pandas.jsx';
export default function WelcomeScreen({onStart}){return(<div className="center welcome">
  <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}><Pandas size={260}/></motion.div>
  <h1 className="script">L + S ❤️</h1><h2 className="sub">Our Little Love Story</h2>
  <p className="si glass">මගේ ආදරේ වෙනුවෙන් පුංචි තෑග්ගක්... 🥺❤️</p>
  <button className="heartbtn" onClick={onStart} aria-label="මේක ඔබන්න">
    <svg viewBox="0 0 100 90" aria-hidden="true"><defs><radialGradient id="hg" cx="35%" cy="30%"><stop offset="0" stopColor="#FFC4DE"/><stop offset=".6" stopColor="#F48FB1"/><stop offset="1" stopColor="#c44d86"/></radialGradient></defs><path d="M50 86 C10 55 0 35 0 22 A24 24 0 0 1 50 16 A24 24 0 0 1 100 22 C100 35 90 55 50 86Z" fill="url(#hg)"/></svg>
    <span>මේක ඔබන්න ❤️</span></button></div>);}
