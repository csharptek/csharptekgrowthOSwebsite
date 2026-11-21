import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

/** Shared social-share image: eyebrow, headline (accent part in light blue) and footer line. */
export function ogImage({ eyebrow = 'AI Data Protection · AI Engineering · Modernization', title, accent = '', footer = 'Microsoft 365 security, Azure AI and .NET engineering' }) {
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'66px 76px',background:'linear-gradient(125deg,#07131f 0%,#0b2032 62%,#123e5a 100%)',color:'#fff',fontFamily:'Arial,sans-serif',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',width:600,height:600,border:'1px solid rgba(121,201,232,.2)',borderRadius:'50%',right:-30,top:-220,boxShadow:'0 0 0 45px rgba(121,201,232,.04),0 0 0 100px rgba(121,201,232,.03)'}}/>
    <div style={{display:'flex',alignItems:'center',gap:14,fontWeight:700,fontSize:25}}><div style={{width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center',background:'#17384e',borderRadius:14}}>C<span style={{color:'#79c9e8'}}>#</span></div><span>Csharptek<span style={{color:'#ff6b3d'}}>.</span></span></div>
    <div style={{display:'flex',flexDirection:'column',position:'relative'}}>
      <span style={{color:'#9eddf2',fontSize:17,letterSpacing:5,textTransform:'uppercase',marginBottom:23}}>{eyebrow}</span>
      <div style={{display:'flex',flexWrap:'wrap',fontSize:title.length + accent.length > 60 ? 52 : 62,lineHeight:1.08,fontWeight:700,letterSpacing:-2,maxWidth:1000}}>{title}{accent && <span style={{color:'#79c9e8',marginLeft:14}}>{accent}</span>}</div>
    </div>
    <div style={{fontSize:20,color:'#b6c5cf'}}>{footer}</div>
  </div>, ogSize);
}
