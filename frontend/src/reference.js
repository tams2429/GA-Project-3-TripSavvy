
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