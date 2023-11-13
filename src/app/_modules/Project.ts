import { Tag } from "./tag";

export interface Project{
  id : number;
  name : string;
  summary: string;
  description: string;
  projectLink : string;
  pictures: string[];
  tags : Tag[];
}

export interface Education{
  institue: string;
  course: string;
  duration: string;
  score: string;
}

export interface WorkExperience{
  role: string;
  company: string;
  duration: string;
  description: string[];
}

