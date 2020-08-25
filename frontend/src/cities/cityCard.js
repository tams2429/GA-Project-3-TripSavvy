import React from 'react'
import { getSingleCity } from '../lib/api.js'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class cityCard extends React.Component {

  state = {
    city: null
  }


  async componentDidMount() {
    const cityId = this.props.match.params.id
    try {
      const city = await getSingleCity(cityId)
      this.setState({ city: city.data })
      // console.log(this.state.city)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    // console.log(this.state.city.cityLatLng)
    if (!this.state.city) return null
    return (

      <section className="section">
        <div className="container">

          <div className="columns is-multiline box city-card">
            <div className="column is-half">
  
              <p className="title">{this.state.city.name}</p>
              <figure className="image">
                <img className="city-img"src={this.state.city.cityImg}></img>
              </figure>
              <p>{this.state.city.description}</p>
            </div>

            <div className="column is-half">

              <p className="title">Map</p>  
                
              <MapGL
                mapStyle='mapbox://styles/dnirns/cke9os3u24drt19p3ye2yzqpe'
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                height={'350px'}
                width={''}
                latitude={this.state.city.cityLatLng[0]}
                longitude={this.state.city.cityLatLng[1]}
                zoom={9.5}
              >
                <Marker
                  latitude={this.state.city.cityLatLng[0]}
                  longitude={this.state.city.cityLatLng[1]}
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