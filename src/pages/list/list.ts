import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import{Http,Response} from '@angular/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  page: any;
  //private apiUrl="http://api.alquran.cloud/surah/"+114+"/ar.alafasy";
  surah_id:any=[];
  surahData:any=[];
  hr_bismillah='assets/imgs/hr_bismillah.png'; 
  hr_surah='assets/imgs/hr_surah.png';
  verse_no='assets/imgs/verse_no.png';
  getData(surah_no) {
    
     return this.http.get("http://api.alquran.cloud/surah/"+surah_no)
     .map((res:Response)=>res.json())
   }
 getSurah(surah_no)
   {
     this.getData(surah_no).subscribe(data => { this.surahData=[data.data];
       console.log(this.surahData);
     })
   }
 
 

  constructor(private http:Http,public navCtrl: NavController, public navParams: NavParams) {
  this.surah_id = navParams.get('data');
   this.getSurah(this.surah_id[0].number);
    this.getData(this.surah_id[0].number);


  }

}
