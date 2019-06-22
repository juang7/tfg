import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarServiceProvider } from '../../providers/bar-service/bar-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-registrarBar',
  templateUrl: 'registrarBar.html'
})
export class RegistrarBarPage {
 myForm: FormGroup;
 formBuscar: FormGroup;

 bar:any='';
  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public barService: BarServiceProvider,
  ) {
    this.myForm = this.createMyForm();
  }


  
  saveData(){
    console.log(this.myForm.value);


    this.bar = this.myForm.value;
    this.postBar();
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      ubicacion: ['', Validators.required],
      
    });
  }

  
  postBar() {
    this.barService.postBar(this.bar);
  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     this.navCtrl.push(HomePage);
  }

}
