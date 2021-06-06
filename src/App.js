import PropTypes from 'prop-types';

function Food({name, pic, rating}) {  
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={pic} alt={name} />
    </div>
  );
} 

Food.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  rating:PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://media.istockphoto.com/photos/kimchi-picture-id172471553?b=1&k=6&m=172471553&s=170667a&w=0&h=GPB1K4xvafnDAZmwRr8UwbkPsqaYcVndTdKAObl1z_A=",
    rating: 5
  },
  {
    id: 2,
    name: "Gimbap",
    image:
      "https://images.unsplash.com/photo-1608731001176-18531c721242?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2ltYmFwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.9
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map((item) => (
        <Food
          key={item.id}
          name={item.name}
          pic={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  ); 
}

export default App;
