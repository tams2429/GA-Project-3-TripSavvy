import React from 'react'

import { getSingleCity, wishListToggle, favoriteToggle, addComment, deleteComment } from '../lib/api.js'
import { getPayload } from '../lib/auth'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class cityCard extends React.Component {

  state = {
    city: null,
    data: {
      text: ''
    },
    errors: {}
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

  handleEdit = () => {
    try {
      const cityId = this.props.match.params.id
      this.props.history.push(`/cities/${cityId}/edit`)
    } catch (err) {
      console.log(err)
    } 
  }



  handleToggle = async (event) => {
    const cityId = this.props.match.params.id
    // console.log(cityId)
    console.log(event.target.id)
    if (event.target.id === 'wish') {
      try {
        await wishListToggle(cityId)
        const city = await getSingleCity(cityId)
        this.setState( { city: city.data } )
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        await favoriteToggle(cityId)
        const city = await getSingleCity(cityId)
        this.setState( { city: city.data } )
      } catch (err) {
        console.log(err)
      }
    }
  }

  handleChange = event => {
    const data = { ...this.state.data, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async () => {
    // console.log('this.state.data is', this.state.data)
    const cityId = this.props.match.params.id
    try {
      await addComment(this.state.data, cityId)
    } catch (err) {
      console.log('error', err)
      this.setState({ errors: err.response.data.errors })
    }
  }

  handleDeleteComment = async (event) => {
    const cityId = this.props.match.params.id
    // console.log(event.target.id)
    try {
      await deleteComment(cityId, event.target.id)
      const city = await getSingleCity(cityId)
      this.setState( { city: city.data } )
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log('State from backend:', this.state.city)
    
    if (!this.state.city) return null
    console.log('Comments are:', this.state.city.comments)
    // console.log(this.state.city.favoritedUsers)
    // console.log('user_id from token is:', getPayload().sub)
    // console.log('State from backend:', this.state.data)
    return (

      <section className="section">
        <div className="container">

          <div className="columns is-multiline box city-card">
            <div className="column is-half">
              <div className="titleRow">
                <div className="titleAndEdit">
                  <p className="title">{this.state.city.name}</p>
                  {this.state.city.user._id === getPayload().sub && 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.handleEdit} className="editIcon"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
                  }
                </div>
                <div className="favWishIcons">
                  <div className="wishContainer">
                    <svg onClick={this.handleToggle} className={!this.state.city.wishlistedUsers.includes(getPayload().sub) ? "ico" : "ico wished"} id="wish" width="34" height="34" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" id="wish"></path>
                    </svg>
                  </div>
                  <div className="favContainer">
                    <svg onClick={this.handleToggle} className={!this.state.city.favoritedUsers.includes(getPayload().sub) ? "ico" : "ico liked"} id="favorite" width="34" height="34" viewBox="0 0 24 24">
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" id="favorite"></path>
                    </svg>
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
                <input
                  className="textarea"
                  name="text"
                  value={this.state.data.text}
                  onChange={this.handleChange}
                />
                <button type="submit" 
                  className="button is-fullwidth is-danger"
                  onClick={this.handleSubmit}
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