import React, { Component } from 'react';
import { storage } from '../api/firebase';


class ImageUpload extends Component {

    constructor(props){
        super(props);
        this.state = { 
            image: null,
            url: ''
        }

        this.handleChange  = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange(e){
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState({image});
        }
    }

    handleUpload(e){
        const {image} = this.state;
        const uploadTask = storage.ref('images/'.concat(image.name)).put(image);

        uploadTask.on( 'state_changed',
        (snapshot) =>{

        },
        (error)=>{
            console.log(error);
        },
        ()=>{
            storage.ref('images').child(image.name).getDownloadURL().then(
                url => {
                    console.log(url);
                }

            )
        }
        
        )
    }

    render(){
        return(
            <div>
                <input type = "file" onChange = {this.handleChange}/>
                <button onClick = {this.handleUpload} >Upload</button>
            </div>
            
            ) 
    
    }
}

export default ImageUpload;