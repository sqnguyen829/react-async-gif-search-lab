import React from 'react'

export default class GifSearch extends React.Component {

    render(){
        return (
            <div>
                <h5>Enter a Search Term:</h5>
                <form onSubmit={(e)=> this.props.setSearch(e)}>
                    <input style={{width:"90%"}} className='input-submit' placeholder="Search..."/>
                    <br></br>
                    <button className='button-submit' type='submit'>Find Gif</button>
                </form>
            </div>
        )
    }
}