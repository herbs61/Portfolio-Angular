import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Education } from '../_modules/Project';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})


export class ResumeComponent implements OnInit {


  constructor(private titleService: Title){
    this.titleService.setTitle('Herbert Owusu - Resume');
      }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
