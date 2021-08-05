import { Component, OnInit } from "@angular/core";
import { Education, Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';

@Component( {
  selector: "education",
  templateUrl: "./education.component.html",
} )
export class EducationComponent implements OnInit {

  educationList: Education[];
  editedEducationList: Education[] = [];
  displayModal: boolean = false;

  cols: any[] = [];

  editedIndex: number = -1;
  editedItem: Education = {};
  newEducation: Education = {};
  invalid: boolean = false;

  constructor () {
    this.educationList = ( <Resume>demoData ).education;
    this.initializeNewEducation();
  }

  ngOnInit (): void {
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'studies', header: 'Studies' },
      { field: 'year', header: 'Year' }
    ];
  }

  initializeNewEducation () {
    this.newEducation = {
      title: "",
      studies: "",
      year: "",
    };
  }

  addNew () {
    // let child = this.createChildEntry(this.child.Name, this.child.BirthDate);

    this.invalid = false;

    if ( !this.newEducation.title || !this.newEducation.studies || !this.newEducation.year )
      this.invalid = true;
    else {
      this.editedEducationList.push( this.newEducation );
      this.initializeNewEducation();
    }
  }

  openModalDialog () {
    this.editedEducationList = this.educationList.map( a => ( { ...a } ) ); //Array.from(this.educationList); //[...this.educationList];
    this.initializeNewEducation();
    this.invalid = false;
    this.displayModal = true;
  }

  closeModalDialog () {
    this.educationList = [ ...this.editedEducationList ];
    this.displayModal = false;
    this.editedEducationList = [];
  }

  onRowEditInit ( item: Education, index: number ) {
    this.editedIndex = index;
    this.editedItem = Object.assign( {}, item );
  }

  onRowDelete ( item: Education, index: number ) {
    this.editedEducationList.splice( index, 1 )
  }

  onRowEditSave ( edu: Education, index: number ) {
    // this.editedEducationList[this.editedIndex] = Object.assign({}, this.editedItem);
    this.clearEditItem();
  }

  onRowEditCancel ( edu: Education, index: number ) {
    this.editedEducationList[ this.editedIndex ] = Object.assign( {}, this.editedItem );
    this.clearEditItem();
  }

  clearEditItem () {
    this.editedItem = {};
    this.editedIndex = -1;
  }
}
