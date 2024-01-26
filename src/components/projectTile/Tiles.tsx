import Image from 'next/image'
import { FC } from 'react'
import ProjectTile from './ProjectTile'
import { AspectRatio } from '../ui/aspect-ratio'

interface Project {
  id: string
  date: string
  name: string
  description: string
  image: string
  url: string
  github: string
  technologies: string[]
}

interface Art {
  id: string
  date: string
  name: string
  description: string
  image: string
  url: string
  medium: string[]
}

interface TileProps {
  content: Project | Art
}

/**
 * Square tile with project name and full image background
 * 
 * @param param0
 * @returns 
 */
export const Tile1: FC<TileProps> = ({ content }) => {

  return (
    <div className="relative w-full aspect-square border-2 border-pink-500">
      <Image src={content.image} alt="Project Image" fill className="object-contain" />
      <h2 className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-slate-950/90">
        {content.name}
      </h2>
    </div>
  )
}


/**
 * Vertical rectangle tile with project name and image on bottom section
 * 
 */
export const Tile2: FC<TileProps> = ({ content }) => {

  return (
    <div className="relative h-96 aspect-[2/3] flex flex-col justify-between border-2 border-pink-500">
      <h2 className="z-10 text-xl">
        {content.name}
      </h2>
      <AspectRatio ratio={3 / 2}>
        <Image src={content.image} alt="Project Image" fill className="object-contain" />
      </AspectRatio>
    </div>
  )
}

/**
 * Horizontal rectangle tile with project name and image on bottom section
 * 
 */
export const Tile3: FC<TileProps> = ({ content }) => {

  return (
    <div className="relative w-full aspect-[3/2] border-2 border-pink-500">
      <h2 className="z-10 text-xl">
        {content.name}
      </h2>
      <AspectRatio ratio={3 / 2}>
        <Image src={content.image} alt="Project Image" fill className="object-contain" />
      </AspectRatio>
    </div>
  )
}