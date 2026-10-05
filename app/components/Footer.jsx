import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="ft-col">
          <h4>Product</h4>
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        <div className="ft-col">
          <h4>Solutions</h4>
          <ul>
            <li><Link href="/solutions/ai-engineering">AI Engineering</Link></li>
            <li><Link href="/solutions/product-engineering">Product Engineering</Link></li>
            <li><Link href="/solutions/azure-cloud">Azure Cloud</Link></li>
            <li><Link href="/solutions/modernization">Modernization</Link></li>
          </ul>
        </div>

        <div className="ft-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@csharptek.com">📧 info@csharptek.com</a></li>
            <li><a href="https://wa.me/919229069558" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a></li>
            <li><a href="https://outlook.office.com/book/BookMeetingwithBhanuGupta@csharptek.com" target="_blank" rel="noopener noreferrer">📅 Book a Call</a></li>
            <li><a href="/privacy-policy">📄 Privacy Policy</a></li>
          </ul>
          <div className="ft-resp">
            <div className="ft-resp-t">🕐 Response Time</div>
            <div className="ft-resp-s">We reply within 24 hours.</div>
          </div>
          <div style={{marginTop:'20px',background:'#fff',borderRadius:'10px',padding:'12px 14px',display:'inline-block',minWidth:'160px'}}>
            <div style={{fontFamily:'serif',fontWeight:'700',fontSize:'15px',color:'#17313b',letterSpacing:'1px',marginBottom:'6px'}}>Clutch</div>
            <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
              <div style={{display:'flex',gap:'2px'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#e62415"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#e62415"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#e62415"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#e62415"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#e62415"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <span style={{fontSize:'11px',color:'#333',fontWeight:'600'}}>5.0 · 4 Reviews</span>
            </div>
            <a href="https://clutch.co/profile/csharptek" target="_blank" rel="noopener noreferrer" style={{fontSize:'10px',color:'#e62415',fontWeight:'600',textDecoration:'none',display:'block',marginTop:'4px'}}>See Reviews →</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap">
          <p>&copy; 2026 Csharptek. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
