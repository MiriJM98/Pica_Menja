import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default class Traduccions extends Component {
    constructor(props) {
        super(props);

        const pintaBotoBorrar = (params) => {
            return (
                <div>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                            if (window.confirm("Segur vols borrar la traducció?")) {
                                this.borrar(params.data.id_traduccio);
                            }
                        }}>Borrar
                    </Button>
                </div>
            );
        };

        this.state = {
            traduccions: [],
            columnes: [
                {
                    field: "id_traduccio",
                    headerName: "ID TRADUCCIÓ",
                    sortable: true,
                    filter: true,
                },
                {
                    field: "catala",
                    headerName: "CATALÀ",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "espanyol",
                    headerName: "CASTELLÀ",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "english",
                    headerName: "ANGLÈS",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "deutsch",
                    headerName: "ALEMANY",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "id_traduccio",
                    headerName: "",
                    cellRendererFramework: pintaBotoBorrar,
                    maxWidth: 100,
                },
            ],
            id_traduccio: -1,
        };
    }

    borrar = (id) => {
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios
            .delete(
                "http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/traduccions/" +
                id, config
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
            .get(
                "http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/traduccions", config
            )
            .then((response) => {
                console.log(response);
                this.setState({ traduccions: response.data });
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
                    <h1 className='row justify-content-center mt-3'>Llistat de traduccions</h1>
                </div>
                <div className="row mb-3 ms-1">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input
                            type="button"
                            className="btn btn-primary btn-lg"
                            value={"Afegir nova traducció"}
                            onClick={() => {
                                window.location.assign(
                                    "/traduccio/" + this.state.id_traduccio
                                );
                            }} />
                    </div>
                </div>
                <AgGridReact
                    rowData={this.state.traduccions}
                    columnDefs={this.state.columnes}
                    pagination={true}
                    paginationPageSize={10}
                ></AgGridReact>
            </div>
        );
    }
}
