import { useEffect, useState } from 'react';

/* Highlights the nav link whose section is currently in the viewport.
   Same observer settings as the original site. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const s = document.getElementById(id);
      if (s) io.observe(s);
    });
    return () => io.disconnect();
  }, [ids]);

  return active;
}
