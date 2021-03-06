import React, {Component} from 'react';
import {Header, Icon, List} from "semantic-ui-react";
import axios from "axios";


 class App extends Component {
   
  state = {
    values: []
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/values")
     .then((resp)=>{
       console.log(resp);
       
      this.setState({
        values:resp.data
      })
     })
    
  }
   render(){
    return (
      <div >
      <Header as='h2'>
        <Icon name='braille' />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>
      <List>
        {this.state.values.map((value: any)=>(
              <List.Item key={value.id}>{value.name}</List.Item>
        ))}
        
      </List> 
      </div>
    );
   }
  
}

export default App;
