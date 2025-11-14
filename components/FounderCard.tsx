type Props = {
  name: string
  years: string
  role: string
  bio: string
  imageUrl?: string
}

import Image from 'next/image'

export function FounderCard({ name, years, role, bio, imageUrl }: Props) {
  return (
    <article className="card overflow-hidden">
      <div className="flex gap-4 p-5">
        <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden border border-wood-100 bg-wood-50">
          {imageUrl ? (
            <Image src={imageUrl} alt={name} fill className="object-cover" sizes="56px" />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-wood-900 font-serif text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-serif text-wood-900">{name}</h3>
          <p className="text-sm text-wood-700">{role} · {years}</p>
          <p className="mt-2 text-wood-900/90">{bio}</p>
        </div>
      </div>
    </article>
  )
}
