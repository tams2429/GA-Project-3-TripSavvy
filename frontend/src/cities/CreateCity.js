import React from 'react'
import { createCity } from '../lib/api'
import CityForm from './CityForm'




class CreateCity extends React.Component {
  state = {

    data: {
      name: '',
      country: '',
      description: '',
      cityLatLng: [],
      cityImg: '',
      categories: []
    },
    errors: {}
  }

  //for the react-select options
  options = [
    { value: 'beach', label: 'Beaches' },
    { value: 'night', label: 'Good Nightlife' },
    { value: 'culture', label: 'Cultural' },
    { value: 'snow', label: 'Snow' },
    { value: 'food', label: 'Food Scene' },
    { value: 'nature', label: 'Access to Nature' }
  ]

  // coordinates = [
  //   { }
  // ]

  //event handlers for submitting data to state

  handleChange = event => {
    const data = { ...this.state.data, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSelectCategories = selected => {
    const selectedCategories = selected ? selected.map(category => category.value) : []
    const data = { ...this.state.data, categories: selectedCategories }    
    this.setState({ data })
  }



  handleLatLng = selected => {
    const selectedCategories = selected ? selected.map(category => parseFloat(category.value)) : []
    const data = { ...this.state.data, cityLatLng: selectedCategories }    
    this.setState({ data })
  }

  handleSubmit = async event => {
    event.preventDefault()
    console.log(this.state.data)
    // console.log(this.match.params.id)

    try {
      const res = await createCity(this.state.data)
      console.log(res)
      this.props.history.push(`/cities/${res.data._id}`)
    } catch (err) {
      console.log('error', err)
      this.setState({ errors: err.response.data.errors })
    }
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <CityForm 
              handleChange={this.handleChange}
              handleSelectCategories={this.handleSelectCategories}
              handleLlatLng={this.handleLatLng}
              handleSubmit={this.handleSubmit}
              data={this.state.data}
              options={this.options}
            />
          </div>
        </div>
      </section>
    )
  }

}

export default CreateCity