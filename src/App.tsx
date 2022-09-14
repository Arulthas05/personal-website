
import Header from './components/Header';
import Hero from './components/Hero';
import Biograpy from './components/Biograpy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className='flex-1'>
      <Hero/>
      <Biograpy/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
