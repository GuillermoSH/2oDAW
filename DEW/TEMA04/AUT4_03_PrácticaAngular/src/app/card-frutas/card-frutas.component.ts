import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-frutas',
  templateUrl: './card-frutas.component.html',
  styleUrls: ['./card-frutas.component.css']
})
export class CardFrutasComponent {
  nombres = ["cherry","coconut","banana"];
}
