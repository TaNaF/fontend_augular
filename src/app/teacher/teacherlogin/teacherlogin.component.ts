import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { TeacherloginService } from './teacherlogin.service';
@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {
  authForm!:FormGroup
  constructor(private fb:FormBuilder,private loginService:TeacherloginService) {
    this.authForm = this.fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('teacher-key-api')){
      location.href = "teacher/main"
    }
  }

  async login(){
    const result = await this.loginService.login(this.authForm.value);
    console.log(result.error)
    if(!result.error){
      location.href = "teacher/main"
    }else{
      alert("ไม่พบข้อมูล")
      this.authForm.reset()
    }
  }
}
