import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService
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
    const user = this.form.value;

    this.auth.login(user.username, user.pwd).subscribe((data) => {
      console.log(data);
      if (data.username) {
        console.log(data);
      } else {
        this.toastr.error(data.error.message, '', {
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

}
