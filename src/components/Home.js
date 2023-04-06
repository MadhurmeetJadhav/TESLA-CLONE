import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless delievery."
        backgroundImg="model-s.jpg"
        leftbtnTet="Custom order"
        rightbtnTet="Eisting order"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delievery."
        backgroundImg="model-y.jpg"
        leftbtnTet="Custom order"
        rightbtnTet="Eisting order"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delievery."
        backgroundImg="model-3.jpg"
        leftbtnTet="Custom order"
        rightbtnTet="Eisting order"
      />

      <Section
        title="Model Z"
        description="Order online for touchless delievery."
        backgroundImg="model-z.jpg"
        leftbtnTet="Custom order"
        rightbtnTet="Eisting order"
      />
      <Section
        title="Lowest Cost Solar Panel"
        description="Money-Back Guarentee"
        backgroundImg="solar-panel.jpg"
        leftbtnTet="Order Now"
        rightbtnTet="Learn More"
      />
      <Section
        title="Solar for new roofs"
        description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftbtnTet="Order Now"
        rightbtnTet="Learn More"
      />
           <Section
        title="Accesories"
        description=""
        backgroundImg="accesories.jpg"
        leftbtnTet="Shop Now"
        
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
