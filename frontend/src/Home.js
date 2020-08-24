import React from 'react'

import { getAllCities } from './lib/api'

class Home extends React.Component {

  state = {
    categories: [],
    allCities: [],
    possibleCityOptions: [],
    selectedCity: []
  }

  async componentDidMount() {
    try {
      const allCities = await getAllCities()
      this.setState( { allCities: allCities.data } )
      console.log(this.state.allCities)
    } catch (err) {
      console.log(err)
    }
  }

  handleSelected = (event) => {
    console.log(event.target.id)
    console.log(this.state.categories)
    if (!this.state.categories.includes(event.target.id)){
      const addedCategoryArray = [...this.state.categories, event.target.id]
      console.log(addedCategoryArray)
      this.setState({ categories: addedCategoryArray })
    } else {
      const selectedCategories = [ ...this.state.categories]
      const removedCategoryArray = selectedCategories.filter( attribute => {
        return attribute !== event.target.id
      })
      console.log(removedCategoryArray)
      this.setState({ categories: removedCategoryArray })
    }
  }


  handleClick = () => {
    try {
      const allCitiesArray = this.state.allCities
      const selectedCategories = this.state.categories
      const selectedCities = this.state.possibleCityOptions

      allCitiesArray.forEach( city => {
        const cityCategoryArray = city.categories
        if (selectedCategories.every(category => cityCategoryArray.includes(category))) {
          selectedCities.push(city)
        } 
      })
      this.setState({ possibleCityOptions: selectedCities })

      const selectedCity = selectedCities[Math.floor(Math.random() * selectedCities.length)]
      this.setState({ selectedCity }) // for some reason this is not setting into state 
      console.log(selectedCity)
      console.log(this.state)
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    return (
      <section className="section">
        <div className="container ">
          <div className="columns home-row1">
            <div className={this.state.hasNightLife ? 'column night isSelected' : 'column night'} onClick={this.handleSelected} id="night">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle" id="night">NightLife</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.state.hasFoodScene ? 'column food isSelected' : 'column food'} onClick={this.handleSelected} id="food">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle" id="food">Food</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.state.hasCulture ? 'column culture isSelected' : 'column culture'} onClick={this.handleSelected} id="culture">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle" id="culture">Culture</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="columns home-row2">
            <div className={this.state.hasBeach ? 'column beach isSelected' : 'column beach'} onClick={this.handleSelected} id="beach">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle" id="beach">Beach</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.state.hasSnow ? 'column snow isSelected' : 'column snow'} onClick={this.handleSelected} id="snow">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle" id="snow">Snow</h2>
                  </div>
                </div>
              </section>
            </div>
            <div className={this.state.hasNature ? 'column nature isSelected' : 'column nature'} onClick={this.handleSelected} id="nature">
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="subtitle" id="nature">Nature</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="columns home-row3">
            <button className="button is-danger is-rounded" onClick={this.handleClick}>Take me to a trip</button>
          </div>
        </div>
        
      </section>
    )
  }
}

export default Home
