import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import traduccions from "./traduccions.json";

export default class Espais extends Component {
  constructor(props) {
    super(props);

    const pintaBoto = (params) => {
      return (
        <div>
          <Button
            color="primary"
            size="sm"
            onClick={() => {
              window.location.assign(
                "/restaurant/" + params.data.id_restaurant
              );
            }}>
            {traduccions[sessionStorage.getItem("id_idioma")][0].editar}
          </Button>
        </div>
      );
    };

    const pintaBotoBorrar = (params) => {
      return (
        <div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              if (window.confirm(traduccions[sessionStorage.getItem("id_idioma")][0].borraRest)) {
                this.borrar(params.data.id_restaurant);
              }
            }}>
            {traduccions[sessionStorage.getItem("id_idioma")][0].borrar}
          </Button>
        </div>
      );
    };

    const pintaFoto = (params) => {
      return (
        <div>
          <img src={params.data.imatge} alt="" width="70" />
        </div>
      );
    };

    this.state = {
      restaurants: [],
      columnes: [
        {
          field: "id_restaurant",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ID_RESTAURANT,
          sortable: true,
          filter: true,
        },
        {
          field: "nom",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].NOM,
          sortable: true,
          filter: true,
          floatingFilter: true,
        },
        {
          field: "tipus.tipus_ca",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].TIPUS,
          sortable: true,
          filter: true,
          floatingFilter: true,
        },
        {
          field: "telefon",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].TELEFON,
          sortable: true,
          filter: true,
        },
        {
          field: "pagina_web",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].WEB,
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "ubicacio",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].DIRECCIO,
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "horari_ca",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].HORARI_CA,
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "horari_es",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].HORARI_ES,
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "horari_en",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].HORARI_EN,
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "horari_de",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].HORARI_DE,
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "rang_preus",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].RANG_PREUS,
          sortable: true,
          filter: true,
        },
        {
          field: "imatge",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].IMATGE,
          cellRendererFramework: pintaFoto,
          maxWidth: 150,
        },
        {
          field: "descripcio_ca",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].DESC_CA,
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "descripcio_es",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].DESC_ES,
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "descripcio_en",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].DESC_EN,
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "descripcio_de",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].DESC_DE,
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "carta",
          headerName: traduccions[sessionStorage.getItem("id_idioma")][0].CARTA,
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "id_restaurant",
          headerName: "",
          cellRendererFramework: pintaBoto,
          maxWidth: 100,
        },
        {
          field: "id_restaurant",
          headerName: "",
          cellRendererFramework: pintaBotoBorrar,
          maxWidth: 100,
        },
      ],
      id_restaurant: -1,
    };
  }

  borrar = (id) => {
    const config = {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    };
    axios.delete("https://picamenja.com/PicaMenja/public/api/restaurants/" + id, config)
      .then((response) => {
        console.log(response);
        this.descarrega();
      })
      .catch(function (error) {
        // Mostrar error
        console.log(error);
      });
  };

  componentDidMount() {
    this.descarrega();
  }

  descarrega = () => {
    const config = {
      headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
    };
    axios.get("https://picamenja.com/PicaMenja/public/api/restaurants", config)
      .then((response) => {
        console.log(response);
        this.setState({ restaurants: response.data });
      })
      .catch(function (error) {
        console.log("ERROR -> " + error.response.data.error);
        if (error.response.status === 401) {
          window.location.assign("/login");
        }
      });
  };

  render() {
    return (
      <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
        <div className="row">
          <h1 className='row justify-content-center mt-3'>{traduccions[sessionStorage.getItem("id_idioma")][0].llistaRestaurants}</h1>
        </div>
        <div className="row mb-3 ms-1">
          <div className="col-md-1">
            <div className="form-group"></div>
            <input
              type="button"
              className="btn btn-primary btn-lg"
              value={traduccions[sessionStorage.getItem("id_idioma")][0].insertRestaurant}
              onClick={() => {
                window.location.assign(
                  "/restaurant/" + this.state.id_restaurant
                );
              }} />
          </div>
        </div>

        <AgGridReact
          rowData={this.state.restaurants}
          columnDefs={this.state.columnes}
          pagination={true}
          paginationPageSize={10}
        >
        </AgGridReact>
      </div>
    );
  }
}
