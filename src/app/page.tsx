import { LeftSidebar } from "@/components"
import { BsDot } from "react-icons/bs"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left sidebar */}
        <LeftSidebar />

        <main className="ml-72 flex w-[600px] h-full min-h-screen py-6 flex-col border-l border-r border-slate-900">
          <h1 className="text-xl font-bold px-6 mb-6">Home</h1>

          <div className="border-t border-b px-6 flex items-stretch py-4 space-x-2 border-slate-900 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none">
            </div>

            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex space-x-2 border-slate-900">
                <input type="text" className="w-full h-full bg-transparent p-3 outline-none border-none text-lg placeholder:text-slate-600" placeholder="What's on your mind?" />
              </div>

              <div className="w-full justify-between items-center flex">
                <div></div>

                <div>
                  <button className='w-full text-center rounded-full bg-primary hover:bg-opacity-70 transition duration-200 px-3 py-1 text-md'>
                    Tweet
                  </button>
                </div>
              </div>
            </div>

          </div>


          {/* posts */}
          <div className="flex flex-col">
            {
              Array(6).fill(0).map((_, i) => {
                return (
                  <div key={i} className="border-t border-b border-slate-900 flex space-x-4">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center space-x-1">
                        <div>Biswajeet</div>
                        <div>@biswajeet</div>
                        <div>
                          <BsDot />
                        </div>
                        <div>1 hour ago</div>
                      </div>

                      <div className="text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nesciunt, nemo tempora harum sint fugit! Veritatis, nam unde explicabo porro, harum quaerat asperiores dolore natus consectetur est magnam nemo. Minima.
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </main>

        {/* right bar */}
        {/* <section> Rightbar</section> */}
      </div>
    </div>
  )
}

export default Home