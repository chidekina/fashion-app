import './GlobalStyles.css'
import Banner from "./components/Banner"
import Brands from "./components/Brands"
import Header from "./components/Header"
import ListOfStamps from "./brands.json"
import ArrivalsContainer from "./components/ArrivalsContainer"
import ListOfArrivals from "./arrivals.json"
import BannerSales from "./components/BannerSales"
import Favourite from "./components/Favourite"
import ListOfFavourites from "./favourites.json"
import AppContainer from "./components/AppContainer"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"
import ListOfSocialNewtorks from "./networks.json"
import ListOfFooterLinks from "./FooterLists.json"

const headerList = ['CATALOGUE', 'FASHION', 'FAVOURITE', 'LIFESTYLE']

function App() {

  return (
    <>
      <div className="px-16 py-8 mb-8 max-md:px-2 md:py-0 max-md:mb-0.5">
        <Header list={headerList} />
        <Banner />
      </div>
      <Brands brands={ListOfStamps}/>
      <ArrivalsContainer list={ListOfArrivals} />
      <BannerSales />
      <Favourite list={ListOfFavourites} />
      <AppContainer />
      <Subscribe />
      <Footer socialNet={ListOfSocialNewtorks} footerLists={ListOfFooterLinks}/>
    </>
  )
}

export default App
