import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  responsiveOptions:any;
  cars:any;
  public lang:any;
  data: any;
  public len :any;
  public len2:any;
  public dataa:any;
  public dataaa:any;
  public data2:any;

  constructor( private http: HttpClient) { 
  }

  ngOnInit() {
   

  
    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('http://45.93.139.10:8000/news', { headers: headers })
      .subscribe((data) => {
        if(data.length>6){
          this.data = data.splice(data.length-6,data.length);
          }else{
            this.data=data;

          }
          this.len=data.length;

      });
  }
  

}
