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
  public data2:any;
  public len2:any;
  public facebook:any;
  public twitter:any;
  public link1:any;
  public link2:any;
  

  constructor(    private http: HttpClient) {}

  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
}
  ngOnInit(): void {

    this.lang = localStorage.getItem('language') || 'en';
    let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('https://45.93.139.10:8000/news', { headers: headers })
      .subscribe((data) => {
        this.data = data;
        this.len=data.length;

      });
      this.http
      .get<any>('http://45.93.139.10:8000/plain-text', { headers: headers })
      .subscribe((data) => {
        this.data2 = data;
        data.map((item:any)=>{
          if(item.tag=="main-facebook-feed-link"){
            this.facebook=item.text;

          }
          if(item.tag=="main-twitter-feed-link"){
          this.twitter=item.text;
  
          this.link1="https://twitter.com/"+this.twitter;

          }
        })

        

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
          this.dataaa=data;
          this.len2=data.length;
   
      });
      
  }


}
