import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

function totalItems(cart) {
    return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoney extends React.Component {
    onToken = res => {
        console.log('On Token Called!');
        console.log(res);
    }
    render() {
        return (
            <User>
                {({ data: { me } }) => (
                    <StripeCheckout
                        amount={calcTotalPrice(me.cart)}
                        name="Sick Fits"
                        description={`Order of ${totalItems(me.cart)} Item${totalItems(me.cart) > 1 ? 's' : ''}`}
                        image={me.cart[0].item && me.cart[0].item.image}
                        stripeKey="pk_test_51HG7niJtBSUHZbnC4E2CzUpYiudwD5ICkgpFWcxEnZMFQAIOCBM4uXNwjXBmpgo4qnoTcisyZWw29JBQWLUND3qQ001cYqWz2f"
                        currency="USD"
                        email={me.email}
                        token={res => this.onToken(res)}
                    >
                        {this.props.children}
                    </StripeCheckout>
                )}
            </User>
        );
    }
}

export default TakeMyMoney;