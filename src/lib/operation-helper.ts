import moment from "moment";
import {ListOperationsByOwnerQuery, ListOperationsByOwnerQueryVariables, ModelSortDirection} from "../API";
import {currentUsername} from "./auth-util";
import {API, graphqlOperation} from "aws-amplify";
import {listOperationsByOwner} from "../graphql/queries";
import {GraphQLResult} from "@aws-amplify/api";

export const getUserOperations = async () => {
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
    return result?.data?.listOperationsByOwner?.items || [];
};
