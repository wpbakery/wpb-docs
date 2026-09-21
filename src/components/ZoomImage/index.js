import {useEffect, useState} from 'react';
import styles from './styles.module.css';

export default function ZoomImage({src, alt, height = 360}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={styles.thumb}
        style={{height}}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} role="dialog" aria-label={alt}>
          <img src={src} alt={alt} className={styles.full} />
        </div>
      )}
    </>
  );
}
