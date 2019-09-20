import React from 'react';
import './App.css';
import { SSL_OP_NO_TICKET } from 'constants';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.myClick = this.myClick.bind(this);
        this.count =0;
    }

    myClick(){
        if(this.count == 0){
        document.getElementsByClassName("wrapper")[0].style.backgroundColor="#f9f5a6ff";
        this.count=1;
    } else if (this.count == 1) {
        document.getElementsByClassName("wrapper")[0].style.backgroundColor="green";
        this.count=2;
    } else if (this.count == 2) {
            document.getElementsByClassName("wrapper")[0].style.backgroundColor="white";
        this.count=0;
        }
    }

    render(){
        return(
            <button onClick={this.myClick} className="clicker">Change design!</button>
        )
    }
}
export default Button;