import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { ChangepwformComponent } from './changepwform/changepwform.component';
import { HttpClientModule } from '@angular/common/http';
import { HttptestComponent } from './httptest/httptest.component';
import { PostService } from './Services/post.service';
import { FollowerPageComponent } from './follower-page/follower-page.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    SignupFormComponent,
    FormarrayComponent,
    ChangepwformComponent,
    HttptestComponent,
    FollowerPageComponent,
    NotFoundComponent,
    NavbarComponent,
    GithubprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:AppComponent},
      {path:'courseform',component:CourseFormComponent},
      {path:'changepw',component:ChangepwformComponent},
      {path:'formarray',component:FormarrayComponent},
      {path:'httptest',component:HttptestComponent},
      {path:'followers',component:FollowerPageComponent},
      {path:'signup',component:SignupFormComponent},
      {path:'**',component:NotFoundComponent},

    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
