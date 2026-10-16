function SiteFooter() {
  return (
    <footer id="contacto" className="site-footer scroll-mt-8">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:px-10 md:grid-cols-[1fr_2fr] lg:px-16 lg:py-16">
        <div className="flex items-center gap-4">
          <img className="h-16 w-16 object-cover object-center" src="/logo.jpg" alt="" />
          <div>
            <p className="font-display text-2xl">SCJ Visuals</p>
            <p className="footer-muted mt-1 text-[10px] uppercase tracking-[0.12em]">Photography · Medellín</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="footer-eyebrow eyebrow mb-4">03 / Contacto</p>
            <div className="flex flex-col gap-3 text-sm">
              <a className="contact-link" href="https://www.instagram.com/08_.calde?cplk=Nm1jZWx1b3lxa3p0" target="_blank" rel="noreferrer">Instagram · @08_.calde ↗</a>
              <a className="contact-link" href="tel:3227691786">322 769 1786</a>
              <a className="contact-link" href="mailto:Scalderonjimenez112@gmail.com">Scalderonjimenez112@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 sm:flex-col sm:items-end sm:gap-5">
            <p className="footer-muted text-[10px] uppercase tracking-[0.12em]">© 2025 SCJ Visuals</p>
            <a className="footer-muted text-[10px] uppercase tracking-[0.12em] transition hover:text-white" href="#inicio">Volver arriba ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter