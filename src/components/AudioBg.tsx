import { useEffect, useRef } from "preact/hooks";

export default () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.play().catch(() => {
      // Autoplay with sound can be blocked by the browser.
    });
  }, []);

  return (
    <audio
      ref={audioRef}
      preload="auto"
      autoPlay
      loop
      playsInline
      src="https://3mndwrm41a37dpt7.public.blob.vercel-storage.com/elena_y_david-BF61jgoc.mp3"
    />
  );
};
