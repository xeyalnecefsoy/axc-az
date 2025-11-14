import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tarix – Azərbaycan Xalq Cümhuriyyəti',
  description:
    'ADR-in yaranması, dövlətçilik, parlament, diplomatiya, təhsil və islahatlar barədə geniş məlumat.',
}

export default function TarixPage() {
  return (
    <article className="max-w-none space-y-6">
      <h1>ADR-in Tarixi</h1>

      <section className="card overflow-hidden">
        <div className="relative aspect-[16/7] w-full">
          <Image
            src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1920&auto=format&fit=crop"
            alt="Tarixi arxiv sənədləri"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="p-6">
          <h2>Yaranma (28 may 1918)</h2>
          <p className="mt-2">
            1918-ci il mayın 28-də Tiflis şəhərində Azərbaycan Milli Şurası Azərbaycanın müstəqilliyini elan etdi və
            Azərbaycan Xalq Cümhuriyyəti yaradıldı. Ali idarəetmə orqanları — Milli Şura və hökumət təşkil olundu.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2>Dövlətçilik və Parlament</h2>
          <p className="mt-2">
            1918–1920-ci illərdə çoxpartiyalı Parlament fəaliyyət göstərdi; icra hakimiyyəti formalaşdı, ordu, məhkəmə və
            polis institutları yaradıldı. Dövlət dili Azərbaycan dili elan edildi, bayraq və gerb təsdiq olundu.
          </p>
        </div>
        <div className="card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
              alt="Parlament zalı"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop"
              alt="Diplomatik yazışmalar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="card p-6">
          <h2>Xarici siyasət və Diplomatiya</h2>
          <p className="mt-2">
            ADR beynəlxalq tanınma üçün fəal diplomatik siyasət yürüdürdü. Paris Sülh Konfransında nümayəndə heyəti
            iştirak etdi, bir sıra dövlətlərlə əlaqələr quruldu və de-fakto tanınma istiqamətində addımlar atıldı.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2>Təhsil və İslahatlar</h2>
          <p className="mt-2">
            1919-cu ildə Bakı Dövlət Universiteti təsis edildi. Təhsil, mətbuat və mədəni həyatda modernləşmə sürətləndi,
            vətəndaş hüquqları və bərabərlik prinsipləri önə çəkildi.
          </p>
        </div>
        <div className="card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1523246199720-8f80b3d0f73a?q=80&w=1600&auto=format&fit=crop"
              alt="Təhsil və universitet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="card p-6">
        <h2>Süqut (aprel 1920)</h2>
        <p className="mt-2">
          1920-ci ilin aprelində ADR bolşevik qoşunlarının işğalı nəticəsində süqut etdi. Bununla belə, cümhuriyyət ideyası
          milli dövlətçilik düşüncəsinin formalaşmasına güclü təsir göstərdi.
        </p>
      </section>
    </article>
  )
}
