import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-teach-eu',
  templateUrl: './teach-eu.component.html',
  styleUrls: ['./teach-eu.component.scss']
})
export class TeachEuComponent implements OnInit {
  param:any='first';
  public aboutt: any;
  public lang: any;
  public data:any;
  public data1:any;
  public data2:any;
  public dataVideo:any;
  url: string = 'https://www.youtube.com/embed/2C9_xS_OS50';
  public safeSrc: any;
  urlSafe: SafeResourceUrl | undefined;

  constructor(
    private translateService: TranslateService,
    private http: HttpClient,
    public sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('http://45.93.139.10:8000/teach-course', { headers: headers })
      .subscribe((data) => {
        this.data = data;

      });

      this.http
      .get<any>('http://45.93.139.10:8000/research-second', { headers: headers })
      .subscribe((data) => {
        this.data1 = data;

      });
      this.http
      .get<any>('http://45.93.139.10:8000/plain-text', { headers: headers })
      .subscribe((data) => {
        this.data2 = data;

      });
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url); 
    this.http
      .get<any>('http://45.93.139.10:8000/teach-mooc/', { headers: headers })
      .subscribe((data) => {
        this.dataVideo = data;
        for(let i=0;i<data.length;i++){
          this.dataVideo[i].url=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+data[i].url.slice(data[i].url.lastIndexOf('=')+1,data[i].url.lastIndexOf('=')+12));
        }
  
      });


  }
}
