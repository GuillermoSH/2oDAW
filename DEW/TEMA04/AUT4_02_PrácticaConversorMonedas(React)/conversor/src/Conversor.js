import React from 'react';
import './Conversor.css';

class Conversor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { moneda1: props.moneda1, moneda2: props.moneda2, cantidad: props.cantidad, conversion: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let valor = e.target.value;
    let nombre = e.target.name;
    if (nombre == "moneda1") {
      this.setState({ moneda1: valor });
    } else if (nombre == "moneda2") {
      this.setState({ moneda2: valor });
    } else if (nombre == "cantidad") {
      this.setState({ cantidad: valor });
    }
  }

  conversionMoneda = () => {
    let monedaConvertir;
    console.log(this.state.moneda1,this.state.moneda2,this.state.cantidad)
    if (this.state.moneda1 == "Euro" && this.state.moneda2 == "Dolar") {
      monedaConvertir = (this.state.cantidad * 0.9) / 1;
    } else if (this.moneda1 == "Euro" && this.moneda2 == "Yen") {
      monedaConvertir = (this.state.cantidad * 138) / 1;
    } else if (this.moneda1 == "Dolar" && this.moneda2 == "Euro") {
      monedaConvertir = this.state.cantidad / 0.9;
    } else if (this.moneda1 == "Dolar" && this.moneda2 == "Yen") {
      monedaConvertir = (this.state.cantidad * 138) / 0.9;
    } else if (this.moneda1 == "Yen" && this.moneda2 == "Dolar") {
      monedaConvertir = (this.state.cantidad * 0.9) / 138;
    } else if (this.moneda1 == "Yen" && this.moneda2 == "Euro") {
      monedaConvertir = this.state.cantidad / 138;
    } else {
      monedaConvertir = this.state.cantidad;
    }
    this.setState({ conversion: monedaConvertir });
    this.render(
      <p>
        La conversión de {this.state.cantidad} {this.state.moneda1} son{" "}
        {this.state.conversion} {this.state.moneda2}
      </p>
    );
  };

  render() {
    return (
      <div class="container">
        <h1>Conversor de monedas.-</h1>
        <div class="formulario">
          <select name="moneda1" onChange={this.handleChange} value={this.state.moneda1}>
            <option>Euro</option>
            <option>Dolar</option>
            <option>Yen</option>
          </select>
          <div>a</div>
          <select name="moneda2" onChange={this.handleChange} value={this.state.moneda2}>
            <option>Euro</option>
            <option>Dolar</option>
            <option>Yen</option>
          </select>
          <input type="text" name="cantidad" onChange={this.handleChange}></input>
          <button onClick={this.conversionMoneda}>Convertir</button>
        </div>
        <p>
          La conversión de {this.state.cantidad} {this.state.moneda1} son{" "}
          {this.state.conversion} {this.state.moneda2}
        </p>
      </div>
    );
  }
}

export default Conversor;