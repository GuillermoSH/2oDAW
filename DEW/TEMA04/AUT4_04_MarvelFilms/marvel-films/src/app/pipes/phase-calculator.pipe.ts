import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phaseCalculator'
})
export class PhaseCalculatorPipe implements PipeTransform {
  transform(date: string): string {
    let phase: string;
    let anio = Number(date.split("/")[2]);
    let mes = Number(date.split("/")[1]);

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

    return phase;
  }
}
