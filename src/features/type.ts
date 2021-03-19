export interface Page {
  name: string
  route: string
  layout?: React.ComponentType
  component: React.ReactNode
}

export interface Feature {
  pages: Page[]
}
