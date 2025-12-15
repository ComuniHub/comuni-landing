import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Problems from './components/Problems';
import Product from './components/Product';
import Market from './components/Market';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  // Las imágenes ya se precargan en main.jsx antes de montar React

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Vision />
      <Problems />
      <Product />
      <Market />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
