import { Component } from '@angular/core';
declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-uikit';

  notify() {
    UIkit.notification({ message: '<span uk-icon=\'icon: check\'></span> Message!!', pos: 'bottom-right' });
  }
}
