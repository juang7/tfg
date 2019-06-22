import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormPage } from '../form/form';
import { AdministrarBaresPage } from '../administrarBares/administrarBares';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
 public FormPage: FormPage;

  constructor(public navCtrl: NavController) {

  }

openPage(page) {
     this.navCtrl.push(page);
  }
  openPageAdministrarBares() {
    this.navCtrl.push(AdministrarBaresPage);
  }
}
