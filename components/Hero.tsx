import Link from 'next/link'
import Image from 'next/image'
import { Flag, Landmark, GraduationCap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-wood-100 bg-gradient-to-br from-sepia-50 to-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #D5B98D 0, transparent 40%), radial-gradient(circle at 80% 30%, #C79E66 0, transparent 35%), radial-gradient(circle at 50% 80%, #B8853F 0, transparent 35%)',
        }}
      />
      <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1>Azərbaycan Xalq Cümhuriyyəti</h1>
          <p className="mt-4 max-w-2xl text-wood-900/90">
            Şərqdə ilk parlamentli, dünyəvi respublika. 1918–1920-ci illərdə cəmi 23 ay yaşasa da, milli dövlətçilik
            tariximizin əsas sütunlarından oldu.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/tarix"
              className="inline-flex items-center rounded-md bg-wood-700 text-white px-4 py-2 shadow-soft hover:bg-wood-800 transition-colors"
            >
              Tarixi oxu
            </Link>
            <Link
              href="/qurucular"
              className="inline-flex items-center rounded-md border border-wood-200 px-4 py-2 bg-white/70 hover:bg-white text-wood-800"
            >
              Qurucuları tanı
            </Link>
          </div>
          <ul className="mt-6 grid sm:grid-cols-3 gap-3">
            <li className="card p-4 flex items-center gap-3">
              <Flag className="h-5 w-5 text-wood-700" />
              <span className="text-sm">28 May 1918 – Müstəqillik</span>
            </li>
            <li className="card p-4 flex items-center gap-3">
              <Landmark className="h-5 w-5 text-wood-700" />
              <span className="text-sm">Parlamentli respublika</span>
            </li>
            <li className="card p-4 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-wood-700" />
              <span className="text-sm">1919 – BDU təsis olundu</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-wood-100 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop"
              alt="Tarixi sənəd və köhnə yazı maşını"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
