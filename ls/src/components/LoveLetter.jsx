import {motion} from 'framer-motion';import {X} from 'lucide-react';
export default function LoveLetter({onClose}){return(
 <motion.div className="letterwrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
  <motion.article className="letter si" initial={{scale:.3,rotateX:70,y:60}} animate={{scale:1,rotateX:0,y:0}} exit={{scale:.4,opacity:0}} transition={{type:'spring',damping:18}}>
   <button className="x" onClick={onClose} aria-label="Close"><X size={20}/></button>
   <p>මගේ පණ 🥺, ❤️</p>
   <p>මීට මාස 6කට කලින්, ඒ කියන්නේ 2026 ජුනි 2 වෙනිදා, මගේ ජීවිතේට ලස්සනම කෙනෙක් ආවා.</p>
   <p>ඒ දවසේ පටන් මගේ ජීවිතේට අලුත් මතක ගොඩක් එකතු වුණා. ඔයා එක්ක කතා කරපු පුංචි වෙලාවන්, එකට හිනා වුණු අවස්ථා, පුංචි තරහවල්, ආයෙත් යාළු වුණු හැටි... ඒ හැමදේම මට වටිනවා.</p>
   <p>අපිට හැමදාම හැමදේම එක වගේ නොවෙන්න පුළුවන්. ඒත් මට ඕනේ හැම සතුටකදීම වගේම අමාරු දවසකදීත් ඔයාට ආදරෙන් බලා ගන්න මැනික.</p>
   <p>ඔයා මගේ ජීවිතේට ආපු එක ගැන මම සතුටු වෙනවා. අපේ මේ පුංචි ආදර කතාව තවත් ලස්සන මතකවලින් පුරවගමු.</p>
   <p>මේ මාස 6ටම ස්තූතියි මගේ පණ. 🥺❤️</p>
   <p><b>I LOVE YOU මැනික ❤️</b></p>
  </motion.article></motion.div>);}
