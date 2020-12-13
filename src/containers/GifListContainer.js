import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            images:[]
        }
    }

    firstFetch = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=animals&api_key=R3puW40kE2eTKIZDC5qJhH1VmApSiT1t&rating=g')
        .then(res => res.json())
        .then(data => {
            this.setState({
                images: data.data
            })
        })
    }

    componentDidMount() {
        this.firstFetch()
    }

    setSearch = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log('searching...')
        if(e.target[0].value === ''){
            this.firstFetch()
        } else{
            fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target[0].value}&api_key=R3puW40kE2eTKIZDC5qJhH1VmApSiT1t&rating=g`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    images: data.data
                })
            })
        }
    }

    render(){
        // console.log(this.state.images)
        return (
            <div className="row">
               <div className="column-right">
                    <GifSearch setSearch={this.setSearch}/>
               </div>
               <div className="column-left">
                    <GifList images= {this.state.images}/>
               </div>
            </div>
        )
    }
}