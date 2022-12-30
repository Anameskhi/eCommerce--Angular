import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.scss']
})
export class CategoryAddEditComponent implements OnInit,OnDestroy {
  
  get getCategoryName(){
    return this.form.get('categoryName')
  }
  

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    categoryName: new FormControl(null,Validators.required),
    
  })

  constructor(
    private categoriesService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  sub$ = new Subject()
  categoryId: string | undefined

  ngOnInit(): void {
    this.route.params
    .pipe(takeUntil(this.sub$))
    .subscribe(params => {
      if(params['id']){
        this.categoryId = params['id']
        this.categoriesService.getOne(params['id']).subscribe(category => {
          console.log(category)
        })
      }
    })
  
  }
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

  submit(){
    console.log(this.form.value)
    this.form.markAllAsTouched()
    if(this.form.invalid)return;
    
    if(this.form.value.id){
      this.categoriesService.update(this.form.value.id,this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe(()=>{
        this.router.navigate(['/manager/categories'])
      })
    } else {
    this.categoriesService.create(this.form.value)
    .subscribe(()=>{
      this.router.navigate(['/manager/categories'])
    })
  }
}

}
