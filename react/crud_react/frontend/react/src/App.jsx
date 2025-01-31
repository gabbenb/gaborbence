import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import regiok from './regiok'
function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regiok" element={<regiok />} />
      </Routes>
      </BrowserRouter>
    </div>
  )  
}

export default App;
