import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control('', Validators.required),
      pwd: this.fb.control('', Validators.required)
    });
  }

  validateField(field: string): boolean {
    const control = this.form.controls[field];
    return control.touched && control.invalid;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
