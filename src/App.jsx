import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Banner from './Pages/MainPage/banner/banner';
import Slogan from './Pages/MainPage/slogan/slogan';
import Categories from './Pages/MainPage/categories/categories';
import Supply from './Pages/MainPage/supply/supply';
import UserComment from './Pages/MainPage/userComment/userComment';
import Location from './Pages/MainPage/location/location';
import ContactUS from './Pages/MainPage/contactUS/contactUS';

function App() {
  return (
    <section className='app'>
      <Navbar />
      <Banner />
      <Slogan />
      <Categories />
      <Supply />
      <UserComment />
      <Location />
      <ContactUS />
      <Footer />
    </section>
  );
}

export default App;

