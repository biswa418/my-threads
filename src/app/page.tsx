import Link from 'next/link'
import { BiHomeCircle, BiBell, BiUser } from 'react-icons/bi'
import { BsSearch, BsBookmark, BsTwitter } from 'react-icons/bs'
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



const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left sidebar */}
        <section className="fixed w-72 h-screen flex flex-col justify-between items-stretch">
          <div className='space-y-2'>
            {
              sideMenubar.map((item) => {
                return (
                  <Link
                    className='hover:bg-white/10 text-xl w-fit transition duration-150 rounded-3xl py-2 px-6 flex items-center space-x-4'
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

            <button className='w-full m-4 text-center rounded-full bg-primary hover:bg-opacity-70 transition duration-200 p-4 text-xl'>
              Tweet
            </button>
          </div>

          <div>
            at the bottom
          </div>
        </section>

        {/* <main> Home timeline </main>

        right bar
        <section> Rightbar</section> */}
      </div>
    </div>
  )
}

export default Home