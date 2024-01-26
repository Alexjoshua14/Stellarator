import Link from 'next/link'
import { FC } from 'react'

interface TopBarProps {

}

const TopBar: FC<TopBarProps> = ({ }) => {
  return (
    <div className="z-40 fixed top-0 left-0 w-full h-20 px-10 flex items-center bg-white/5 backdrop-blur-2xl">
      <Link href="/">
        {`Home_`}
      </Link>
    </div>
  )
}

export default TopBar