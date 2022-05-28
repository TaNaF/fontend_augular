import { Component, OnInit } from '@angular/core';
import { AddNewsubjectService } from './add-newsubject.service';
import { AddSubjectService } from '../withtopmenu/add-subject/add-subject.service';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-newsubject',
  templateUrl: './add-newsubject.component.html',
  styleUrls: ['./add-newsubject.component.css']
})
export class AddNewsubjectComponent implements OnInit {

  onThisTerm !: any;
  mySubjectList:any[] = [];
  sumCredit:number = 0;
  selectOption:number = 0;
  selectAdd:number[] = [];
  holdOldsecton!:string;
  allForm!:any;
  constructor(private fb:FormBuilder,private service:AddNewsubjectService,private service2:AddSubjectService) {
    this.allForm = this.fb.group({
      subject_id : ['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(9),Validators.minLength(9)]],
      sectionSelect : ['',[Validators.required]]
    })
  }

  async ngOnInit():Promise<void> {
    if(!localStorage.getItem('key-api')){
      document.location.href  =  "student-login"
      console.log(localStorage.getItem('key-api'))
    }
    const check = (await this.service2.getTerm());
    if(check.length !== 0){
      console.log(check)
      this.onThisTerm = check[0];
      const res = (await this.service.getMySubject(this.onThisTerm.semester_id));
      for(let i of res){
        this.sumCredit += i.credit
      }
      console.log(this.sumCredit)
      this.mySubjectList = res
    }
  }
  async submitsubjectId(){
    const data = this.mySubjectList.filter((value)=>value.subject_id === this.allForm.value.subject_id)
    console.log(data)
    if(data.length === 0){
      let section:any[] = await this.service.getSubjectSection(this.allForm.value.subject_id)
      if(section.length === 0){
        this.allForm.reset()
        alert('วิชานี้ไม่มีคลาสเรียน')
      }
      this.selectAdd = section.map(value=>{
        return value.subject_section
      })
    }else{
      this.allForm.reset()
      window.alert("You subject Id is Duplicate!!")
    }

  }
  onChange(){
    this.selectAdd = []
    this.holdOldsecton = ''
    this.allForm.reset()
  }
  async submitAdd(){
    const temp = this.allForm.value;
    await this.service.saveStudentClass(temp.subject_id,temp.sectionSelect,this.onThisTerm.semester_id)
    alert("เพิ่มสำเร็จ")
    location.reload();
  }
  async findInSubjectList(){
    const data = this.mySubjectList.filter((value)=>value.subject_id === this.allForm.value.subject_id)
    if(data.length === 1){
      console.log(data)
      this.holdOldsecton = data[0].subject_section;
      let section:any[] = await this.service.getSubjectSection(data[0].subject_id)
      this.selectAdd = section.map(value=>{return value.subject_section}).filter((value)=>value !== data[0].subject_section)
      if(this.selectAdd.length === 0){
        alert("วิชานี้มีแค่ตอนเรีนที่คุณลงเท่านั้น");
        this.onChange()
      }
    }else{
      alert("ไม่พบวิชาที่คุณลงไปแล้ว");
      this.selectAdd = []
      this.allForm.reset()
    }
  }
  submitChange(){
    const {sectionSelect , subject_id} = this.allForm.value;
    console.log(sectionSelect , subject_id , this.holdOldsecton);
    this.service.changeSection(subject_id,sectionSelect,this.holdOldsecton);
    alert("เปลี่ยนตอนเรียนสำเร็จแล้ว")
    location.reload();
  }
  submitDelete(){
    const a = this.mySubjectList.filter(value=>value.subject_id === this.allForm.value.subject_id)
    console.log(a[0])
    var answer = window.confirm(`จะถอนวิชา ${a[0].subject_name} ใช่ไหม?`);
    if (answer) {
      this.service.deleteSubject(a[0].class_id);
      location.reload();
    }
    else {
      this.onChange();
    }
  }

}
