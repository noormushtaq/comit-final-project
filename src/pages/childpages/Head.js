import React from 'react';
import Headbutton from './Headbutton'
import Hideme from './Hideme';




class Head extends React.Component {
    constructor () {
      super()
      this.state = {
        isHidden: true,
        myclick:true,
      }
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden,
        myclick:true
      })
    }
    
    togglemyHidden () {
        this.setState({
          myclick: !this.state.myclick,
          isHidden: true

        })
      }
     
    render () {
      return (
          <div>
            
              <main>

                <div className="container-title">

                 <h1 className="page-title"> Head and Neck</h1>
                 <h3 className="body-choose-q">Please, choose one</h3>

                <div className="my-container">
                  <div>
                    
                 <button className="headache-button" 
                        onClick={this.toggleHidden.bind(this)} >
                        Headache in children &nbsp; &#x25ba;
                        
                 </button>
                 <button className="HeadInjuryInChildren"
                        onClick={this.togglemyHidden.bind(this)} >
                        Head injury in children &#x25ba;
                 </button>

                 </div>
                 <div>
                 {!this.state.isHidden && 
                 <div className="container"  >
                 <Headbutton />
                 </div>}
                 
                 {!this.state.myclick && 
                 <div className="container">
                 <Hideme />
                 </div>}
                 </div>
               </div>


                </div> 

             </main>
           
        </div>
      )
    }
  }
  
  const Child = () => (
    <div className='modal'>
          Hello, World!
      </div>
  )
  
  export default Head;