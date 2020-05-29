import {ListAccountsQuery, ListAccountsQueryVariables} from "../API";
import {API, graphqlOperation} from "aws-amplify";
import {listAccounts} from "../graphql/queries";
import {GraphQLResult} from "@aws-amplify/api";

export const getUserAccounts = async () => {
    const variables: ListAccountsQueryVariables = {
        limit: 10,
        nextToken: null,
    };

    const result = await API.graphql(graphqlOperation(listAccounts, variables)) as GraphQLResult<ListAccountsQuery>;
    return result?.data?.listAccounts?.items || [];
};
