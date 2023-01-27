import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  public aboutt: any;
  public lang: any;
  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('language');
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('http://45.93.139.10:8000/about', { headers: headers })
      .subscribe((data) => {
        this.aboutt = data[0];
        console.log(data)
      });
  }

}
