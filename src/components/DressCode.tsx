export default () => {
  return (
    <section
      id="dress-code"
      class={
        "flex flex-row w-full max-w-[800px] m-auto gap-18 justify-center mt-40 pb-40"
      }
    >
      <img
        src="https://3mndwrm41a37dpt7.public.blob.vercel-storage.com/dresscode.png"
        class={"h-[400px]"}
        alt=""
      />
      <div>
        <h2 class="text-4xl md:text-5xl font-heading text-left mt-16">
          Código de Vestimenta
        </h2>
        <p class="text-left mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Para la ceremonia, les pedimos a todos los invitados que vistan
          formal. Para la fiesta, pueden elegir cualquier color excepto blanco o
          crema que se reserva para los novios. Queremos que todos se sientan
          cómodos y elegantes, y creemos que esta elección reflejará la
          atmósfera que deseamos crear.
        </p>
      </div>
    </section>
  );
};
