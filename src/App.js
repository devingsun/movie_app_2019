import React from "react";

function Food({name, pic}) {  
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={pic} alt={name}/>
    </div>    
  );
}

const foodIlLike = [
  {
    name: "Kimchi",
    image: "https://static8.depositphotos.com/1354142/970/i/600/depositphotos_9707854-stock-photo-kimchi-korean-food.jpg"
  },
  {
    name: "Gimbap",
    image: "https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/vegetable-kimbap_93f13ec832638b9491bbf59a39d51d4e.jpg"
  },
  {
    name: "Apple",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDXMU7WFDfGokf37S9lb_Eyb8EoxVDvKhzg&usqp=CAU"
  }
];

function App() {
  return (
    <div className="App">      
      {foodIlLike.map(item => (
        <Food name={item.name} pic={item.image} />
      ))}
    </div>
  ); 
}

export default App;
