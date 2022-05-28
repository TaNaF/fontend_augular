import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class TeachermainService {
  headers!:any
  constructor() {
    this.headers = {
      'Authorization': 'Bearer ' + localStorage.getItem("teacher-key-api")
    }
   }

  async getTeacherSemester(){
    const res = await axios({
      method: 'get',
      url: `http://localhost:2500/getTeacherSemester`,
      headers : this.headers
    })
    if(res.status === 200){
      return res.data
    }
  }

  async getStudents(class_id:number){
    const res = await axios({
      method: 'post',
      url: `http://localhost:2500/getStudents`,
      data: {class_id},
      headers : this.headers
    })
    if(res.status === 200){
      return res.data
    }
  }
}
