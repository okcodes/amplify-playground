import React from 'react';
import {getUserOperations} from "../../lib/operation-helper";
import {getUserAccounts} from "../../lib/account-helper";
export const Example1 = () => {

    return (
        <div>
            Example 1
            <button onClick={getUserOperations}>Get User Operations</button>
            <button onClick={getUserAccounts}>Get User Accounts</button>
        </div>
    );
};
