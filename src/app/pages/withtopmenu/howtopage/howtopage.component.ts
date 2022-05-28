import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howtopage',
  templateUrl: './howtopage.component.html',
  styleUrls: ['./howtopage.component.css']
})
export class HowtopageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(!localStorage.getItem('key-api')){
      document.location.href  =  "student-login"
      console.log(localStorage.getItem('key-api'))
    }
  }

}
