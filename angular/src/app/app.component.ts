import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = false;

  constructor() {}

  toggle() {
    let item = document.getElementById('menu-icon');
    if (this.isOpen) {
      item.classList.remove('fa-bars');
      item.classList.add('fa-times', 'nav-open');
      this.isOpen = false;
    } else {
      item.classList.add('fa-bars');
      item.classList.remove('fa-times');
      this.isOpen = true;
    }
  }
}
