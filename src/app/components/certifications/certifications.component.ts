import { Component, OnInit } from "@angular/core";
import { Certificate, Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';

@Component( {
  selector: "certifications",
  templateUrl: "./certifications.component.html",
} )
export class CertificationsComponent implements OnInit {

  certificates: Certificate[];
  editedCertificates: Certificate[] = [];
  displayModal: boolean = false;

  cols: any[] = [];

  editedIndex: number = -1;
  editedItem: Certificate = {};
  newCertificate: Certificate = {};
  invalid: boolean = false;

  constructor () { 
    this.certificates = ( <Resume>demoData ).certificates;
    this.initializeNewEducation();
  }

  ngOnInit (): void {
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'description', header: 'Description' }
    ];
  }

  initializeNewEducation () {
    this.newCertificate = {
      title: "",
      description: "",
    };
  }

  addNew () {
    // let child = this.createChildEntry(this.child.Name, this.child.BirthDate);

    this.invalid = false;

    if ( !this.newCertificate.title || !this.newCertificate.description )
      this.invalid = true;
    else {
      this.editedCertificates.push( this.newCertificate );
      this.initializeNewEducation();
    }
  }

  openModalDialog () {
    this.editedCertificates = this.certificates.map( a => ( { ...a } ) ); //Array.from(this.educationList); //[...this.educationList];
    this.initializeNewEducation();
    this.invalid = false;
    this.displayModal = true;
  }

  closeModalDialog () {
    this.certificates = [ ...this.editedCertificates ];
    this.displayModal = false;
    this.editedCertificates = [];
  }

  onRowEditInit ( item: Certificate, index: number ) {
    this.editedIndex = index;
    this.editedItem = Object.assign( {}, item );
  }

  onRowDelete ( item: Certificate, index: number ) {
    this.editedCertificates.splice( index, 1 )
  }

  onRowEditSave ( cert: Certificate, index: number ) {
    // this.editedEducationList[this.editedIndex] = Object.assign({}, this.editedItem);
    this.clearEditItem();
  }

  onRowEditCancel ( cert: Certificate, index: number ) {
    this.editedCertificates[ this.editedIndex ] = Object.assign( {}, this.editedItem );
    this.clearEditItem();
  }

  clearEditItem () {
    this.editedItem = {};
    this.editedIndex = -1;
  }
}
