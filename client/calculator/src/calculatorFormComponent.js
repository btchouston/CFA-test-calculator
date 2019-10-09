import React, { Component } from 'react';

class calculatorFormComponent extends Component{
        render(){
                return(
                        <form><>
                                <span className="formtext">&#x3C;Form /&#x3E;</span>
                                <input type="text" placeholder="|" required />
                                <button>Submit</button>
                        </form>
                );
        }
}
