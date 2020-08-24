import React from 'react'



class Profile extends React.Component {

  state = {
    name: 'Bill Murray',
    profileImg: 'http://www.fillmurray.com/200/200',
    about: 'Always on the hunt for the next big adventure. #lovinlife 🤙',
    wishlist: {
      item1: 'Berlin', //placeholders - will hopefully be able to add to list and generate state later
      item2: 'Sofia',
      item3: 'Madrid',
      item4: 'Oslo'
    },
    myPlaces: [] //fill array with coordinates for map pins
  }

  render() {
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
            {/* <form className="wishlist-form">
              <div className="field">
                <label className="label">
                </label>
                <input
                  type="text"
                  className="input is-primary"
                  placeholder=""
                  name="wishlist"
                />
              </div>
              <button type="submit" className="button">
                  Add A Destination
              </button>
            </form>
            <div className="wishlist">
              <li>{this.state.wishlist.item1}</li>
              <li>{this.state.wishlist.item2}</li>
              <li>{this.state.wishlist.item3}</li>
              <li>{this.state.wishlist.item4}</li>
            </div> */}

          </div>        
          <div className="column is-one-half profile-info">
            <figure className="image">
              <h3>My Places</h3>
              <img src="https://i.imgur.com/b97snWn.png" />
            </figure>
          </div>
        </div>
      </section>
    )
  }
}

export default Profile


