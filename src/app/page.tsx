import { LeftSidebar, MainComponent, RightSection } from "@/components"

const Home = () => {
  return (
    <div className="w-full h-full flex text-white justify-center items-center">
      <div className="md:max-w-screen-xl max-w-screen-lg w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <RightSection />
      </div>
    </div>
  )
}

export default Home