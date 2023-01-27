import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  lang: any;
  constructor(private translateService: TranslateService) {
    this.lang = localStorage.getItem('language') ||'en';
    localStorage.setItem('language',this.lang || 'en');
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('language') ||'en';
    localStorage.setItem('language',this.lang || 'en');
  }
  public selectlanguage(event: any) {
    localStorage.setItem('language', event.target.value);
    window.location.reload();
  }
}
