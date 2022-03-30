import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { ChangepwformComponent } from './changepwform/changepwform.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    SignupFormComponent,
    FormarrayComponent,
    ChangepwformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
