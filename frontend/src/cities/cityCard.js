import React from 'react'
import { getSingleCity, wishListToggle, favoriteToggle } from '../lib/api.js'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class cityCard extends React.Component {

  state = {
    city: null,
    favorited: false
  }


  async componentDidMount() {
    const cityId = this.props.match.params.id
    // console.log('state has user id', this.state.city.favoritedUsers.includes('5f4645c4369551235cc6b351'))
    try {
      const city = await getSingleCity(cityId)
      this.setState({ city: city.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleToggle = async () => {
    const cityId = this.props.match.params.id
    console.log(cityId)
    if (!this.state.favorited) {
      //! Replace Hardcoded current user id no. with user id
      // const newFavoritedUsers = {...this.state.city, favoritedUsers: [...this.state.city.favoritedUsers, '5f4645c4369551235cc6b351']}
      // console.log('To be set state:', newFavoritedUsers)
      // this.setState( { favorited: !this.state.favorited } )
      // this.setState( { city: newFavoritedUsers } )
      try {
        await favoriteToggle(cityId)
        const city = await getSingleCity(cityId)
        this.setState( { city: city.data } )
        this.setState( { favorited: !this.state.favorited } )
        // this.setState( { city: newFavoritedUsers } )
      } catch (err) {
        console.log(err)
      }
    }  else {
      // const favoritedUsersArray = [...this.state.city.favoritedUsers]
      // console.log('Favorited users array to be filtered:', favoritedUsersArray)

      // //! Replace Hardcoded current user id no. with user id
      // const filteredFavoritedUsers = favoritedUsersArray.filter(user => {
      //   return user !== '5f4645c4369551235cc6b351'
      // })
      // console.log('New array to be set to state:', filteredFavoritedUsers)
      // const newFavoritedUsers = {...this.state.city, favoritedUsers: filteredFavoritedUsers}
      // console.log('To be set state:', newFavoritedUsers)
      // this.setState( { favorited: !this.state.favorited } )
      // this.setState( { city: newFavoritedUsers } )

      try {
        await favoriteToggle(cityId)
        const city = await getSingleCity(cityId)
        this.setState( { city: city.data } )
        this.setState( { favorited: !this.state.favorited } )
      } catch (err) {
        console.log(err)
      }
    }
  }

  render() {
    console.log('State from backend:', this.state.city)
    // console.log(this.state.favorited)
    if (!this.state.city) return null
    return (

      <section className="section">
        <div className="container">

          <div className="columns is-multiline box city-card">
            <div className="column is-half">
              <div className="titleRow">
                <p className="title">{this.state.city.name}</p>
                <div className="favWishIcons">
                  <div className="favContainer">
                    <svg onClick={this.handleToggle} className={!this.state.favorited ? "ico" : "ico liked"} width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                    {/* <svg onClick={this.handleToggle} className={!this.state.favorited ? "ico" : "ico liked"} width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg> */}
                  </div>
                </div>
              </div>
              
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