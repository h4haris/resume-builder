import { Component } from '@angular/core';

declare var loadScript: any;

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  title = 'resume-builder';

  visibleSidebar2 = false;

  ngAfterViewInit () {
    loadScript()
  }
}
