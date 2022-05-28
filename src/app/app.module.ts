import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './layout/top/top.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { HowtopageComponent } from './pages/withtopmenu/howtopage/howtopage.component';
import { AddSubjectComponent } from './pages/withtopmenu/add-subject/add-subject.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { OlddataComponent } from './pages/withtopmenu/olddata/olddata.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TeachertableComponent } from './pages/withtopmenu/teachertable/teachertable.component';
import { AddNewsubjectComponent } from './pages/add-newsubject/add-newsubject.component';
import { TeacherloginComponent } from './teacher/teacherlogin/teacherlogin.component';
import { TeachercheckstudentComponent } from './teacher/teachercheckstudent/teachercheckstudent.component';
import { TeachermainComponent } from './teacher/teachermain/teachermain.component';



@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FirstPageComponent,
    HowtopageComponent,
    AddSubjectComponent,
    OlddataComponent,
    TeachertableComponent,
    AddNewsubjectComponent,
    TeacherloginComponent,
    TeachercheckstudentComponent,
    TeachermainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
