import { Component, OnInit } from "@angular/core";
import { Reference, Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';

@Component( {
  selector: "references",
  templateUrl: "./references.component.html",
} )
export class ReferencesComponent implements OnInit {

  references: Reference[];
  editedReferences: Reference[] = [];
  displayModal: boolean = false;

  cols: any[] = [];

  editedIndex: number = -1;
  editedItem: Reference = {};
  newRef: Reference = {};
  invalid: boolean = false;

  constructor () { 
    this.references = ( <Resume>demoData ).references;
    this.initializeNewReference();
  }

  ngOnInit (): void {
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'subtitle', header: 'Subtitle' },
      { field: 'phone', header: 'Phone' },
      { field: 'email', header: 'Email' }
    ];
  }

  initializeNewReference () {
    this.newRef = {
      title: "",
      subtitle: "",
      phone: "",
      email: ""
    };
  }

  addNew () {
    // let child = this.createChildEntry(this.child.Name, this.child.BirthDate);

    this.invalid = false;

    if ( !this.newRef.title || !this.newRef.subtitle || !this.newRef.phone ||  !this.newRef.email)
      this.invalid = true;
    else {
      this.editedReferences.push( this.newRef );
      this.initializeNewReference();
    }
  }

  openModalDialog () {
    this.editedReferences = this.references.map( a => ( { ...a } ) ); //Array.from(this.educationList); //[...this.educationList];
    this.initializeNewReference();
    this.invalid = false;
    this.displayModal = true;
  }

  closeModalDialog () {
    this.references = [ ...this.editedReferences ];
    this.displayModal = false;
    this.editedReferences = [];
  }

  onRowEditInit ( item: Reference, index: number ) {
    this.editedIndex = index;
    this.editedItem = Object.assign( {}, item );
  }

  onRowDelete ( item: Reference, index: number ) {
    this.editedReferences.splice( index, 1 )
  }

  onRowEditSave ( ref: Reference, index: number ) {
    // this.editedEducationList[this.editedIndex] = Object.assign({}, this.editedItem);
    this.clearEditItem();
  }

  onRowEditCancel ( ref: Reference, index: number ) {
    this.editedReferences[ this.editedIndex ] = Object.assign( {}, this.editedItem );
    this.clearEditItem();
  }

  clearEditItem () {
    this.editedItem = {};
    this.editedIndex = -1;
  }
}
