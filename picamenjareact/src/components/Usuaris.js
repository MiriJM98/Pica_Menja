import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import traduccions from "./traduccions.json";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class Usuaris extends Component {
    constructor(props) {
        super(props);

        const pintaBoto = (params) => {
            return <div>
                <Button color="primary" size="sm"
                    onClick={() => { window.location.assign("/usuari/" + params.data.id_usuari) }}>
                    {traduccions[sessionStorage.getItem("id_idioma")][0].editar}
                </Button>
            </div>
        }

        const pintaBotoBorrar = (params) => {
            return <div>
                <Button variant="danger" size="sm"
                    onClick={() => {
                        if (window.confirm(traduccions[sessionStorage.getItem("id_idioma")][0].borrarUsuari)) {
                            this.borrar(params.data.id_usuari);
                        }
                    }}>
                   {traduccions[sessionStorage.getItem("id_idioma")][0].borrar}
                </Button>
            </div>
        }

        const pintaFoto = (params) => {
            return (
                <div>
                    <img src={params.data.foto_perfil} alt="" width="70" />
                </div>
            );
        };

        this.state = {
            usuaris: [],
            columnes: [
                { field: "id_usuari", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ID_USUARI, sortable: true, filter: true },
                { field: "nom_usuari", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].NOM_USUARI, sortable: true, filter: true, floatingFilter: true, resizable: true },
                { field: "llinatges", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].LLINATGES, sortable: true, filter: true, floatingFilter: true },
                { field: "telefon", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].TELEFON, sortable: true, filter: true, floatingFilter: true },
                { field: "direccio", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].DIRECCIO, sortable: true, filter: true, floatingFilter: true },
                { field: "data_naixement", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].DATA_NAIX, sortable: true, filter: true, floatingFilter: true },
                { field: "email", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].EMAIL, sortable: true, filter: true, floatingFilter: true, minWidth: 300, resizable: true },
                { field: "administrador", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].ADMINISTRADOR, sortable: true, filter: true, floatingFilter: true },
                { field: "foto_perfil", headerName: traduccions[sessionStorage.getItem("id_idioma")][0].FOTO_PERFIL, cellRendererFramework: pintaFoto, maxWidth: 150, },
                { field: "id_usuari", headerName: "", cellRendererFramework: pintaBoto, maxWidth: 100 },
                { field: "id_usuari", headerName: "", cellRendererFramework: pintaBotoBorrar, maxWidth: 100 }
            ],
            id_usuari: -1
        }
    }

    borrar = (id) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios.delete('https://picamenja.com/PicaMenja/public/api/usuaris/' + id, config)
            .then(response => {
                // console.log(response);
                this.descarrega();
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
                if (error.response.status === 401) {
                    window.location.assign("/");
                }
            })
    }

    componentDidMount() {
        this.descarrega();
    }

    descarrega() {
        if (sessionStorage.getItem("admin") === "1") {
            const config = {
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
            };

            axios.get('https://picamenja.com/PicaMenja/public/api/usuaris', config)
                .then(response => {
                    // console.log(response);
                    this.setState({ usuaris: response.data });
                })
                .catch(function (error) {
                    console.log("ERROR -> " + error.response.data.error);
                    if (error.response.status === 401) {
                        sessionStorage.setItem("token", "");
                        window.location.assign("/");
                    }
                })
        } else {
            window.location.assign("/");
            alert(traduccions[sessionStorage.getItem("id_idioma")][0].noPermis);
        }
    }

    render() {
        return (
            <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
                <div className="row">
                    <h1 className='row justify-content-center mt-3'>{traduccions[sessionStorage.getItem("id_idioma")][0].llistaUsuaris}</h1>
                </div>
                <div className="row mb-3 ms-1">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input
                            type="button"
                            className="btn btn-primary btn-lg"
                            value={traduccions[sessionStorage.getItem("id_idioma")][0].insertUsuari}
                            onClick={() => {
                                window.location.assign(
                                    "/usuari/" + this.state.id_usuari
                                );
                            }} />
                    </div>
                </div>
                <AgGridReact
                    rowData={this.state.usuaris}
                    columnDefs={this.state.columnes}
                    pagination={true}
                    paginationPageSize={10}>
                </AgGridReact>
            </div>
        );
    }
}