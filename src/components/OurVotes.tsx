export default () => {
  return (
    <section
      id="our-votes"
      class="w-full h-[700px] bg-[var(--color-primary)] flex flex-col items-center justify-start text-center p-4 pt-[100px] relative"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:divide-x md:divide-gray-300/60 w-full max-w-4xl">
        <h2 class="md:text-2xl text-4xl md:text-3xl font-heading md:px-6 font-thin">
          ella: nadie te amará mas que yo en todo el mundo
        </h2>
        <h2 class="md:text-2xl text-4xl md:text-3xl font-heading md:px-6 font-thin">
          el: ¿brillarias como mi estrella para siempre?
        </h2>
      </div>
      <p class="mt-16 max-w-3xl text-base md:text-lg italic">
        Con esa afirmación, ella le juró su lealtad, amor y compañía eterna, la
        paciencia y resiliencia para sostener sus manos hasta en el momento más
        duro; y él, con esa pregunta, le pedía a ella que fuera su luz en la
        oscuridad, su guía y compañera en el camino de la vida.
      </p>
      <figure class="md:absolute relative md:top-[350px] top-0 w-full flex justify-center md:mt-0 mt-8">
        <img
          src="https://3mndwrm41a37dpt7.public.blob.vercel-storage.com/us.webp"
          alt=""
        />
      </figure>
    </section>
  );
};
