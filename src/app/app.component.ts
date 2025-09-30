import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  LoginComponent],  //here we specify the importing of other components  //RouterLink makes our HTML text or link clickable & route to the URLs
  templateUrl: './app.component.html',     //here in TemplateURL we provide the HTML files where we can use this TS file Data, so only this HTML file can access this TS Data
  styleUrl: './app.component.css'
})
// Whatever we define in this AppComponent class called properties and this properties we can use in html files by using interpolation {{}}  for ex : {{property-name}} and also can perform any operations inside it.
// we don't need to define type of properties just define peroperty-name and assign any-type of values
// Main.ts file is the root file where we register our AppComponent class and all other classes
export class AppComponent {
  title = "Prashant's first Angular App ";
  name = "Lucifer Moringstar";
  money = 50000+3000;
  static addUser(parameter: number)
  {
    let value=50;
    console.log(parameter+ value);
    
  }

  handleEvent()                 //normal click event 
  {
    console.log("Event executed....");
    this.otherFunction();       //here we used 'this' keyword coz it instantiate the current class method otherFunction() and we use 'super' for parent class method
    //new AppComponent().otherFunction()    //also can call the method by creating the class object
  }

  otherFunction()       
  {
    console.log("internal fuction also Executed");
  }

  addtion(a:number , b:number)      //click event that accepts parameter or input
  {
    console.log("Addition Result :- " + (a+b));
  }


  UsersData : {
      name:string,
      age: number,
      city:string
    } [] | undefined;

    constructor(private myservice : ProductService ){

    }

    getUsersData() {
      this.UsersData=this.myservice.getUserData();
    }
    
    productList:any;
    ngOnInit(){
      this.myservice.getProductList().subscribe((data:any) => {
        console.log(data);
        this.productList=data.products; //products is Root attribute in payLoad who contains all products.
      } )
    }

  myEventObj = new myEvents();   // ✅ create object here
}


const myfun =  AppComponent.addUser(2000);

//we are using this as utility/helper class
export class myEvents{
    
    //mouse Events
    handleMouseEnter(event:MouseEvent)          //we defined type as MouseEvent so it will required & accept the parameter as Event only
    {
      console.log("Mouse event Executed it's Type : " + event.type);
    }

    handleMouseleave(c:MouseEvent)          ///we defined type as MouseEvent so it will required & accept the parameter as Event only
    {
      console.log("Mouse event Executed it's Type : " + c.type);
    }

    handleInputEvent(event:Event)
    {
      console.log("fuction called it's type : ", event.type);
      console.log("Value from field ", (event.target as HTMLInputElement).value); //now it will print the value that we recieved in text box
    }

    //here we are performing how to get values from fronted.
    name=""
    getName(event:Event)
    {
        this.name=(event.target as HTMLInputElement).value; //here we are aasiging this with property 'name' 
        console.log(this.name);
    }

    displayName =""
    clicktoGetName(event:Event)
    {
      this.displayName=this.name
        console.log(this.displayName);
    }

    //here we are performing how to set values to fronted feild.
    setName(){
      this.name="Tanmay";
    }

    //Now here we are performing get and set values directly through input feilds
    email=""
    getEmail(e:string) {
      this.email=e;
      console.log(e);
    }

    setEmail(){
      this.email="tanmay123@gmail.com"
    }

}


