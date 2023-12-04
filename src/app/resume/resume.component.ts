import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project,Education, WorkExperience } from '../_modules/Project';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})


export class ResumeComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Intern',
      company: 'Melvic Technologies',
      duration: 'Feb 2023 - Mar 2023',
      description:[
        'Learnt how to use wordpress and build some simple website',
        'Worked on how to fix some hardware stuff'
      ],

    },
  ]
  

  educationList: Education[] = [
    {
      institute: 'Akosombo International School',
      course: 'General Arts',
      duration: '2017-2020',
      score:'',

    },{
      institute: 'Ghana-Indian Kofi Anaan Centre of Excellence in ICT(AITI-KACE)',
      course: 'Diploma in Software Development',
      duration: '29thJuly,2022 - 29thSeptember,2022',
      score:'80%',
    },
    {
      institute: 'Central University',
      course: 'Information Technology',
      duration: '2021-still in school',
      score:'',
    }
  ]

  constructor(private titleService: Title){

    
    this.titleService.setTitle('Herbert Owusu - Resume');
      }
  ngOnInit(): void {

  }

}
