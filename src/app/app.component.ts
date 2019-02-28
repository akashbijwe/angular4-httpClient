import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: any;
  user: any;


  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    //this.httpService.getUsersdata();
    //const abc = "test" + this.title;
    
    this.httpService.getUsersdata().subscribe(data => {
      this.users = data;
    });
  }
  new() {
    let test = " + test 2"
    const abc = "test" + test;
    console.log(abc);
    test = " + test 3";
    console.log(abc);

    // const abc = [1,2,3]
    // console.log(abc);
    // abc.push(4);
    // console.log(abc);
    
  }

  getUserDetails(id) {
    console.log("userId", id);
    this.httpService.getUserdata(id).subscribe(data => {
      console.log("data", data);
      this.user = data;
    });
  }

  flushUserData() {
    this.user = "";
  }
  up(text) {
    console.log("click", text);
  }


}
