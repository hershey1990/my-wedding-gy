export default function Hero() {
  return (
    <section className="hero-parallax w-full md:h-screen top-0 left-0 flex items-center justify-center text-center overflow-hidden">
      <div
        id="great-news"
        className="relative z-10 w-[calc(100%-2rem)] max-w-md px-6 py-6 bg-white/70 rounded-lg flex items-center justify-center flex-col mt-[100px] md:mt-0 "
      >
        <h1 className="text-5xl font-bold mb-2 font-thin !text-[var(--shade-800)]">
          Gershell & Yalaniz
        </h1>
        <p className="text-lg mb-4 italic font-normal">¡Nos vamos a casar!</p>
        <time
          dateTime="2026-03-01"
          className="flex items-center text-2xl md:text-3xl font-thin divide-x divide-[var(--border-color)]"
        >
          <span className="px-3">01</span>
          <span className="px-3">03</span>
          <span className="px-3">2026</span>
        </time>
      </div>
    </section>
  );
}
