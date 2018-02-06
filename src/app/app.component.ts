import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  users: any;
  user: any;
  constructor(private httpService: HttpService){

  }

  ngOnInit() {
    //this.httpService.getUsersdata();
    this.httpService.getUsersdata().subscribe(data => {
    this.users = data;
  });
}

getUserDetails(id){
  console.log("userId", id);
  this.httpService.getUserdata(id).subscribe(data => {
    console.log("data", data);
    this.user = data;
  });
}

flushUserData(){
  this.user = "";
}

}
