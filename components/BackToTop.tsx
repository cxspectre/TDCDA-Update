'use client';
import { useEffect, useState } from 'react';

// Appears after the first screenful of scrolling; hides again at the very top,
// where it would have nothing to do.
const REVEAL_AT = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      setVisible(scrollY > REVEAL_AT);
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(read); };
    addEventListener('scroll', request, { passive: true });
    addEventListener('resize', request);
    read();
    return () => {
      removeEventListener('scroll', request);
      removeEventListener('resize', request);
      cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = () => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className="back-to-top"
      data-visible={visible}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={toTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
