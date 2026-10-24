"use client";
import {useEffect,useState} from "react";
import {AnimatePresence,motion,useReducedMotion} from "framer-motion";
import {EVENTS,VENUES,type Ev,type Lang} from "@/lib/events";

const WED=EVENTS.find(e=>e.id==="bibaho")!;
const PHOTOS:string[]=[]; // add up to 6 paths, e.g. "/photos/1.jpg" (put files in /public/photos)
const RSVP_PHONE="91XXXXXXXXXX"; // WhatsApp number for RSVPs
const S={
 tap:{en:"Open invitation",bn:"নিমন্ত্রণ খুলুন"},join:{en:"With joy, we invite you to celebrate our wedding",bn:"আনন্দের সঙ্গে আপনাকে আমাদের বিয়েতে আমন্ত্রণ জানাচ্ছি"},
 fam:{en:"Mr. & Mrs. ______   |   Mr. & Mrs. ______",bn:"শ্রী ও শ্রীমতী ______   |   শ্রী ও শ্রীমতী ______"},
 d:{en:"Days",bn:"দিন"},h:{en:"Hours",bn:"ঘণ্টা"},m:{en:"Min",bn:"মিনিট"},s:{en:"Sec",bn:"সেকেন্ড"},
 sched:{en:"Schedule",bn:"অনুষ্ঠানসূচি"},dress:{en:"Dress code",bn:"পোশাক"},venue:{en:"Venues",bn:"স্থান"},gal:{en:"Our moments",bn:"আমাদের মুহূর্ত"},
 rsvp:{en:"Confirm attendance",bn:"উপস্থিতি জানান"},cal:{en:"Add to calendar",bn:"ক্যালেন্ডারে যোগ করুন"},map:{en:"Open in Maps",bn:"ম্যাপে খুলুন"},on:{en:"onwards",bn:"থেকে"},
 add:{en:"Add photo",bn:"ছবি যোগ করুন"}};
const loc=(l:Lang)=>(l==="bn"?"bn-IN":"en-IN");
const time=(e:Ev,l:Lang)=>new Date(`${e.d}T${e.t}:00`).toLocaleTimeString(loc(l),{hour:"numeric",minute:"2-digit"})+(e.on?` ${S.on[l]}`:"");
const z=(d:string,t:string)=>d.replace(/-/g,"")+"T"+t.replace(":","")+"00";
const calUrl=(e:Ev)=>`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.name.en+" – Baishalee & Hirak")}&dates=${z(e.d,e.t)}/${z(e.d,e.end)}&location=${encodeURIComponent(VENUES[e.v].q)}`;
const view={initial:{opacity:0,y:40,scale:.96},whileInView:{opacity:1,y:0,scale:1},viewport:{once:true,margin:"-80px"},transition:{duration:.9,ease:"easeOut" as const}};
const Dots=({pal}:{pal:string[]})=><span className="flex gap-2" aria-hidden>{pal.map(c=><i key={c} className="h-7 w-7 rounded-full ring-1 ring-paper/40" style={{background:c}}/>)}</span>;

function Petals(){
  const r=useReducedMotion(); if(r) return null;
  return <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden>{[...Array(18)].map((_,i)=>
    <motion.i key={i} className="absolute -top-6 block h-3 w-2 rounded-full" style={{left:`${(i*37)%100}%`,background:i%3?"#E8A317":"#C9A227",opacity:.8}}
      animate={{y:["0vh","110vh"],x:[0,i%2?40:-40,0],rotate:[0,360]}} transition={{duration:11+(i%5)*3,repeat:Infinity,delay:-(i*1.7),ease:"linear"}}/>)}</div>;
}

function Alpona(){
  const p=[...Array(8)];
  const draw=(d:number)=>({initial:{pathLength:0},animate:{pathLength:1},transition:{duration:2.6,delay:d,ease:"easeInOut" as const}});
  return <svg viewBox="-100 -100 200 200" aria-hidden fill="none" strokeLinecap="round" strokeWidth={1}
    className="pointer-events-none absolute left-1/2 top-1/2 w-[620px] -translate-x-1/2 -translate-y-1/2 opacity-30 md:w-[860px]">
    <motion.circle r={92} stroke="#FFFDF8" {...draw(0)}/><motion.circle r={86} stroke="#C9A227" {...draw(.5)}/>
    {p.map((_,i)=><motion.path key={"a"+i} transform={`rotate(${i*45})`} stroke="#FFFDF8" d="M0 -10C16 -26 16 -52 0 -78C-16 -52 -16 -26 0 -10Z" {...draw(.3+i*.18)}/>)}
    {p.map((_,i)=><motion.path key={"b"+i} transform={`rotate(${i*45+22.5})`} stroke="#C9A227" d="M0 -12C9 -24 9 -42 0 -58C-9 -42 -9 -24 0 -12Z" {...draw(1.2+i*.18)}/>)}
  </svg>;
}

