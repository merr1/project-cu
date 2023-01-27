import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss'],
})
export class ContextComponent implements OnInit {
 public lang:any;
  data: any;
  public len :any;
  public dataa:any;
  public dataaa:any;

  constructor(    private http: HttpClient) {}

  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
}
  ngOnInit(): void {
    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('http://45.93.139.10:8000/news', { headers: headers })
      .subscribe((data) => {
        this.data = data;
        this.len=data.length;
        console.log(this.data)

      });

      this.http
      .get<any>('http://45.93.139.10:8000/blog', { headers: headers })
      .subscribe((data) => {
        if(data.length>3){
        this.dataa = data.splice(data.length-3,data.length);
        }else{
          this.dataa=data;
        }
      });
      this.http
      .get<any>('http://45.93.139.10:8000/events', { headers: headers })
      .subscribe((data) => {
        if(data.length>3){
        this.dataaa = data.splice(data.length-3,data.length);
        }else{
          this.dataaa=data;
        }
      });
  }


}
