import UCLEI from "static/UCLEI.png"
import SHOPPIES from "static/Shoppies.png"
import QUICKIN from "static/QuickIn.png"
import { ProjectCardData } from "types/project"
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

export const PROJECTS: Record<string, ProjectCardData> = {
  QuickIn : {
    title: "QuickIn",
    description: "A simple check-in app that simplfies the gathering of contact tracing information.",
    subtitles: [FaReact, FaNodeJs, SiMongodb],
    imageUrl: QUICKIN,
    projectDemoUrl: 'https://quickin.herokuapp.com/',
    action: openDemo
  },
  UCLEI : {
    title: "UCLEI",
    description: "A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.",
    subtitles: [FaReact, FaNodeJs, SiMongodb],
    imageUrl: UCLEI,
    projectDemoUrl: 'https://uclei.herokuapp.com/',
    action: openDemo
  },
  Shoppies : {
    title: "The Shoppies",
    description: "A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.",
    subtitles: [FaReact],
    imageUrl: SHOPPIES,
    projectDemoUrl: 'https://anthony-y-zhu14.github.io/The-Shoppies/',
    action: openDemo
  }
}

function openDemo (url: string) {
  window.open(url, '_blank')
}