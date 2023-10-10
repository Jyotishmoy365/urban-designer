import Header from "./component/header";
import Fontpage from "./component/fontpage";
import Fontfooter from "./component/fontfooter";
import Services from "./component/services";
import Portfolio from "./component/portfolio";
import "./globals.css"
import Testimonial from "./component/testimonial";
import Footer from "./component/footer";



function App() {
  return(
    <>
      <div>
        <Header/>
        <Fontpage/>
        <hr className="mt-20"/>
        <Fontfooter/>
        <hr className="mt-20"/>
        <Services/>
        <hr className="mt-20"/>
        <Portfolio/>
        <hr className="mt-20"/>
        <Testimonial/>
        <hr className="mt-20 border-none bg-fuchsia-500 h-1 w-full "/>
        <Footer/>
      </div>
    </>
  )
}

export default App;