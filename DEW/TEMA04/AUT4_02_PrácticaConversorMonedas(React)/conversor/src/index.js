import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Conversor from './Conversor';
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Presenta un encabezado con un título, un menú desplegable para seleccionar la moneda desde la que
 * convertir, un menú desplegable para seleccionar la moneda a la que convertir, un campo de entrada
 * para ingresar la cantidad a convertir y un botón para activar la conversión.
 * @returns Un div con un encabezado y un div con conversión de id.
 */
function Esqueleto() {
  let eleccion1 = "";
  let eleccion2 = "";
  let cantidad = 0;

  /**
   * Toma un evento como argumento y establece el valor de la variable cantidad al valor del campo de
   * entrada
   * @param e - El objeto de evento.
   */
  const conseguirCantidad = (e) => {
    cantidad = e.target.value;
  };

  /**
   * Toma dos argumentos, una cadena y un valor, y establece el valor de la variable global eleccion1 o
   * eleccion2 dependiendo de la cadena
   * @param nombre - El nombre del elemento seleccionado.
   * @param valor - El valor de la opción seleccionada.
   */
  function setEleccion(nombre, valor) {
    if (nombre == "moneda1") {
      eleccion1 = valor;
    } else {
      eleccion2 = valor;
    }
    console.log(eleccion1 + " " + eleccion2);
  }

  /**
   * La función toma un evento como argumento y luego establece el estado del componente en el valor
   * del evento.
   * @param e - El objeto de evento.
   */
  function seleccionarMoneda(e) {
    const selectedValue = e.target.value;
    console.log(selectedValue + " " + e.target.name);
    setEleccion(e.target.name, selectedValue);
  }

  /**
   * La función conversionMoneda() se llama cuando el usuario hace clic en el botón "Convertir" y
   * genera el componente Conversor.jsx
   */
  function conversionMoneda() {
    const conversion = ReactDOM.createRoot(
      document.getElementById("conversion")
    );
    conversion.render(
      <React.Fragment>
        <Conversor
          moneda1={eleccion1}
          moneda2={eleccion2}
          cantidad={cantidad}
        />
      </React.Fragment>
    );
  }

  return (
    <div class="container">
      <div class="header centrado">
        <div class="form centrado">
          <h1>Conversor de monedas</h1>
          <div>
            <label>Convierte de </label>
            <select name="moneda1" onChange={(e) => seleccionarMoneda(e)} defaultValue={eleccion1 = "Euros"} >
              <option name="moneda1">Euros</option>
              <option name="moneda1">Dolares</option>
              <option name="moneda1">Yenes</option>
            </select>
            <label> a </label>
            <select name="moneda2" onChange={(e) => seleccionarMoneda(e)} defaultValue={eleccion2 = "Dolares"} >
              <option name="moneda2">Euros</option>
              <option name="moneda2">Dolares</option>
              <option name="moneda2">Yenes</option>
            </select>
          </div>
          <div>
            <label>Cantidad: </label>
            <input type="number" onChange={(e) => conseguirCantidad(e)} />
          </div>
          <button onClick={() => conversionMoneda()}>Convertir</button>
        </div>
      </div>
      <div id="conversion" class="container-conversion centrado"></div>
      <div class="footer centrado">
        <p>Created by: <a href="https://github.com/GuillermoSH"> @GuillermoSH</a></p>
      </div>
    </div>
  );
}

const esqueleto = Esqueleto();
root.render(esqueleto);