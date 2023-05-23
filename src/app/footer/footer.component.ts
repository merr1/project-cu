import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public lang: any;
  public data: any;
  public len: any;
  public currentYear: number = new Date().getFullYear();
  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('https://www.eupoltrans.cu.edu.ge:8000/plain-text/', {
        headers: headers,
      })
      .subscribe((data) => {
        this.data = data;
      });
  }
}
