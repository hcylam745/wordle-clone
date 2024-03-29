import React, { Component } from "react";
import {connect} from "react-redux";

class Key extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.clickKey = this.clickKey.bind(this);
  }

  componentDidUpdate() {
    const {badWords, yellowWords, greenWords, id} = this.props;
    if (greenWords.includes(id)) {
      this.myRef.current.style.backgroundColor = "green";
    } else if (yellowWords.includes(id)) {
      this.myRef.current.style.backgroundColor = "orange";
    } else if (badWords.includes(id)) {
      this.myRef.current.style.backgroundColor = "black";
    }
  }

  clickKey() {
    const {id} = this.props;
    this.props.dispatch({type:20,newletter:id});
  }

  render(){
    const {id} = this.props;

    return (
      <div className="key" id={id} ref={this.myRef} onClick={this.clickKey}>
          {id}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    badWords:state.badWords,
    yellowWords:state.yellowWords,
    greenWords:state.greenWords,
    word0:state.word0,
    word1:state.word1,
    word2:state.word2,
    word3:state.word3,
    word4:state.word4
  }
}

export default connect(mapStateToProps)(Key);
