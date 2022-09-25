import { useRoutes } from 'react-router-dom'
import { routes } from './routes'


function App() {
  let main = useRoutes(routes)
  return (
    <>
      {main}
    </>
  )
}
export default App
