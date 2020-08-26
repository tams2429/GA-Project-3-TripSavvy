import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'



class Profile extends React.Component {

  state = {
    name: 'Bill Murray',
    profileImg: 'http://www.fillmurray.com/200/200',
    about: 'Always on the hunt for the next big adventure. #lovinlife 🤙',
    wishlist: {
      item1: 'London',
      item2: 'Sofia',
      item3: 'Madrid',
      item4: 'Oslo'
    },
    myPlaces: [ 
      { name: 'Budapest', cityLatLng: [47.49801, 19.03991] },
      { name: 'Edinburgh', cityLatLng: [55.953251, -3.188267] },
      { name: 'Birmingham', cityLatLng: [52.489471, -1.898575] }
    ],
    europeCenterLtLng: [53.0000, 9.0000]
  }



  render() {
    this.state.myPlaces.map((city) => {
      console.log(city.cityLatLng[0],city.cityLatLng[1] )
    })
    
    return (
      <section className="section">
        <div className="container profile-img">  
          <figure className="image is-150x150">
            <img className="is-rounded" src={this.state.profileImg} />
          </figure>
          <h1 className="profile-name">{this.state.name}</h1>  
          <p>"{this.state.about}"</p>     
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
           
              {this.state.myPlaces.map((city) =>
                <Marker
                  key={city.name}
                  latitude={city.cityLatLng[0]}
                  longitude={city.cityLatLng[1]}               
                >
                  <div className="city-pin">📍</div>
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


