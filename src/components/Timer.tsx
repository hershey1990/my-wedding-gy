import { useEffect, useState } from "preact/hooks";

const WEDDING_DATE = new Date("2026-03-01T00:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const diff = Math.max(WEDDING_DATE.getTime() - now.getTime(), 0);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

export default () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section class="w-full h-screen bg-(--border-color) flex flex-col items-center justify-center text-center p-4 pt-[250px]">
      <p>Cuenta atras</p>
      <h2 class="text-3xl md:text-4xl font-heading font-thin mb-6">
        Para el gran día
      </h2>
      <div class="text-2xl md:text-3xl font-thin flex flex-wrap justify-center gap-4">
        <div class="border border-[var(--border-color-dark)] rounded-lg px-4 py-3">
          <span id="days" class="font-bold text-[var(--shade-900)]">
            {timeLeft.days}
          </span>
          <span class="ml-2">Días</span>
        </div>
        <div class="border border-[var(--border-color-dark)] rounded-lg px-4 py-3">
          <span id="hours" class="font-bold text-[var(--shade-900)]">
            {timeLeft.hours}
          </span>
          <span class="ml-2">Horas</span>
        </div>
        <div class="border border-[var(--border-color-dark)] rounded-lg px-4 py-3">
          <span id="minutes" class="font-bold text-[var(--shade-900)]">
            {timeLeft.minutes}
          </span>
          <span class="ml-2">Minutos</span>
        </div>
        <div class="border border-[var(--border-color-dark)] rounded-lg px-4 py-3">
          <span id="seconds" class="font-bold text-[var(--shade-900)]">
            {timeLeft.seconds}
          </span>
          <span class="ml-2">Segundos</span>
        </div>
      </div>
    </section>
  );
};
