import React from 'react'


class cityCard extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor box">
            <div className="tile is-6 is-parent">
              <div className="tile is-child cityCardBox">
                <p className="title">Vienna</p>
                <img src="https://archaeology-travel.com/wp-content/uploads/2019/01/karlskirche-vienna-sunset.jpg"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
                Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child mapBox">
                <p className="title">Map</p>
                <img src="https://i.imgur.com/aDDI44I.png"></img>
              </div>
              <div className="tile is-child commentBox">
                <p className="title">Comment and Review</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default cityCard