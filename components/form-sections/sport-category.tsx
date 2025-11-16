import { FormData, FormErrors } from '@/types'
import { FormSelect, SectionHeader, CategoryButton } from '@/components/common'
import { SPORT_CATEGORIES, SPORTS, sportsByCategory } from '@/lib/constants'

interface SportCategorySectionProps {
  formData: FormData
  handleChange: (field: keyof FormData, value: any) => void
  errors?: FormErrors
}

export function SportCategorySection({ formData, handleChange, errors }: SportCategorySectionProps) {
  const filteredSports = formData.typeOfSport
    ? sportsByCategory[formData.typeOfSport]?.map((sport) => ({
        value: sport.toLowerCase().replace(/\s+/g, '-'),
        label: sport,
      })) || []
    : SPORTS

  return (
    <section className="pb-6 border-b border-border">
      <SectionHeader
        title="Sport Category"
        description="Choose a category, then pick a specific sport"
      />

      {/* Category Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {SPORT_CATEGORIES.map((category) => (
          <CategoryButton
            key={category.id}
            icon={category.icon}
            name={category.name}
            isSelected={formData.typeOfSport === category.name}
            onClick={() => handleChange('typeOfSport', category.name)}
          />
        ))}
      </div>

      {/* Sport Selection Dropdown */}
      <FormSelect
        label="Select Sport"
        value={formData.selectedSport || ''}
        onChange={(value) => handleChange('selectedSport', value)}
        options={filteredSports}
        required
        error={errors?.selectedSport}
      />
    </section>
  )
}
