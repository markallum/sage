import { Component } from '@angular/core';
import { AppSettings } from './core/app-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = AppSettings.appName;
}
