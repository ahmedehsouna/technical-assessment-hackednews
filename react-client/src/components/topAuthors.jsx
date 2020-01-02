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
      var sorted = JSON.parse(JSON.stringify(this.state.data))
      for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if(sorted[i].by.karma < sorted[j].by.karma)
            [sorted[i] , sorted[j]] =[sorted[j] , sorted[i]]
        }          
      }

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
      {sorted.map(one => {
        return  (<tr>
        <td>{one.by.id}</td>
        <td>{one.by.karma}</td>
        <td>{one.by.about}</td>
      </tr>)})}
    </tbody>
  </table>
</div>
)
  }
}

export default TopAuthors;