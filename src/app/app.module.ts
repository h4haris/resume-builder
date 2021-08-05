import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import {
  CertificationsComponent, EducationComponent, ExperienceComponent, HomeComponent,
  InterestsComponent, LanguagesComponent, ProfileComponent, ReferencesComponent,
  SkillsComponent, SocialComponent
} from "./components/index";
import { PrimeNgMaterialModule } from "./modules/primeng-material.module";

const COMPONENTS = [
  AppComponent,
  CertificationsComponent,
  EducationComponent,
  ExperienceComponent,
  HomeComponent,
  InterestsComponent,
  LanguagesComponent,
  ProfileComponent,
  ReferencesComponent,
  SkillsComponent,
  SocialComponent
]

@NgModule( {
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, FormsModule, PrimeNgMaterialModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
