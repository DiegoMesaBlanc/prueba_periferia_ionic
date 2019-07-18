import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-userCreate',
  templateUrl: './userCreate.page.html',
  styleUrls: ['./userCreate.page.scss'],
})
export class UserCreatePage implements OnInit {

  userCreateForm: FormGroup;
  user: any;
  dt1: any;
  dt2: any;
  age: any;

  constructor(
    public formBuilder: FormBuilder,
    private userSvc: UserService,
    private router: Router
  ) {

    this.userCreateForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      identification: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      birthdate: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  ngOnInit() {
    this.userSvc.getuser()
      .then(res => {
        this.user = Object.keys(res).map(key => {
          return res[key];
        });
      });
  }

  userCreate() {
    this.userSvc.postuser(this.userCreateForm.value)
      .then(resUserCreate => {
        if (resUserCreate.name) {
          alert('REGISTRO EXITOSO');
          this.router.navigate(['/user-list']);
        } else {
          alert('USUARIO YA REGISTRADO');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}
