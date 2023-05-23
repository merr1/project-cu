import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-discuss-eu',
  templateUrl: './discuss-eu.component.html',
  styleUrls: ['./discuss-eu.component.scss'],
})
export class DiscussEuComponent implements OnInit {
  param: any = 'first';
  public aboutt: any;
  public lang: any;
  public data: any;
  public data2: any;
  url: string = 'https://www.youtube.com/embed/2C9_xS_OS50';
  public safeSrc: any;
  urlSafe: SafeResourceUrl | undefined;
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('https://www.eupoltrans.cu.edu.ge:8000/discuss-interviews/', {
        headers: headers,
      })
      .subscribe((data) => {
        this.data = data;
        console.log(this.data, 'meri');
        for (let i = 0; i < data.length; i++) {
          this.data[i].url = this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube.com/embed/' +
              data[i].url.slice(
                data[i].url.lastIndexOf('=') + 1,
                data[i].url.lastIndexOf('=') + 12
              )
          );
          console.log(this.data);
        }
        console.log(this.data, 'meri');
      });
    this.http
      .get<any>('https://www.eupoltrans.cu.edu.ge:8000/policy-roundtables/', {
        headers: headers,
      })
      .subscribe((data) => {
        this.aboutt = data[0];
      });
    this.http
      .get<any>('https://www.eupoltrans.cu.edu.ge:8000/plain-text/', {
        headers: headers,
      })
      .subscribe((data) => {
        this.data2 = data;
      });
  }
}
