import { Component, OnInit } from "@angular/core";
import { Personal, Resume } from "src/app/models";
import demoData from '../../../assets/data/demo.json';

declare var scaleCv: any;
declare var removeScale: any;

@Component( {
  selector: "home",
  templateUrl: "./home.component.html",
  styles: [
    `
      .drop-area {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100px;
        border: 2px dashed gray;
        background-color: rgba(176, 176, 176, 0.3);
        font-weight: bold;
      }
    `
  ],
} )
export class HomeComponent implements OnInit {
  // const { weather, isDataLoaded } = this.state;
  personal: Personal;
  editedPersonal: Personal = {};
  displayModal: boolean = false;

  uploadedFile: any[] = [];

  constructor () {
    this.personal = ( <Resume>demoData ).personal
  }

  ngOnInit (): void { }

  setUploadedFile ( event: any ) {
    for ( let file of event.files ) {
      this.uploadedFile = [ file ];
      if ( file ) {
        var reader = new FileReader();
        var self = this;
        reader.onload = function ( e ) {
          if ( e && e.target && e.target.result ) {
            self.editedPersonal.profileImage = <string>e.target.result;
          }
        };

        reader.readAsDataURL( file );
      }
    }
  }

  removeUploadedFile ( event: any ) {
    this.uploadedFile = [];
  }

  openModalDialog () {
    this.editedPersonal = Object.assign( {}, this.personal );
    this.displayModal = true;
  }

  closeModalDialog () {
    this.personal = Object.assign( {}, this.editedPersonal );
    this.displayModal = false;
    this.editedPersonal = {};
  }
  // resumeButtonClick () {
  //   // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  //   scaleCv()

  //   // 2. The PDF is generated
  //   generateResume()

  //   // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
  //   setTimeout( removeScale, 5000 )
  // }
}
