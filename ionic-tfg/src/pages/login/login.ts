import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';
import { RegistrarUsuarioPage } from '../registrarUsuario/registrarUsuario';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 myForm: FormGroup;
 formBuscar: FormGroup;

 user:any='';
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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

  public openRegistrarUsuarioPage() {
    this.navCtrl.push(RegistrarUsuarioPage);
  }

}
