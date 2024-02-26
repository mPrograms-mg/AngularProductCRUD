import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  showProductForm: boolean = false;
  showFormFormUpdate: any = false;
  productList: any = [];
  displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'quantity',
    'action',
  ];
  dataSource = this.productList;

  constructor() {
    this.getProductList();
  }

  ngOnInit() {}

  clickAddProduct() {
    this.showProductForm = true;
  }

  getProductList() {
    let productListData = JSON.parse(localStorage.getItem('productList'));
    if (productListData) {
      this.dataSource = productListData;
      this.productList = productListData;
    }
  }

  saveProductData(event: any) {
    console.log(event);
    this.productList.push(event);
    console.log(this.productList);
    localStorage.setItem('productList', JSON.stringify(this.productList));
    this.getProductList();
  }

  deleteProduct(name: any) {
    let filterProduct = this.productList.filter(
      (ele: any) => ele.name !== name
    );
    localStorage.setItem('productList', JSON.stringify(filterProduct));
    this.getProductList();
  }

  editProduct(name: any) {
    this.showProductForm = true;
    localStorage.setItem('forUpdateProduct', JSON.stringify(name));
  }
}
