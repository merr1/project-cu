import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-upcoming-consultations',
  templateUrl: './upcoming-consultations.component.html',
  styleUrls: ['./upcoming-consultations.component.scss']
})
export class UpcomingConsultationsComponent implements OnInit {
  public aboutt: any;
  public lang: any;
  public data:any;
  public data1: any;
  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('http://45.93.139.10:8000/events/', { headers: headers })
      .subscribe((data) => {
        this.data = data;
        console.log(this.data)

      });
      this.http
      .get<any>('http://45.93.139.10:8000/news', { headers: headers })
      .subscribe((data) => {
        this.data1 = data;

      });

  }
}
