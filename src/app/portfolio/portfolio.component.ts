import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_modules/Project';
import { Tag } from '../_modules/tag';
import { ProjectsService } from '../_services/projects.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

projects = {} as Project[];

isCollapsed: boolean = true;
typescript: boolean = false;
angular: boolean = false;
python: boolean = false;
csharp: boolean = false;
javascript: boolean = false;
aspnet: boolean = false;
django: boolean = false;
filtering : boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Herbert Owusu - Portfolio');
      }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

if(this.typescript){
  filterTags.push(Tag.TYPESCRIPT);
}
if(this.angular){
  filterTags.push(Tag.ANGULAR);
}
if(this.python){
  filterTags.push(Tag.PYTHON);
}
if(this.csharp){
  filterTags.push(Tag.CSHARP);
}
if(this.javascript){
  filterTags.push(Tag.JAVASCRIPT);
}
if(this.aspnet){
  filterTags.push(Tag.ASPNET);
}
if(this.django){
  filterTags.push(Tag.DJANGO);
}

if(this.python || this.csharp || this.angular || this.javascript || this.typescript || this.aspnet || this.django){
  this.filtering = true;
}
else{
  this.filtering = false;
}


    this.projects = this.projectService.GetProjectsByFilter(filterTags)
  }


  ResetFilters(){
    this.angular = false;
    this.typescript = false;
    this.python = false;
    this.csharp = false;
    this.javascript = false;
    this.aspnet = false;
    this.django = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
