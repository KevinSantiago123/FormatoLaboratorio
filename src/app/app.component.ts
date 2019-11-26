import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Diligenciar formato ulibre';

  constructor(public router: Router) {


  }
  CerrarSesion() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
