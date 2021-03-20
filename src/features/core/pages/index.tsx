import React from 'react'
import type { Page } from 'src/features/type'
import { CustomLayout, EmptyLayout } from 'src/layouts'
import Home from './Home'
import Login from './Login'

export const pages: Page[] = [
  { name: 'Login', route: '/login', layout: EmptyLayout, component: <Login /> },
  { name: 'Home', route: '/', component: <Home />, protected: true, showInNav: true },
  {
    name: 'CustomLayout',
    route: '/custom-layout',
    layout: CustomLayout,
    component: <div>hello from custom layout</div>,
    protected: true,
    showInNav: true,
  },
]
