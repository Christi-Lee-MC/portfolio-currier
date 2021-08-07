import React from 'react'
import headerImage from '../../assets/cover/covcomp.jpg';
import Typography from '@material-ui/core/Typography';

function About() {
    return (
        <section className="my-5" >
          <h1 id="about">Christi-Lee Currier</h1>
          {<img src={headerImage} className="my-2" style={{ width: "100%" }} alt="header" />}
          <div className="my-2">
            <p>
              Hello!  I am Christi-Lee Currier, most people call me Christi. 
              </p><p>My background is in marketing, management, small business ownership, 
                baking bread, a Weird Al fan and the Mom to 2 human kids and 4 feline kids. 

                blah blah blah I have no idea what to write here but will add more after the 
                site is functional.
          </p>
         
          

          </div>
        </section>
      )
}

export default About