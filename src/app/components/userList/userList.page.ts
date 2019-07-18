import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

import { UserService } from '../../services/user/user.service';



@Component({
  selector: 'app-userList',
  templateUrl: './userList.page.html',
  styleUrls: ['./userList.page.scss'],
})
export class UserListPage implements OnInit {

  userListForm: FormGroup;
  dt1: any;
  dt2: any;
  time: any;
  users: any;
  loading: any;


  constructor(
    private router: Router,
    private userSvc: UserService,
    public loadingController: LoadingController,
  ) {

  }

  ngOnInit() {
    this.usersCharge();
  }

  usersCharge() {
    this.loadingController.create({
      spinner: 'bubbles',
      message: 'Cargando...',
      cssClass: 'my-loading-class'
    }). then(overlay => {
      this.loading = overlay;

      this.loading.present();

      this.userSvc.getuser()
        .then(res => {
          this.users = Object.keys(res).map(key => {
            return res[key];
          });

          this.loading.dismiss();
        });
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }

  onSubmitUserCreate() {
    this.router.navigate(['/user-create']);
  }

}
