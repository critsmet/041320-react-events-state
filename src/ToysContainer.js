import React from 'react'

import ToyCard from './ToyCard'


export default class ToysContainer extends React.Component {

  state = {
    toys: [
      {name: "Woody", src: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png", likes: 5},
      {name: "Buzz Lightyear", src: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png", likes: 8},
      {name: "Mr. Potato Head", src: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217", likes: 3}
    ]
  }

  //we're going to change state for the ToysContainer component. HOWEVER the button lives in the ToyCard component
  //I need to define the callback function that is going to change state here in the ToysContainer
  //BUT I need to pass that function as a prop to the child so that a button click in the ToyCard will cause a stateChange in the parent

  addLike(e){
    let toyName = e.target.dataset.toy
    this.setState(prevState => ({toys: prevState.toys.map(toyObj => toyObj.name === toyName ? {...toyObj, likes: toyObj.likes + 1} : toyObj)}), () => console.log(this.state))
  }

  render(){
    return(
      <div id="toy-container">
        {this.state.toys.map(toyObj => <ToyCard key={toyObj.name} name={toyObj.name} img={toyObj.src} likes={toyObj.likes} addLike={this.addLike.bind(this)}/>)}
      </div>
    )
  }
}

//WHEN A PARENT COMPONENT RE-RENDERS, ALL OF ITS CHILDREN ARE EXPECTED TO RE-RENDER AS WELL
//* I think this is where PureComponents come in? I could be wrong, but to prevent them from re-rendering when there parents do? Even that seems impossible right...not sure
