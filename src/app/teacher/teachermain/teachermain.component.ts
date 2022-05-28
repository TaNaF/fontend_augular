import { Component, OnInit } from '@angular/core';
import { TeachermainService } from './teachermain.service';
@Component({
  selector: 'app-teachermain',
  templateUrl: './teachermain.component.html',
  styleUrls: ['./teachermain.component.css']
})
export class TeachermainComponent implements OnInit {

  fname!:any;
  lname!:any;
  showStudentList = false;
  showSubjectTable = true;
  subjectList:any[]= []
  studentsList:any = []
  subject !: any
  constructor(private service:TeachermainService) {
    this.fname = localStorage.getItem('teacher-fname');
    this.lname = localStorage.getItem('teacher-lname');
  }

  async ngOnInit(){
    if(!localStorage.getItem('teacher-key-api')){
      location.href = "teacher-login"
    }
    this.subjectList = await this.service.getTeacherSemester()
    console.log(this.subjectList);
  }
  logout(){
    localStorage.clear();
  }
  async findstudents(class_id:number,subject:object){
    console.log(class_id);
    this.studentsList =  await this.service.getStudents(class_id);
    this.showStudentList = true;
    this.showSubjectTable = false;
    console.log(subject)
    this.subject = subject;
  }
  backToTable(){
    this.showStudentList = false;
    this.showSubjectTable = true;
    this.studentsList = []
    this.subject = undefined
  }
}
