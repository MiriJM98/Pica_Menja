import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
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
        // const config = {
        //     headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        //     //headers: { Authorization: 'Bearer ' + "token"}
        // };
        axios.get('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/idiomes',)
            .then(response => {
                console.log(response);
                this.setState({ idiomes: response.data });
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
            <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-3">
                        <h1>Llistat d'idiomes</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4 mb-3">
                        <Button variant='success'
                            className="ms-3"
                            onClick={() => { window.location.assign("/idioma/-1"); }}>
                            Afegir nou idioma
                        </Button>
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