import './GlobalStyles.css'
import Banner from "./components/Banner"
import Brands from "./components/Brands"
import Header from "./components/Header"
import ListOfStamps from "./brands.json"
import ListOfArrivals from "./arrivals.json"
import ListOfFavourites from "./favourites.json"
import AppContainer from "./components/AppContainer"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"
import ListOfSocialNewtorks from "./networks.json"
import ListOfFooterLinks from "./FooterLists.json"
import Container from './components/Container'
import CardContainer from './components/Card'

const headerList = ['CATALOGUE', 'FASHION', 'FAVOURITE', 'LIFESTYLE']

function App() {

  return (
    <>
      <Container>
        <Header list={headerList} />
        <Banner />
      </Container>
      <Brands brands={ListOfStamps}/>
      <Container>
      <CardContainer title="NEW ARRIVALS" list={ListOfArrivals} cols={3} imageSize="h-156"/>
      </Container>
      <Banner.Container>
        <Banner.Image path="/assets/sales-pic.png" isHidden />
        <Banner.TextContainer>
          <Banner.Title title="PAYDAY SALE NOW" />
          <Banner.Subtitle subtitle="Spend minimal $100 get 30% off voucher code for your next purchase" />
          <Banner.Text />
          <Banner.Button />
        </Banner.TextContainer>
      </Banner.Container>
      <Container>
      <CardContainer title="Young's Favourite" list={ListOfFavourites} />
      </Container>
      <AppContainer />
      <Subscribe />
      <Footer socialNet={ListOfSocialNewtorks} footerLists={ListOfFooterLinks}/>
    </>
  )
}

export default App
