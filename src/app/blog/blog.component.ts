import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public aboutt: any;
  public lang: any;
  public data: any;
  public data1: any;
  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('https://www.eupoltrans.cu.edu.ge:8000/blog', {
        headers: headers,
      })
      .subscribe((data) => {
        this.data = data;
        console.log('meri');
        console.log(data);
      });

    this.http
      .get<any>('https://www.eupoltrans.cu.edu.ge:8000/news/', {
        headers: headers,
      })
      .subscribe((data) => {
        this.data1 = data;
      });
  }
}
