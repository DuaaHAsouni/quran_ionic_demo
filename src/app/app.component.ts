import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{Http,Response} from '@angular/http'
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  private apiUrl="http://api.alquran.cloud/surah";

  surahs:any=[];
  pages: any=[];

  getData() {
    
     return this.http.get(this.apiUrl)
     .map((res:Response)=>res.json())
   }


 getSurahList()
   {
     this.getData().subscribe(data => { 
       this.surahs=data.data;
      
     })
   }
 



  constructor(private http: Http,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.getSurahList();
    this.getData();
    
    // used for an example of ngFor and navigation
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page,index) {
    console.log(index);
    this.nav.setRoot(ListPage,{
      data:[page],
      index:index
    });
  }
}
