export const PROVINCES = [
  'Phnom Penh', 'Banteay Meanchey', 'Battambang', 'Kampong Cham', 'Kampong Chhnang',
  'Kampong Speu', 'Kampong Thom', 'Kampot', 'Kandal', 'Kep', 'Koh Kong', 'Kratie',
  'Mondulkiri', 'Oddar Meanchey', 'Pailin', 'Preah Vihear', 'Prey Veng', 'Pursat',
  'Ratanakiri', 'Siem Reap', 'Preah Sihanouk', 'Stung Treng', 'Svay Rieng', 'Takeo',
  'Tbong Khmum'
]

export const DEPARTMENTS = [
  'Department 1', 'Department 2', 'Department 3',
]

export const EVENT_TYPES = [
  'Event Type 1', 'Event Type 2', 'Event Type 3',
]

export const POSITIONS = [
  { value: 'player', label: 'Player' },
  { value: 'coach', label: 'Coach' },
  { value: 'manager', label: 'Manager' },
  { value: 'referee', label: 'Referee' },
]

export const SPORT_CATEGORIES = [
  { id: 'traditional', name: 'Traditional Cambodian\nSports & Games', icon: '🥊' },
  { id: 'ball', name: 'Ball Games', icon: '⚽' },
  { id: 'martial', name: 'Martial Arts &\nCombat Sports', icon: '🥋' },
  { id: 'athletics', name: 'Athletics & Outdoor\nSports', icon: '🏃' },
  { id: 'indoor', name: 'Indoor & Recreational\nSports', icon: '🏸' },
]

export const SPORTS = [
  { value: 'bokator', label: 'Bokator' },
  { value: 'pradal-serey', label: 'Pradal Serey' },
  { value: 'chol-chhoung', label: 'Chol Chhoung' },
  { value: 'teanh-prot', label: 'Teanh Prot' },
  { value: 'football', label: 'Football' },
  { value: 'volleyball', label: 'Volleyball' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'sepak-takraw', label: 'Sepak Takraw' },
  { value: 'karate', label: 'Karate' },
  { value: 'taekwondo', label: 'Taekwondo' },
  { value: 'boxing', label: 'Boxing' },
  { value: 'judo', label: 'Judo' },
  { value: 'running', label: 'Running' },
  { value: 'cycling', label: 'Cycling' },
  { value: 'swimming', label: 'Swimming' },
  { value: 'archery', label: 'Archery' },
  { value: 'table-tennis', label: 'Table Tennis' },
  { value: 'badminton', label: 'Badminton' },
  { value: 'chess', label: 'Chess' },
  { value: 'e-sports', label: 'E-sports' },
]

export const sportsByCategory: Record<string, string[]> = {
  'Traditional Cambodian Sports & Games': ['Bokator', 'Pradal Serey', 'Chol Chhoung', 'Teanh Prot'],
  'Ball Games': ['Football', 'Volleyball', 'Basketball', 'Sepak Takraw'],
  'Martial Arts & Combat Sports': ['Karate', 'Taekwondo', 'Boxing', 'Judo'],
  'Athletics & Outdoor Sports': ['Running', 'Cycling', 'Swimming', 'Archery'],
  'Indoor & Recreational Sports': ['Table Tennis', 'Badminton', 'Chess', 'E-sports'],
}

export const HEADER_BUTTONS = [
  { id: 'leader', label: 'Register as Leader', variant: 'outline' as const },
  { id: 'player', label: 'Register as Player', variant: 'primary' as const },
]

export const LANGUAGES = [
  { code: 'km', label: 'ខ្មែរ' },
  { code: 'en', label: 'English' },
]
