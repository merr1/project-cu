import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-research-eu',
  templateUrl: './research-eu.component.html',
  styleUrls: ['./research-eu.component.scss']
})
export class ResearchEuComponent implements OnInit {
  param:any='first';
  public aboutt: any;
  public lang: any;
  public data:any;
  public data1:any;

  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('http://45.93.139.10:8000/research-first', { headers: headers })
      .subscribe((data) => {
        this.data = data;

      });

      this.http
      .get<any>('http://45.93.139.10:8000/research-second', { headers: headers })
      .subscribe((data) => {
        this.data1 = data;

      });

  }
}
