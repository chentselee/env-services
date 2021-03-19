import React from 'react'
import type { Page } from 'src/features/type'
import Counter from './Counter'

export const pages: Page[] = [
  {
    name: 'Counter',
    route: '/counter',
    component: <Counter />,
    protected: true,
  },
]
