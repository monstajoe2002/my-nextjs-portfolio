import Navbar from "./Navbar"

//create a local layout to be shared across pages
const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar/>
            {children}
        </div>
     );
}
 
export default Layout;