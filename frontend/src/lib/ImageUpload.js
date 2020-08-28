import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

class ImageUpload extends React.Component {
  state = {
    image: null
  }

  handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    this.setState({
      image: res.data.url
    }, () => {
      this.props.onChange(this.state.image)
    })
  }

  render() {
    const { image } = this.state
    return (
      <>
        {image ?
          <div style={{ width: '300px'}}>
            <img src={image} alt="selected" style={{ width: '100%', height: 'auto' }}/>
          </div>
          :
          <>
            <label className="label is-small">(jpeg or png)</label>
            <input
              className="input"
              type="file"
              onChange={this.handleUpload}
              accept=".png, .jpeg"
            />
          </>
        }
      </>
    )
  }
}

export default ImageUpload
