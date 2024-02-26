import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  addProductForm: FormGroup;
  productList: any[] = [];
  @Input() isShowForm: boolean = false;
  @Output() productForm = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addProductForm = this.fb.group({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(''),
    });
  }

  onSaveProduct() {
    this.productForm.emit(this.addProductForm.value);
    this.addProductForm.reset();
  }

  onUpdateForm() {}
}
