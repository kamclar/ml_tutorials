import React from "react";

class TextFileReader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    this.readTextFile(this.props.txt);
  }

  readTextFile = (file) => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          var allText = rawFile.responseText;
          this.setState({
            text: allText
          });
        }
      }
    };
    rawFile.send(null);
  };

  render() {
    return (
      < >
        {this.state.text.split("\n").map((item, key) => {
          if (key < 10) key = ' '+key;
          
          if (key % 2 === 0) 
            return (   
            <>        
            <div className="terminal">                
              {key} {''} {item}<br />
            </div>
            </>     
          )
          else
          return (   
            < >      
            <div className="terminal-odd">                
              {key}{''} {item}<br />
            </div>
            </>
          )
        })}
    </>
    
    )
  }

}

export default TextFileReader;
