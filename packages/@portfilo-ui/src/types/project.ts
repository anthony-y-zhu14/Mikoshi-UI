import { IconType } from 'react-icons'

export type ProjectCardData = {
  title: string,
  subtitles: Array<IconType>,
  imageUrl: string,
  description: string,
  projectDemoUrl: string,
  action: (_url: string) => void
}