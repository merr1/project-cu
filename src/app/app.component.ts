import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showOtherComponent = false;
  title = 'cu-site';
  lang:any;
  public selectedLanguage: any;

  constructor(router: Router,private translateService: TranslateService) {
    // translateService.setDefaultLang('EN_GB');
    router.events.forEach((event) => {

      if (event instanceof NavigationStart) {
        this.showOtherComponent = event.url == '/admin';
      }
    });
  }
  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en';
    localStorage.setItem('language',this.lang || 'en');
    // this.lang = localStorage.getItem('lang') || 'en';
    // this.selectedLanguage = this.lang 
    //     ? this.lang 
    //     : 'EN_GB';
    // this.translateService.use(this.selectedLanguage);
}
}
