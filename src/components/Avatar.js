import React, { Component } from 'react';

const MAX_HEIGHT = 128;

class Avatar extends Component {
  state = {
    value: ''
  }

  componentDidMount() {
    this.canvas = document.createElement('canvas')
  }

  handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file && file.type.match(/^image\//)) {
      this.readFileAsDataURL(file).then(originalURL => {
        this.resizeImage(originalURL, this.canvas, MAX_HEIGHT).then(url => {
          this.setState({ value: url })
        })
      })
    } else {
      this.setState({ value: '' })
    }
  }

  resizeImage = (imageURL, canvas, MAX_HEIGHT) =>
    new Promise(resolve => {
      const image = new Image()

      image.onload = () => {
        const context = canvas.getContext('2d')

        if (image.height > MAX_HEIGHT) {
          image.width *= MAX_HEIGHT / image.height
          image.height = MAX_HEIGHT
        }

        context.clearRect(0, 0, canvas.width, canvas.height)
        canvas.width = image.width
        canvas.height = image.height

        context.drawImage(image, 0, 0, image.width, image.height)

        resolve(canvas.toDataURL('image/jpeg'))
      }

      image.src = imageURL
    })

  readFileAsDataURL = (file) =>
    new Promise(resolve => {
      const reader = new FileReader()

      reader.onload = (event) => {
        resolve(event.target.result)
      }

      reader.readAsDataURL(file)
    })

  render() {
    const { value } = this.state

    const style = {
      position: 'relative'
    }

    if (value) {
      style.backgroundImage = `url("${value}")`
      style.backgroundRepeat = 'no-repeat'
      style.backgroundPosition = 'center'
      style.backgroundSize = 'cover'
    }

    return (
      <div className="navbar-avatar-container">
        <div className="navbar-avatar" style={style}>
          <input type="hidden" value={value} />
          <input
            type="file"
            onChange={this.handleFileChange}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0
            }}
          />
        </div>
      </div>
    );
  }
}

export { Avatar };
