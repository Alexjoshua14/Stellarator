import ProjectTile from '@/components/projectTile/ProjectTile'
import { Tile1, Tile2, Tile3 } from '@/components/projectTile/Tiles'
import { FC } from 'react'

interface pageProps {

}

const projects = [
  {
    id: '1',
    date: '2023-10-01',
    name: 'Project 1',
    description: 'Project 1 description',
    image: '/images/csci/Vibe-Host.png',
    url: 'https://project1.com',
    github: '',
    technologies: ['React', 'Next.js', 'Tailwind CSS']
  }, {
    id: '2',
    date: '2023-10-01',
    name: 'Project 2',
    description: 'Project 2 description',
    image: '/images/project2.png',
    url: 'https://project2.com',
    github: '',
    technologies: ['React', 'Next.js', 'Tailwind CSS']
  }, {
    id: '3',
    date: '2023-10-01',
    name: 'Project 3',
    description: 'Project 3 description',
    image: '/images/project3.png',
    url: 'https://project3.com',
    github: '',
    technologies: ['React', 'Next.js', 'Tailwind CSS']
  }
]

const page: FC<pageProps> = ({ }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hello World!
        <ProjectTile project={projects[0]} />
        <Tile1 content={projects[0]} />
        <Tile2 content={projects[0]} />
        <Tile3 content={projects[0]} />
      </div>
    </main>
  )
}

export default page