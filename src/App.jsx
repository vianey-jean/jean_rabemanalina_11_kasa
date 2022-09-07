import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/**Mettre en place le header */}
        <main className="main"> {/**Mettre en place le main */}
          <Routes>
            <Route path="/accueil" element={<Accueil />} />  {/**Mettre en place la page accueil */}
            <Route path="/apropos" element={<Apropos />} /> {/**Mettre en place la page à propos */}          
          </Routes>
        </main>
      </div>
      <Footer /> {/**Mettre en place le footer */}
    </Router>
  )
}
export default App
