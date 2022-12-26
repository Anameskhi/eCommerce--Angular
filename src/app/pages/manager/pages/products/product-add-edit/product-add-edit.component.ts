import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {
  get getName(){
    return this.form.get('name')
  }
  get getDescription(){
    return this.form.get('description')
  }
  get getPrice(){
    return this.form.get('price')
  }
  get getImage(){
    return this.form.get('image')
  }
  get categoryID(){
    return this.form.get('categoryId')
  }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    categoryId: new FormControl(''),
    description: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required)
  })
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  categories$:Observable<Category[]> = this.categoriesService.getAll()

  sub$ = new Subject()
  productId: string | undefined

  ngOnInit(): void {
    this.route.params
    .pipe(takeUntil(this.sub$))
    .subscribe(params => {
      if(params['id']){
        this.productId = params['id']
        this.productsService.getOne(params['id']).subscribe(product => {
          this.form.patchValue(product)
        })
      }
    })
  }

  categoryChanged($event: any){
    console.log($event)
    this.categories$.pipe(
      takeUntil(this.sub$),
      map(categories => categories.find(category => category.id === $event.id))
    ).subscribe((category)=>{
      if(category){
        this.form.patchValue({category})
      }
    })
  }
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

  submit(){
    console.log(this.form.value)
    if(this.form.invalid)return;

    if(this.form.value.id){
      this.productsService.update(this.form.value.id, this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe(res=>{
        this.router.navigate(['/manager/products'])
        .then(()=>{
          this.form.reset()
        })
      })
    } else {
    this.productsService.create(this.form.value)
    .pipe()
    .subscribe(res=>{
      this.router.navigate(['/manager/products'])
        .then(()=>{
          this.form.reset()
        })
    })
  }
}

}

