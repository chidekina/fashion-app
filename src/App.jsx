import Banner from "./components/Banner"
import Brands from "./components/Brands"
import Header from "./components/Header"
import Stamps from "./brands.json"

const headerList = ['CATALOGUE', 'FASHION', 'FAVOURITE', 'LIFESTYLE']

function App() {

  return (
    <>
      <div className="px-16 py-8 mb-8">
        <Header list={headerList} />
        <Banner />
      </div>
      <Brands brands={Stamps}/>
    </>
  )
}

export default App
