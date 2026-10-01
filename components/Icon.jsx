const paths = {
  arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
  flow: <><rect x="3" y="4" width="7" height="6" rx="2"/><rect x="14" y="14" width="7" height="6" rx="2"/><path d="M10 7h2a3 3 0 0 1 3 3v4"/><path d="m13 12 2 2 2-2"/></>,
  orbit: <><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-35 12 12)"/><path d="m18.7 5.3.1-.1"/></>,
  plus: <><path d="M12 4v16M4 12h16"/><circle cx="12" cy="12" r="9"/></>,
  grid: <><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m18 6-12 12M6 6l12 12"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  play: <path d="m9 6 10 6-10 6V6Z"/>,
  plusSmall: <><path d="M12 5v14M5 12h14"/></>
};

export default function Icon({ name = 'arrow', size = 20, strokeWidth = 1.7, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
