import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

//Class Product
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService:ProductService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm){
    if (productForm.value.$key == null){
      this.toastr.success('Successfull Operation', 'Product Create');  
      this.productService.insertProduct(productForm.value);
    }
    else{
      if(confirm('Are you sure want to edit it?')){
        this.productService.updateProduct(productForm.value);
        this.toastr.success('Successfull Operation', 'Product Edit');  
      }
      this.resetForm(productForm);
    }
  }

  resetForm(productForm?: NgForm){
    if(productForm != null)
      productForm.reset();
      this.productService.selectedProduct = new Product;
  }
}
