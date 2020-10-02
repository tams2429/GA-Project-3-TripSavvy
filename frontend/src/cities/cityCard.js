import React from 'react'

import { popupWishlist, popupFavorite, popupSuccess, popupError } from '../lib/notification'
import { getSingleCity, wishListToggle, favoriteToggle, addComment, deleteComment, deleteCity, getWeather, getInfo } from '../lib/api.js'
import { getPayload } from '../lib/auth'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class cityCard extends React.Component {

  state = {
    city: null,
    weather: null,
    info: null,
    data: {
      text: ''
    },
    errors: {}
  }

  async componentDidMount() {
    const cityId = this.props.match.params.id
    try {
      const city = await getSingleCity(cityId)
      this.setState({ city: city.data })
      const cityName = city.data.name
      const weather = await getWeather(cityName)
      console.log(weather)
      this.setState( { weather: weather.data } )
      const cityLatLng = city.data.cityLatLng
      const info = await getInfo(cityLatLng[0], cityLatLng[1])
      this.setState( { info: info.data } )
    } catch (err) {
      console.log(err)
      popupError('Oops looks like something is wrong with you or wrong with our code...')
    }
  }

  handleEditCity = () => {
    try {
      const cityId = this.props.match.params.id
      this.props.history.push(`/cities/${cityId}/edit`)
    } catch (err) {
      console.log(err)
      popupError('Oops looks like something is wrong with you or wrong with our code...')
    }
  }

  handleDeleteCity = async () => {
    try {
      const cityId = this.props.match.params.id
      await deleteCity(cityId)
      popupSuccess(`Successfully Deleted ${this.state.city.name}`)
      this.props.history.push('/profile')
    } catch (err) {
      console.log(err)
      popupError('Oops looks like something is wrong with you or wrong with our code...')
    }
  }

  handleToggle = async (event) => {
    const cityId = this.props.match.params.id
    if (event.target.id === 'wish') {
      try {
        await wishListToggle(cityId)
        const city = await getSingleCity(cityId)
        popupWishlist(` ${!this.state.city.wishlistedUsers.includes(getPayload().sub) ? `You have wishlisted ${this.state.city.name}` : `You have unwishlisted ${this.state.city.name}` }`)
        this.setState( { city: city.data } )
      } catch (err) {
        console.log(err)
        popupError('Oops looks like something is wrong with you or wrong with our code...')
      }
    } else {
      try {
        await favoriteToggle(cityId)
        const city = await getSingleCity(cityId)
        popupFavorite(` ${!this.state.city.favoritedUsers.includes(getPayload().sub) ? `You have favorited ${this.state.city.name}` : `You have unfavorited ${this.state.city.name}` }`)
        this.setState( { city: city.data } )
      } catch (err) {
        console.log(err)
        popupError('Oops looks like something is wrong with you or wrong with our code...')
      }
    }
  }

  handleChange = event => {
    const data = { ...this.state.data, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ data, errors })
  }

  handleAddComment = async (event) => {
    event.preventDefault()
    const cityId = this.props.match.params.id
    try {
      await addComment(this.state.data, cityId)
      popupSuccess('Added comment')
      const city = await getSingleCity(cityId)
      this.setState( { city: city.data } )
    } catch (err) {
      console.log('error', err)
      popupError('Oops looks like something is wrong with you or wrong with our code...')
      this.setState({ errors: err.response.data.errors })
    }
  }

  handleDeleteComment = async (event) => {
    const cityId = this.props.match.params.id
    try {
      await deleteComment(cityId, event.target.id)
      popupSuccess('Deleted comment')
      const city = await getSingleCity(cityId)
      this.setState( { city: city.data } )
    } catch (err) {
      console.log(err)
      popupError('Oops looks like something is wrong with you or wrong with our code...')
    }
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    if (!this.state.city) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline box city-card">
            <div className="column is-half">
              <div className="titleRow">
                <div className="titleAndEdit">
                  <p className="title">{this.capitalizeFirstLetter(this.state.city.name)}</p>
                  {this.state.city.user._id === getPayload().sub &&
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleEditCity} className="editIcon"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
                  }
                  {this.state.city.user._id === getPayload().sub &&
                  <svg width="28" height="24" xmlns="http://www.w3.org/2000/svg" onClick={this.handleDeleteCity} className="deleteIcon"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"/></svg>
                  }
                </div>
                <div className="favWishIcons">
                  <div className="wishContainer">
                    <svg onClick={this.handleToggle} className={!this.state.city.wishlistedUsers.includes(getPayload().sub) ? 'ico' : 'ico wished'} id="wish" width="34" height="34" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" id="wish"></path>
                    </svg>
                  </div>
                  <div className="favContainer">
                    <svg onClick={this.handleToggle} className={!this.state.city.favoritedUsers.includes(getPayload().sub) ? 'ico' : 'ico liked'} id="favorite" width="34" height="34" viewBox="0 0 24 24">
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" id="favorite"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <figure className="image">
                <img className="city-img"src={this.state.city.cityImg} alt="Picture of city"></img>
              </figure>
              {!this.state.info ? <></> :
                <div className="title About">
                  <h2>Currency: {this.state.info.results[0].annotations.currency.symbol}</h2>
                  <h2>Flag: {this.state.info.results[0].annotations.flag}</h2>
                  <h2>Drive on: {this.state.info.results[0].annotations.roadinfo.drive_on}</h2>
                  <h2>Speed in: {this.state.info.results[0].annotations.roadinfo.speed_in}</h2>
                </div>
              }
              <p>{this.capitalizeFirstLetter(this.state.city.description)}</p>
            </div>
            <div className="column is-half">
              <div className="titleRow">
                <p className="title">Map</p>
                {!this.state.weather ? <></> :
                  <div className="WeatherInfo">
                    <p className="title">{this.state.weather.weather[0].main},</p>
                    <p className="title">{Math.floor(this.state.weather.main.temp)}°C</p>
                    {this.state.weather.weather[0].icon === '01n' || this.state.weather.weather[0].icon === '01d' ?
                      <figure className="image weatherSunny">
                        <img className="weather-img" src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="Weather icon"></img>
                      </figure>
                      :
                      <figure className="image weather">
                        <img className="weather-img" src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`} alt="Weather icon"></img>
                      </figure>
                    }
                  </div>
                }
              </div>
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
              {this.state.city.comments.map(comment => {
                return (comment.user.includes(getPayload().sub) ?
                  <div key={comment._id} className="comments">
                    <div className="commentBox">
                      <div className="commentText">
                        {comment.text}
                        <br></br>
                      </div>
                      <div className="commentDetails">
                        <div className="commentInfo">
                          Comment created: {comment.createdAt.slice(0, 10)}
                          <br></br>
                          By user id: {comment.user}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="deleteComment" onClick={this.handleDeleteComment} id={comment._id}><path id={comment._id} d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                      </div>
                    </div>
                  </div>
                  :
                  <div key={comment._id} className="comments">
                    <div className="commentBox">
                      <div className="commentText">
                        {comment.text}
                        <br></br>
                      </div>
                      <div className="commentDetails">
                        Comment created: {comment.createdAt.slice(0, 10)}
                        <br></br>
                        By user id: {comment.user}
                      </div>
                    </div>
                  </div>
                )
              })}
              <form className="addComment">
                <textarea
                  className="textarea"
                  name="text"
                  maxLength="300"
                  value={this.state.data.text}
                  onChange={this.handleChange}
                />
                <button type="submit"
                  className="button is-fullwidth is-rounded trip-button hvr-shrink"
                  onClick={this.handleAddComment}
                >Submit</button>
              </form>
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
