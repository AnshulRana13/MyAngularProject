import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let buylaptop = new Promise((resolve,reject)=>{
      //resolve("Promise is resolved");
      reject("Promise got rejected");

    });
   
    buylaptop.then(res=>{
      console.log('then code =>' , res);
    }).catch(res=>{
      console.log("catch code =>" , res)
    });

  }

  onClickMe() {
    console.log("my function called");
  }


 
}
