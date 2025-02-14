import React from 'react';
import AguaCard from './AguaCard';

const aguas = [
  { id: 1, img: 'img/jugo de tamarindo.jpg', title: 'Agua de Jamaica', text1: 'Con sabor a Limón',text2:'Parece de Tamarindo' },
  { id: 2, img: 'img/jugo de jamaica.avif', title: 'Agua de Limón', text1: 'Con sabor a Tamarindo',text2:'Parece de Jamaica' },
  { id: 3, img: 'img/jugo limón.jpg', title: 'Agua de Tamarindo', text1: 'Con sabor a Jamaica',text2:'Parece de Limón' },
];

const AguasList = () => {
  return (
    <section className="contenedor_aguas">
      {aguas.map((agua) => (
        <AguaCard key={agua.id} {...agua} />
      ))}
    </section>
  );
};

export default AguasList;
