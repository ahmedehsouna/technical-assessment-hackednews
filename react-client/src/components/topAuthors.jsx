import React from 'react';
function getStories(callback){
fetch('/api/authors').then(res =>{
  res.json().then(data => {
    callback(data)
  })
})
}
// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopAuthors extends React.Component{
  constructor(){
    super()
    this.state = {
      data : []
    }
  }
  componentDidMount(){
    getStories(data => {
      this.setState({data})
    })
  }

  render(){
    return (
    
    <div>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Karma</th>
        <th>About</th>
      </tr>
    </thead>
    <tbody>
      {this.state.data.map(one => {
        return  (<tr key={one._id}>
        <td>{one.id}</td>
        <td>{one.karma}</td>
        <td>{one.about}</td>
      </tr>)})}
    </tbody>
  </table>
</div>
)
  }
}

export default TopAuthors;