import { Component, OnInit } from "@angular/core";
import { Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';

@Component( {
  selector: "profile",
  templateUrl: "./profile.component.html",
} )
export class ProfileComponent implements OnInit {

  profile: string;
  editedProfile: string = '';
  displayModal: boolean = false;

  constructor () {
    this.profile = ( <Resume>demoData ).profile
  }

  ngOnInit (): void { }

  openModalDialog () {
    this.editedProfile = this.profile;
    this.displayModal = true;
  }

  closeModalDialog () {
    this.profile = this.editedProfile;
    this.displayModal = false;
    this.editedProfile = '';
  }
}
