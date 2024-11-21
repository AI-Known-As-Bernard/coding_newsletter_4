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
        <script>
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu')

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden')
  })
</script>
        </>

)
}

export default MainLayout