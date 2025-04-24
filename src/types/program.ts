export interface ProgramDetails {
  donation?: number | string
  maxPeople?: string
  ageRequirement?: string
  schedule?: string
  timeSlots?: string
  note?: string
  additionalCost?: string
  maxKids?: string
  maxAdults?: string
  ageNote?: string
  customProgram?: boolean
  duration?: string
  frequency?: string
  sessionLength?: string
}

export interface Program {
  id: string
  title: string
  description: string
  image: string
  details: ProgramDetails
}