import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
 myForm: FormGroup;
 formBuscar: FormGroup;

 user:any='';
  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public userService: UserServiceProvider,
  ) {
    this.myForm = this.createMyForm();
    this.formBuscar = this.crearFormBuscar(); 
  }

  buscar(){
    this.userService.getUsers(this.formBuscar.value.id)
    .subscribe(
      (data) => { this.user = data;
      console.log(data)},
      (error) =>{ console.error(error);}
    )
  }
  
  saveData(){
    console.log(this.myForm.value);
    this.user = this.myForm.value;
    this.postUser();
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  private crearFormBuscar(){
    return this.formBuilder.group({
      id: ['', Validators.required],
    });
  }

  postUser() {
    this.userService.postUser(this.user);
  }

  putUser() {
    this.userService.putUser(this.user);
  
  }

  deleteUser() {
    this.userService.deleteUser(this.formBuscar.value.id);
  
  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     this.navCtrl.push(HomePage);
  }

}
