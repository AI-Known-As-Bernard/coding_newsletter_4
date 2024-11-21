import DarkFooter from "../../components/DarkFooter"

const MainLayout = ({ children }) =>{
    return(
        <div>
           <header>Header Content</header> 
           <main>{children}</main>
           <DarkFooter/>
        </div>
    )
}

export default MainLayout