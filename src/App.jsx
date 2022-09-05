import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
      </div>
      <Footer />
    </Router>
  )
}
export default App
