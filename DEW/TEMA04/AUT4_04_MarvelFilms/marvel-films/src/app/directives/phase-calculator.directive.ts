import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPhaseCalculator]'
})
export class PhaseCalculatorDirective {
  @Input('releaseDate') releaseDate: string = "";

  constructor(private elementTag: ElementRef) {

  }

  /**
   * Usamos el gancho del ciclo de vida `ngOnInit()` para obtener la fecha de lanzamiento de la
   * película y luego usamos esa fecha para determinar a qué fase de la MCU pertenece la película.
   */
  ngOnInit() {
    let phase: string;
    let anio = Number(this.releaseDate.split("/")[2]);
    let mes = Number(this.releaseDate.split("/")[1]);

    if (anio >= 2008 && anio <= 2012) {
      phase = "1";
    } else if (anio >= 2013 && anio <= 2015) {
      phase = "2";
    } else if (anio >= 2016 && anio <= 2019) {
      phase = "3";
    } else if (anio >= 2021 && anio <= 2022) {
      phase = "4";
    } else if (anio >= 2023 && anio <= 2024) {
      if (mes < 11) {
        phase = "5";
      } else {
        phase = "6";
      }
    } else if (anio >= 2025 && anio <= 2026) {
      phase = "6";
    } else {
      phase = "N/A";
    }

    this.elementTag.nativeElement.innerHTML = "<strong style='color: #f0131f'>FASE: </strong> " + phase;
  }
}
