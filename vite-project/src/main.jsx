import { createRoot } from 'react-dom/client';
import { restaurants } from './mock';

createRoot(document.getElementById('root')).render(
  <div>{restaurants.map((el) => {
    return (<div><h1>{el.name}</h1>
    <h3>Menu</h3>
    <ul>{el.menu.map((item) => {
      return (<div><li>{ item.name }</li><p>price: { item.price }</p><p>ingredients: {item.ingredients.join(' ')}</p></div>)
    })}</ul>
    <h3>Reviews</h3>
    <ul>{el.reviews.map((review) => <li><p>{review.text}</p><p>stars: {review.rating}</p></li>)}</ul>
    </div>)
  })}</div>
  );