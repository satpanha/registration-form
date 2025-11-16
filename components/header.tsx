'use client'

import { HeaderButton } from '@/components/common/header-button'
import { LANGUAGES } from '@/lib/constants'

export default function Header() {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">🏅</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Ministry of Education</h1>
              <p className="text-sm text-muted-foreground">Youth and Sport of Cambodia</p>
            </div>
          </div>
          <div className="flex gap-3">
            <HeaderButton variant="outline">Register as Leader</HeaderButton>
            <HeaderButton variant="primary">Register as Player</HeaderButton>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
