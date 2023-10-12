import { BsSearch } from "react-icons/bs"

const RightSection = () => {
    return (
        <section className="sticky top-4 overflow-y-scroll no-scrollbar w-[30%] mt-4 flex flex-col space-y-3 pl-7 h-screen">
            <div className="sticky top-0 z-10 bg-black">
                <div className="relative w-full h-full group">
                    <input type="text" id="schBox" placeholder="Search" className="w-full h-full peer focus:border-primary focus:border outline-none placeholder:text-slate-600 bg-neutral-900/90 py-3 px-10 rounded-full" />
                    <label htmlFor="schBox" className="absolute text-gray-600 peer-focus:visible peer-focus:text-primary top-0 left-0 px-3 h-full flex items-center justify-center">
                        <BsSearch className="w-4 h-4" />
                    </label>
                </div>
            </div>

            {/* trending */}
            <div className="flex flex-col rounded-xl bg-bg my-4">
                <h3 className="font-bold text-lg my-2 px-4">What's happening</h3>
                <div>
                    {
                        Array(5).fill(0).map((_, i) => {
                            return (
                                <div key={i} className="hover:bg-white/10 hover:cursor-pointer p-4 last:rounded-b-xl transition duration-200">
                                    <div className="font-bold">Trending Item {i + 1}</div>
                                    <div className="text-xs text-neutral-500">30.2k</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* follow */}
            <div className="flex flex-col rounded-xl bg-bg my-4">
                <h3 className="font-bold text-lg my-2 px-4">Who to follow</h3>
                <div>
                    {
                        Array(5).fill(0).map((_, i) => (
                            <div key={i} className="hover:bg-white/10 justify-between text-sm hover:cursor-pointer p-4 flex items-center last:rounded-b-xl transition duration-200">
                                <div className="flex items-center space-x-2">
                                    <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
                                    <div className="flex flex-col">
                                        <div className="">Other user</div>
                                        <div>@otheruser12</div>
                                    </div>
                                </div>
                                <div>
                                    <button className="rounded-full px-4 py-2 bg-white hover:bg-white/80 hover:text-neutral-700 text-xs transition duration-200 font-semibold text-neutral-950">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default RightSection