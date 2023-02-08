import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  marvelStudioLogo: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png";

  constructor(private router: Router) {}

  cambiarRuta() {
    if (this.router.url != "/marvel-info") {
      this.router.navigate(['/marvel-info']);
    } else {
      this.router.navigate(['']);
    }
  }

  reiniciarLista() {
    localStorage.clear();
    window.location.reload();
  }
}
