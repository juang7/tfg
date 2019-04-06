import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormPage } from '../form/form';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
 public FormPage: FormPage;
 public LoginPage: LoginPage;

  constructor(public navCtrl: NavController) {

  }

openPage(page) {
     this.navCtrl.push(page);
  }

}
