function AboutSection() {
  return (
    <section id="sobre-mi" className="about-section scroll-mt-8">
      <div className="mx-auto grid max-w-[1440px] gap-9 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-16 lg:py-24">
        <div className="flex items-center gap-5 sm:gap-7 lg:flex-col lg:items-start">
          <img
            className="about-logo h-28 w-28 shrink-0 bg-white object-cover object-center sm:h-36 sm:w-36 lg:h-52 lg:w-52"
            src="/logo.jpg"
            alt="Logotipo de SCJ Visuals Photography"
          />
          <div>
            <p className="eyebrow mb-3">01 / Sobre mí</p>
            <h2 className="font-display text-2xl sm:text-4xl">Samuel Calderón</h2>
            <p className="mt-3 text-[10px] uppercase leading-5 tracking-[0.1em] text-mid sm:text-xs">
              21 años <span className="px-1.5">·</span> Estudiante de Fotografía
              <br />CESDE
            </p>
            <p className="mt-4 border-t border-line pt-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-mid sm:text-[11px]">
              Especialidad <span className="mt-1 block text-ink">Fotografía automotriz</span>
            </p>
          </div>
        </div>

        <div className="about-copy flex flex-col justify-center gap-6 border-t border-line pt-7 text-sm leading-7 text-mid sm:text-base sm:leading-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p>
            Mi nombre es Samuel Calderón, tengo 21 años y soy estudiante de Fotografía en CESDE, interesado en explorar las distintas posibilidades del lenguaje fotográfico a través de diferentes géneros y propuestas visuales. Mi trabajo abarca diversos tipos de fotografía, lo que me permite experimentar con la composición, la iluminación, la perspectiva y la narrativa visual, adaptándome a las necesidades y características de cada proyecto.
          </p>
          <p>
            Mi principal especialidad es la fotografía automotriz, un campo en el que busco destacar el diseño, las líneas, los volúmenes, las texturas y los acabados de cada vehículo. A través del manejo de la luz, los reflejos y los diferentes ángulos, me enfoco en resaltar la esencia y la personalidad de cada automóvil, creando imágenes que combinan precisión técnica y atractivo visual.
          </p>
          <p>
            Mi objetivo es continuar fortaleciendo mis habilidades, ampliar mi experiencia en distintos campos de la fotografía y desarrollar una identidad visual propia, manteniendo un enfoque creativo, profesional y atento a los detalles en cada proyecto que realizo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection