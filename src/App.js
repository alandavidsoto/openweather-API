import './App.css';
import React from 'react';
import Buscador from './componentes/buscador';
import Ciudad from './componentes/ciudad'
import Card from './componentes/card';


document.addEventListener("DOMContentLoaded",()=>{
  let cabecera = document.querySelector(".header");
  
  window.addEventListener("scroll",()=>{
      let scroll_cabecera = 300;
      let scroll_window = window.pageYOffset;
      let buscador = document.querySelector(".formulario");
      if (scroll_window > scroll_cabecera){
          buscador.classList.add("buscador-fixed")
      } else {
          buscador.classList.remove("buscador-fixed")
      }
  }) 
})


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: '',
      resultado: {},
      geolocalizacion: {},
      ciudades: [3469058,3646738,3871336,3530597]
    }

    this.handlerInput = this.handlerInput.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
    navigator.geolocation.getCurrentPosition((position)=>{
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude; 
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3720db800d4ff27a883312ad29fa6dfc`)
    .then(response => response.json())
    .then(data => this.setState({
      geolocalizacion: data
    }))
    })
  }
  handlerInput(e){
    this.setState({
      busqueda: e.target.value
    })
  }
  handlerSubmit(e){
    e.preventDefault()
    const busqueda = this.state.busqueda
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${busqueda}&appid=3720db800d4ff27a883312ad29fa6dfc`)
    .then(response => response.json())
    .then(data => {
      if (data.cod == 200){
        this.setState({
          resultado: data
        })
        let card_scroll = document.querySelector(".card-busqueda")
        window.scrollTo(0,card_scroll.offsetTop)
      } else {
        let input = document.querySelector(".input-buscador")
        input.value = '';
        alert("NO SE ENCONTRO NINGUN RESULTADO")
      }
      
    })
    
  }
  
  render() {
    
    return (
      <React.Fragment>
        <header className="cabecera">
          <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1625633047/OpenWeather%20API/react_kg8j7u.png"></img>
          <h1>CLIMA ONLINE</h1>
          <Buscador input={this.handlerInput} submit={this.handlerSubmit} />
        </header>
        <h1 className="titulo">Tu Ubicacion Actual</h1>
        <div style={{display: "flex",justifyContent: "center"}}>
          {
            (Object.keys(this.state.geolocalizacion).length != 0) && <Card resultado={this.state.geolocalizacion}/>
          }
        </div>
        <h1 className="titulo">Otras Ubicaciones</h1>
        <div className="ciudades">
          {this.state.ciudades.map(ciudad => <Ciudad  key={ciudad} ciudad={ciudad}/>)}
        </div>
        <h1 className="titulo">Tus Busquedas</h1>
        <section>
          {
            (Object.keys(this.state.resultado).length != 0)? 
            <Card atributo="card-busqueda" resultado={this.state.resultado} /> : <h3>No has realizado ninguna busqueda...</h3>
          }
        </section>
      </React.Fragment>
    );
  }
}

export default App;
