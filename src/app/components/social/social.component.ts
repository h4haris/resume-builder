import { Component, OnInit } from "@angular/core";
import { Resume, Social, SocialData } from "src/app/models";
import demoData from '../../../assets/data/demo.json';
import socialData from '../../../assets/data/social.json';

@Component( {
  selector: "social",
  templateUrl: "./social.component.html",
} )
export class SocialComponent implements OnInit {

  allSocial: Social[];
  socialList: Social[];
  editedSocialList: Social[] = [];
  displayModal: boolean = false;

  cols: any[] = [];

  editedIndex: number = -1;
  editedItem: Social = {};
  newSocial: Social = {};
  newIconSelection: Social = {};
  invalid: boolean = false;

  constructor () {
    this.socialList = ( <Resume>demoData ).social
    this.allSocial = ( <SocialData>socialData ).data;
    this.initializeNewSocial();
  }

  ngOnInit (): void {
    this.cols = [
      // { field: 'icon', header: 'Icon' },
      { field: 'link', header: 'link' },
      { field: 'name', header: 'Name' }
    ];
  }

  initializeNewSocial () {
    this.newSocial = {
      name: "",
      link: ""
    };
  }

  addNew () {
    // let child = this.createChildEntry(this.child.Name, this.child.BirthDate);

    this.invalid = false;

    if ( !this.newSocial.name || !this.newSocial.link || !this.newSocial.icon )
      this.invalid = true;
    else {
      this.editedSocialList.push( this.newSocial );
      this.initializeNewSocial();
    }
  }

  openModalDialog () {
    this.editedSocialList = this.socialList.map( a => ( { ...a } ) ); //Array.from(this.educationList); //[...this.educationList];
    this.initializeNewSocial();
    this.invalid = false;
    this.displayModal = true;
  }

  closeModalDialog () {
    this.socialList = [ ...this.editedSocialList ];
    this.displayModal = false;
    this.editedSocialList = [];
  }

  onRowEditInit ( item: Social, index: number ) {
    this.editedIndex = index;
    this.editedItem = Object.assign( {}, item );
  }

  onRowDelete ( item: Social, index: number ) {
    this.editedSocialList.splice( index, 1 )
  }

  onRowEditSave ( edu: Social, index: number ) {
    // this.editedEducationList[this.editedIndex] = Object.assign({}, this.editedItem);
    this.clearEditItem();
  }

  onRowEditCancel ( edu: Social, index: number ) {
    this.editedSocialList[ this.editedIndex ] = Object.assign( {}, this.editedItem );
    this.clearEditItem();
  }

  clearEditItem () {
    this.editedItem = {};
    this.editedIndex = -1;
  }
}
