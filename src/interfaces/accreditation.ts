export interface Accreditations {
  education: Education[]
  licenses: License[]
  otherLicenses?: License[]
}

export interface Education {
  institution: string
  degree: string
  major: string
  gpa: string
  issueDate?: string
  term?: string
}

export interface License {
  name: string
  issuer: string
  issueDate: string
  url: string
}
