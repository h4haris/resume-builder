import { Component, OnInit } from "@angular/core";
import { Interest, InterestData, Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';
import interestsData from '../../../assets/data/interests.json';

@Component( {
  selector: "interests",
  templateUrl: "./interests.component.html",
} )
export class InterestsComponent implements OnInit {

  allInterests: Interest[];
  interests: Interest[];
  editedInterests: Interest[] = [];
  displayModal: boolean = false;

  constructor () {
    this.interests = ( <Resume>demoData ).interests;
    this.allInterests = ( <InterestData>interestsData ).data;
   }

  ngOnInit (): void { }

  openModalDialog () {
    this.editedInterests = [...this.interests];
    this.displayModal = true;
  }

  closeModalDialog () {
    this.interests = [...this.editedInterests];
    this.displayModal = false;
    this.editedInterests = [];
  }
}
