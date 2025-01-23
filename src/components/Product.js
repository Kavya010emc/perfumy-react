import one from "../assets/images/one.jpeg"
import two from "../assets/images/two.jpeg"
import three from "../assets/images/three.jpeg"
//products component

function Products() {
    return(
      <div class="products">
           
              <div class="box">
                 
                          <img src={one} alt="one"></img>
                          <p>Carlton London women Fleur EDP The feminine fragrance presented in a clear glass bottle with silver accents and pump spray mechanism</p>    
              </div>
                    
              
              <div class="box">
                  <img src={two} alt="two"></img>
                  <p>Carlton London
                  Women Veronica Eau de Parfum - 50ml</p> 
              </div>
              <div class="box">
                  <img src={three} alt="three"></img>
                  <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
              </div>
  
          
              
          </div>
    )
  }
export default Products