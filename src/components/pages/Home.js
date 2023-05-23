import React from 'react';
import monaPic from '../../img/mona.jpg';

// style={{ marginInline: 700, justifyContent: 'center' , textAlign: 'center', display: 'inline-block'}}
export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center text-center"
    >
      <h1>Web Developer</h1>
      <img src={monaPic} alt="Mypic" style={{ width: 300, height: 500, borderRadius: 40 }} />
    </div>
  );
}