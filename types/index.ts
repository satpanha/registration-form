export interface FormData {
  province: string | null
  department: string | null
  eventType: string | null
  typeOfSport: string | null
  selectedSport: string | null
  firstName: string
  lastName: string
  nationalID: string
  dateOfBirth: string
  position: string
  phoneNumber: string
  photoUpload: File | null
  category?: string | null
}

export interface FormErrors {
  province?: string
  department?: string
  eventType?: string
  typeOfSport?: string
  selectedSport?: string
  firstName?: string
  lastName?: string
  nationalID?: string
  dateOfBirth?: string
  position?: string
  phoneNumber?: string
  photoUpload?: string
}

export type OnFieldChange = <K extends keyof FormData>(
  field: K,
  value: FormData[K]
) => void

export interface SportCategory {
  id: string
  name: string
  icon: string
}

export interface SelectOption {
  value: string
  label: string
}

export interface HeaderButtonProps {
  variant?: 'primary' | 'outline'
  onClick?: () => void
  children: React.ReactNode
}

export interface FormSectionProps {
  formData: FormData
  handleChange: OnFieldChange
  errors?: FormErrors
}

export interface FormInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  error?: string
}

export interface FormSelectProps extends FormInputProps {
  options: SelectOption[]
}
