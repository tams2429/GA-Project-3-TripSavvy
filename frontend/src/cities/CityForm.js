import React from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import ImageUpload from '../lib/ImageUpload'

const CityForm = ({ handleChange, handleSelectCategories, handleLatLng, handleSubmit, handleImageChange, data, options }) => {
  return (
    <form className="column">
      <div className="field">
        <label className="label">City Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="City"
            name="name"
            value={data.name}
            onChange={handleChange}
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
            value={data.country}
            onChange={handleChange}
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
            value={data.description}
            onChange={handleChange}
          />
          <span></span>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <ImageUpload
            labelText="City Image"
            onChange={handleImageChange}
          />
        </div>
      </div>


      <div className="field">
        <label className="label">Enter Latitude then Longitude</label>
        <CreatableSelect
          isMulti
          onChange={handleLatLng}
        />
      </div>

      <div className="field">
        <label className="label">City Characteristics</label>
        <div className="control">
          <Select
            options={options}
            isMulti    
            onChange={handleSelectCategories}               
          />
        </div>
      </div>
      <div className="field">
        <button type="submit" 
          className="button is-fullwidth is-danger"
          onClick={handleSubmit}
        >Submit</button>
      </div>
    </form>
  )
}

export default CityForm