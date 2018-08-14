import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "../productService.service";
@Component({
  selector: "app-display-product",
  templateUrl: "./display-product.component.html",
  styleUrls: ["./display-product.component.css"]
})
export class DisplayProductComponent implements OnInit {
  public productArr;
  public cart: Array<any> = [];
  constructor(private serviceData: ProductServiceService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.serviceData.getData().subscribe(data => this.productArr = data );
  }

  addItem(item){
    
    this.cart.push(item);
    console.log(this.cart);
  }
}
