(this.webpackJsonppagina=this.webpackJsonppagina||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(8),i=a.n(s),r=(a(13),a(2)),o=a(3),d=a(6),u=a(5),l=a(4),j=(a(14),a(0)),h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).propiedades=e,n}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"formulario",onSubmit:this.propiedades.submit,children:[Object(j.jsx)("input",{className:"input-buscador",type:"text",onChange:this.propiedades.input,placeholder:"Busca Una Lugar Ej: buenos Aires,AR \xf3 Cochabamba,BO"}),Object(j.jsx)("button",{className:"submit-buscador",type:"submit",children:Object(j.jsx)("i",{className:"fas fa-search-location"})})]})}}]),a}(c.a.Component);var b=function(e){var t=e.resultado,a=t.main.temp-273.15,n=t.weather[0].icon,c=t.name,s=t.sys.country,i=t.main.temp_max-273.15,r=t.main.temp_min-273.15,o=t.main.humidity,d=t.main.pressure,u=new Date(1e3*t.sys.sunrise),l=new Date(1e3*t.sys.sunset);return Object(j.jsxs)("div",{className:"card "+e.atributo,children:[Object(j.jsxs)("div",{className:"card-left",children:[Object(j.jsx)("div",{className:"icono-state",children:Object(j.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(n,"@2x.png")})}),Object(j.jsxs)("span",{className:"Ubicacion",children:["".concat(c,", ").concat(s," "),Object(j.jsx)("img",{src:"https://openweathermap.org/images/flags/".concat(s.toLowerCase(),".png")})]}),Object(j.jsxs)("div",{className:"temperature",children:[Math.floor(a)+"\xb0","C  Actual"]}),Object(j.jsxs)("div",{className:"temp_max_min",children:[Object(j.jsxs)("span",{className:"temp-max",children:[Math.floor(i)+"\xb0","C  Max"]}),Object(j.jsxs)("span",{className:"temp-min",children:[Math.floor(r)+"\xb0","C  Min"]})]})]}),Object(j.jsxs)("div",{className:"card-right",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("b",{children:"HUMEDAD"}),Object(j.jsx)("br",{}),o,"%"]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("b",{children:"PRESION"}),Object(j.jsx)("br",{}),d,"hPa"]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("b",{children:"AMANECER"}),Object(j.jsx)("br",{}),u.toLocaleTimeString()]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("b",{children:"ATARDECER"}),Object(j.jsx)("br",{}),l.toLocaleTimeString()]})]})]})},p=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={data:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/weather?id=".concat(this.props.ciudad,"&appid=3720db800d4ff27a883312ad29fa6dfc")).then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){return Object(j.jsx)(c.a.Fragment,{children:Object.keys(this.state.data).length>0&&Object(j.jsx)(b,{resultado:this.state.data})})}}]),a}(c.a.Component);document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".header");window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.querySelector(".formulario");e>300?t.classList.add("buscador-fixed"):t.classList.remove("buscador-fixed")}))}));var m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={busqueda:"",resultado:{},geolocalizacion:{},ciudades:[3469058,3646738,3871336,3530597]},n.handlerInput=n.handlerInput.bind(Object(d.a)(n)),n.handlerSubmit=n.handlerSubmit.bind(Object(d.a)(n)),navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=3720db800d4ff27a883312ad29fa6dfc")).then((function(e){return e.json()})).then((function(e){return n.setState({geolocalizacion:e})}))})),n}return Object(o.a)(a,[{key:"handlerInput",value:function(e){this.setState({busqueda:e.target.value})}},{key:"handlerSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.busqueda;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=3720db800d4ff27a883312ad29fa6dfc")).then((function(e){return e.json()})).then((function(e){if(200==e.cod){t.setState({resultado:e});var a=document.querySelector(".card-busqueda");window.scrollTo(0,a.offsetTop)}else{document.querySelector(".input-buscador").value="",alert("NO SE ENCONTRO NINGUN RESULTADO")}}))}},{key:"render",value:function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("header",{className:"cabecera",children:[Object(j.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1625633047/OpenWeather%20API/react_kg8j7u.png"}),Object(j.jsx)("h1",{children:"CLIMA ONLINE"}),Object(j.jsx)(h,{input:this.handlerInput,submit:this.handlerSubmit})]}),Object(j.jsx)("h1",{className:"titulo",children:"Tu Ubicacion Actual"}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:0!=Object.keys(this.state.geolocalizacion).length&&Object(j.jsx)(b,{resultado:this.state.geolocalizacion})}),Object(j.jsx)("h1",{className:"titulo",children:"Otras Ubicaciones"}),Object(j.jsx)("div",{className:"ciudades",children:this.state.ciudades.map((function(e){return Object(j.jsx)(p,{ciudad:e},e)}))}),Object(j.jsx)("h1",{className:"titulo",children:"Tus Busquedas"}),Object(j.jsx)("section",{children:0!=Object.keys(this.state.resultado).length?Object(j.jsx)(b,{atributo:"card-busqueda",resultado:this.state.resultado}):Object(j.jsx)("h3",{children:"No has realizado ninguna busqueda..."})})]})}}]),a}(c.a.Component),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.4636de34.chunk.js.map