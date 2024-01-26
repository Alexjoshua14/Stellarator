import { FC, Suspense } from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'

interface ProjectTileProps {
  project: {
    id: string
    name: string
    description: string
    image: string
    url: string
    github: string
    technologies: string[]
  }
}

// const ratios = [
//   "1/1",
//   "2/1",
//   "1/2"
// ]

const PlaceholderImage = () => <div className="w-full h-full rounded bg-teal-700/30 border-[1px] border-teal-100/10" />

const ProjectTile: FC<ProjectTileProps> = ({ project }) => {
  return (
    <div className="relative h-60 m-3 mb-6">
      <AspectRatio ratio={5 / 2}>
        <Suspense fallback={<PlaceholderImage />}>
          <Image src={project.image} alt="Project Image" fill className='object-contain' />
        </Suspense>
      </AspectRatio>
      <div className="z-10 absolute right-12 -translate-y-1/2 min-w-fit w-1/3 px-6 py-3 flex items-center justify-center rounded bg-white/10 border-[1px] border-white/15 backdrop-blur-lg">
        {project.name}
      </div>
    </div>
  )
}

export default ProjectTile