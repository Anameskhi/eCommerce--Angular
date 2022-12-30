import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Product } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss']
})
export class MainProductsComponent implements OnInit {

  products: Product[]= []
  categoryId?: number 
  
  categories$: Observable<Category[]> = this.categoryService.getAll()
  search: any
  
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category']
      this.getProducts()
    })
   
  }

  getProducts(){
    const params = {
      categoryId: this.categoryId,
      search: this.search || null
    }
    this.productsService.getProducts(params)
     .pipe()
     .subscribe(res => {
      this.products = res
    })
  }
  searchHandle(search: string){
    if(search.length > 3){
      this.search = search
     this.getProducts()
    }else{
      this.search = null
      this.getProducts()
    }

  }

}
