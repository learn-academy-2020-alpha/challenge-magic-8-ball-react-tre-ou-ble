import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["Yae", "Nae", "Maebe", "Haply sir", "Hell ne'r", "Why not?", "Bid me l8er"],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // write your code here!
    let num = Math.floor((Math.random()*this.state.answerArray.length))
    // Update the return statement below to reflect the outcome of your code.
    return this.state.answerArray[num]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
      <audio controls="controls" autoplay>
  <source src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Cello_Live_Performance_John_Michel_Tchaikovsky_Violin_Concerto_3rd_MVT_applaused_cut.ogg" type="audio/mp3" />
  Your browser does not support the audio element.
</audio>
        <br />
        <h1>Magic 8 Ballllin' WOW</h1>
        <br />
        <br />
        <input
          id="inputBox"
          type='text'
          placeholder="Type here!"
          onChange={ this.handleChange }
        />
        <br />
        <br />
        <br />
        <button className="myButton" onClick={ this.handleSubmit }>
          Click here and hover over the ball!
        </button>

        <div className="shadow"></div>
        <div className="epos">
        <div className="eball">
          <div className="egrad"></div>
          <div className="ewin"></div>
          <div className="triangle"></div>
          <div className="textbox" >{ this.state.answer }
        </div>
        </div>
        </div>
      </div>

    )
  }
}

export default App;
