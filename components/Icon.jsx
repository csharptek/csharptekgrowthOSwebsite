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
  linkedin: <><path d="M6.5 9.5v8M6.5 6.2v.1"/><path d="M11 17.5v-8M11 12.8c0-2 1.3-3.3 3.1-3.3s2.9 1.2 2.9 3.2v4.8"/><rect x="3" y="3" width="18" height="18" rx="3"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 8 8 6 8-6"/></>,
  x: <><path d="M4 4l16 16M20 4 4 20"/></>,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="4"/><path d="m10.5 9.5 4 2.5-4 2.5v-5Z"/></>,
  facebook: <><path d="M14 8h2.5V4.5H14a3.5 3.5 0 0 0-3.5 3.5v2H8v3.5h2.5V20H14v-6.5h2.3l.5-3.5H14V8.2c0-.1 0-.2 0-.2Z"/></>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><path d="M16.8 7.2v.1"/></>,
  plusSmall: <><path d="M12 5v14M5 12h14"/></>,
  whatsapp: <><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z"/><path d="M9.2 8.6c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .4-.1.6l-.4.5c.5 1 1.3 1.8 2.3 2.3l.5-.4c.2-.1.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .2 0 .5-.4.7-.5.3-1.2.4-1.8.2a7.6 7.6 0 0 1-4.8-4.8c-.2-.6-.1-1.3.2-1.8Z"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>
};

export default function Icon({ name = 'arrow', size = 20, strokeWidth = 1.7, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
