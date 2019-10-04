import { Component, OnInit,  } from '@angular/core';
import { AppSettings } from 'src/app/core/app-settings';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = AppSettings.appName;
  menuVisible = false;
  constructor() { }

  ngOnInit() {
  }
 
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

}
