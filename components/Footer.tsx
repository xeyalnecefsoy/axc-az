export function Footer() {
  return (
    <footer className="mt-10 border-t border-wood-100 bg-white/60">
      <div className="container-px max-w-6xl mx-auto py-8 text-sm text-wood-800 grid md:grid-cols-3 gap-6">
        <div>
          <p className="font-serif text-wood-900">Azərbaycan Xalq Cümhuriyyəti</p>
          <p className="opacity-80 mt-2">Tarixə hörmətlə · Zərif, sadə və funksional dizayn</p>
          <p className="mt-3">© {new Date().getFullYear()}</p>
        </div>
        <nav>
          <p className="font-serif text-wood-900">Keçidlər</p>
          <ul className="mt-2 space-y-1">
            <li><a href="/">Ana səhifə</a></li>
            <li><a href="/tarix">Tarix</a></li>
            <li><a href="/qurucular">Qurucular</a></li>
          </ul>
        </nav>
        <div>
          <p className="font-serif text-wood-900">Mənbələr</p>
          <ul className="mt-2 space-y-1">
            <li><a href="https://az.wikipedia.org" target="_blank" rel="noreferrer">Vikipediya (az)</a></li>
            <li><a href="https://www.azerbaijan.az" target="_blank" rel="noreferrer">azerbaijan.az</a></li>
            <li><a href="https://azertag.az" target="_blank" rel="noreferrer">AZƏRTAC</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