function Intro({l,done}:{l:Lang;done:()=>void}){
  const [open,setOpen]=useState(false);
  const go=()=>{setOpen(true);setTimeout(done,2400)};
  return <motion.div exit={{opacity:0}} transition={{duration:.9}} className="silk fixed inset-0 z-50 flex flex-col items-center justify-center gap-14 text-paper">
    <div className="relative h-52 w-80 [perspective:900px]">
      <div className="absolute inset-0 rounded-sm bg-[#4a0709]"/>
      <motion.div className="absolute inset-x-5 bottom-3 top-3 bg-paper p-4 text-center text-ink" animate={{y:open?-120:0}} transition={{delay:.8,duration:1}}>
        <p className="font-serif text-2xl font-bold text-lal">{l==="bn"?"বৈশালী ও হীরক":"Baishalee & Hirak"}</p><p className="mt-1 text-sm">12.12.2026</p></motion.div>
      <div className="absolute inset-0 bg-[#8f1015] [clip-path:polygon(0_0,50%_52%,100%_0,100%_100%,0_100%)]"/>
      <motion.div className="absolute inset-x-0 top-0 h-[52%] origin-top bg-[#a8161c] [clip-path:polygon(0_0,100%_0,50%_100%)]" style={{backfaceVisibility:"hidden"}}
        animate={{rotateX:open?180:0,zIndex:open?0:3}} transition={{duration:.8}}/>
      <motion.span className="absolute left-1/2 top-[44%] z-[4] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-lal" animate={{opacity:open?0:1,scale:open?.4:1}} aria-hidden>♥</motion.span>
    </div>
    <motion.button onClick={go} disabled={open} animate={{opacity:open?0:1}} whileTap={{scale:.95}} className="min-h-12 rounded-full border border-gold px-9 font-semibold">{S.tap[l]}</motion.button>
  </motion.div>;
}

function Count({l}:{l:Lang}){
  const [now,setNow]=useState<number|null>(null);
  useEffect(()=>{setNow(Date.now());const t=setInterval(()=>setNow(Date.now()),1000);return()=>clearInterval(t)},[]);
  const ms=now===null?0:Math.max(0,+new Date(`${WED.d}T${WED.t}:00`)-now);
  const v=[Math.floor(ms/864e5),Math.floor(ms%864e5/36e5),Math.floor(ms%36e5/6e4),Math.floor(ms%6e4/1e3)];
  return <div className="flex justify-center gap-3" aria-live="off">{(["d","h","m","s"] as const).map((k,i)=>
    <div key={k} className="min-w-16 rounded-md border border-lal/30 px-2 py-2 text-center"><b className="block font-serif text-3xl text-lal">{now===null?"–":v[i].toLocaleString(loc(l))}</b><span className="text-xs text-ink/70">{S[k][l]}</span></div>)}</div>;
}

