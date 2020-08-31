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

  handleEditProfile = () => {
    this.props.history.push('/profile/edit')
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    if (!this.state.user) return null
    return (
      <section className="section">
        <div className="container box">
          <div className="container profile-img">  
            <figure className="image is-150x150">
              <img className="is-rounded" src={this.state.user.profilePicture} alt="profile"/>
            </figure>
            <h1 className="profile-name">{this.capitalizeFirstLetter(this.state.user.username)} </h1> 
            <p>{this.capitalizeFirstLetter(this.state.user.about)}</p>
            <br></br>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleEditProfile} className="editIcon"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>     
          </div>       
          <div className="columns">           
            <div className="column profile-info">
              <p className="title is-4">Wishlist:</p>
              {this.state.user.wishlistedCities.map((city) =>
                <Link key={city.name} to={`/cities/${city._id}`}>
                  <li >{this.capitalizeFirstLetter(city.name)}</li>
                </Link>
              )}
            </div> 
            <div className="column profile-info"> 
              <p className="title is-4">Favourites:</p>
              {this.state.user.favoritedCities.map((city) =>
                <Link key={city.name} to={`/cities/${city._id}`}>
                  <li >{this.capitalizeFirstLetter(city.name)}</li>
                </Link>
              )}
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
                    <div className="city-pin"><span role="img" aria-label="heart">💖</span></div>
                  </Marker>
                )}
                {this.state.user.wishlistedCities.map((city) =>
                  <Marker
                    key={city.name}
                    latitude={city.cityLatLng[0]}
                    longitude={city.cityLatLng[1]}               
                  >
                    <div className="city-pin"><span role="img" aria-label="star">⭐️</span></div>
                  </Marker>
                )}
              </MapGL> 
            </div>
          </div>
          <div className="columns">
            <div className="column profile-info"> 
              <p className="title is-4">Created Cities:</p>
              {this.state.allCities.map(city => { 
                return (
                  (city.user._id === getPayload().sub) ?
                    <Link key={city._id} to={`/cities/${city._id}`}>
                      <span> {this.capitalizeFirstLetter(city.name)} </span>
                    </Link>
                    :
                    <>
                    </>
                )
              })
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Profile


