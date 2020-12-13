import React from 'react'

export default class Gif extends React.Component {

    render(){
        // console.log(this.props.image)
        return (
            <div>
                <li>
                <img src={this.props.image.images.downsized_medium.url}/>
                </li>
            </div>
        )
    }
}