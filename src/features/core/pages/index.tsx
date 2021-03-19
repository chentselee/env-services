import React from 'react'
import type { Page } from 'src/features/type'
import { CustomLayout } from 'src/layouts'
import Home from './Home'

export const pages: Page[] = [
  { name: 'Home', route: '/', component: <Home /> },
  {
    name: 'CustomLayout',
    route: '/custom-layout',
    layout: CustomLayout,
    component: <div>hello from custom layout</div>,
  },
]
