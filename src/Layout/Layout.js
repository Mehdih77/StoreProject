import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Layout({children}) {
    return (
        <>
          <Header/>
            {children}
          <Footer/>  
        </>
    )
}
