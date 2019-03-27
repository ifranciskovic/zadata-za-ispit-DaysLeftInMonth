import React, { Component } from "react";
import './Days.css';
class Days extends Component {
  state = {
    daysLeft: "",
    show: false
  };


  componentDidMount(){
	let now = new Date(); // trenutno tačno vreme
   let lastDayInCurrentMonth = new Date(now.getTime());// trenutno tačno vreme
   lastDayInCurrentMonth.setMonth(now.getMonth() + 1);// pomerimo se za jedan mesec
   lastDayInCurrentMonth.setDate(0); // zadnji dan u tekućem mesecu - INAČE VRAĆA DATUM NA ZADNJI DAN PRETHODNOG MESECA
   let remainingDays =lastDayInCurrentMonth.getDate() > now.getDate() ? lastDayInCurrentMonth.getDate() - now.getDate() : 0;
   this.setState({ daysLeft: remainingDays });
  };

  toggle= () => {
    let res = this.state.show;
    this.setState({ show: !res });
  };
  


  render() {

	const daysLeft = {
  fontSize: '35px',
  textAlign: 'center',
	borderStyle: 'solid',
	borderWidh: '1px',
	borderColor: 'red',
	color: 'red',
	margin: '20px'
	};

    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggle}>
          Preostalo dana u mesecu
        </button>
        {
                 this.state.show ? (
                 <div style={daysLeft}> 
                     <p>U mesecu je preostalo {this.state.daysLeft} dana </p>
                </div>) : null
        }
      </div>
    );
  }
}

export default Days; 