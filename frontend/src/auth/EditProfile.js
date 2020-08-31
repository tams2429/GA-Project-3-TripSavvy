import React from 'react'
import { editProfile, getProfile } from '../lib/api'
import { popupSuccess } from '../lib/notification'
import ImageUpload from '../lib/ImageUpload'

class EditProfile extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      profilePicture: '',
      about: ''
    },
    errors: {},
    isPasswordShown: false
  }

  async componentDidMount() {
    try {
      const res = await getProfile()
      this.setState({ formData: res.data }, () => {
        console.log(this.state.formData)
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await editProfile( this.state.formData)
      popupSuccess(res.data.message)
      this.props.history.push('/profile')
    } catch (err) {
      console.log(err)
    }
  }

  handleImageChange = url => {
    const formData = { ...this.state.formData, profilePicture: url }
    this.setState({ formData })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.username ? 'is-danger' : '' }`}
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.formData.username}
                  />
                </div>
                {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.formData.email}
                  />
                </div>
                {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
              </div>

              <div className="field">
                <label className="label">Profile Picture</label>
                <div className="control">
                  <ImageUpload
                    labelText="Profile Picture"
                    onChange={this.handleImageChange}
                  />
                  <span></span>
                </div>
              </div>

              <div className="field">
                <label className="label">Bio</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="about"
                    maxLength="400"
                    value={this.state.formData.about}
                    onChange={this.handleChange}
                  />
                  <span></span>
                </div>
              </div>

              <div className="field">
                <button
                  type="submit"
                  className="button is-fullwidth"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default EditProfile
