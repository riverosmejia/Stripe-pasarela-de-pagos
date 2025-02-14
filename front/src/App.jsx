import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles.css';
import '../styles/reset.css';
import Header from '../components/Header';
import AguasList from '../components/AguasList';
import MusicPlayer from "../components/MusicPlayer";
import Footer from '../components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <AguasList />
      <MusicPlayer />
      <Footer />
    </div>
  );
};

export default App;
