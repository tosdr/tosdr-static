export interface Service {
  id: string
  name: string
  type: 'service' | 'software'
  urls: string[]
  freesoftware: boolean
  license?: string
  tosdr: {
    rated: false | 'A' | 'B' | 'C' | 'D' | 'E'
    keywords: string[]
    related: string[]
  }
  meta: {
    'spec-version': string
  }
}
