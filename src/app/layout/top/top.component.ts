import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  student!:any;
  constructor() {
    this.student = {
      student_id : localStorage.getItem("student_id"),
      student_fname: localStorage.getItem("student_fname"),
      student_lname: localStorage.getItem("student_lname"),
      major_id : localStorage.getItem("student_major")
    }
  }

  ngOnInit(): void {
  }
  logout(){
    console.log("logout");
    localStorage.clear();
  }
}
