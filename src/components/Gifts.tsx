export default () => {
  return (
    <section id="gifts">
      <div class="w-full mb-20 bg-white flex flex-col items-center justify-start text-center p-4 pt-[100px] relative">
        <h2 class="text-3xl md:text-4xl font-heading mb-6">
          Nuestra lista de regalos
        </h2>
        <p
          class="text-lg max-w-2xl mb-6 relative h-[300px]"
          style={{
            backgroundImage:
              "url('https://3mndwrm41a37dpt7.public.blob.vercel-storage.com/pikachus.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#222",
            zIndex: 1,
          }}
        >
          <span
            style={{
              position: "relative",
              zIndex: 2,
              background: "rgba(255,255,255,0.85)",
              display: "inline-block",
              padding: "0.5em 1em",
              borderRadius: "0.5em",
            }}
          >
            Tu presencia es el mejor regalo que podemos recibir. Si deseáis
            contribuir a nuestro próximo viaje juntos, podes hacerlo de la forma
            que te resulte más cómoda.
          </span>
        </p>
        {/* Cuentas de banco */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full max-w-4xl">
          <div class="border border-[var(--border-color-dark)] rounded-lg p-6 flex flex-col items-center">
            <h3 class="text-2xl font-heading mb-4">
              Cuenta Bancaria - Gershell
            </h3>
            <p class="mb-2">
              <strong>Banco:</strong> Banco de América Central (BAC)
            </p>
            <p class="mb-2">
              <strong>Número de Cuenta:</strong> 1234567890
            </p>
            <p class="mb-2">
              <strong>Tipo de Cuenta:</strong> Ahorros
            </p>
            <p class="mb-2">
              <strong>Titular:</strong> Gershell López
            </p>
          </div>
          <div class="border border-[var(--border-color-dark)] rounded-lg p-6 flex flex-col items-center">
            <h3 class="text-2xl font-heading mb-4">
              Cuenta Bancaria - Yalaniz
            </h3>
            <p class="mb-2">
              <strong>Banco:</strong> Banco Lafise
            </p>
            <p class="mb-2">
              <strong>Número de Cuenta:</strong> 0987654321
            </p>
            <p class="mb-2">
              <strong>Tipo de Cuenta:</strong> Corriente
            </p>
            <p class="mb-2">
              <strong>Titular:</strong> Yalaniz Delgado
            </p>
          </div>
        </div>
        {/* O dinero en efectivo */}
        <div class="mt-8 max-w-2xl">
          <p>
            También podéis optar por darnos dinero en efectivo durante la boda,
            lo cual será igual de maravilloso y sera bien usado para nuestro
            futuro juntos.
          </p>
        </div>
      </div>
    </section>
  );
};
