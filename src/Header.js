import { BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
const Header = () =>{
    return(
        <div className="header">
             
              <Router>
                <Link to="/home" style={{marginRight: 10 }}> Home </Link><br/>
                <Link to="/about" style={{ marginRight: 10 }}> About </Link>
                <Link to ="/contact" style={{ marginRight: 10} }> Contact </Link>
                <Routes>
                    <Route path="/home" element={Homepage}/>
                    <Route path="/about" element={Aboutpage}/>
                    <Route path="/contact" element={Contactpage}/>
                </Routes>

             </Router>    

        </div>
    )
}
const Homepage = () =>{
    return(
    <div className="home">
        <h2>Home Page...</h2>
        <p>this is home page</p>
    </div>
    )

}
const Aboutpage = () =>{
    return(
    <div className="about">
        <h2>About page</h2>
        <p>this is about page</p>
        
    </div>
    )
}
const Contactpage = () =>{
    return(
    <div className="contact ">
        <h2>Contact page</h2>
        <p>this is contact page</p>
    </div>
    )
}
export default Header;