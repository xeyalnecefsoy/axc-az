'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Users } from 'lucide-react'

const links = [
  { href: '/', label: 'Ana səhifə', Icon: Home },
  { href: '/tarix', label: 'Tarix', Icon: BookOpen },
  { href: '/qurucular', label: 'Qurucular', Icon: Users },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-wood-100">
      <div className="container-px max-w-6xl mx-auto flex items-center justify-between h-14">
        <Link href="/" className="font-serif text-xl text-wood-800">
          Azərbaycan Xalq Cümhuriyyəti
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-wood-50 inline-flex items-center gap-2 ${
                  active ? 'text-wood-900 bg-wood-50' : 'text-wood-700'
                }`}
              >
                <l.Icon className="h-4 w-4" />
                {l.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
