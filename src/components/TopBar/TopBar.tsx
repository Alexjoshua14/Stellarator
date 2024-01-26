import Link from 'next/link'
import { FC } from 'react'

interface TopBarProps {

}

const TopBar: FC<TopBarProps> = ({ }) => {
  return (
    <div className="z-40 fixed top-0 left-0 w-full h-20 px-10 flex items-center bg-white/5 backdrop-blur-2xl">
      <Link href="/" className="px-4 py-2 rounded-sm text-sm backdrop-brightness-125 hover:bg-white/10 hover:backdrop-contrast-200 hover:backdrop-brightness-100 active:backdrop-brightness-75 transition-all duration-300 ease-in-out">
        {`Home_`}
      </Link>
    </div>
  )
}

export default TopBar