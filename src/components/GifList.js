import React from 'react'
import Gif from './Gif'

export default class GifList extends React.Component {

    render(){
        return (
            <div>
                {this.props.images.map(image => <Gif image={image} key={image.id}/>)}
            </div>
        )
    }
}