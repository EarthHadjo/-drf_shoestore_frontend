import React from 'react';
// import './App.css';
const url = 'http://127.0.0.1:8000/api/shoe/';



class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      earthshoes: [{shoe: 'sneaker'}, {shoe: "sandal"}, {shoe: 'boot'}, {shoe: "dress"}, {shoe: "other"}]
    };
  }
  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({earthshoes: data});
      console.log(data);
    });
  }

  render() {
    // const { earthshoes = [] } = this.state;
    return (
      <div>
        <h3>Earth1ne Shoe World!</h3>
        {this.state.earthshoes.map((shoe) => {
          return(

            <ul>
           <li>
             Size: {shoe.size}
           </li>
           <li>
             Brand: {shoe.brand_name}
           </li>
           <li>
             Manufacturer: {shoe.manufacturer} 
            </li>
            <li>
             Color: {shoe.color}
          </li>
          <li>
            Material: {shoe.material}
          </li>
          <li>
            Shoe Type: {shoe.shoe_type}
          </li>
          <li>
            Fasten Type: {shoe.fasten_type}
          </li>
         </ul> 
        )
        })}
        </div>
        );
      } 
}

export default App;
