function Food({name, pic}) {  
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={pic} alt={name} />
    </div>
  );
} 

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://media.istockphoto.com/photos/kimchi-picture-id172471553?b=1&k=6&m=172471553&s=170667a&w=0&h=GPB1K4xvafnDAZmwRr8UwbkPsqaYcVndTdKAObl1z_A=",
  },
  {
    id: 2,
    name: "Gimbap",
    image:
      "https://images.unsplash.com/photo-1608731001176-18531c721242?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2ltYmFwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function App() {
  return (
    <div className="App">      
      {foodILike.map(item => (
        <Food key={item.id}  pic={item.image} />
      ))}
    </div>
  ); 
}

export default App;
