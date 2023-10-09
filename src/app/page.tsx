import { LeftSidebar, MainComponent } from "@/components"
import { BsSearch } from "react-icons/bs"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="md:max-w-screen-xl max-w-screen-lg w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />

        {/* right bar */}
        <section className="sticky top-4 w-1/4 mt-4 flex flex-col space-y-3 px-5 h-screen">
          <div>
            <div className="relative w-full h-full">
              <label htmlFor="schBox" className="absolute top-0 left-0 px-3 h-full flex items-center justify-center">
                <BsSearch className="w-5 h-5 text-slate-600" />
              </label>
              <input type="text" id="schBox" placeholder="Search twitter" className="w-full h-full outline-none placeholder:text-slate-600 bg-neutral-900/90 border-none py-3 px-10 rounded-full" />
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