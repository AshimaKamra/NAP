import React,{Component} from 'react';


class CreatedAt extends Component
{
  render(){
      return(
          <div>
              <input type="date" id="start" name="trip-start"
                                           defaultValue="2018-07-22"
                                        min="2018-01-01" max="2018-12-31"/>
          </div>
      )
  }
}

export default CreatedAt;