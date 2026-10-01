import { ImageResponse } from 'next/og';

export const alt = 'Csharptek — AI, Product Engineering & Modernization';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'66px 76px',background:'linear-gradient(125deg,#07131f 0%,#0b2032 62%,#123e5a 100%)',color:'#fff',fontFamily:'Arial,sans-serif',position:'relative',overflow:'hidden'}}><div style={{position:'absolute',width:600,height:600,border:'1px solid rgba(121,201,232,.2)',borderRadius:'50%',right:-30,top:-220,boxShadow:'0 0 0 45px rgba(121,201,232,.04),0 0 0 100px rgba(121,201,232,.03)'}}/><div style={{display:'flex',alignItems:'center',gap:14,fontWeight:700,fontSize:25}}><div style={{width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center',background:'#17384e',borderRadius:14}}>C<span style={{color:'#79c9e8'}}>#</span></div><span>Csharptek<span style={{color:'#ff6b3d'}}>.</span></span></div><div style={{display:'flex',flexDirection:'column',position:'relative'}}><span style={{color:'#9eddf2',fontSize:17,letterSpacing:5,textTransform:'uppercase',marginBottom:23}}>AI · Product Engineering · Modernization</span><div style={{display:'flex',flexWrap:'wrap',fontSize:64,lineHeight:1.05,fontWeight:700,letterSpacing:-3,maxWidth:850}}>Turn complex initiatives into <span style={{color:'#79c9e8'}}>production-ready</span> systems.</div></div><div style={{fontSize:20,color:'#b6c5cf'}}>Engineering for what your business needs to move forward.</div></div>, size);
}
