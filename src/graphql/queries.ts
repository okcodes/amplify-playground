/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      name
      balance
      type
      currency
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        balance
        type
        currency
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOperation = /* GraphQL */ `
  query GetOperation($id: ID!) {
    getOperation(id: $id) {
      id
      amount
      date
      description
      accountID
      account {
        id
        name
        balance
        type
        currency
        owner
        createdAt
        updatedAt
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listOperations = /* GraphQL */ `
  query ListOperations(
    $filter: ModelOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOperations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        date
        description
        accountID
        account {
          id
          name
          balance
          type
          currency
          owner
          createdAt
          updatedAt
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listOperationsByOwner = /* GraphQL */ `
  query ListOperationsByOwner(
    $owner: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOperationsByOwner(
      owner: $owner
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        date
        description
        accountID
        account {
          id
          name
          balance
          type
          currency
          owner
          createdAt
          updatedAt
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
