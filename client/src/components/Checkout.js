import StripeCheckout from 'react-stripe-checkout';

const onToken = (user, checkout) => (token) => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => (
    <StripeCheckout
        amount={amount * 100}
        token={onToken(user, checkout)}
        currency="INR"
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    />
);

export default Checkout;