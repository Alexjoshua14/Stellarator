import Link from 'next/link'

const pages = [
  "tiles",
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {pages.map((page) => (
          <Link href={`/${page}`} key={page} className="text-xl p-4 bg-white/20 backdrop-blur rounded-sm">
            {`${page}_`}
          </Link>
        ))}
      </div>
    </main>
  )
}
