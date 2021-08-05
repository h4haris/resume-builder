import { Component, OnInit } from "@angular/core";
import { Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';

@Component( {
  selector: "languages",
  templateUrl: "./languages.component.html",
} )
export class LanguagesComponent implements OnInit {

  languages: string[];
  editedLanguages: string[] = [];
  displayModal: boolean = false;
  
  constructor () {
    this.languages = ( <Resume>demoData ).languages;
  }

  ngOnInit (): void { }

  openModalDialog () {
    this.editedLanguages = [...this.languages];
    this.displayModal = true;
  }

  closeModalDialog () {
    this.languages = [...this.editedLanguages];
    this.displayModal = false;
    this.editedLanguages = [];
  }
}
