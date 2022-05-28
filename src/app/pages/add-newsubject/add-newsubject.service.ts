import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AddNewsubjectService {
  headers!:any;
  constructor() {
    this.headers = {'Authorization': 'Bearer ' + localStorage.getItem("key-api")}
  }

  async getMySubject(semester_id:number){
    const res = await axios({
      method: 'GET',
      url : `http://localhost:3000/getSubject/${semester_id}`,
      headers : this.headers
    })
    return (res.data)
  }

  async getSubjectSection(subject_id:string){
    const res = await axios({
      method: 'post',
      url : `http://localhost:3000/findSection`,
      data : {subject_id},
      headers : this.headers
    })
    return res.data;
  }

  async saveStudentClass(subject_id:string,sectionSelect:string,semester_id:number){
    const res = await axios({
      method: 'post',
      url : `http://localhost:3000/saveonestudentclass`,
      data : {subject_id,sectionSelect,semester_id},
      headers : this.headers
    })
  }

  async changeSection(subject_id:string,new_section:string,old_section:string){
    const res = await axios({
      method: 'patch',
      url : `http://localhost:3000/changSection`,
      data : {subject_id,new_section,old_section},
      headers : this.headers
    })
  }

  async deleteSubject(class_id:number){
    const res = await axios({
      method: 'delete',
      url : `http://localhost:3000/deleteSubject/${class_id}`,
      headers : this.headers
    })
  }
}
