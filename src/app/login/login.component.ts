import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterOutlet, RouterLink], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  //styles:['h3{background-color: white}']
})
export class LoginComponent {

  myname="";

  isDisabled=true;

  color='red'

  myNumber=26542635;

  x=20;
  display=true;

  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
  toggle(){
    // this.display=!this.display; //this logic will also work same

    if(this.display){
      this.display=false;
    }else{
        this.display=true;
    }
  }

  propertyBinding(){
    console.log("property Binding method Executed...")
  }

}
