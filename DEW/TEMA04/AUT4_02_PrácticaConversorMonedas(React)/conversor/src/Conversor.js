import React from 'react';
import './Conversor.css';

/**
 * Toma tres parámetros, dos cadenas y un número, y devuelve un número
 * @param moneda1 - La moneda desde la que desea convertir.
 * @param moneda2 - La moneda a la que desea convertir.
 * @param cantidad - La cantidad de dinero a convertir.
 * @returns el valor de la variable monedaConvertir.
 */
function conversionMoneda(moneda1, moneda2, cantidad) {
  let monedaConvertir = 0;
  if (moneda1 == "Euro" && moneda2 == "Dolar") {
    monedaConvertir = (Number(cantidad) * 0.9) / 1;
  } else if (moneda1 == "Euro" && moneda2 == "Yen") {
    monedaConvertir = (Number(cantidad) * 138) / 1;
  } else if (moneda1 == "Dolar" && moneda2 == "Euro") {
    monedaConvertir = Number(cantidad) / 0.9;
  } else if (moneda1 == "Dolar" && moneda2 == "Yen") {
    monedaConvertir = (Number(cantidad) * 138) / 0.9;
  } else if (moneda1 == "Yen" && moneda2 == "Dolar") {
    monedaConvertir = (Number(cantidad) * 0.9) / 138;
  } else if (moneda1 == "Yen" && moneda2 == "Euro") {
    monedaConvertir = Number(cantidad) / 138;
  } else {
    monedaConvertir = Number(cantidad);
  }
  return monedaConvertir.toFixed(2);
}

/* La clase Conversor es un componente de React que genera un párrafo con la conversión de la cantidad
de dinero de una moneda a otra. */
class Conversor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneda1: props.moneda1,
      moneda2: props.moneda2,
      cantidad: props.cantidad,
    };
  }

  render() {
    return (
      <div>
        <p>
          El paso de <strong>{this.state.cantidad} {this.state.moneda1}</strong> a <strong>{this.state.moneda2}</strong> es <strong>{" "}
          {conversionMoneda(
            this.state.moneda1,
            this.state.moneda2,
            this.state.cantidad
          )}{" "}</strong>
        </p>
      </div>
    );
  }
}

export default Conversor;