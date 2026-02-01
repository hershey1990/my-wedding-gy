export default function Hero() {
  return (
    <section className="w-full h-screen relative flex items-start justify-center pt-16 text-center overflow-hidden">
      <img
        className="absolute inset-0 object-cover object-center w-full h-full"
        src="https://static.wixstatic.com/media/9c608a_4a108dcab11a4da59e49fe7495ab0ef6~mv2_d_5760_2880_s_4_2.jpg/v1/fill/w_1978,h_1396,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c608a_4a108dcab11a4da59e49fe7495ab0ef6~mv2_d_5760_2880_s_4_2.jpg"
        alt="Paisaje romántico"
      />
      <div className="relative z-10 px-6 flex items-center justify-center flex-col">
        <h1 className="text-4xl tracking-[14px] font-bold mb-2 font-thin">
          Gershell & Yalaniz
        </h1>
        <p className="text-lg mb-4 italic font-thin">
          Nos vamos a casar <time dateTime="2026-03-01">01.03.2026</time>
        </p>
      </div>
    </section>
  );
}
