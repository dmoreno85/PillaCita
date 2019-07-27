import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Mapa extends Component {
  constructor(props){
    super(props);

  }

  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
}
  render() {
    return (<div className="divMap"><div className="map">
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom} >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Google Map'}
        />
      </GoogleMapReact>
      </div></div>
    );
  }
}
Map.defaultProps = {
  center: {lat: 59.95, lng: 30.33},
  zoom: 11
};

export default Mapa;