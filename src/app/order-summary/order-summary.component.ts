import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements DoCheck {
@Input() cartArr;
public total;
public price;
  constructor() { }

  // ngOnInit() {
   
  // }

  ngDoCheck(){
    this.totalPrice()
  }

totalPrice(){
  this.price =this.cartArr.map(product => product.price);
  this.total = this.price.reduce((pre, cur)=> pre + cur, 0);
  console.log(this.total);
}



}
