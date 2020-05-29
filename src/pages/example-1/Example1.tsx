import React from 'react';
import {getUserOperations} from "../../lib/operation-helper";
export const Example1 = () => {

    const handleClick = () => {
        getUserOperations();
    };

    return (
        <div>
            Example 1

            <button onClick={handleClick}>Get User Operations</button>
        </div>
    );
};
