import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  //contextType is a special property name in React
  static contextType = LanguageContext;

  render(){
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return(
      <button className="ui button primary">{text}</button>
    )
  }
}

//alternative to set up contextType in class declaration :
//Button.contextType = LanguageContext;

export default Button;
