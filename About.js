import react from "react";
import './About.css';
function About(){
    return(
        <div>
        <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<div class="row">
  <div class="column">
    <div class="card">
     
      <div class="container">
        <h2>Vishakha Hegde</h2>
        <p class="title">Co-founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>vishakhahegde@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Vibha H Murthy</h2>
        <p class="title">Co-founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>vibhahmurthy@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Vidisha Chandra</h2>
        <p class="title">Co-founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>vidishasateesh@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

</div>

    );
}

export default About;