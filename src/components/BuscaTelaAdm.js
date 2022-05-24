import React, { Component } from "react";

class buscaTelaAdm extends Component {
    render() {
        return (
            <form>
                <div className="row align-items-center">
                    <div className="d-flex">
                        <form className="col-4">
                            <input className="form-control" type="search" placeholder="BUSCAR POR ID" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">BUSCAR</button>
                        </form>
                    </div>
                </div>
            </form>
        )
    }
}

export default buscaTelaAdm;