import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class OlddataService {

  headers !:any;
  constructor() {
    this.headers = {
      'Authorization': 'Bearer ' + localStorage.getItem("key-api")
    }
  }

  async getSemester(){
    const res = await axios({
      method: 'get',
      url: `http://localhost:3000/getSemester`,
      headers : this.headers
    })
    if(res.status === 200){
      return res.data;
    }
    return undefined;
  }
  async getMySemester(semester_id:number){
    const res = await axios({
      method: 'post',
      url: `http://localhost:3000/getMySemester`,
      data: {semester_id},
      headers : this.headers
    })
    if(res.status === 201){
      return res.data
    }
    return undefined
  }
}
