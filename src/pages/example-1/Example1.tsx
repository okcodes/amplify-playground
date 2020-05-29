import React from 'react';
import {API, graphqlOperation} from "aws-amplify";
import {ListOperationsByOwnerQuery, ListOperationsByOwnerQueryVariables, ModelSortDirection} from "../../API";
import {currentUsername} from "../../lib/auth-util";
import moment from "moment";
import {listOperationsByOwner} from "../../graphql/queries";
import {GraphQLResult} from "@aws-amplify/api";

const getUserOperations = async () => {
    const today = moment().endOf('day').utc().format();
    const lastWeek = moment().subtract(7, 'days').startOf('day').utc().format();

    const variables: ListOperationsByOwnerQueryVariables = {
        owner: currentUsername(),
        sortDirection: ModelSortDirection.DESC,
        limit: 10,
        nextToken: null,

        // Dont user this filter, it won't use the Global Secondary Index and thus it might contain incomplete results.
        // filter: {date: {between: [lastWeek, today]}},

        // This query runs over the Global Secondary Index in DynamoDB use this filter.
        date: {between: [lastWeek, today]},
    };

    const result = await API.graphql(graphqlOperation(listOperationsByOwner, variables)) as GraphQLResult<ListOperationsByOwnerQuery>;
    const items = result?.data?.listOperationsByOwner?.items;
    console.log("Items", items);
};


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
