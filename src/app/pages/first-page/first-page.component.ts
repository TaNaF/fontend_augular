import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { FirstPageService } from './first-page.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  authForm!:FormGroup
  constructor(private fb:FormBuilder , private firstPageService:FirstPageService
  ) {
    this.authForm = this.fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
   }

  async ngOnInit(){
    if(localStorage.getItem('key-api')){
      const res =  await this.firstPageService.checkkey()
      if(res){
        document.location.href  =  "home"
      }
    }else{
      console.log("You must login.");
    }
  }

  async onSubmit(){
    const check = (await this.firstPageService.login(this.authForm.value));
     if(check){
       document.location.href = "home";
       }else{
         this.authForm.reset()
         alert("ไม่พบข้อมูล")
        }
  }


}
