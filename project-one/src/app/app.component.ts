import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-one';
  name = 'Robert';
  section = 'learn something new';
  appUrl = '';

  constructor () {
    this.appUrl = environment.apiUrl;
  }
}
