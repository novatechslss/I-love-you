// Replace these with your own photos in public/images/memories/ (edit file names here).
const PHOTOS=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
const ph=n=>`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><defs><linearGradient id="g"><stop offset="0" stop-color="#FFC4DE"/><stop offset="1" stop-color="#CDB8FF"/></linearGradient></defs><rect width="400" height="500" fill="url(#g)"/><text x="200" y="260" font-size="64" text-anchor="middle">❤️ ${n}</text></svg>`)}`;
export default function MemoriesGallery(){return(<section className="gallery"><h2 className="script">Our Beautiful Memories ❤️</h2>
 <div className="strip">{PHOTOS.map((p,i)=><figure key={p} className="card"><img loading="lazy" src={`/images/memories/${p}`} alt={`Memory ${i+1}`} onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=ph(i+1);}}/></figure>)}</div></section>);}
