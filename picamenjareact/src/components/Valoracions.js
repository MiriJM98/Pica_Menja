import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import traduccions from "./traduccions.json";

export default class Valoracions extends Component {
    constructor(props) {
        super(props);

        const pintaBotoBorrar = (params) => {
            return (
                <div>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                            if (window.confirm(traduccions[sessionStorage.getItem("id_idioma")][0].borrarValoracio)) {
                                this.borrar(params.data.id_valoracio);
                            }
                        }}>
                        {traduccions[sessionStorage.getItem("id_idioma")][0].borrar}
                    </Button>
                </div>
            );
        };

        this.state = {
            valoracions: [],
            columnes: [
                {
                    field: "id_valoracio",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ID_VALORACIO,
                    sortable: true,
                    filter: true,
                },
                {
                    field: "valoracio",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].VALORACIO,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                },
                {
                    field: "comentari",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].COMENTARI,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable : true
                },
                {
                    field: "usuaris.email",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].USUARI,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                },
                {
                    field: "data",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].DATA,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                },
                {
                    field: "restaurants.nom",
                    headerName: traduccions[sessionStorage.getItem("id_idioma")][0].RESTAURANT,
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                },
                {
                    field: "id_valoracio",
                    headerName: "",
                    cellRendererFramework: pintaBotoBorrar,
                    maxWidth: 100,
                },
            ],
            id_valoracio: -1,
        };
    }

    borrar = (id) => {
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios
            .delete(
                "https://picamenja.com/PicaMenja/public/api/valoracions/" +
                id, config
            )
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
        axios
            .get(
                "https://picamenja.com/PicaMenja/public/api/valoracions", config
            )
            .then((response) => {
                console.log(response);
                this.setState({ valoracions: response.data });
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
                    <h1 className='row justify-content-center mt-3 mb-5'>{traduccions[sessionStorage.getItem("id_idioma")][0].llistaValoracions}</h1>
                </div>
                <AgGridReact
                    rowData={this.state.valoracions}
                    columnDefs={this.state.columnes}
                    pagination={true}
                    paginationPageSize={10}
                ></AgGridReact>
            </div>
        );
    }
}
