import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './Components/Header';
import AppHero from './Components/Hero';
import AppAbout from './Components/About';
import AppServices from './Components/Services';
import AppWorks from './Components/Works';
import AppTeams from './Components/Teams';
import AppTestimonials from './Components/Testimonials';
import AppPricing from './Components/Pricing';
import AppBlog from './Components/Blog';
import AppContact from './Components/Contact';
import AppFooter from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header id ="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
