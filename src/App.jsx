import { BrowserRouter as Router , Routes, Route} from 'react-router-dom' //import router, routes et route sur react
import Header from './components/Header'
import Footer from './components/Footer'
import Apropos from './pages/Apropos'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />{/**Mettre en place le header */}
        <main className="main">
        <Routes>
            <Route path="/apropos" element={<Apropos />} /> {/**Mettre en place A propos */}
        </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  )
}
export default App
