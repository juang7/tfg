import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarBarPage } from '../registrarBar/registrarBar';

@Component({
  selector: 'page-administrarBares',
  templateUrl: 'administrarBares.html'
})
export class AdministrarBaresPage {
	

  constructor(public navCtrl: NavController) {

  }

openPageRegistrarBar() {
  this.navCtrl.push(RegistrarBarPage);
  }

}
