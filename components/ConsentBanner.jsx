'use client';

import { useSyncExternalStore, useState } from 'react';
import Link from 'next/link';

const KEY = 'ct_analytics_consent';
const read = () => { try { return window.localStorage.getItem(KEY); } catch { return null; } };
const subscribe = () => () => {};

// Analytics load unless the visitor declines. Children are the analytics scripts.
export default function ConsentBanner({ children }) {
  const stored = useSyncExternalStore(subscribe, () => read() || 'pending', () => 'unknown');
  const [choice, setChoice] = useState(null);
  const state = choice || stored;
  const choose = (value) => { try { window.localStorage.setItem(KEY, value); } catch {} setChoice(value); };
  return <>
    {state !== 'unknown' && state !== 'declined' && children}
    {state === 'pending' && <div className="consent-banner" role="dialog" aria-label="Cookie notice"><p>We use cookies to understand how the site is used and to improve it. See our <Link href="/privacy-policy">privacy policy</Link>.</p><div><button type="button" className="button button-outline" onClick={() => choose('declined')}>Decline</button><button type="button" className="button" onClick={() => choose('accepted')}>Accept</button></div></div>}
  </>;
}
