import React from 'react'
import { getProfile } from '../lib/api.js'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'



class Profile extends React.Component {

  state = {
    user: null,
    europeCenterLtLng: [53.0000, 9.0000]
  }

  async componentDidMount() {
    try {
      const user = await getProfile() 
      this.setState({ user: user.data })
      console.log(this.state.user)
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    if (!this.state.user) return null
    return (
      <section className="section">
        <div className="container profile-img">  
          <figure className="image is-150x150">
            <img className="is-rounded" src={this.state.user.profilePicture} />
          </figure>
          <h1 className="profile-name">{this.state.user.username}</h1>  
          <p>{this.state.user.about}</p>     
        </div>       
        <div className="columns">
          <div className="column is-one-half profile-info">
            <h1>Wishlist:</h1>

          </div>        
          <div className="column is-one-half profile-info">
            <p className="title is-4">My Places</p>
            <MapGL
              mapStyle='mapbox://styles/dnirns/cke9os3u24drt19p3ye2yzqpe'
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              height={'350px'}
              width={''}
              latitude={this.state.europeCenterLtLng[0]}
              longitude={this.state.europeCenterLtLng[1]}
              zoom={2.3}
            >

              {this.state.user.favoritedCities.map((city) =>
                <Marker
                  key={city.name}
                  latitude={city.cityLatLng[0]}
                  longitude={city.cityLatLng[1]}               
                >
                  <div className="city-pin">📍</div>
                </Marker>
              )}

              {this.state.user.wishlistedCities.map((city) =>
                <Marker
                  key={city.name}
                  latitude={city.cityLatLng[0]}
                  longitude={city.cityLatLng[1]}               
                >
                  <div className="city-pin">⭐️</div>
                </Marker>
              )}
            </MapGL> 
            
              
          </div>
        </div>
      </section>
    )
  }
}

export default Profile


