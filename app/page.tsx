import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/Hero'
import { BookOpen, Landmark, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ana səhifə – Azərbaycan Xalq Cümhuriyyəti',
  description:
    'ADR haqqında xülasə: dövlət quruculuğu, parlament, diplomatiya və islahatlar. Şərqdə ilk parlamentli respublika.',
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <Landmark className="h-6 w-6 text-wood-700" />
          <h3 className="mt-2">Dövlət quruculuğu</h3>
          <p className="mt-2">
            Qısa müddətdə hökumət, ordu, məhkəmə, polis kimi əsas institutlar yaradıldı; dövlət dili təsdiq olundu.
          </p>
        </div>
        <div className="card p-6">
          <BookOpen className="h-6 w-6 text-wood-700" />
          <h3 className="mt-2">Parlament və təhsil</h3>
          <p className="mt-2">Çoxpartiyalı parlament formalaşdı; 1919-cu ildə Bakı Dövlət Universiteti təsis edildi.</p>
        </div>
        <div className="card p-6">
          <Scale className="h-6 w-6 text-wood-700" />
          <h3 className="mt-2">Hüquq və bərabərlik</h3>
          <p className="mt-2">Vətəndaş hüquqları, mətbuat azadlığı və bərabərlik prinsipləri önə çəkildi.</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Tarixi sənədlər və xəritə"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3>Xarici siyasət və tanınma</h3>
            <p className="mt-2">
              Paris Sülh Konfransında nümayəndə heyəti iştirak etdi, diplomatik əlaqələr quruldu və de-fakto tanınma
              istiqamətində addımlar atıldı.
            </p>
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
              alt="Mətbuat və təhsil"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3>Mədəniyyət və modernləşmə</h3>
            <p className="mt-2">
              Təhsil, mətbuat, mədəni həyat sahələrində modernləşmə sürətləndi; maarifçilik yeni səviyyəyə qalxdı.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
