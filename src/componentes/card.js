import React from 'react';

function Card(props){
    const data = props.resultado;
    const temperatura = (data.main.temp)- 273.15
    const icon = data.weather[0].icon
    const ciudad= data.name
    const pais = data.sys.country
    const tempMax = (data.main.temp_max)-273.15;
    const tempMin = (data.main.temp_min)-273.15;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);
  
    return (
      <div className={"card "+props.atributo}>
          <div className="card-left">
            <div className="icono-state">
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
            </div>
            <span className="Ubicacion">
                {`${ciudad}, ${pais} `}
                <img src={`http://openweathermap.org/images/flags/${pais.toLowerCase()}.png`}></img>
            </span>
            <div className="temperature">
              {Math.floor(temperatura)+"°"}C  Actual
            </div>
            <div className="temp_max_min">
              <span className="temp-max">{Math.floor(tempMax)+"°"}C  Max</span>
              <span className="temp-min">{Math.floor(tempMin)+"°"}C  Min</span>
            </div>
          </div>
          <div className="card-right">
            <span><b>HUMEDAD</b><br/>{humidity}%</span>
            <span><b>PRESION</b><br/>{pressure}hPa</span>
            <span><b>AMANECER</b><br/>{sunrise.toLocaleTimeString()}</span>
            <span><b>ATARDECER</b><br/>{sunset.toLocaleTimeString()}</span>
          </div>
      </div>
    );
}
 
export default Card;