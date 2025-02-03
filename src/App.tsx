import { router } from './Router'
import { RouterProvider } from 'react-router'
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (<>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
  )
}

export default App