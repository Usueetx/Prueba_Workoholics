import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <div>
        <img src="./recursos/Mug1.png" alt= "mug" className='mug'></img>
    <div>
        <h1 className='lorem'>LOREM</h1><hr />
        <h1 className='ipsum'>IPSUM</h1><hr1 />
        <h1 className='dolor'>DOLOR</h1>
    <div className='pinkl'></div>
    <p className='contacts'>Contact us</p>
    </div>
    <div className='text'>
     <li>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <b>vulputate dui efficitur</b> ultrices pharetra. Praesent tempor mollis purus nec fringilla. </li>   
    </div>
    <div className='one'>
    <img src="./recursos/Tshirt1.png" alt= "t-shirt" className='tshirt'></img>
    <h3 className='h3t'>T-shirt</h3>
    <p className='ttext'> Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor mollis purus.</p>
    <span className='r1'></span> <span className='r2'></span>
    <span className='buyt'><p>Buy</p></span><span className="arrow1" ><FontAwesomeIcon icon={faArrowRight} /></span>
    <hr3 />
    </div>
    <div className='two'>
    <img src="./recursos/Bottle1.png" alt= "bottle" className='bottle'></img>
    <h3 className='h3b'>Bottle</h3>
    <p className='tttext'> Etiam vulputate dui efficitur ultrices pharetra. Praesent tempor mollis purus.</p>
    <span className='r3'></span>
    <span className='buyb'><p>Buy</p></span><span className="arrow2" ><FontAwesomeIcon icon={faArrowRight} /></span>
    <hr4 />
    </div>
      
    </div>
  )
}

export default Main;
