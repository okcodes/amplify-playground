/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createOperation = /* GraphQL */ `
  mutation CreateOperation(
    $input: CreateOperationInput!
    $condition: ModelOperationConditionInput
  ) {
    createOperation(input: $input, condition: $condition) {
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
export const updateOperation = /* GraphQL */ `
  mutation UpdateOperation(
    $input: UpdateOperationInput!
    $condition: ModelOperationConditionInput
  ) {
    updateOperation(input: $input, condition: $condition) {
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
export const deleteOperation = /* GraphQL */ `
  mutation DeleteOperation(
    $input: DeleteOperationInput!
    $condition: ModelOperationConditionInput
  ) {
    deleteOperation(input: $input, condition: $condition) {
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
