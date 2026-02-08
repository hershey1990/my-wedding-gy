import { useState } from "preact/hooks";
import { z } from "zod";
import ConfirmationModal from "./ConfirmationModal";

export default () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1, "Ingresa tu nombre"),
    phone: z
      .string()
      .trim()
      .min(1, "Ingresa tu teléfono")
      .regex(/^[0-9+()\-\s]{7,}$/, "Ingresa un teléfono válido"),
  });

  const handleSendConfirmation = (event) => {
    //Stop a propagation
    event?.preventDefault();
    setNameError("");
    setPhoneError("");
    // envia email mediante el api rsvp.js usando fetch
    const url = "/api/rsvp";
    const data = {
      name,
      phone,
    };

    const validation = schema.safeParse(data);
    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      setNameError(errors.name?.[0] ?? "");
      setPhoneError(errors.phone?.[0] ?? "");
      return;
    }

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
        // Open the ConfirmationModal
        setShowModal(true);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert(
          "Hubo un problema al enviar tu confirmación. Por favor, inténtalo de nuevo.",
        );
      });
  };

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
        class="text-2xl md:text-3xl font-thin flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full items-center w-full justify-center"
        onSubmit={handleSendConfirmation}
      >
        {/* name and phone number */}
        <div class="flex flex-col items-start">
          <input
            name="name"
            type="text"
            placeholder="Tu nombre"
            class={`px-4 py-2 rounded-lg border ${nameError ? "border-red-500" : "border-[var(--border-color-dark)]"}`}
            value={name}
            onInput={(e) => {
              setName((e.target as HTMLInputElement).value);
              setNameError("");
            }}
          />
          {nameError && <span class="text-red-500 text-sm">{nameError}</span>}
        </div>
        <div class="flex flex-col items-start">
          <input
            name="phone"
            type="text"
            placeholder="Teléfono"
            class={`px-4 py-2 rounded-lg border ${phoneError ? "border-red-500" : "border-[var(--border-color-dark)]"}`}
            value={phone}
            onInput={(e) => {
              setPhone((e.target as HTMLInputElement).value);
              setPhoneError("");
            }}
          />
          {phoneError && <span class="text-red-500 text-sm">{phoneError}</span>}
        </div>
        <button
          type="submit"
          class="hover:text-[var(--shade-900)] !bg-[var(--tone-300)] px-6 py-3 rounded-lg border border-[var(--border-color-dark)] transition max-h-[54px]"
        >
          Confirmar asistencia
        </button>
      </form>
      {/* Contact info */}
      <div class="mt-6 text-sm md:text-base">
        <p>¿Dudas o preguntas? Escríbenos</p>
      </div>
      <ConfirmationModal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};
