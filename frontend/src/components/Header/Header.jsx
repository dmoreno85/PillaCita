import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'




class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropShow: false,
    }
  }

  dropMenu = () => {
    this.setState({
      dropShow: !this.state.dropShow
    });
  }

  render() {
    return (<div className="header">


      <div className="regLinks">
        <ul>
          <li> <NavLink className="navLink" activeClassName="is-active" to="/" exact>Home</NavLink> </li>

          {/* <li> <NavLink className="navLink" activeClassName="is-active" to="/users/">users</NavLink></li> */}
        </ul> </div>

      <div className="tituloHeader"><h1>PillaCita</h1></div>


      <div className="regLinks">

        <i className="fas fa-user-circle fa-2x iconUser" onClick={this.dropMenu}></i>

        {this.props.user ?
          <div className="baseBackground" style={{ display: this.state.dropShow ? "flex" : "none" }}>
            <div className="closeBackground" onClick={this.dropMenu}> </div>

            <div className="isLoggedIn">
              <ul className="drop">
                <li> <NavLink className="navLinkDrop" activeClassName="is-active" to="/profile/">Profile</NavLink></li>
                <li> <NavLink className="navLinkDrop" activeClassName="is-active" to="/logout/">Logout</NavLink></li>
              </ul>
            </div>
          </div>
          :

           <div className="baseBackground" style={{ display: this.state.dropShow ? "flex" : "none" }}>
            <div className="closeBackground" onClick={this.dropMenu}></div>
            <div className="isNotLoggedIn" >
              <ul>
                <li> <NavLink className="navLinkDrop" activeClassName="is-active" to="/register/">Register</NavLink></li>
                <li> <NavLink className="navLinkDrop" activeClassName="is-active" to="/login/">Login</NavLink></li>
              </ul>
            </div>
          </div>
        }


      </div>
    </div>
    )
  }
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user, //undefined 
  }
}
export default connect(mapStateToProps)(Header);
