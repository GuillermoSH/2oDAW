import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  marvelStudioLogo: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png";

  constructor(private router: Router) {}

  /**
   * Si la ruta actual no es la ruta marvel-info, navegue hasta la ruta marvel-info. Si la ruta actual
   * es la ruta marvel-info, navegue a la ruta de inicio
   */
  cambiarRuta() {
    if (this.router.url != "/marvel-info") {
      this.router.navigate(['/marvel-info']);
    } else {
      this.router.navigate(['']);
    }
  }

  /**
   * Limpia el almacenamiento local y vuelve a cargar la página.
   */
  reiniciarLista() {
    localStorage.clear();
    window.location.reload();
  }
}
