import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  currentProduct: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductDataService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.currentProduct = this.productService.getSingleProduct(productId);
    console.log(this.currentProduct);
  }

}
