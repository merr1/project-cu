import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-fullNews',
  templateUrl: './fullNews.component.html',
  styleUrls: ['./fullNews.component.scss']
})
export class FullNewsComponent implements OnInit {
  public aboutt: any;
  public lang: any;
  public data:any;
  public mainInfo:any;

  param:any;
  constructor(
    private translateService: TranslateService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.param = params.article;
    }
  );
    
    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('http://45.93.139.10:8000/news', { headers: headers })
      .subscribe((data) => {

        for(let i=0;i<data.length;i++){



          if(i+1==this.param){
            this.mainInfo= data[i];

          }

        }

      });

  }

}
