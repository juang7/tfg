import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-modificarUsuario',
  templateUrl: 'modificarUsuario.html'
})
export class ModificarUsuarioPage {
 myForm: FormGroup;
 formBuscar: FormGroup;

 user:any='';
  modificar = false;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public userService: UserServiceProvider,
  ) {
    this.buscar();
    this.myForm = this.createMyForm();
  }

  buscar() {
    this.userService.getUsers(1)
      .subscribe(
        (data) => {
          this.user = data;
        },
        (error) => { console.error(error); }
    )
   
  }
  
  saveData(){
    console.log(this.myForm.value);

    this.validarPassword();
    this.validarEmail();
    this.user = this.myForm.value;
    this.user.id = 1;
    this.putUser();
    this.cancelarModificacion();
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      confirmarEmail: ['', Validators.compose([ Validators.required, Validators.email])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{9}$') ])],
      password: ['password', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ])],
      confirmPassword: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ])],
    });
  }



  activarModificacion() {
    this.modificar = true;
  }

  cancelarModificacion() {

    this.navCtrl.push(ModificarUsuarioPage);
  }

  modoEdiccion() {
    return this.modificar;
  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     this.navCtrl.push(HomePage);
  }

  validarPassword() {
 
    if (this.myForm.value.password == this.myForm.value.confirmPassword) {
      return true;

    } else {
      return false;

    }

  }

  validarEmail() {

    if (this.myForm.value.email == this.myForm.value.confirmarEmail) {
      return true;

    } else {
      return false;

    }

  }
  deleteUser() {
    this.userService.deleteUser(7);

  }

  putUser() {
    this.userService.putUser(this.user);

  }

}
