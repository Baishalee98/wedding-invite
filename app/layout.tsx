import "./globals.css";
import type {Metadata,Viewport} from "next";
import {Noto_Serif_Bengali,Hind_Siliguri} from "next/font/google";
const serif=Noto_Serif_Bengali({subsets:["bengali","latin"],weight:["500","700","800"],variable:"--f-serif"});
const sans=Hind_Siliguri({subsets:["bengali","latin"],weight:["400","600"],variable:"--f-sans"});
export const metadata:Metadata={title:"Baishalee & Hirak · Shubho Bibaho",description:"Dates, venues and dress codes for our wedding, 11–16 December 2026.",openGraph:{title:"Baishalee & Hirak",description:"Join us in Agartala, 11–16 December 2026"}};
export const viewport:Viewport={width:"device-width",initialScale:1,viewportFit:"cover",themeColor:"#A4161A"};
export default function Root({children}:{children:React.ReactNode}){return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>}
