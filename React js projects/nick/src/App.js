import Header from "./componentes";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import Conteiner from "./componentes/Conteiner";
import Card from "./componentes/Card";



function App() {
  return (
  <div>
    <Header />
    <Banner image="home" />
    <Conteiner>
   
    <h1>Countries and Your Beautys</h1>
   <section className="cards">
    <Card id="K0uAIFbuPm8"/>
    <Card id="To9HRowJd7Y"/>
    <Card id="wi08uYZBhRs"/>
    <Card id="Pbzn79TSRO0"/>
    <Card id="OmcdZeDJmBE"/>
    <Card id="Ury6uN4ShfM"/>
   </section>
   </Conteiner>
   <Footer />
   </div>
  );
}

export default App;