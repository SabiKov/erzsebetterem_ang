import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Erzsebet Terem';

  loadedMenu = 'member-list';

  @Output() wasSelectedNavOption = new EventEmitter<string>();

  onNavigate(menuOption: string) {
    console.log(menuOption);
    this.loadedMenu = menuOption;
  }

}
