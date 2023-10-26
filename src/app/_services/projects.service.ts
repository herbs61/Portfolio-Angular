import { Injectable } from '@angular/core';
import { Tag } from '../_modules/tag';
import { Project } from '../_modules/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0,  name: 'Sample Python Project', pictures:["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: 'https://github.com/herbs61/Beginner-Ecommence-Web', summary:"Python project that registers students" ,description: "lorem20", tags:[Tag.PYTHON,Tag.DJANGO] },
    {id: 1,  name: 'Sample Asp.net Project', pictures:["../../assets/PaymentDetail.png","../../assets/PRegister.png","../../assets/DPayment.png"], projectLink: 'https://github.com/herbs61/Payment-Asp.net', summary:"Asp.net that takes in payment details" ,description: "lorem20", tags:[Tag.ASPNET,Tag.ANGULAR,Tag.TYPESCRIPT,Tag.CSHARP] },
    {id: 2,  name: 'Full-stack Project', pictures:["../../assets/StudentRegistration.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: 'https://github.com/herbs61/Student-Registration', summary:"Student registration with python and angular" ,description: "lorem20", tags:[Tag.PYTHON,Tag.DJANGO,Tag.ANGULAR,Tag.TYPESCRIPT] }
  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
let project = this.projects.find(project => project.id == id);

if(project == undefined){
  throw new TypeError('There is no project that matches the id: ' + id);
}
return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;
      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });

      return filteredProjects;
  }
}