function Calendar({l}:{l:Lang}){
  const off=(new Date(2026,11,1).getDay()+6)%7, days=EVENTS.map(e=>+e.d.slice(8));
  return <div className="mx-auto mt-6 max-w-xs rounded-md border border-ink/20 p-3">
    <p className="mb-2 text-center font-serif text-lg font-bold text-lal">{new Date(2026,11,1).toLocaleDateString(loc(l),{month:"long",year:"numeric"})}</p>
    <div className="grid grid-cols-7 gap-y-1 text-center text-sm">{[...Array(off)].map((_,i)=><span key={"o"+i}/>)}
      {[...Array(31)].map((_,i)=>{const d=i+1,w=d===12,ev=days.includes(d);return <span key={d} className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${w?"bg-lal font-bold text-paper":ev?"border border-gold font-semibold":"text-ink/60"}`}>{d.toLocaleString(loc(l))}</span>})}</div></div>;
}

function Invite({l}:{l:Lang}){
  const bn=l==="bn";
  return <motion.section {...view} className="frame relative mx-auto my-20 max-w-md px-6 py-12 text-center">
    <p className="text-sm text-ink/70">{S.fam[l]}</p><p className="mt-5">{S.join[l]}</p>
    <h2 className="my-6 font-serif text-4xl font-extrabold leading-tight text-lal">{bn?"বৈশালী":"Baishalee"}<span className="block text-2xl text-gold">{bn?"ও":"&"}</span>{bn?"হীরক":"Hirak"}</h2>
    <p className="font-serif text-lg font-bold">{VENUES.w.name[l]}</p><p className="text-sm text-ink/70">{VENUES.w.addr[l]}</p>
    <p className="mt-5 flex items-center justify-center gap-4"><span className="font-serif text-6xl leading-none">{(12).toLocaleString(loc(l))}</span>
      <span className="border-l border-ink/30 pl-4 text-left text-lg">{new Date(WED.d).toLocaleDateString(loc(l),{month:"long"})}<br/>{(2026).toLocaleString(loc(l),{useGrouping:false})}</span></p>
    <p className="mt-1 text-ink/70">{time(WED,l)}</p>
    <div className="mt-8"><Count l={l}/></div><Calendar l={l}/>
    <div className="mt-6 flex flex-col items-center gap-3">
      <a href={calUrl(WED)} target="_blank" rel="noopener" className="min-h-11 py-2 font-semibold underline underline-offset-4">{S.cal[l]}</a>
      <a href={`https://wa.me/${RSVP_PHONE}?text=${encodeURIComponent("RSVP – Baishalee & Hirak wedding")}`} target="_blank" rel="noopener" className="inline-flex min-h-12 items-center rounded-full bg-ink px-8 font-semibold text-paper">{S.rsvp[l]}</a></div>
  </motion.section>;
}

function Gallery({l}:{l:Lang}){
  const [i,setI]=useState(0), n=6, go=(d:number)=>setI(Math.min(n-1,Math.max(0,i+d)));
  return <section className="relative z-20 mx-auto max-w-3xl px-5 py-12 text-center">
    <h2 className="mb-8 font-serif text-3xl font-bold text-gold">{S.gal[l]}</h2>
    <div className="relative mx-auto h-[360px] [perspective:1000px]">{[...Array(n)].map((_,k)=>{const o=k-i,a=Math.abs(o);
      return <motion.div key={k} className="absolute left-1/2 top-0 -ml-[115px] h-[340px] w-[230px] overflow-hidden rounded-xl border-2 border-gold" style={{zIndex:10-a}}
        animate={{x:o*115,rotateY:o===0?0:o>0?-45:45,scale:1-a*.12,opacity:a>2?0:1}} transition={{type:"spring",stiffness:120,damping:18}}
        drag="x" dragConstraints={{left:0,right:0}} onDragEnd={(_,inf)=>{if(inf.offset.x<-40)go(1);if(inf.offset.x>40)go(-1)}}>
        {PHOTOS[k]?<img src={PHOTOS[k]} alt="" className="h-full w-full object-cover"/>:<div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-lal to-[#4a0709] font-serif text-gold"><span className="text-5xl">{l==="bn"?"হী":"H"}</span><span className="text-sm">{S.add[l]}</span></div>}</motion.div>})}</div>
    <div className="mt-4 flex items-center justify-center gap-6"><button aria-label="Previous" onClick={()=>go(-1)} className="h-11 w-11 rounded-full border border-gold text-xl">‹</button>
      <span className="text-sm text-paper/80">{(i+1).toLocaleString(loc(l))} / {n.toLocaleString(loc(l))}</span><button aria-label="Next" onClick={()=>go(1)} className="h-11 w-11 rounded-full border border-gold text-xl">›</button></div>
  </section>;
}

function Schedule({l}:{l:Lang}){
  const days=EVENTS.reduce<Record<string,Ev[]>>((a,e)=>{(a[e.d]??=[]).push(e);return a},{});
  return <section id="schedule" className="relative z-20 mx-auto max-w-xl px-5 py-16">
    <h2 className="mb-10 text-center font-serif text-3xl font-bold text-gold">{S.sched[l]}</h2>
    {Object.entries(days).map(([d,evs])=>{const dt=new Date(d+"T00:00:00");return <motion.div key={d} {...view} className="mb-12">
      <p className="mb-5 text-center font-serif text-xl"><b className="text-5xl text-gold">{dt.toLocaleDateString(loc(l),{day:"numeric"})}</b> {dt.toLocaleDateString(loc(l),{month:"long",weekday:"long"})}</p>
      <div className="relative ml-24 border-l border-paper/40 pl-6">{evs.map(e=><motion.div key={e.id} initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7}} className="relative mb-8">
        <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-paper"/><span className="absolute -left-[118px] top-0.5 w-20 text-right text-sm">{time(e,l)}</span>
        <h3 className="font-serif text-xl font-bold">{e.name[l]}</h3><p className="text-sm text-gold">{VENUES[e.v].name[l]}</p><p className="mt-1 text-paper/85">{e.meaning[l]}</p>
        <a href={calUrl(e)} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">{S.cal[l]}</a></motion.div>)}</div></motion.div>})}
  </section>;
}

function Dress({l}:{l:Lang}){
  return <section id="dress" className="relative z-20 mx-auto max-w-xl px-5 py-16"><h2 className="mb-10 text-center font-serif text-3xl font-bold text-gold">{S.dress[l]}</h2>
    {EVENTS.map(e=><motion.div key={e.id} {...view} className="mb-6 flex items-center justify-between gap-4 border-b border-paper/20 pb-4">
      <div><h3 className="font-serif text-lg font-bold">{e.name[l]}</h3><p className="text-sm text-paper/80">{e.wear[l]}</p></div><Dots pal={e.pal}/></motion.div>)}</section>;
}

function Venue({l}:{l:Lang}){
  return <section id="venue" className="relative z-20 mx-auto max-w-2xl px-5 py-16"><h2 className="mb-10 text-center font-serif text-3xl font-bold text-gold">{S.venue[l]}</h2>
    {(["w","g"] as const).map(k=><motion.div key={k} {...view} className="mb-10 text-center">
      <p className="text-sm text-gold">{EVENTS.filter(e=>e.v===k).map(e=>e.name[l]).join(", ")}</p>
      <h3 className="font-serif text-2xl font-bold">{VENUES[k].name[l]}</h3><p className="mb-4 text-paper/80">{VENUES[k].addr[l]}</p>
      <iframe title={VENUES[k].name.en} loading="lazy" className="h-64 w-full rounded-lg border-2 border-gold" src={`https://www.google.com/maps?q=${encodeURIComponent(VENUES[k].q)}&output=embed`}/>
      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUES[k].q)}`} target="_blank" rel="noopener" className="mt-3 inline-flex min-h-11 items-center underline underline-offset-4">{S.map[l]}</a></motion.div>)}</section>;
}

export default function Wedding(){
  const [l,setL]=useState<Lang>("en"), [entered,setEntered]=useState(false), bn=l==="bn";
  useEffect(()=>{document.documentElement.lang=l},[l]);
  return <main className="silk min-h-screen text-paper">
    <AnimatePresence>{!entered&&<Intro l={l} done={()=>setEntered(true)}/>}</AnimatePresence>
    <Petals/>
    <button onClick={()=>setL(bn?"en":"bn")} className="fixed right-4 top-4 z-40 min-h-11 rounded-full border border-gold bg-black/30 px-5 text-sm font-semibold backdrop-blur">{bn?"English":"বাংলা"}</button>
    <header className="relative flex min-h-[90svh] items-center justify-center overflow-hidden px-6 text-center"><Alpona/>
      <motion.h1 initial={{opacity:0,y:30}} animate={entered?{opacity:1,y:0}:{}} transition={{duration:1.2,delay:.2}} className="relative font-serif text-[clamp(3.4rem,16vw,7.5rem)] font-extrabold leading-[.95]">
        {bn?"বৈশালী":"Baishalee"}<span className="block text-gold">{bn?"ও হীরক":"& Hirak"}</span>
        <span className="mt-6 block font-sans text-lg font-normal">{new Date(2026,11,11).toLocaleDateString(loc(l),{day:"numeric",month:"long"})} – {new Date(2026,11,16).toLocaleDateString(loc(l),{day:"numeric",month:"long",year:"numeric"})}</span></motion.h1></header>
    <div className="relative z-20 px-4"><Invite l={l}/></div><Gallery l={l}/><Schedule l={l}/><Dress l={l}/><Venue l={l}/>
    <footer className="relative z-20 pb-12 text-center text-paper/70">Baishalee &amp; Hirak</footer>
  </main>;
}
