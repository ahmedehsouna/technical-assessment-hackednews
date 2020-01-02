import React from 'react';
function getStories(id, callback) {
    fetch(`/api/authors/${id}/stories`).then(res => {
        res.json().then(data => {
            callback(data)
        })
    })
}
// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }


    lookUp() {
        var keyword = document.getElementsByTagName("input")[0].value
        getStories(keyword, data => {
            console.log(data)
            this.setState({ data })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" />
                    <button onClick={this.lookUp.bind(this)}>Submit</button>

                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(one => {
                                return (<tr key={one._id}>
                                    <td>{one.title}</td>
                                    <td>{one.by}</td>
                                    <td>{one.score}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Search;