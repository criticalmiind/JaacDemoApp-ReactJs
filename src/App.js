import React from 'react'
// import MainPage from './Components/MainPage.js'
// import SlideDrawer from './SlideDrawer/SlideDrawer.js'
// import Backdrop from './SlideDrawer/Backdrop.js'
import Home from './Views/index.js'

class App extends React.Component {
  //  state = { drawerOpen: false }

  //  drawerToggleClickHandler = () => {
  //      this.setState({
  //        drawerOpen: !this.state.drawerOpen
  //      })
  //  }

   render(){
      // let backdrop;
      // if(this.state.drawerOpen){
      //   backdrop = <Backdrop/>;
      //  }
      return(<>

             {/* < SlideDrawer show={this.state.drawerOpen}/>
             { backdrop }
             < MainPage toggle={this.drawerToggleClickHandler}/> */}
             <Home />

      </>)  
    }
  }

export default App;