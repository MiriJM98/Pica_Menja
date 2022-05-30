import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
export default class Idiomes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idiomes: [],
            columnes: [
                { field: "id_idioma", headerName: "ID IDIOMA", sortable: true, filter: true },
                { field: "idioma", headerName: "IDIOMA", sortable: true, filter: true, floatingFilter: true },
            ],
        }
    }
    componentDidMount() {
        this.descarrega();
    }

    descarrega = () => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
            //headers: { Authorization: 'Bearer ' + "token"}
        };
        axios.get('https://picamenja.com/PicaMenja/public/api/idiomes', config)
            .then(response => {
                console.log(response);
                this.setState({ idiomes: response.data });
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
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <div className="row">
                    <h1 className='row justify-content-center mt-3'>Llistat d'idiomes</h1>
                </div>
                <div className="row mb-3 ms-1">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input
                            type="button"
                            className="btn btn-primary btn-lg"
                            value={"Afegir nou idioma"}
                            onClick={() => {
                                window.location.assign(
                                    "/idioma/" + this.state.id_idioma
                                );
                            }} />
                    </div>
                </div>
                <AgGridReact
                    rowData={this.state.idiomes}
                    columnDefs={this.state.columnes}
                // pagination={true}
                // paginationPageSize={10}
                >
                </AgGridReact>
            </div>
        );
    }
}