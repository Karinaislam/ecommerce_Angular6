import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productData;
  @Output() addProduct = new EventEmitter<any>();
  public productInfo;

  constructor() { }

  ngOnInit() {
 
    
  }

  addToCart(){
  this.addProduct.emit(this.productData);
  
  }

  
}
