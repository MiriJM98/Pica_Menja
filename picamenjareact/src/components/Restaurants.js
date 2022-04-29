import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

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
            Edita
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
              if (window.confirm("Segur vols borrar el restaurant?")) {
                this.borrar(params.data.id_restaurant);
              }
            }}>
            Borrar
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
          headerName: "ID RESTAURANT",
          sortable: true,
          filter: true,
        },
        {
          field: "nom",
          headerName: "NOM",
          sortable: true,
          filter: true,
          floatingFilter: true,
        },
        {
          field: "tipus.tipus_ca",
          headerName: "TIPUS",
          sortable: true,
          filter: true,
          floatingFilter: true,
        },
        {
          field: "telefon",
          headerName: "TELÈFON",
          sortable: true,
          filter: true,
        },
        {
          field: "pagina_web",
          headerName: "WEB",
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "ubicacio",
          headerName: "DIRECCIÓ",
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "horari_ca",
          headerName: "HORARI CATALÀ",
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "horari_es",
          headerName: "HORARI CASTELLÀ",
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "horari_en",
          headerName: "HORARI ANGLÈS",
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "horari_de",
          headerName: "HORARI ALEMANY",
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
        },
        {
          field: "rang_preus",
          headerName: "RANG PREUS",
          sortable: true,
          filter: true,
        },
        {
          field: "imatge",
          headerName: "IMATGE",
          cellRendererFramework: pintaFoto,
          maxWidth: 150,
        },
        {
          field: "descripcio_ca",
          headerName: "DESCRIPCIÓ CATALÀ",
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "descripcio_es",
          headerName: "DESCRIPCIÓ CASTELLÀ",
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "descripcio_en",
          headerName: "DESCRIPCIÓ ANGLÈS",
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "descripcio_de",
          headerName: "DESCRIPCIÓ ALEMANY",
          sortable: true,
          filter: true,
          resizable: true,
        },
        {
          field: "carta",
          headerName: "CARTA",
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
    // const config = {
    //   headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    // };
    axios.delete("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants/" + id)
      .then((response) => {
        console.log(response);
        this.descarrega();
      })
      .catch(function (error) {
        //Mostrar error
        console.log(error);
      });
  };

  componentDidMount() {
    this.descarrega();
  }

  descarrega = () => {
    // const config = {
    //     headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
    // };
    axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants")
      .then((response) => {
        console.log(response);
        this.setState({ restaurants: response.data });
      })
      .catch(function (error) {
        console.log("ERROR -> " + error.response.data.error);
        if (error.response.status === 401) {
          //window.location.assign("/login");
        }
      });
  };

  render() {
    return (
      <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
        <div className="row">
          <div className="row">
            <div className="col-md-4">&nbsp;</div>
          </div>
          <div className="col-md-4 mt-3 mb-3">
            <Button
              variant="success"
              className="ms-3"
              onClick={() => {
                window.location.assign(
                  "/restaurant/" + this.state.id_restaurant
                );
              }}>
              Afegir nou restaurant
            </Button>
          </div>
          <div className="col-md-4 mt-2 mb-3">
            <h1>Llistat de restaurants</h1>
          </div>
        </div>
        <AgGridReact
          rowData={this.state.restaurants}
          columnDefs={this.state.columnes}
          pagination={true}
          paginationPageSize={10}
        ></AgGridReact>
      </div>
    );
  }
}
