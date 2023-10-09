import { LeftSidebar, MainComponent } from "@/components"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />

        {/* right bar */}

      </div>
    </div>
  )
}

export default Home