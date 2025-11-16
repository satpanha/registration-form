import { FormData, FormErrors } from '@/types'
import { FormSelect, SectionHeader } from '@/components/common'
import { PROVINCES, DEPARTMENTS, EVENT_TYPES } from '@/lib/constants'

interface LocationEventSectionProps {
  formData: FormData
  handleChange: (field: keyof FormData, value: string) => void
  errors: FormErrors
}

export function LocationEventSection({ formData, handleChange, errors }: LocationEventSectionProps) {
  return (
    <section>
      <SectionHeader
        title="Location & Event"
        description="Select your location and the event you are registering for"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormSelect
          label="Province"
          value={formData.province}
          onChange={(value) => handleChange('province', value)}
          options={PROVINCES}
          required
          error={errors.province}
        />
        <FormSelect
          label="Department"
          value={formData.department}
          onChange={(value) => handleChange('department', value)}
          options={DEPARTMENTS}
          required
          error={errors.department}
        />
        <FormSelect
          label="Type of Event"
          value={formData.eventType}
          onChange={(value) => handleChange('eventType', value)}
          options={EVENT_TYPES}
          required
          error={errors.eventType}
        />
      </div>
    </section>
  )
}
