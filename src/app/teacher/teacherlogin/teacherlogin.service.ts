import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class TeacherloginService {


  constructor() {
  }

  async login(teacher:object):Promise<any>{
    const res = await axios(
      {
        method: 'post',
        url: `http://localhost:2500/login`,
        data:teacher
      }
    )
    if(res.status === 200){
      if(res.data.error){
        console.log(res.data.error)
        return {error:true}
      }
      localStorage.setItem('teacher-key-api',res.data.token);
      localStorage.setItem('teacher-fname',res.data.teacher_fname);
      localStorage.setItem('teacher-lname',res.data.teacher_lname);
      return {error: false}
    }
  }
}
