function Home(props) {
  console.log("home", props)
  return (
    <div>
      <h1>Home</h1>
      <div style={{ display: "flex", flexDirection: "column", width: "300px", textAlign: "center"}}>
        <img src="../assets/phone.jpg" style={{ width: "100%"}} />
        <h2>price: $999</h2>
        <button onClick={() => props.addToCartHandler({price: 1000, name: "iphone 11"})}>Add to cart</button>
        <button onClick={() => props.removeToCardHandler()}>Remove to cart</button>
      </div>
    </div>
  )
}

export default Home;