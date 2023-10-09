import Link from 'next/link'
import { BiHomeCircle, BiBell, BiUser } from 'react-icons/bi'
import { BsSearch, BsBookmark, BsTwitter, BsThreeDots } from 'react-icons/bs'
import { HiOutlineEnvelope } from 'react-icons/hi2'


const sideMenubar = [
    {
        title: "Twitter",
        icon: BsTwitter
    },
    {
        title: "Home",
        icon: BiHomeCircle
    },
    {
        title: "Explore",
        icon: BsSearch
    },
    {
        title: "Notifications",
        icon: BiBell
    },
    {
        title: "Messages",
        icon: HiOutlineEnvelope
    },
    {
        title: "Bookmarks",
        icon: BsBookmark
    },
    {
        title: "Profile",
        icon: BiUser
    }
]

const LeftSidebar = () => {
    return (
        <section className="sticky top-0 w-1/4 min-w-fit h-screen flex flex-col justify-between items-stretch">
            <div className='mt-4 space-y-2'>
                {
                    sideMenubar.map((item) => {
                        return (
                            <Link
                                className='hover:bg-white/10 text-lg w-fit transition duration-150 rounded-3xl py-2 px-6 flex items-center space-x-4'
                                href={`/${item.title.toLowerCase()}`}
                                key={item.title}>

                                <div>
                                    <item.icon />
                                </div>
                                {
                                    item.title !== 'Twitter' &&
                                    <div>
                                        {item.title}
                                    </div>
                                }
                            </Link>
                        )
                    })
                }

                <button className='w-11/12 m-3 text-center rounded-full bg-primary hover:bg-opacity-70 transition duration-200 p-3 text-xl'>
                    Tweet
                </button>
            </div>

            <button className='w-11/12 m-4 flex justify-between items-center rounded-full bg-transparent hover:bg-white/10 transition duration-200 p-4 text-center'>
                <div className='flex items-center space-x-3'>
                    <div className='rounded-full bg-slate-400 h-10 w-10'></div>
                    <div className="text-left ">
                        <div className="text-left text-sm">Biswajeet</div>
                        <div className="text-xs text-slate-600">@biswajeet</div>
                    </div>
                </div>
                <div className="">
                    <BsThreeDots />
                </div>
            </button>
        </section>
    )
}

export default LeftSidebar