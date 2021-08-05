import { Component, OnInit } from "@angular/core";
import { Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';

@Component( {
  selector: "skills",
  templateUrl: "./skills.component.html",
} )
export class SkillsComponent implements OnInit {

  skills: string[];
  editedSkills: string[] = [];
  displayModal: boolean = false;

  constructor () {
    this.skills = ( <Resume>demoData ).skills;
  }

  ngOnInit (): void { }

  openModalDialog () {
    this.editedSkills = [...this.skills];
    this.displayModal = true;
  }

  closeModalDialog () {
    this.skills = [...this.editedSkills];
    this.displayModal = false;
    this.editedSkills = [];
  }
}
