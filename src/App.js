import { Routes, Route } from 'react-router-dom'

import Accueil from './Pages/Accueil'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import APropos from './Pages/APropos'
import Erreur404 from './Pages/Erreur404'

function App() {
	return (
			<div className='App'>
			<Header />
			   <main>
                  <Routes>
					  <Route path="/" element={<Accueil />} />
					  <Route path="/a-propos" element={<APropos />} />
					  <Route path="*" element={<Erreur404 />} />
				  </Routes>
			   </main>
			<Footer />	
			</div>
	)
}

export default App