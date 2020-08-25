
  // 
  
  // handleClick = async () => {
  //   try {
  //     const allCities = await getAllCities()
  //     console.log(allCities)
  //     this.setState( { allCities: allCities.data } )

  //     //* Use array.filter to return array of cities that match categories
  //     //! How to use filter to select cities which contain more than one selected category?
  //     const allCitiesArray = allCities.data
  //     const selectedCities = allCitiesArray.filter(city => {
  //       if (city.hasNightLife === this.state.hasNightLife && this.state.hasNightLife) {
  //         return city
  //       }
  //       if (city.hasFoodScene === this.state.hasFoodScene && this.state.hasFoodScene) {
  //         return city
  //       }
  //       if (city.hasCulture === this.state.hasCulture && this.state.hasCulture) {
  //         return city
  //       }
  //       if (city.hasBeach === this.state.hasBeach && this.state.hasBeach) {
  //         return city
  //       }
  //       if (city.hasSnow === this.state.hasSnow && this.state.hasSnow) {
  //         return city
  //       }
  //       if (city.hasNature === this.state.hasNature && this.state.hasNature) {
  //         return city
  //       }
  //     })

  //     //* Choose random city from cities that match selected categories
  //     // console.log(selectedCities[Math.floor(Math.random() * selectedCities.length)])
  //     const selectedCity = selectedCities[Math.floor(Math.random() * selectedCities.length)]
  //     this.setState( { selectedCity } )
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }





  //* map page pre converting to columns test:


//   import React from 'react'
// import axios from 'axios'

// import MapGL, { Marker } from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'



// class cityCard extends React.Component {

//   state = {
//     cityLatLng: [	48.210033,	16.363449 ]
//   }

//   render() {
//     return (
//       <section className="section">
//         <div className="container">
//           <div className="tile is-ancestor box">
//             <div className="tile is-6 is-parent">
//               <div className="tile is-child cityCardBox">
//                 <p className="title">Vienna</p>
//                 <img src="https://archaeology-travel.com/wp-content/uploads/2019/01/karlskirche-vienna-sunset.jpg"></img>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
//                 Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
//               </div>
//             </div>
//             <div className="tile is-parent is-vertical">
//               <div className="tile is-child mapBox">
                // <p className="title">Map</p>  
                // <MapGL
                //   mapStyle='mapbox://styles/dnirns/cke9os3u24drt19p3ye2yzqpe'
                //   mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                //   height={'100%'}
                //   width={'100%'}
                //   latitude={53.0000}
                //   longitude={9.0000}
                //   zoom={1.9}
                // >
                //   <Marker
                //     latitude={this.state.cityLatLng[0]}
                //     longitude={this.state.cityLatLng[1]}
                //   >
                //     <div className="city-pin">📍</div>
                //   </Marker>
                // </MapGL>
//               </div>
//               <div className="tile is-child commentBox">
//                 <p className="title">Comment and Review</p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default cityCard