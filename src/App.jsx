import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Items from "./Components/Items";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="p-lg-5 p-3">
        <Header headerLogo="./assets/logo.png" />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 col-12 text-center">
            <Banner bannerImg="./assets/banner-top.png" />
            <Items
              itemsTitle="Don&rsquo;t miss these hot sale items"
              itemsImg1="./assets/hot-sale-1.png"
              itemsName1="Lorem, ipsum dolor."
              itemsPrice1="RM 59.00"
              itemsImg2="./assets/hot-sale-2.png"
              itemsName2="Lorem, ipsum dolor."
              itemsPrice2="RM 89.00"
              itemsImg3="./assets/hot-sale-3.png"
              itemsName3="Lorem, ipsum dolor."
              itemsPrice3="RM 69.00"
              itemsImg4="./assets/hot-sale-4.png"
              itemsName4="Lorem, ipsum dolor."
              itemsPrice4="RM 125.00"
            />
            <Banner bannerImg="./assets/banner-mid.png" />
            <Items
              itemsTitle="New Arrivals"
              itemsImg1="./assets/new-arrival-1.png"
              itemsName1="Lorem, ipsum dolor."
              itemsPrice1="RM 99.00"
              itemsImg2="./assets/new-arrival-2.png"
              itemsName2="Lorem, ipsum dolor."
              itemsPrice2="RM 169.00"
              itemsImg3="./assets/new-arrival-3.png"
              itemsName3="Lorem, ipsum dolor."
              itemsPrice3="RM 189.00"
              itemsImg4="./assets/new-arrival-4.png"
              itemsName4="Lorem, ipsum dolor."
              itemsPrice4="RM 259.00"
            />
            <Banner bannerImg="./assets/banner-bot.png" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
