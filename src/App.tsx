
import About from './components/about'
import Nav from './components/Nav'
import ResponsiveAppBar from './components/Nav'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import Login from './components/Login'
import { router } from './Router'
import { RouterProvider } from 'react-router'


function App() {
  return (<>
    
      <RouterProvider router={router} />

        </>
  )
}

export default App
