import DarkFooter from "../../components/DarkFooter"
import SimpleNavbar from "../../components/SimpleNavbar"


const MainLayout = ({ children }) =>{
    return(
        <>
        <div>
            <SimpleNavbar/> 

            <main>{children}</main>
            <DarkFooter/>
        </div>
        
        </>

)
}

export default MainLayout