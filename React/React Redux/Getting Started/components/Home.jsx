function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div style={{ display: "flex", flexDirection: "column", width: "300px", textAlign: "center"}}>
        <img src="../assets/phone.jpg" style={{ width: "100%"}} />
        <h2>price: $999</h2>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Home;