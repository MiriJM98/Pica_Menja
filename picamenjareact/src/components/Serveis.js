import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import traduccions from "./traduccions.json";

export default class Serveis extends Component {
    constructor(props) {
        super(props);

        const pintaBotoBorrar = (params) => {
            return (
                <div>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                            if (window.confirm(traduccions[sessionStorage.getItem("id_idioma")][0].borrarServei)) {
                                this.borrar(params.data.id_servei);
                            }
                        }}>
                        {traduccions[sessionStorage.getItem("id_idioma")][0].borrar}
                    </Button>
                </div>
            );
        };

        this.state = {
            serveis: [],
            columnes: [
                {
                    field: "id_servei",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ID_SERVEI,
                    sortable: true,
                    filter: true,
                },
                {
                    field: "servei_ca",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].SERVEI_CA,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable: true,
                },
                {
                    field: "servei_es",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].SERVEI_ES,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable: true,
                },
                {
                    field: "servei_en",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].SERVEI_EN,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable: true,
                },
                {
                    field: "servei_de",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].SERVEI_DE,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable: true,
                },
                {
                    field: "id_servei",
                    headerName: "",
                    cellRendererFramework: pintaBotoBorrar,
                    maxWidth: 100,
                },
            ],
            id_servei: -1,
        };
    }

    borrar = (id) => {
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios
            .delete(
                "https://picamenja.com/PicaMenja/public/api/serveis/" +
                id, config
            )
            .then((response) => {
                // console.log(response);
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
        axios
            .get(
                "https://picamenja.com/PicaMenja/public/api/serveis", config
            )
            .then((response) => {
                // console.log(response);
                this.setState({ serveis: response.data });
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
            <div className="ag-theme-alpine" style={{ height: 600 }}>
                <div className="row">
                    <h1 className='row justify-content-center mt-3'>{traduccions[sessionStorage.getItem("id_idioma")][0].llistaServeis}</h1>
                </div>
                <div className="row mb-3 ms-1">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input
                            type="button"
                            className="btn btn-primary btn-lg"
                            value={traduccions[sessionStorage.getItem("id_idioma")][0].insertServei}
                            onClick={() => {
                                window.location.assign(
                                    "/servei/" + this.state.id_servei
                                );
                            }} />
                    </div>
                </div>
                <AgGridReact
                    rowData={this.state.serveis}
                    columnDefs={this.state.columnes}
                    pagination={true}
                    paginationPageSize={10}
                ></AgGridReact>
            </div>
        );
    }
}
