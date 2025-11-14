import type { Metadata } from 'next'
import { FounderCard } from '@/components/FounderCard'

export const metadata: Metadata = {
  title: 'Qurucular – Azərbaycan Xalq Cümhuriyyəti',
  description: 'ADR-in qurucu şəxsiyyətləri: Rəsulzadə, Xoyski, Yusifbəyli, Topçubaşov barədə məlumat.',
}

const founders = [
  {
    name: 'Məhəmməd Əmin Rəsulzadə',
    years: '1884–1955',
    role: 'Milli Şura sədri, dövlət xadimi',
    bio: '“Bir kərə yüksələn bayraq bir daha enməz” şüarı ilə milli dövlətçilik ideyasının simvolu, Cümhuriyyətin ideoloji əsaslarının formalaşdırılmasında aparıcı şəxs.',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Fətəli Xan Xoyski',
    years: '1875–1920',
    role: 'ADR-in ilk hökumət başçısı',
    bio: 'Dövlət quruculuğunun əsas memarlarından biri; hökumətin təşkili, hüquq-məhkəmə sisteminin qurulması və idarəçilikdə şəffaflığın təmin edilməsi.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Nəsib bəy Yusifbəyli',
    years: '1881–1920',
    role: 'Nazirlər Şurasının sədri',
    bio: 'Parlamentçilik ənənələrinin möhkəmlənməsi və çoxpartiyalı siyasi sistemin inkişafında mühüm rol oynamış dövlət xadimi.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Əlimərdan bəy Topçubaşov',
    years: '1863–1934',
    role: 'Diplomat, Paris Sülh Konfransında nümayəndə heyətinin rəhbəri',
    bio: 'ADR-in beynəlxalq tanınması üçün diplomatik fəaliyyətin əsas simalarından; beynəlxalq arenada Azərbaycanı təmsil edən tanınmış hüquqşünas və diplomat.',
    imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop',
  },
]

export default function QurucularPage() {
  return (
    <div>
      <h1>ADR-in Qurucu Şəxsiyyətləri</h1>
      <p className="mt-3 max-w-3xl">
        Aşağıda Azərbaycan Xalq Cümhuriyyətinin formalaşmasında mühüm rol oynamış bir neçə şəxs haqqında qısa məlumat
        verilir. Siyahı genişləndirilə bilər.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {founders.map((f) => (
          <FounderCard key={f.name} {...f} />
        ))}
      </div>
    </div>
  )
}
