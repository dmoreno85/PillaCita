import React from 'react'

class Cita extends React.Component {
    constructor(props){
        super(props);
            this.state={
                cita:false,
            
        }
    }

    dropCita=()=>{
        this.setState({
            cita: !this.state.cita
        })

    }
    render() {
        return (
            <div className="citaBack">
                <div className="citaPopUp">
                    <input type="text" placeholder="" />
                    <button>Enviar</button>
                </div></div>
        )
    }
}
export default Cita