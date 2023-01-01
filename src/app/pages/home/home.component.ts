import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';
import { ProductCardComponent } from 'src/app/features/product-card/product-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  products: Product[] = []
  sub$ = new Subject()

  youtubeUrl: string = 'https://www.youtube.com/watch?v=7v_HoWr4WfM&t=11s'
  trustYoutubeUrl!: SafeResourceUrl

  constructor(
    private productsService: ProductsService,
    // private sanitizer: DomSanitizer
  ) { 
    // this.trustYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl)
  }


  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(){
    this.productsService.getProducts({})
    .pipe(takeUntil(this.sub$))
    .subscribe((products: Product[])=>{
      this.products = products


    })
  }
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

  

}
