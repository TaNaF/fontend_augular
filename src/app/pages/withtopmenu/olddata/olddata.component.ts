import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OlddataService } from './olddata.service';

@Component({
  selector: 'app-olddata',
  templateUrl: './olddata.component.html',
  styleUrls: ['./olddata.component.css']
})
export class OlddataComponent implements OnInit {
  semesterList:any[] = [];
  olddataForm!:FormGroup;
  tableSubject:any[] = [];
  constructor(private fb:FormBuilder,private OlddataService:OlddataService) {
    this.olddataForm = this.fb.group({
      semester : ['',[Validators.required]]
    })
  }

  async ngOnInit():Promise<void> {
    if(!localStorage.getItem('key-api')){
      document.location.href  =  "student-login"
      console.log(localStorage.getItem('key-api'))
    }
    const dd:any[] = await this.OlddataService.getSemester()
    if(dd){
      this.semesterList = dd;
    }

  }

  async onSubmit(){
    const data = await this.olddataForm.value.semester
    const result = await this.OlddataService.getMySemester(data)
    if(result){
      this.tableSubject = result;
    }
  }


}
