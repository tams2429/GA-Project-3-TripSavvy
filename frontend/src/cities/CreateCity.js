import React from 'react'
import Select from 'react-select'
import { createCity } from '../lib/api'

import CreatableSelect from 'react-select/creatable'



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

  handleSelectCatagories = selected => {
    const selectedCatagories = selected ? selected.map(catagory => catagory.value) : []
    const data = { ...this.state.data, categories: selectedCatagories }    
    this.setState({ data })
  }



  handleLatLng = selected => {
    const selectedCatagories = selected ? selected.map(catagory => parseFloat(catagory.value)) : []
    const data = { ...this.state.data, cityLatLng: selectedCatagories }    
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
            <form className="column">
              <div className="field">
                <label className="label">City Name</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="City"
                    name="name"
                    value={this.state.data.name}
                    onChange={this.handleChange}
                  />
                  <span></span>
                </div>
              </div>

              <div className="field">
                <label className="label">Country</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Country"
                    name="country"
                    value={this.state.data.country}
                    onChange={this.handleChange}
                  />
                  <span></span>
                </div>
              </div> 

              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    className="textarea"
                    name="description"
                    value={this.state.data.description}
                    onChange={this.handleChange}
                  />
                  <span></span>
                </div>
              </div>

              <div className="field">
                <label className="label">Enter Latitude then Longitude</label>
                <CreatableSelect
                  isMulti
                  onChange={this.handleLatLng}
                />
              </div>

              <div className="field">
                <label className="label">City Characteristics</label>
                <div className="control">
                  <Select
                    options={this.options}
                    isMulti    
                    onChange={this.handleSelectCatagories}               
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" 
                  className="button is-fullwidth is-warning"
                  onClick={this.handleSubmit}
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

}

export default CreateCity