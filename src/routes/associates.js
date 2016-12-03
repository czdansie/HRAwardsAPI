import { Router } from 'express';
import Joi from 'joi';
import Validator from 'express-joi-validator';


const ;

const router = new Router();


router.route('/')
  .get((req, res) => {
  const { pageSize = 100, index = 0 } = req.query;
const services = req.app.get('services');

return services./.all(index, pageSize)
    .then(/ => {
    return res.json(/);
})
.catch(err => {
  return res.status(500).json(err);
});
})
.post(Validator({ body: RestaurantModel.requiredKeys('', 'name', 'address.building', 'address.street', 'address.zipcode', 'borough', 'cuisine') }), (req, res) => {
  const restaurant = req.body;
const services = req.app.get('services');

return services.restaurants.create(restaurant)
    .then(result => res.status(201).json(result))
.catch(err => {
  throw err
});
});

router.get('/favorites', (req, res) => {
  const services = req.app.get('services');

return services.restaurants.favorites()
    .then(restaurants => res.json(restaurants))
.catch(err => {
  throw err
});
});

router.get('/top-rated', (req, res) => {
  const services = req.app.get('services');

return services.restaurants.topRated()
    .then(restaurants => res.json(restaurants))
.catch(err => {
  throw err
});
});

router.route('/:id')
  .get((req, res) => {
  const { id } = req.params;
const services = req.app.get('services');

return services.restaurants.findById(id)
    .then(restaurant => res.json(restaurant))
.catch(err => {
  throw err
});
})
.put(Validator({ body: RestaurantModel.requiredKeys('', 'name', 'address.building', 'address.street', 'address.zipcode', 'borough', 'cuisine') }), (req, res) => {
  const { id } = req.params;
const restaurant = req.body;
const services = req.app.get('services');

return services.restaurants.update(id, restaurant)
    .then(restaurant => res.json(restaurant))
.catch(err => {
  throw err
});
})
.patch(Validator({ body: RestaurantModel.requiredKeys('', 'name') }), (req, res) => {
  const { id } = req.params;
const restaurant = req.body;
const services = req.app.get('services');

return services.restaurants.update(id, restaurant)
    .then(restaurant => res.json(restaurant))
.catch(err => {
  throw err
});
})
.delete((req, res) => {
  const { id } = req.params;
const services = req.app.get('services');

return services.restaurants.remove(id)
    .then(result => res.json(result))
.catch(err => {
  throw err
});
});


export default router;
