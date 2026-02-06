import { useState } from "preact/hooks";

export default () => {
  const handleSendConfirmation = (event) => {
    //Stop a propagation
    event?.preventDefault();
    // envia email mediante el api rsvp.js usando fetch
    const url = "https://my-wedding-gy.vercel.app/api/rsvp";
    const data = {
      name,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("¡Gracias por confirmar tu asistencia!");
        setName("");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert(
          "Hubo un problema al enviar tu confirmación. Por favor, inténtalo de nuevo.",
        );
      });
  };

  const [name, setName] = useState("");

  return (
    <section
      id="rsvp"
      class="w-full h-[600px] bg-[var(--color-primary)] flex flex-col items-center justify-center text-center p-4 gap-4"
    >
      {/* Esperamos nos acompañes */}
      <h2 class="text-3xl md:text-4xl font-heading font-thin mb-4">
        ¡Esperamos nos acompañes en nuestro gran día!
      </h2>
      {/* Confirmar asistencia */}
      <form
        class="text-2xl md:text-3xl font-thin flex space-x-4"
        onSubmit={handleSendConfirmation}
      >
        <input
          name="name"
          type="text"
          placeholder="Tu nombre"
          class="px-4 py-2 rounded-lg border border-[var(--border-color-dark)]"
          value={name}
          onInput={(e) => setName((e.target as HTMLInputElement).value)}
        />
        <button
          type="submit"
          class="hover:text-[var(--shade-900)] !bg-[var(--tone-300)] px-6 py-3 rounded-lg border border-[var(--border-color-dark)] transition"
        >
          Confirmar asistencia
        </button>
      </form>
      {/* Contact info */}
      <div class="mt-6 text-sm md:text-base">
        <p>¿Dudas o preguntas? Escríbenos</p>
      </div>
    </section>
  );
};
