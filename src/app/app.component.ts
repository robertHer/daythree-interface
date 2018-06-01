import { Component, OnInit } from '@angular/core';


interface Person {
  firstName:string;
  lastName:string;

  sayHi(): string;
   
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    this.practice2Test();
  }




practice2Test(){

  const customer:Person = { 
    firstName:"bob",
    lastName:"smith",
    sayHi: () =>{return "Hi there"} 
 } 
 console.log(customer.firstName, customer.lastName , customer.sayHi()) 
 
 
 const employee:Person = { 
    firstName:"jamie",
    lastName:"smith", 
    sayHi: ()=>{return "Hello!!!"} 
 } 
   
 console.log(employee.firstName, employee.lastName, employee.sayHi()) 

}

}