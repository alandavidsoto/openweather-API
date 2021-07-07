import React from 'react'

class Buscador extends React.Component {
    constructor(props) {
      super(props);
      this.propiedades = props;
    }
    render() { 
      return (
        <form className="formulario" onSubmit={this.propiedades.submit}>
            <input className="input-buscador"type="text" onChange={this.propiedades.input} placeholder="Busca Una Lugar Ej: buenos Aires,AR ó Cochabamba,BO" />
            <button className="submit-buscador" type="submit"><i className="fas fa-search-location"></i></button>
        </form>
      );
    }
}
export default Buscador