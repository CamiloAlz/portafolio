function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:px-16">
        <a href="#inicio" className="site-brand flex items-center gap-3 sm:gap-4" aria-label="SCJ Visuals, inicio">
          <img className="site-logo h-14 w-14 object-cover object-center sm:h-[76px] sm:w-[76px]" src="/logo.jpg" alt="" />
          <span className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm">SCJ Visuals</span>
            <span className="text-[9px] uppercase tracking-[0.16em] text-mid sm:text-[10px]">Photography</span>
          </span>
        </a>
        <nav className="site-nav flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.08em] sm:gap-8 sm:text-[10px] sm:tracking-[0.12em]">
          <a href="#archivo">Archivo</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
          <span className="hidden text-mid sm:inline">ES · 2025</span>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader