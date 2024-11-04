import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  firebaseSvc = inject(FirebaseService);

  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  signOut(){
    this.firebaseSvc.signOut();
  }

}
