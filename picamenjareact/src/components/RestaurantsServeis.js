import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default class RestaurantServeis extends Component {
    constructor(props) {
        super(props);

        const pintaBotoBorrar = (params) => {
            return (
                <div>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                            if (window.confirm("Segur vols borrar el servei?")) {
                                this.borrar(params.data.id_restaurant, params.data.id_servei);
                            }
                        }}>
                        Borrar
                    </Button>
                </div>
            );
        };

        this.state = {
            restaurants_serveis: [],
            restaurants: [],
            serveis: [],
            columnes: [
                {
                    field: "id_servei",
                    headerName: "ID SERVEI",
                    sortable: true,
                    filter: true,
                },
                {
                    field: "id_restaurant",
                    headerName: "ID RESTAURANT",
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable: true,
                },
                {
                    field: "id_restaurant",
                    headerName: "",
                    cellRendererFramework: pintaBotoBorrar,
                    maxWidth: 100,
                },
            ],
            id_restaurant: -1,
            id_servei: -1,
        };
    }

    borrar = (id_restaurant, id_servei) => {
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios
            .delete(
                "http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants_serveis/" +
                id_restaurant + "/" + id_servei, config
            )
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
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios
            .get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants_serveis", config)
            .then((response) => {
                console.log(response);
                this.setState({ restaurants_serveis: response.data });
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
                    <div className="row">
                        <div className="col-md-4">&nbsp;</div>
                    </div>
                    <div className="col-md-4 mt-3 mb-3">
                        <Button
                            variant="success"
                            className="ms-3"
                            onClick={() => {
                                window.location.assign(
                                    "/restaurants_serveis/" + this.state.id_restaurant
                                );
                            }}>
                            Afegir nou restaurant_servei
                        </Button>
                    </div>
                    <div className="col-md-4 mt-2 mb-3">
                        <h1>Llistat restaurants_serveis</h1>
                    </div>
                </div>
                <AgGridReact
                    rowData={this.state.restaurants_serveis}
                    columnDefs={this.state.columnes}
                    pagination={true}
                    paginationPageSize={10}
                ></AgGridReact>
            </div>
        );
    }
}
