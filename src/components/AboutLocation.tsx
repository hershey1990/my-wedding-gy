export default () => {
  return (
    <section
      id="details"
      className="w-full min-h-screen flex items-center justify-center p-6  flex-col bg-white"
    >
      <div className="w-full max-w-5xl border rounded border-(--border-color) border-4 p-6 items-center justify-center flex flex-col relative ">
        {/* <img
              className="absolute inset-0 w-full h-full object-contain object-center opacity-20"
              src="https://3mndwrm41a37dpt7.public.blob.vercel-storage.com/pikachus.webp"
              alt=""
            /> */}
        {/* Icono de ubicación */}
        <div className="w-12 h-12 rounded-full border-2 border-(--color-primary) flex items-center justify-center mb-6">
          <i className="fa-solid fa-location-dot text-xl"></i>
        </div>
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-thin ">
            El Día de la boda
          </h2>
          <div id="location" class={"mt-6"}>
            <div className="mb-4">
              <p className="text-base">Domingo 1ero de Marzo</p>
              <p className="text-base">Hora: 04:00 PM</p>
            </div>
            <div>
              <p className="text-base">Salón de Eventos Bottega, Esquipulas</p>
            </div>
          </div>
        </div>
        <div id="map" className="w-full mt-8 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6012528053734!2d-86.21174992539416!3d12.070933288167753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73ff803ca6fdff%3A0x25e38d1b5b02bc1d!2sBottega%20La%20Pasta%20-%20Esquipulas!5e0!3m2!1ses!2sni!4v1769982370355!5m2!1ses!2sni"
            className="w-full h-[450px]"
            style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          ></iframe>
          {/* Google Maps Link Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.google.com/maps?q=12.070933288167753,-86.21174992539416"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-primary) text-white px-4 py-2 rounded shadow hover:bg-(--color-primary-dark) transition"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
