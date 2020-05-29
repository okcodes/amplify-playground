/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($owner: String!) {
    onCreateAccount(owner: $owner) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($owner: String!) {
    onUpdateAccount(owner: $owner) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($owner: String!) {
    onDeleteAccount(owner: $owner) {
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
export const onCreateOperation = /* GraphQL */ `
  subscription OnCreateOperation($owner: String!) {
    onCreateOperation(owner: $owner) {
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
export const onUpdateOperation = /* GraphQL */ `
  subscription OnUpdateOperation($owner: String!) {
    onUpdateOperation(owner: $owner) {
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
export const onDeleteOperation = /* GraphQL */ `
  subscription OnDeleteOperation($owner: String!) {
    onDeleteOperation(owner: $owner) {
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
