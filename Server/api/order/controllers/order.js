'use strict';

const stripe = require('stripe')('sk_test_51HflYaI7qOUQnBw4bbqB293dygrUhge1l4tqzz144oXLzhG7wPxkg89tad9iM7tdM8EuJZkAftMJ4T01edpK1gtW00k9lEguMa');

module.exports = {
  create: async ctx => {
    const {name,total,items,stripeTokenId} = ctx.request.body;
    const {id} = ctx.state.user;

    const charge = await stripe.charges.create({
      amount: Math.round(total*100),
      currency:'pln',
      source:stripeTokenId,
      description:`Order ${new Date()} by ${ctx.state.user.username}`
    })
    const order = await strapi.services.order.create({
      name,total,items,user:id
    })
    return order;
  }
};
