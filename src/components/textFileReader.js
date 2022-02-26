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
      <>
        {this.state.text.split("\n").map((item, key) => {
          if (item.startsWith('http'))
          return (              
            <a href={item}>Link</a>
            )
          if (item.startsWith('&'))
          return (              
            <div className="textStyleCode">                
            {item.substr(1)} 
            </div>
            )
          if (item.startsWith('##'))
            return (              
              <div className="textStyleHeader2">                
              {item.substr(2)} 
              </div>
              )
          if (item.startsWith('#'))
            return (               
              <div className="titleStyle">             
              {item.substr(1)} 
              </div>
              )
          else              
              return(                 
                <div className="textStyle">                
                {item} 
                </div>
              )
        })}
      </>

    
    )
  }

}

export default TextFileReader;
