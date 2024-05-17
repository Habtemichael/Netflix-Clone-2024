import React from 'react'
import Header from '../../Components/HeaderA/Header';
import Banner from '../../Components/BannerA/Banner';
import Footer from '../../Components/FooterA/Footer';
import RowList from '../../Components/RowsA/RowList/Rowlist';

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  )
}

export default Home;