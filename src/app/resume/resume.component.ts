import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Education } from '../_modules/Project';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})


export class ResumeComponent implements OnInit {
  educationList: Education[] = [
    {
      institue: 'Akosombo International School',
      course: 'General Arts',
      duration: '2017-2020',
      score:'',

    },{
      institue: 'Ghana-Indian Kofi Anaan Centre of Excellence in ICT(AITI-KACE)',
      course: 'Diploma in Software Development',
      duration: '29thJuly,2022 - 29thSeptember,2022',
      score:'80%',
    },
    {
      institue: 'Central University',
      course: 'Information Technology',
      duration: '2021-still in school',
      score:'',
    }
  ]


  constructor(private titleService: Title){
    this.titleService.setTitle('Herbert Owusu - Resume');
      }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
