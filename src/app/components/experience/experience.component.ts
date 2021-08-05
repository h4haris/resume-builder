import { Component, OnInit } from "@angular/core";
import { Experience, Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';

@Component( {
  selector: "experience",
  templateUrl: "./experience.component.html",
} )
export class ExperienceComponent implements OnInit {
  
  experienceList: Experience[];
  editedExperienceList: Experience[] = [];
  displayModal: boolean = false;

  cols: any[] = [];

  editedIndex: number = -1;
  editedItem: Experience = {};
  newExperience: Experience = {};
  invalid: boolean = false;

  constructor () {
    this.experienceList = ( <Resume>demoData ).experience;
    this.initializeNewExperience();
  }

  ngOnInit (): void {
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'company', header: 'Company with duration' },
      { field: 'description', header: 'Description' }
    ];
  }

  initializeNewExperience () {
    this.newExperience = {
      title: "",
      company: "",
      description: "",
    };
  }

  addNew () {
    // let child = this.createChildEntry(this.child.Name, this.child.BirthDate);

    this.invalid = false;

    if ( !this.newExperience.title || !this.newExperience.company || !this.newExperience.description )
      this.invalid = true;
    else {
      this.editedExperienceList.push( this.newExperience );
      this.initializeNewExperience();
    }
  }

  openModalDialog () {
    this.editedExperienceList = this.experienceList.map( a => ( { ...a } ) ); //Array.from(this.educationList); //[...this.educationList];
    this.initializeNewExperience();
    this.invalid = false;
    this.displayModal = true;
  }

  closeModalDialog () {
    this.experienceList = [ ...this.editedExperienceList ];
    this.displayModal = false;
    this.editedExperienceList = [];
  }

  onRowEditInit ( item: Experience, index: number ) {
    this.editedIndex = index;
    this.editedItem = Object.assign( {}, item );
  }

  onRowDelete ( item: Experience, index: number ) {
    this.editedExperienceList.splice( index, 1 )
  }

  onRowEditSave ( exp: Experience, index: number ) {
    // this.editedEducationList[this.editedIndex] = Object.assign({}, this.editedItem);
    this.clearEditItem();
  }

  onRowEditCancel ( exp: Experience, index: number ) {
    this.editedExperienceList[ this.editedIndex ] = Object.assign( {}, this.editedItem );
    this.clearEditItem();
  }

  clearEditItem () {
    this.editedItem = {};
    this.editedIndex = -1;
  }
}
