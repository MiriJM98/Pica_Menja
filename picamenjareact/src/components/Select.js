import React, { Component } from "react";
import axios from "axios";
import traduccions from "./traduccions.json";

export default class Select extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.descarregar();
  }

  descarregar = () => {
    const config = {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    };
    axios
      .get(this.props.url, config)
      .then((response) => {
        // console.log(response);
        this.setState({
          items: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onChange = (e) => {
    // console.log(e.target.value);
    this.props.canviar(e.target.value);
  };

  render() {
    return (
      <select id={this.props.idFiltre} onChange={this.onChange} value={this.props.valorInicial}>
        <option value="" key="-1">
          {traduccions[sessionStorage.getItem("id_idioma")][0].select}
        </option>
        {this.state.items.map((item, key) => {
          return (
            <option value={item[this.props.clau]} key={key}>
              {item[this.props.display]}
            </option>
          );
        })}
      </select>
    );
  }
}
