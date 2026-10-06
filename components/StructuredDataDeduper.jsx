'use client';

import { useEffect } from 'react';

function removeDuplicateStructuredData() {
  const seen = new Set();
  document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
    try {
      const key = JSON.stringify(JSON.parse(script.textContent));
      if (seen.has(key)) script.remove();
      else seen.add(key);
    } catch {
      // Leave invalid or non-JSON script contents untouched for diagnostics.
    }
  });
}

export default function StructuredDataDeduper() {
  useEffect(() => {
    removeDuplicateStructuredData();
    const observer = new MutationObserver(removeDuplicateStructuredData);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
