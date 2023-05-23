import React from 'react';
import monaPic from '../../img/mona.jpg';


export default function Home() {
  return (
    <div style={{ marginInline: 700, justifyContent: 'center' , textAlign: 'center', display: 'inline-block'}}> 
      <h1>Web Developer</h1>
      <img src={monaPic}alt="Mypic" style={{ display: 'inherit', width: 300, height: 500, borderRadius: 40 }} />
  </div>
  );
}