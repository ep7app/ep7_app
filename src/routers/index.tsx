

import App from '@/App'
import Dashboard from '@/pages/dashboard'
import Entradas from '@/pages/entradas'
import Saidas from '@/pages/saidas'
import ErrorPage from './error-page'

import { 
  createBrowserRouter 
} from 'react-router-dom'
import NovaEntrada from '@/pages/nova-entrada'
// import TestePage from '@/pages/teste'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> ,
    errorElement: <ErrorPage /> ,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/entradas',
        element: <Entradas />
      },
      {
        path: '/saidas',
        element: <Saidas />
      },
      {
        path: '/entradas/nova-entrada',
        element: <NovaEntrada />
      },
      // {
      //   path: '/test',
      //   element: <TestePage />
      // }
  ]
  }
])
