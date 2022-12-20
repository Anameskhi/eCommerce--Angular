import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';
import { PasswordValidate } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  get getFirstName(){
    return this.form.get('firstName')
  }
  get getLastName(){
    return this.form.get('lastName')
  }
  get getEmail(){
    return this.form.get('email')
  }
  get getPassword(){
    return this.form.get('password')
  }
  get getConfirmPassword(){
    return this.form.get('confirmPassword')
  }

  form: FormGroup = new FormGroup(
    { 
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[
        Validators.required, 
        Validators.email]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      confirmPassword: new FormControl('',Validators.required)
    },{validators: PasswordValidate.passwordMatch}
    )
  

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid)return;

    console.log(this.form.value)

    this.authService.register(this.form.value).subscribe(res =>{
      console.log(res)
      this.router.navigate(['/'])

    })

  }
 
}
