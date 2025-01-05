import React from 'react'
import Image from 'next/image'
const Watches = () => {

  const watchData = [
    { id: 1, name: 'Rolex', price: 12000, description: 'luxury watch', image: '/w2.jpg' },
    { id: 2, name: 'Apple', price: 50000, description: 'Smart watch', image: '/w1.jpg' },
    // { id: 3, name: 'levo', price: 8000, description: 'Affordable and Reliable', image: '/w3.jpg' },
    { id: 4, name: 'Apple', price: 152000, description: 'sport watch', image: '/w4.jpeg' },
    { id: 5, name: 'Rolex', price: 18500, description: 'master piece watch', image: '/w7.jpeg' },
    { id: 6, name: 'Apple', price: 14000, description: 'smart watch', image: '/w8.jpeg' },
  ]

  return (
    <div>
      <div className="watches">
        {watchData.map((watch)  => (
          <div key={watch.id} className="watch-card">
             <Image src={watch.image} alt={watch.name} />
             <h3>{watch.name}</h3>
             <p>{watch.description}</p>
             <div className="price">${watch.price}</div>
             <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Watches