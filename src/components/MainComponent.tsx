import { BsChat, BsDot, BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { IoShareOutline, IoStatsChart } from 'react-icons/io5'
import ComposeTweet from "./server-components/ComposeTweet"

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
        <main className="flex w-2/5 overflow-clip h-full min-h-screen min-w-[600px] flex-col border-l border-r border-neutral-800">
            <h1 className="text-lg font-bold p-5 backdrop-blur z-10 bg-black/10 sticky top-0">Home</h1>

            <div className="border-t border-b p-4 flex items-stretch space-x-1 border-slate-900 relative">
                <div className="w-10 h-10 bg-slate-400 rounded-full flex-none">
                </div>

                <ComposeTweet />
            </div>


            {/* posts */}
            <div className="flex flex-col">
                {
                    Array(10).fill(0).map((_, i) => {
                        return (
                            <div key={i} className="border-b p-4 w-full border-neutral-800 flex space-x-3">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                                </div>

                                <div className="flex flex-col relative">
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
                                            <BsThreeDotsVertical />
                                        </div>
                                    </div>

                                    {/* captions */}
                                    <div className="text-sm mb-3 mt-1">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nesciunt, nemo tempora harum sint fugit! Veritatis, nam unde explicabo porro, harum quaerat asperiores dolore natus consectetur est magnam nemo.
                                    </div>

                                    {/* photo */}
                                    <div className="bg-slate-400 aspect-square h-96 rounded-lg">
                                    </div>

                                    {/* interactions */}
                                    <div className="flex items-center justify-between mt-2 w-full">
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