import React from 'react'
import Card from './card';

class Ciudad extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        data: {}
      }
    }
    componentDidMount(){
      fetch(`http://api.openweathermap.org/data/2.5/weather?id=${this.props.ciudad}&appid=3720db800d4ff27a883312ad29fa6dfc`)
      .then(response => response.json()).then(resdata => {
      this.setState({
        data: resdata
      })
    })
    }
    
    render(){
      return (
        <React.Fragment>
         {
           (Object.keys(this.state.data).length > 0) &&  <Card resultado={this.state.data} />
         }
        </React.Fragment>
      )
    }
}
export default Ciudad