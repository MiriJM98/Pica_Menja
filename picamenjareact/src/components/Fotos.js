import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import traduccions from "./traduccions.json";

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
                        {traduccions[sessionStorage.getItem("id_idioma")][0].insertFoto}
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
                            if (window.confirm(traduccions[sessionStorage.getItem("id_idioma")][0].borraFoto)) {
                                this.borrar(params.data.id_foto);
                            }
                        }}>
                        {traduccions[sessionStorage.getItem("id_idioma")][0].borrar}
                    </Button>
                </div>
            );
        };

        this.state = {
            fotos: [],
            columnes: [
                { field: "id_foto", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ID_FOTO, sortable: true, filter: true },
                { field: "id_restaurant", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ID_RESTAURANT, sortable: true, filter: true },
                { field: "foto", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].FOTO, cellRendererFramework: pintaFoto, maxWidth: 150, },
                { field: "id_foto", headerName: "", cellRendererFramework: pintaBoto, maxWidth: 150, },
                { field: "id_restaurant", headerName: "", cellRendererFramework: pintaBotoBorrar, maxWidth: 100, },
            ],
        }
    }
    componentDidMount() {
        this.descarrega();
    }

    borrar = (id) => {
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.delete("https://picamenja.com/PicaMenja/public/api/fotos/" + id, config)
            .then((response) => {
                // console.log(response);
                this.descarrega();
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            });
    };

    descarrega = () => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios.get('https://picamenja.com/PicaMenja/public/api/fotos', config)
            .then(response => {
                // console.log(response);
                this.setState({ fotos: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
                if (error.response.status === 401) {
                    window.location.assign("/login");
                }
            })
    }

    render() {
        return (
            <div className="ag-theme-alpine" style={{ height: 560, width: "100%" }}>
                <div className="row">
                    <h1 className='row justify-content-center mt-3'>{traduccions[sessionStorage.getItem("id_idioma")][0].llistaFotos}</h1>
                </div>
                <div className="row mb-3 ms-1">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input
                            type="button"
                            className="btn btn-primary btn-lg"
                            value={traduccions[sessionStorage.getItem("id_idioma")][0].insertidFoto}
                            onClick={() => {
                                window.location.assign(
                                    "/foto/" + this.state.id_foto
                                );
                            }} />
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