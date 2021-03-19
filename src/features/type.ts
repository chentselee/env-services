export interface Page {
  name: string
  route: string
  layout?: React.ComponentType
  component: React.ReactNode
  protected?: boolean
}

export interface Feature {
  pages: Page[]
}
