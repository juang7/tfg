import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-registrarUsuario',
  templateUrl: 'registrarUsuario.html'
})
export class RegistrarUsuarioPage {
 myForm: FormGroup;
 formBuscar: FormGroup;

 user:any='';
  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public userService: UserServiceProvider,
  ) {
    this.myForm = this.createMyForm();
  }


  
  saveData(){
    console.log(this.myForm.value);

    this.validarDatos();
    this.user = this.myForm.value;
    this.postUser();
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('.+@.+\\..+')])],
      confirmarEmail: ['', Validators.compose([ Validators.required, Validators.pattern('.+@.+\\..+')])],
      telefono: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ])],
      ConfirmPassword: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ])],
    });
  }

  
  postUser() {
    this.userService.postUser(this.user);
  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     this.navCtrl.push(HomePage);
  }

  validarDatos() {
    if (this.myForm.value.email == this.myForm.value.confirmarEmail) {
      console.log('correcto');

    } else{
      console.log('Incorrecto');

    }

    if (this.myForm.value.password==this.myForm.value.ConfirmPassword) {
      console.log('correcto password');

    } else {
      console.log('Incorrecto password');

    }

  }

}
