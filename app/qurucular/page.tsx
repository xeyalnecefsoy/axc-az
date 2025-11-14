import type { Metadata } from "next";
import { FounderCard } from "@/components/FounderCard";

export const metadata: Metadata = {
  title: "Qurucular – Azərbaycan Xalq Cümhuriyyəti",
  description:
    "ADR-in qurucu şəxsiyyətləri: Rəsulzadə, Xoyski, Yusifbəyli, Topçubaşov barədə məlumat.",
};

const founders = [
  {
    name: "Məhəmməd Əmin Rəsulzadə",
    years: "1884–1955",
    role: "Milli Şura sədri, dövlət xadimi",
    bio: "“Bir kərə yüksələn bayraq bir daha enməz” şüarı ilə milli dövlətçilik ideyasının simvolu, Cümhuriyyətin ideoloji əsaslarının formalaşdırılmasında aparıcı şəxs.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mahammad_Amin_Rasulzade_8.jpg/250px-Mahammad_Amin_Rasulzade_8.jpg",
  },
  {
    name: "Fətəli Xan Xoyski",
    years: "1875–1920",
    role: "ADR-in ilk hökumət başçısı",
    bio: "Dövlət quruculuğunun əsas memarlarından biri; hökumətin təşkili, hüquq-məhkəmə sisteminin qurulması və idarəçilikdə şəffaflığın təmin edilməsi.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Fatali_Khan_Khoyski.jpg",
  },
  {
    name: "Nəsib bəy Yusifbəyli",
    years: "1881–1920",
    role: "Nazirlər Şurasının sədri",
    bio: "Parlamentçilik ənənələrinin möhkəmlənməsi və çoxpartiyalı siyasi sistemin inkişafında mühüm rol oynamış dövlət xadimi.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Nasib_bey_Yusifbeyli_%28cropped%29.jpg/250px-Nasib_bey_Yusifbeyli_%28cropped%29.jpg",
  },
  {
    name: "Əlimərdan bəy Topçubaşov",
    years: "1863–1934",
    role: "Diplomat, Paris Sülh Konfransında nümayəndə heyətinin rəhbəri",
    bio: "ADR-in beynəlxalq tanınması üçün diplomatik fəaliyyətin əsas simalarından; beynəlxalq arenada Azərbaycanı təmsil edən tanınmış hüquqşünas və diplomat.",
    imageUrl: "https://qebulol.az/wp-content/uploads/2025/07/eli1.jpg",
  },
];

export default function QurucularPage() {
  return (
    <div>
      <h1>ADR-in Qurucu Şəxsiyyətləri</h1>
      <p className="mt-3 max-w-3xl">
        Aşağıda Azərbaycan Xalq Cümhuriyyətinin formalaşmasında mühüm rol
        oynamış bir neçə şəxs haqqında qısa məlumat verilir. Siyahı
        genişləndirilə bilər.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {founders.map((f) => (
          <FounderCard key={f.name} {...f} />
        ))}
      </div>
    </div>
  );
}
