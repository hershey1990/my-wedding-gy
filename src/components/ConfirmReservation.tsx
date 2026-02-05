import { useState } from "preact/hooks";

export default () => {
  const handleSendConfirmation = () => {
    alert("¡Gracias por confirmar tu asistencia!");
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
      <div class="text-2xl md:text-3xl font-thin flex space-x-4">
        {/* boton dentro de un input para colocar nombre */}
        <input
          name={"name"}
          type="text"
          placeholder="Tu nombre"
          class="px-4 py-2 rounded-lg border border-[var(--border-color-dark)]"
          value={name}
          onInput={(e) => setName((e.target as HTMLInputElement).value)}
        />
        {/* Este boton envia un email confirmando a la persona */}
        <a
          href="https://forms.gle/8o5Ykz1Z6Yt6n3cX9"
          target="_blank"
          class="hover:text-[var(--shade-900)] !bg-[var(--tone-300)] px-6 py-3 rounded-lg border border-[var(--border-color-dark)] transition"
          rel="noreferrer"
          onClick={handleSendConfirmation}
        >
          Confirmar asistencia
        </a>
      </div>
      {/* Contact info */}
      <div class="mt-6 text-sm md:text-base italic">
        <p>¿Dudas o preguntas? Contáctanos:</p>
        <p>
          <strong>Gershell:</strong>{" "}
          <a
            href="tel:+50588888888"
            class="underline hover:text-[var(--shade-900)]"
          >
            +505 8888 8888
          </a>
        </p>
        <p>
          <strong>Yalaniz:</strong>{" "}
          <a
            href="tel:+50577777777"
            class="underline hover:text-[var(--shade-900)]"
          >
            +505 7777 7777
          </a>
        </p>
      </div>
    </section>
  );
};
