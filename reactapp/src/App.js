import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import "./card.css";

import ValidationInReact from "./ValidationInReact";

import Booking from "./Booking";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Glow Spark Homepage</h1>
        </section>
        <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>Facials</Item>
          <Item>Make up</Item>
          <Item>Hair Styling</Item>
          <Item>Nails</Item>
          <Item>Pedicure</Item>
          <Item>Manicure</Item>
          <Item>Massage</Item>
          <Item>Bridal Make Up</Item>
          <Item><a href="/Book">Book Now</a></Item>
        </Carousel>
        
      </div>

      <div class="card">


<div class="title">
 <h1>PARLOUR-1</h1>
</div>
<div class="des">
 <p>ABC SPA Whole beautycare solution.</p>
<a href="Book" target="_blank"><button>-VIEW-</button></a>
</div>
</div>
      
<div class="card">


<div class="title">
 <h1>PARLOUR-2</h1>
</div>
<div class="des">
 <p>CBA SPA Whole beautycare solution.</p>
<a href="Book" target="_blank"><button>-VIEW-</button></a>
</div>
</div>
<div class="card">


<div class="title">
 <h1>PARLOUR-3</h1>
</div>
<div class="des">
 <p>GLOWING Whole beautycare solution.</p>
<a href="Book" target="_blank"><button>-VIEW-</button></a>
</div>
</div>
<div class="card">


<div class="title">
 <h1>PARLOUR-4</h1>
</div>
<div class="des">
 <p>ABC SPA Whole beautycare solution.</p>
<a href="Book" target="_blank"><button>-VIEW-</button></a>
</div>
</div>
<div class="card">


<div class="title">
 <h1>PARLOUR-5</h1>
</div>
<div class="des">
 <p>ABC SPA Whole beautycare solution.</p>
<a href="Book" target="_blank"><button>-VIEW-</button></a>
</div>
</div>
<div class="card">


<div class="title">
 <h1>PARLOUR-6</h1>
</div>
<div class="des">
 <p>ABC SPA Whole beautycare solution.</p>
<a href="Book" target="_blank"><button>-VIEW-</button></a>
</div>
</div>
<div class="card">


<div class="title">
 <h1>PARLOUR-7</h1>
</div>
<div class="des">
 <p>ABC SPA Whole beautycare solution.</p>
<a href="Book" target="_blank"><button>-VIEW-</button></a>
</div>
</div>

<div class="card">


<div class="title">
 <h1>PARLOUR-8</h1>
</div>
<div class="des">
 <p>XYZ SPA Whole beautycare solution.</p>
<a href="Book" target="_blank"><button>-VIEW-</button></a>
</div>
</div>
    </>
  );
};

const Book = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Book your Appointment With</p>
        <h1>Glow Spark</h1>

    <div className="Booking">
      <ValidationInReact />
    </div>

      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Glow Spark Service Page</h1>
       
      </section>
      <section className="hero-section">
      <p>We offer a complete range of beauty services to fit your needs. From hair styling, to facial skin care
          , to body massage, manicures, pedicures and more, we are your all-in-one resource for a beautiful new you 
          come and experience it today!</p>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Glow Spark Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Book">
        <Book />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;