import react from "react";
import './Explore.css';
function Explore(){
    return(
        <div>
        <div class="about-section">
  <h1>Explore Recipes Now!</h1>
  <p>Learn to cook delicious food by watching our exclusive videos</p>
  <p>Look below and learn</p>
</div>

<div class="row">
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Chaat Corner</h2>
      <iframe width="420" height="315"
        src="https://www.youtube.com/embed/nKPqUdLtbq4">
    </iframe>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">

      <div class="container">
      <h2>Easy Dosa</h2>
      <iframe width="420" height="315"
        src="https://www.youtube.com/embed/J75VQSxOtdo">
    </iframe>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">

      <div class="container">
      <h2>How To Make Chocolate Cake</h2>
      <iframe width="420" height="315"
        src="https://www.youtube.com/embed/dtyekBblwkA">
    </iframe>
      </div>
    </div>
  </div>
</div>

</div>

    );
}

export default Explore;