import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default class Comentaris extends Component {
    constructor(props) {
        super(props);

        const pintaBotoBorrar = (params) => {
            return (
                <div>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                            if (window.confirm("Segur vols borrar el comentari?")) {
                                this.borrar(params.data.id_comentari);
                            }
                        }}
                    >Borrar
                    </Button>
                </div>
            );
        };

        this.state = {
            comentaris: [],
            columnes: [
                {
                    field: "id_comentari",
                    headerName: "ID COMENTARI",
                    sortable: true,
                    filter: true,
                },
                {
                    field: "comentari",
                    headerName: "COMENTARI",
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable: true,
                },
                {
                    field: "data",
                    headerName: "DATA",
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                },
                {
                    field: "usuaris.email",
                    headerName: "USUARI",
                    sortable: true,
                    filter: true,
                    resizable: true,
                },
                {
                    field: "restaurants.nom",
                    headerName: "RESTAURANT",
                    sortable: true,
                    filter: true,
                    floatingFilter: true,
                    resizable: true,
                },
                {
                    field: "id_comentari",
                    headerName: "",
                    cellRendererFramework: pintaBotoBorrar,
                    maxWidth: 100,
                },
            ],
            id_comentari: -1,
        };
    }

    borrar = (id) => {
        // const config = {
        //   headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        // };
        axios
            .delete(
                "http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/comentaris/" +
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
                "http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/comentaris"
            )
            .then((response) => {
                console.log(response);
                this.setState({ comentaris: response.data });
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
                <div className="row justify-content-center">
                    <div className="row">
                        <div className="col-md-4">&nbsp;</div>
                    </div>
                    <div className="col-md-4">
                        <h1>Llistat de comentaris</h1>
                    </div>
                </div>
                <AgGridReact
                    rowData={this.state.comentaris}
                    columnDefs={this.state.columnes}
                    pagination={true}
                    paginationPageSize={10}
                ></AgGridReact>
            </div>
        );
    }
}
