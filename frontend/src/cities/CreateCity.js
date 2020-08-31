import React from 'react'
import { createCity } from '../lib/api'
import { popupSuccess, popupError } from '../lib/notification'
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

  options = [
    { value: 'beach', label: 'Beaches' },
    { value: 'night', label: 'Good Nightlife' },
    { value: 'culture', label: 'Cultural' },
    { value: 'snow', label: 'Snow' },
    { value: 'food', label: 'Food Scene' },
    { value: 'nature', label: 'Access to Nature' }
  ]

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

  handleImageChange = url => {
    const data = { ...this.state.data, cityImg: url }
    this.setState({ data })
  }

  handleLatLng = selected => {
    const selectedCategories = selected ? selected.map(category => parseFloat(category.value)) : []
    const data = { ...this.state.data, cityLatLng: selectedCategories }    
    this.setState({ data })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await createCity(this.state.data)
      this.props.history.push(`/cities/${res.data._id}`)
      popupSuccess('Create Successful')
    } catch (err) {
      popupError('Looks like you are missing something...')
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
              handleLatLng={this.handleLatLng}
              handleSubmit={this.handleSubmit}
              data={this.state.data}
              options={this.options}
              handleImageChange={this.handleImageChange}
              errors={this.state.errors}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default CreateCity