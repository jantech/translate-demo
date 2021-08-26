import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translate-demo';

  /**
   *
   */
  constructor(public translateService: TranslateService) {
    
    this.translateService.addLangs(['ta', 'en']);
    this.translateService.setDefaultLang('ta');
    this.translateService.use('ta');

  }

}
