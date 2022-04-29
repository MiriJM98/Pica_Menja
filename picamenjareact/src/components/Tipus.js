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

        const pintaBotoBorrar = (params) => {
            return (
                <div>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                            if (window.confirm("Segur vols borrar el tipus?")) {
                                this.borrar(params.data.id_tipus);
                            }
                        }}>
                        Borrar
                    </Button>
                </div>
            );
        };

        this.state = {
            tipus: [],
            columnes: [
                {
                    field: "id_tipus",
                    headerName: "ID TIPUS",
                    sortable: true,
                    filter: true,
                },
                {
                    field: "tipus_ca",
                    headerName: "DESCRIPCIÓ CATALÀ",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "tipus_es",
                    headerName: "DESCRIPCIÓ CASTELLÀ",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "tipus_en",
                    headerName: "DESCRIPCIÓ ANGLÈS",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "tipus_de",
                    headerName: "DESCRIPCIÓ ALEMANY",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "id_tipus",
                    headerName: "",
                    cellRendererFramework: pintaBotoBorrar,
                    maxWidth: 100,
                },
            ],
            id_tipus: -1,
        };
    }

    borrar = (id) => {
        // const config = {
        //   headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        // };
        axios
            .delete(
                "http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/tipus/" +
                id
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
        // const config = {
        //     headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        // };
        axios
            .get(
                "http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/tipus"
            )
            .then((response) => {
                console.log(response);
                this.setState({ tipus: response.data });
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
                                    "/tipus/" + this.state.id_tipus
                                );
                            }}>
                            Afegir nou tipus
                        </Button>
                    </div>
                    <div className="col-md-4 mt-2 mb-3">
                        <h1>Llistat de tipus</h1>
                    </div>
                </div>
                <AgGridReact
                    rowData={this.state.tipus}
                    columnDefs={this.state.columnes}
                    pagination={true}
                    paginationPageSize={10}
                ></AgGridReact>
            </div>
        );
    }
}
