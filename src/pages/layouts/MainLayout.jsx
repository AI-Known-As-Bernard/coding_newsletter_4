import DarkFooter from "../../components/DarkFooter"
import SimpleNavbar from "../../components/SimpleNavbar"

const MainLayout = ({ children }) =>{
    return(
        <>
        <div>
            <SimpleNavbar/> 
           <header>Header Content</header> 
           <main>{children}</main>
           <DarkFooter/>
        </div>
        
        </>

)
}

export default MainLayout