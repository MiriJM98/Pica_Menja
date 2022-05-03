import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
export default class Fotos extends Component {
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
                                "/foto/" + params.data.id_foto
                            );
                        }}>
                        Puja foto
                    </Button>
                </div>
            );
        };

        const pintaFoto = (params) => {
            return (
                <div>
                    <img src={params.data.foto} alt="" width="150" />
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
                            if (window.confirm("Segur vols borrar la foto?")) {
                                this.borrar(params.data.id_foto);
                            }
                        }}>
                        Borrar
                    </Button>
                </div>
            );
        };

        this.state = {
            fotos: [],
            columnes: [
                { field: "id_foto", headerName: "ID FOTO", sortable: true, filter: true },
                { field: "id_restaurant", headerName: "ID RESTAURANT", sortable: true, filter: true },
                { field: "foto", headerName: "FOTO", cellRendererFramework: pintaFoto, maxWidth: 150, },
                { field: "id_foto", headerName: "", cellRendererFramework: pintaBoto, maxWidth: 150, },
                { field: "id_restaurant", headerName: "", cellRendererFramework: pintaBotoBorrar, maxWidth: 100, },
            ],
        }
    }
    componentDidMount() {
        this.descarrega();
    }

    borrar = (id) => {
        // const config = {
        //   headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        // };
        axios.delete("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/fotos/" + id)
            .then((response) => {
                console.log(response);
                this.descarrega();
            })
            .catch(function (error) {
                //Mostrar error
                console.log(error);
            });
    };

    descarrega = () => {
        // const config = {
        //     headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        //     //headers: { Authorization: 'Bearer ' + "token"}
        // };
        axios.get('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/fotos',)
            .then(response => {
                console.log(response);
                this.setState({ fotos: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
                if (error.response.status === 401) {
                    //window.location.assign("/login");
                }
            })
    }

    render() {
        return (
            <div className="ag-theme-alpine" style={{ height: 560, width: "100%" }}>
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
                                    "/foto/" + this.state.id_foto
                                );
                            }}>
                            Afegir nou id_foto
                        </Button>
                    </div>
                    <div className="col-md-4 mt-2 mb-3">
                        <h1>Llistat de fotos</h1>
                    </div>
                </div>
                <AgGridReact
                    rowData={this.state.fotos}
                    columnDefs={this.state.columnes}
                    pagination={true}
                    paginationPageSize={10}
                >
                </AgGridReact>
            </div>
        );
    }
}