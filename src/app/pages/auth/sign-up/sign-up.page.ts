
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form = new FormGroup({
    uid: new FormControl(''),
    rut: new FormControl('',[Validators.required]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    appaterno: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apmaterno: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);


  ngOnInit() {
  }

  async submit(){
    if (this.form.valid){

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.signUp(this.form.value as User).then(res => {

        this.firebaseSvc.updateUser(this.form.value.nombre)
        this.utilsSvc.saveInLocalStorage('user', this.form.value);
        let uid = res.user.uid;
        this.form.controls.uid.setValue(uid);

        this.setUserInfo(uid)

        
      }).catch(error =>{
        console.log(error);
        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(()=>{
        loading.dismiss();
      })

    }
  }


  
  async setUserInfo(uid: string){
    if (this.form.valid){

      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `users/${uid}`
      delete this.form.value.password

      this.firebaseSvc.setDocument(path, this.form.value).then(res => {


        this.utilsSvc.saveInLocalStorage('user', this.form.value)

      }).catch(error =>{
        console.log(error);
        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(()=>{
        loading.dismiss();
      })

    }
  }


}
