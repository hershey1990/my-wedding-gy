export default () => {
  return (
    //  modal para confirmar que confirmaste invitacion
    <div
      class="fixed inset-0 bg-[rgba(0,0,0,0.8)] bg-opacity-80 flex items-center justify-center z-50"
      id="confirmation-modal"
    >
      <div class="bg-white rounded-lg p-6 w-11/12 max-w-md">
        <h2 class="text-2xl font-semibold mb-4">Confirmación de Asistencia</h2>
        <p class="mb-6">
          Gracias por confirmar tu asistencia. ¡Estamos emocionados de celebrar
          juntos!
        </p>
        <img
          src="https://3mndwrm41a37dpt7.public.blob.vercel-storage.com/85d6bd3a1c798a6daaeebbc257975df8-removebg-preview.png"
          alt=""
        />
        <button
          class="bg-[var(--tone-300)] hover:bg-[var(--tone-400)] text-[var(--shade-900)] px-4 py-2 rounded-lg transition mt-6"
          onClick={() => {
            // Lógica para cerrar el modal
            const modal = document.querySelector("#confirmation-modal");
            if (modal) {
              modal.remove();
            }
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
