import React from 'react';



import { NavLink } from 'react-router-dom';


class Footer extends React.Component {


    render() {
        return (
            <div className="footer">

                <span>Todos los derechos reservados</span>

                <NavLink className="navLinkFooter" activeClassName="is-active" to="/map/">Donde estamos</NavLink>
                <div className="RedesSociales">
                    <i className="fab fa-facebook-f fa-2x face"></i>
                    <i className="fab fa-twitter fa-2x twitter"></i>
                    <i className="fab fa-whatsapp fa-2x whatsapp"></i>
                    <i className="fab fa-instagram fa-2x instagram"></i>
                    <i className="fab fa-youtube fa-2x youtube"></i>


                </div>



            </div>
        )
    }

}

export default Footer;