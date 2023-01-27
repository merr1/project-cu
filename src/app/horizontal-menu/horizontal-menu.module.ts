import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HorizontalMenuComponent } from '../horizontal-menu/horizontal-menu.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    LanguageSelectorComponent,
    AboutPageComponent,
    HorizontalMenuComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class HorizontalMenu {}
