import React from 'react'
import { getProfile, getAllCities } from '../lib/api.js'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Link } from 'react-router-dom'
import { getPayload } from '../lib/auth.js'



class Profile extends React.Component {

  state = {
    user: null,
    europeCenterLtLng: [53.0000, 9.0000],
    allCities: []
  }

  async componentDidMount() {
    try {
      const user = await getProfile() 
      this.setState({ user: user.data })
      const allCities = await getAllCities()
      this.setState( { allCities: allCities.data } )
    } catch (err) {
      console.log(err)
    }
  }

  handleCreatedCity = () => {
    return this.state.user._id === getPayload().sub
  }


  render() {
    if (!this.state.user) return null
    console.log(this.state.user)
    return (
      <section className="section">

        <div className="container box">
          <div className="container profile-img">  
            <figure className="image is-150x150">
              <img className="is-rounded" src={this.state.user.profilePicture} />
            </figure>
            <h1 className="profile-name">{this.state.user.username}</h1>  
            <p>{this.state.user.about}</p>     
          </div>       
          <div className="columns">


          
            
            <div className="column profile-info">
              <p className="title is-4">Wishlist:</p>
              {this.state.user.wishlistedCities.map((city) =>
                <Link key={city.name} to={`/cities/${city._id}`}>
                  <li >{city.name}</li>
                </Link>
              )}
            </div> 

            <div className="column profile-info"> 
              <p className="title is-4">Favourites:</p>
              {this.state.user.favoritedCities.map((city) =>
                <Link key={city.name} to={`/cities/${city._id}`}>
                  <li >{city.name}</li>
                </Link>
              )}
            </div>

            <div className="column profile-info"> 
              <p className="title is-4">Created Cities:</p>

              {this.state.allCities.map(city => { 
                return (
                  (this.state.user._id === getPayload().sub) ?
                    <Link key={city._id} to={`/cities/${city._id}`}>
                      <li >{city.name}</li>
                    </Link>
                    :
                    <>
                    </>
                )
              })
              }

            </div>



            <div className="column is-half profile-info">
              <p className="title is-4">My Places</p>
              <MapGL
                mapStyle='mapbox://styles/dnirns/cke9os3u24drt19p3ye2yzqpe'
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                height={'400px'}
                width={''}
                latitude={this.state.europeCenterLtLng[0]}
                longitude={this.state.europeCenterLtLng[1]}
                zoom={2.4}
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
        </div>
      </section>
    )
  }
}

export default Profile


