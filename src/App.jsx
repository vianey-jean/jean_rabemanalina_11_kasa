/**
 * Import du router dans react rooter dom
 */
import { BrowserRouter as Router} from 'react-router-dom'
/**
 * import du header avec footer
 */
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />{/**
         * C'est ici que je relie de header
         */}
       
      </div>
      <Footer />{/**
         * C'est ici que je relie de footer
         */}
    </Router>
  )
}
export default App
