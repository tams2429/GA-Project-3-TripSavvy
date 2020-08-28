import React from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import ImageUpload from '../lib/ImageUpload'

const CityForm = ({ handleChange, handleSelectCategories, handleLatLng, handleSubmit, handleImageChange, data, options, errors }) => {
  return (
    <form className="column">
      <div className="field">
        <label className="label">City Name</label>
        <div className="control">
          <input
            className={`input ${errors.name ? 'is-danger shake' : '' }`}
            placeholder="City"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          {errors.name && <small className="help is-danger shake">{errors.name}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Country</label>
        <div className="control">
          <input
            className={`input ${errors.country ? 'is-danger shake' : '' }`}
            placeholder="Country"
            name="country"
            value={data.country}
            onChange={handleChange}
          />
          {errors.country && <small className="help is-danger shake">{errors.country}</small>}
        </div>
      </div> 

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className={`textarea ${errors.description ? 'is-danger shake' : '' }`}
            name="description"
            maxLength="400"
            value={data.description}
            onChange={handleChange}
          />
          {errors.description && <small className="help is-danger shake">{errors.description}</small>}
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">City Picture</label>
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
            placeholder="Please select at least one from the list..."             
          />
        </div>
      </div>
      
      <div className="field">
        <button
          disabled={data.cityLatLng.length < 2 || data.categories.length === 0} 
          type="submit" 
          className="button is-fullwidth is-warning"
          onClick={handleSubmit}
        >Submit</button>
      </div>
    </form>
  )
}

export default CityForm