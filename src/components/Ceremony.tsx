import React from 'react';
import ceremonyText from '/ceremonia.png';
import party2 from '/partyGif.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary'>
      <h2 className="font-semibold text-7xl text-center font-dance ">Fiesta</h2>
      <img src={party2} alt="party2" className='w-[100px]' />
      <p className='text-lg'><strong>Jano's Del Viso</strong><br/>Av. Ing. Eduardo Madero 630<br/><br/>Desde: <strong>14:30 hs</strong> <br/>Hasta: <strong>22:30 hs</strong> </p>
      <a href='https://maps.app.goo.gl/RDauFhnSCHFc8gAo7'
        target='_blank'
        className='mt-6 shadow-lg rounded-full p-4 bg-primary text-white'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;
