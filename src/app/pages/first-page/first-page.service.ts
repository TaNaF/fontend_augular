import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FirstPageService {
  headers!:any;
  constructor() {
    this.headers = {
      'Authorization': 'Bearer ' + localStorage.getItem("key-api")
    }
  }
  async login(data:{username:string,password:string}):Promise<Boolean>{
    try{
      const res = await axios({
        method: 'post',
        url: 'http://localhost:3000/auth/login',
        data: {
          username: data.username,
          password: data.password
        }
      });


      localStorage.setItem("key-api",res.data.access_token)
     
      localStorage.setItem("student_id",res.data.user_profile.student_id)
      localStorage.setItem("student_fname",res.data.user_profile.student_fname)
      localStorage.setItem("student_lname",res.data.user_profile.student_lname)
      localStorage.setItem("student_major",res.data.user_profile.major_id	)
      return true
    }catch(e){
      return false
    }
  }


  async checkkey(){
    try{
      const res = await axios(
        {
          method: 'get',
          url: 'http://localhost:3000/profile',
          headers : this.headers
        }
      )
      if(res.status === 200){
        return true
      }
      return false
    }catch(e){
      return false;
    }
  }
}
