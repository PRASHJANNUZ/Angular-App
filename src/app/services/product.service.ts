import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { 
    console.log('Product services')
  }

  getProductList() {
      const url = "https://dummyjson.com/products";
      return this.http.get(url);
    }

  getUserData() {
    return [
      {name : "Prashant Jannu" , age : 25 , city : "kharadi"},
      {name : "Sujit sir" , age : 35 , city : "Latur"},
      {name : "Tanmay Deshpande" , age : 20 , city : "Navle"},
      {name : "Yogesh jathar" , age : 25 , city : "Wadgaon"}
    ]
  }
}
