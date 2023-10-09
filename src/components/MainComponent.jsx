import { BsChat, BsDot, BsThreeDots } from "react-icons/bs"
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { IoShareOutline, IoStatsChart } from 'react-icons/io5'

const icons = [
    {
        icon: BsChat
    },
    {
        icon: AiOutlineRetweet
    },
    {
        icon: AiOutlineHeart
    },
    {
        icon: IoStatsChart
    },
    {
        icon: IoShareOutline
    }
]


const MainComponent = () => {
    return (
        <main className="ml-72 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-slate-900">
            <h1 className="text-xl font-bold p-5 backdrop-blur z-10 bg-black/10 sticky top-0">Home</h1>

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
                    Array(10).fill(0).map((_, i) => {
                        return (
                            <div key={i} className="border-b p-4 border-slate-900 flex space-x-4">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <div className="font-bold">Biswajeet</div>
                                            <div className="text-slate-600">@biswajeet</div>
                                            <div className="text-slate-600">
                                                <BsDot />
                                            </div>
                                            <div className="text-slate-600">1 hour ago</div>
                                        </div>

                                        <div className="rounded-full hover:bg-white/10 transition duration-200 p-1 cursor-pointer">
                                            <BsThreeDots />
                                        </div>
                                    </div>

                                    {/* captions */}
                                    <div className="text-sm mb-3 mt-1">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nesciunt, nemo tempora harum sint fugit! Veritatis, nam unde explicabo porro, harum quaerat asperiores dolore natus consectetur est magnam nemo.
                                    </div>

                                    {/* photo */}
                                    <div className="bg-slate-400 aspect-square w-full h-96 rounded-lg">
                                    </div>

                                    {/* interactions */}
                                    <div className="flex items-center space-x-12 mt-2 w-full">
                                        {
                                            icons.map((icon) => {
                                                return (
                                                    <div key={icon.icon} className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                                                        <icon.icon />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default MainComponent