import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import LogementDetails from './pages/LogementDetails'
import Erreur from './pages/Erreur'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="fiche-logement/:id" element={<LogementDetails />} />
            <Route path="/apropos" element={<Apropos />} />
            {/*path="*" renvoi à la page erreur 404 si l'url de rien de déclaré au dessus*/}
            <Route path="*" element={<Erreur />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  )
}
export default App
