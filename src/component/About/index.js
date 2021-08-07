import React from 'react'
import headerImage from '../../assets/cover/covcomp.jpg';
import Typography from '@material-ui/core/Typography';

function About() {
    return (
        <section className="my-5" >
           {<img src={headerImage} className="my-2" style={{ width: "100%" }} alt="header" />}
           
          <h1 id="about">A little bit about me...</h1>
         
          <div className="my-2">
            <Typography>
              Hello!  I am Christi-Lee Currier, most people call me Christi. 
              </Typography>
              <Typography>My background is in marketing, management, small business ownership, 
                baking bread, a Weird Al fan and the Mom to 2 human kids and 4 feline kids. 

                blah blah blah I have no idea what to write here but will add more after the 
                site is functional.
          </Typography>
         
          

          </div>
        </section>
      )
}

export default About