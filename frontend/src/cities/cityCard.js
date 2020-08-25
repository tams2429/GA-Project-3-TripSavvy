import React from 'react'
import { getSingleCity } from '../lib/api.js'

import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from "mapbox-gl";


class cityCard extends React.Component {

  state = {
    cityLatLng: [	48.210033, 16.363449 ],
    europeCenterLtLng: [ 53.0000, 9.0000 ]
  }


  async componentDidMount() {
    try {
      const city = await getSingleCity()
      this.setState( { cityLatLng: city.data.latLng } )
      console.log(this.state.cityLatLng)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
   

      <section className="section">
        <div className="container">
         
          <div className="columns is-multiline box city-card">
            <div className="column is-half">
  
              <p className="title">Vienna</p>
              <figure className="image">
                <img className="city-img"src="https://archaeology-travel.com/wp-content/uploads/2019/01/karlskirche-vienna-sunset.jpg"></img>
              </figure>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
              Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
            </div>

            <div className="column is-half">
   
              <p className="title">Map</p>  
                       
              <MapGL
                mapStyle='mapbox://styles/dnirns/cke9os3u24drt19p3ye2yzqpe'
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                height={'350px'}
                width={''}
                latitude={this.state.europeCenterLtLng[0]}
                longitude={this.state.europeCenterLtLng[1]}
                zoom={1.9}
              >
                <Marker
                  latitude={this.state.cityLatLng[0]}
                  longitude={this.state.cityLatLng[1]}
                >
                  <div className="city-pin">📍</div>
                </Marker>
              </MapGL>  
             
              <h1 className="title is-4">Comment and Review</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              <p>
              Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
           
            </div>

          </div>
       
        
           
         <div>
       
          </div>
 
        </div>
      </section>
    )
  }
}

export default cityCard