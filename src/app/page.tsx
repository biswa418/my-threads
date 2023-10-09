import { LeftSidebar, MainComponent } from "@/components"
import { BsSearch } from "react-icons/bs"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="md:max-w-screen-xl max-w-screen-lg w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />

        {/* right bar */}
        <section className="sticky top-0 w-1/4 flex flex-col space-y-3">
          <div>
            <div className="relative w-full h-full">
              <label htmlFor="schBox" className="absolute top-0 left-0 h-full flex items-center justify-center">
                <BsSearch className="w-5 h-5 text-slate-600" />
              </label>
              <input type="text" id="schBox" placeholder="Search twitter" className="w-full h-full outline-none bg-transparent border-none p-4 rounded-xl" />
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  )
}

export default Home