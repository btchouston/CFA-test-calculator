import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import axios from 'axios';


const apiEndpoint = 'http://localhost:5000/calculate';


class App extends Component {

  state = {
    expression:'',
    result:[],
    error:''
  };
  
  handleSubmit = async(event) => {
      event.preventDefault();
      const obj = {expression:`${this.state.expression}`, user_id:'1'};
      const res = await axios.post(apiEndpoint, obj);
      //console.log(res.data);
      this.setState({expression:''});
      this.handleResponse(res.data);
      this.setState({error:''});
  }

  handleResponse = (resData) => {
      console.log(resData);
      if(resData.result !== undefined)
          this.setState({result:resData.result.map(res => <li style={{lineHeight:'30px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{res}</li>)});
      else if(resData.error !== undefined)
          alert(resData.error);
          //this.setState({error:resData.error});
  };

  render() {
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Calculator</h2>
          </div>

          <p className="App-intro">
          </p>

          <div>
              <span className="error">{this.state.error}</span>
              <form onSubmit={this.handleSubmit}>
                  <span className="formtext">Calculator</span>
                  <input type="text"
                      value={this.state.expression} 
                      onChange={event => this.setState({expression:event.target.value})}
                      pattern={['^-?[0-9]*(([-+/*][0-9]+)?([.,][0-9]+)?)*?$']}
                      title="Please enter a valid mathematical expression"                                
                      placeholder="|" autoFocus required
                  /> 

                  &nbsp; &nbsp; &nbsp;
                  <button>Submit</button>
              </form>

              <h2 className="history-header">History</h2>

              <div className="history">
                  <ol>
                      {this.state.result}
                  </ol>
              </div>

          </div>

          <div style={{backgroundColor:'brown'}}>
            &copy; 2019 Boston TCHOUKOUA
          </div>
      </div>

    );
  }
}

export default App;
