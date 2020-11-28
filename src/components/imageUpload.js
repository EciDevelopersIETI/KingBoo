import React, { Component } from 'react';
import { storage } from '../api/firebase';


class ImageUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({ image });
        }
    }

    handleUpload(e) {
        e.preventDefault();
        const { image } = this.state;
        const uploadTask = storage.ref('images/'.concat(image.name)).put(image);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({ progress });
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(
                    url => {
                        console.log(url);
                        localStorage.setItem("urlimgprofile", url);
                    }

                )
            }

        )
    }

    render() {
        return (
            <div>
                <progress value={this.state.progress} max="100" />
                <br />
                <input type="file" onChange={this.handleChange} />
                <button onClick={this.handleUpload} >Upload</button>
                <br />
                <img src={this.state.url || 'https://via.placeholder.com/150'} alt="Uploaded images" />
            </div>
        )

    }
}

export default ImageUpload;