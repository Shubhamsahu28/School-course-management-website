import React from 'react';
import { Button, Container } from 'reactstrap';
//import {Jumbotron} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
return(
    <div>
         <div class="container"  className='text-center'>
  < div class="jumbotron">
    <h1><center> Bootstrap Tutorial</center></h1>
    <p><center>Bootstrap is the most popular HTML, CSS, and JS framework for developing
    responsive, mobile-first projects on the web.</center></p>

  <p>This is some text.</p>
  <p>This is another text.</p>

            <div  className='text-center'>
            <Container>
                <Button color="primary"><center>start using</center>


                </Button>
            </Container>
    


    </div>
    </div>
    </div>
    </div>
)
};

export default Home;