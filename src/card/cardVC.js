import React from "react";
import  "/home/nineleaps/project1/src/card/card css/styleVC .css";
const cardVC = () => {
  return (
    <>
      <h1 className="title-vc">Venture Capitalist</h1>
      <main class="page-content">
        <div class="card-st">
          <div class="content">
            <h2 class="title">Vc 1</h2>
            <p class="copy">Check out about this Company</p>
            <button class="btn">See details</button>
          </div>
        </div>
        <div class="card-st">
          <div class="content">
            <h2 class="title">Vc 2</h2>
            <p class="copy">
              Investing in great companies
            </p>
            <button class="btn">View Firm</button>
          </div>
        </div>
        <div class="card-st">
          <div class="content">
            <h2 class="title">Vc 3</h2>
            <p class="copy">Investing in future</p>
            <button class="btn">See Details</button>
          </div>
        </div>
        <div class="card-st">
          <div class="content">
            <h2 class="title">VC 4</h2>
            <p class="copy">
              See more details
            </p>
            <button class="btn">View Firm</button>
          </div>
        </div>
      </main>
    </>
  );
};
export default cardVC