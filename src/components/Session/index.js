import React from 'react';

import AuthUserContext from './context';
import withAuthentication from './withAuthentication';
import withAuthorization from './withAuthorization';

import { SignInForm } from '../SignIn';

export { AuthUserContext, withAuthentication, withAuthorization };

const Unauthorized = () => (
    <div>
        <h1>You are not authorized</h1>
        <SignInForm />
    </div>
);

export { Unauthorized };
