import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import traduccions from "./traduccions.json";

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
                            if (window.confirm(traduccions[sessionStorage.getItem("id_idioma")][0].borraServei)) {
                                this.borrar(params.data.id_restaurant, params.data.id_servei);
                            }
                        }}>
                        {traduccions[sessionStorage.getItem("id_idioma")][0].borrar}
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
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ID_SERVEI,
                    sortable: true,
                    filter: true,
                },
                {
                    field: "id_restaurant",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ID_RESTAURANT,
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
                "https://picamenja.com/PicaMenja/public/api/restaurants_serveis/" +
                id_restaurant + "/" + id_servei, config
            )
            .then((response) => {
                // console.log(response);
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
            .get("https://picamenja.com/PicaMenja/public/api/restaurants_serveis", config)
            .then((response) => {
                // console.log(response);
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
                    <h1 className='row justify-content-center mt-3'>{traduccions[sessionStorage.getItem("id_idioma")][0].llistaResSer}</h1>
                </div>
                <div className="row mb-3 ms-1">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input
                            type="button"
                            className="btn btn-primary btn-lg"
                            value={traduccions[sessionStorage.getItem("id_idioma")][0].newResSer}
                            onClick={() => {
                                window.location.assign(
                                    "/restaurants_serveis/" + this.state.id_restaurant
                                );
                            }} />
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
