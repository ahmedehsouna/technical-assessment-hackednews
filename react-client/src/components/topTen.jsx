import React from 'react';
function getStories(callback){
fetch('/api/story').then(res =>{
  res.json().then(data => {
    callback(data)
  })
})
}
// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component{
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
  <h1> Top Ten Stories </h1>
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
        return  (<tr>
        <td>{one.title}</td>
        <td>{one.by}</td>
        <td>{one.score}</td>
      </tr>)})}
    </tbody>
  </table>
</div>
)
  }
}

export default TopTen;