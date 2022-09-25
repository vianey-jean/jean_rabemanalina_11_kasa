import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesPath from './routes/RoutesPath'

//les routes ne doivent pas dans le app.jsx
function App() {
  return (
    <BrowserRouter >
      <Header />{/*Faire appel le header dans le components et le mettre en place */} 
          <main className="main">
          <RoutesPath/>
          </main>
      <Footer />
    </BrowserRouter >
  )
}
export default App
