import React from 'react';

import { withFirebase } from '../Firebase';

const UserDetails = (props) => (
    <div>
        Email: {props.firebase.getUser().email}
    </div>
);

export default withFirebase(UserDetails);
