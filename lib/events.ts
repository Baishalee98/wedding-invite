export type Lang="en"|"bn";
export type T={en:string;bn:string};
export const VENUES={
 w:{name:{en:"Agartala Club",bn:"আগরতলা ক্লাব"},addr:{en:"MBB College Road, Shibnagar, Agartala",bn:"এমবিবি কলেজ রোড, শিবনগর, আগরতলা"},q:"Agartala Club, MBB College Road, Shibnagar, Agartala"},
 g:{name:{en:"Groom’s residence",bn:"বরের বাড়ি"},addr:{en:"Nichilamari, Orang",bn:"নিচিলামারি, ওরাং"},q:"Nichilamari, Orang, Tripura"}} as const;
export type Ev={id:string;v:"w"|"g";d:string;t:string;end:string;on?:boolean;color:string;pal:string[];name:T;meaning:T;wear:T};
// Edit this list to change anything on the site. Sorted by date/time automatically.
export const EVENTS:Ev[]=([
{id:"haldi",v:"w",d:"2026-12-11",t:"10:00",end:"13:00",color:"#E0A800",pal:["#F5C518","#FFF0A8","#FFFDF8"],name:{en:"Gaye Holud",bn:"গায়ে হলুদ"},
 meaning:{en:"Turmeric is applied to bless and brighten the couple. Expect music, laughter and a little mess.",bn:"হলুদ মাখিয়ে বর-কনেকে আশীর্বাদ। গান, হাসি আর একটু রঙের ছোঁয়া।"},wear:{en:"Yellow and marigold. Wear something that can take a stain.",bn:"হলুদ ও গাঁদা রঙ। দাগ লাগলে ক্ষতি নেই এমন পোশাক পরুন।"}},
{id:"mehendi",v:"w",d:"2026-12-11",t:"16:00",end:"19:00",color:"#3D7A3A",pal:["#3D7A3A","#C9A227","#F4E7B2"],name:{en:"Mehendi",bn:"মেহেন্দি"},
 meaning:{en:"An afternoon of henna artists, music and dance.",bn:"মেহেন্দি শিল্পী, গান ও নাচের বিকেল।"},wear:{en:"Greens and mustard. Light, festive and easy to dance in.",bn:"সবুজ ও সরষে রঙ। হালকা ও নাচের উপযোগী পোশাক।"}},
{id:"adibash",v:"w",d:"2026-12-11",t:"20:00",end:"22:00",color:"#B3122B",pal:["#B3122B","#FFFDF8","#E8A317"],name:{en:"Adibash",bn:"আদিবাস"},
 meaning:{en:"Blessings and ritual preparation on the evening before the wedding.",bn:"বিয়ের আগের সন্ধ্যায় আশীর্বাদ ও আচারের প্রস্তুতি।"},wear:{en:"Red, white and turmeric. Traditional wear preferred.",bn:"লাল, সাদা ও হলুদ। ঐতিহ্যবাহী পোশাক পছন্দনীয়।"}},
{id:"bibaho",v:"w",on:true,d:"2026-12-12",t:"18:00",end:"23:59",color:"#A4161A",pal:["#A4161A","#C9A227","#FFFDF8"],name:{en:"Wedding",bn:"শুভ বিবাহ"},
 meaning:{en:"The main muhurat: Subho Drishti, Mala Bodol, Saat Paak and Sindoor Daan.",bn:"মূল লগ্ন: শুভদৃষ্টি, মালাবদল, সাত পাক ও সিঁদুর দান।"},wear:{en:"Red and gold. Lal-paar saree or dhuti-panjabi.",bn:"লাল ও সোনালি। লাল পাড় শাড়ি বা ধুতি-পাঞ্জাবি।"}},
{id:"boubhat",v:"g",d:"2026-12-14",t:"13:00",end:"15:30",color:"#C98B8B",pal:["#FFFDF8","#F3D9D2","#A4161A"],name:{en:"Bou Bhat",bn:"বউভাত"},
 meaning:{en:"The bride’s first meal, hosted by the groom’s family to welcome her home.",bn:"বরের পরিবারের আয়োজনে নববধূর প্রথম ভোজ।"},wear:{en:"Ivory and pastels with a soft red border.",bn:"আইভরি ও হালকা রঙ, নরম লাল পাড়।"}},
{id:"dinner",v:"g",d:"2026-12-15",t:"20:00",end:"23:00",color:"#0F6B5C",pal:["#0B1F3A","#0F6B5C","#C9A227"],name:{en:"Dinner party",bn:"শুভ রাত্রি ডিনার"},
 meaning:{en:"A relaxed celebration dinner with friends and family.",bn:"বন্ধু ও পরিবারের সঙ্গে নৈশভোজ।"},wear:{en:"Midnight blue, emerald and jewel tones.",bn:"গাঢ় নীল, পান্না সবুজ ও রত্ন রঙ।"}},
{id:"reception",v:"g",on:true,d:"2026-12-16",t:"17:00",end:"23:00",color:"#7A1230",pal:["#7A1230","#C9A227","#1E1212"],name:{en:"Reception",bn:"রিসেপশন"},
 meaning:{en:"The formal celebration with dinner, toasts and music.",bn:"ভোজ, শুভেচ্ছা ও গানে আনুষ্ঠানিক উদযাপন।"},wear:{en:"Formal. Maroon, black and gold.",bn:"আনুষ্ঠানিক। মেরুন, কালো ও সোনালি।"}}
] as Ev[]).sort((a,b)=>(a.d+a.t).localeCompare(b.d+b.t));
export const UI={
 invite:{en:"We are getting married",bn:"আমাদের বিয়ে"},cta:{en:"See the schedule",bn:"অনুষ্ঠানসূচি দেখুন"},
 days:{en:"days to go",bn:"দিন বাকি"},sched:{en:"Schedule",bn:"অনুষ্ঠানসূচি"},dress:{en:"What to wear",bn:"কী পরবেন"},venue:{en:"Where to go",bn:"কোথায় যাবেন"},
 more:{en:"Details",bn:"বিস্তারিত"},less:{en:"Close",bn:"বন্ধ করুন"},about:{en:"About",bn:"পরিচিতি"},cal:{en:"Add to calendar",bn:"ক্যালেন্ডারে যোগ করুন"},
 map:{en:"Open in Maps",bn:"ম্যাপে খুলুন"},on:{en:"onwards",bn:"থেকে"},nav:{en:["Schedule","Dress","Venue"],bn:["সূচি","পোশাক","স্থান"]}} as const;
