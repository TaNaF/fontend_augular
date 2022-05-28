import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { AddSubjectService } from './add-subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  state!:any;
  studentClass: any[] = [];
  subjectHold:any[] = [];
  sectionHold:string[] = [];
  termlist:string[] = [];
  Term!:any;
  EventMsg!:string;

  addsubjectForm!:FormGroup
  constructor(private fb:FormBuilder,private AddSubjectService:AddSubjectService) {
    this.addsubjectForm = this.fb.group({
      subject_id : ['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(9),Validators.minLength(9)]],
      sectionSelect : ['',[Validators.required]]
    })
  }

  async ngOnInit():Promise<void> {
    if(!localStorage.getItem('key-api')){
      document.location.href  =  "student-login"
      console.log(localStorage.getItem('key-api'))
    }
    const check = (await this.AddSubjectService.checkTerm());
    if(check.length !== 0){
      this.Term = check[0];
      const check1 = (await this.AddSubjectService.registered(this.Term.semester_id ));
      if(check1.length === 0){
        this.state = true;

        return;
      }else{
        this.EventMsg = "คุณลงทะเบียนไปแล้ว"
      }
    }else{
      this.EventMsg = "ขณะนี้ไม่ใช่เวลาลงทะเบียน"
    }
    this.state = false;
  }

  async save(){
    if(this.studentClass.length !== 0){
      const send =  this.studentClass.map((value,i)=>{
        const {class_id } = value;
        return class_id;
      })
      console.log(send)
      const result = await this.AddSubjectService.saveStudent(send,this.Term.semester_id)
      console.log( result )
      alert("ลงทะเบียนเรียนสำเร็จ")
      document.location.href = "home";
    }else{
      alert("กรุณาลงทะเบียนเรียน")
    }
  }

  delete(i:string){
    this.studentClass = this.studentClass.filter((value)=>(i !== value.subject_id))
  }

  ok(){
    const s = this.addsubjectForm.value.sectionSelect
    this.studentClass.push(this.subjectHold.filter((value)=>value.subject_section === s)[0])
    this.cancel();
    console.log(this.studentClass);

  }

  cancel(){
    this.addsubjectForm.reset();
    this.sectionHold = [];
    this.subjectHold = [];
  }


  async onSubmit(){
    const a =  this.studentClass.filter(value=>this.addsubjectForm.value.subject_id ===value.subject_id);
    if(a.length === 0){
      let data = await this.AddSubjectService.findSubject(this.addsubjectForm.value.subject_id)
      if(data.length !== 0){
        this.subjectHold = data;
        this.sectionHold = (data.map((value,i)=>{
          return value.subject_section
        }))

      }else{
        this.sectionHold = [];
        this.subjectHold = [];
        this.addsubjectForm.reset()
        alert('ไม่พบวิชาเรียน')
      }
    }else{
      alert(this.addsubjectForm.value.subject_id+" is duplicate.")
      this.cancel()
    }

  }



}
