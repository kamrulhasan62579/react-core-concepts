import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products =[
      {name:'Photoshop', price: '$90.99'},
      {name:'Illastrator', price: '$50.99'},
      {name:'Python', price: '$290.99'},
      {name:'JavaScript', price: '$290.99'},
      {name:'Boker', price: '$290.99'},
      {name:'MongoDB', price: '$290.99'},
      {name:'MongoDB', price: '$290.99'},
      {name:'MongoDB', price: '$290.99'},
      {name:'MongoDB', price: '$290.99'},
      {name:'C#', price: '$190.99'}
    ]
    const friends = [
      {name: 'Rakib', district: 'Tangail'},
      {name: 'Rokon', district: 'Tangail'},
      {name: 'Rokon', district: 'Tangail'},
      {name: 'Rokon', district: 'Tangail'},
      {name: 'Rokon', district: 'Tangail'},
      {name: 'Rokon', district: 'Tangail'},
      {name: 'Rokon', district: 'Tangail'},
      {name: 'Robiul', district: 'Tangail'},
      {name: 'Rahat', district: 'Tangail'},
      {name: 'Rahat', district: 'Tangail'},
      {name: 'Rahat', district: 'Tangail'},
      {name: 'Rahat', district: 'Tangail'},
      {name: 'Rahat', district: 'Tangail'},
      {name: 'Rahat', district: 'Tangail'},
      {name: 'Ronju', district: 'Tangail'},
      {name: 'Rasu', district: 'Tangail'},
      {name: 'Rasu', district: 'Tangail'},
      {name: 'Rasu', district: 'Tangail'},
      {name: 'Rasu', district: 'Tangail'},
      {name: 'Rasu', district: 'Tangail'},
      {name: 'Rasu', district: 'Tangail'},
      {name: 'Rasu', district: 'Tangail'}
    ]

  return (
    <div className="App">
      <header className="App-header">
      <ul>
          <h3>List of Products</h3>
          {
            products.map(product => <li>{product.name}</li> )
          }
      </ul>
      <ul>
            <h3>List of Friends</h3>
          {
              friends.map(frnd => <li>{frnd.name}</li> )
          }
      </ul>
      <Users></Users>
      <Counter></Counter>
      <h1>Useful Products</h1>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
     <h1>Most Important Friends</h1>
      {
        friends.map(frnd => <Friend friend={frnd}></Friend>)
      }   
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]) 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data =>setUsers(data))
  })
  return (
    <div>
      <h1>Dynamic Users :{users.length}</h1>
      <ul> 
        {
          users.map(user => <li>{user.phone}</li> )
        }
      </ul>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={ () => setCount(count +1)}>Increase</button>
      <button onMouseMove={ () => setCount(count -1)}>Decrease</button>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border : '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '280px',
    width: '280px',
    margin: '10px',
    color: 'red'
  }
  const {name, price} = props.product;
  return(
 
    <div style={productStyle}>
      
        <h2 style={{color: 'hotpink'}}>{name}</h2>
        <h1>{price}</h1>
        <button style={{padding: '7px 20px',backgroundColor: 'yellow', border:'none'}}>Buy Now</button>
    </div>
  )
}

function Friend(props) {
  const friendStyle={
    color: "red",
    backgroundColor: 'yellow',
    height: '230px',
    width: '350px', 
    borderRadius: '10px',
    margin: '20px'
  }
  const {name, district} = props.friend;
  return(
    <div style={friendStyle}>
      <h1>{name}</h1>
      <h2>{district}</h2>
    </div>
  )
}
export default App;
