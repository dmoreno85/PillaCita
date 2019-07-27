
import React, { Component } from 'react';
import Calendar from 'react-calendar';


class Index extends Component {
  constructor(props) {

    super(props)


    this.state = {
      date: new Date(),
      cita: false,
      daySelected: "",
    }
  }


  dropCita =  (date) => {
    console.log(date)
     this.setState({ date },()=>{
      this.setState({
        cita: !this.state.cita,
      })
      
     this.setState({
      daySelected: this.getFullDate(date)
    })
    });
  }

  // onChange = async date => {
  //   await this.setState({ date })
  //   console.log(this.state.date)
  // }


  getFullDate(date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
console.log(day)
    return `${day}/${month}/${year}`
  }
closeBackground=()=>{
  this.setState({cita:false})
}
  render() {

    return (
      <div>
        <div className="index">
          <Calendar onClickDay={this.dropCita} className="calendar" value={this.state.date} />
        </div>
        <div className="citaBack" style={{ display: this.state.cita ? "flex" : "none" }}>
          <div className="closeBackground" onClick={this.closeBackground}> </div>
          <div className="citaPopUp">
            <input type="text" placeholder="" />
            <p>
            {this.state.daySelected}
            </p>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Index;