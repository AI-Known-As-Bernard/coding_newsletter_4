import MainLayout from "./layouts/MainLayout"
import TeamBlock from '../components/TeamBlock'
import IntroOgranization from "../components/IntroOgranization"
import Header from "../components/Header"
const Index = () => {
    const organization={
        title:"NEC Coding Program News Letter",
        message:"The interactive Coding program prepares students for a career as a software developer. It teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code."
    }
  return (
    <MainLayout>
        <Header title={organization.title} message={organization.message}/>
        <IntroOgranization />
        <TeamBlock />
    </MainLayout>
  
  )
}

export default Index