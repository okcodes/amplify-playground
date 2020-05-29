/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  name: string,
  balance: number,
  type: AccountType,
  currency: string,
  owner?: string | null,
};

export enum AccountType {
  CASH = "CASH",
  CREDIT_CARD = "CREDIT_CARD",
  GIFT_CARD = "GIFT_CARD",
  CRYPTO = "CRYPTO",
}


export type ModelAccountConditionInput = {
  name?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  type?: ModelAccountTypeInput | null,
  currency?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelAccountTypeInput = {
  eq?: AccountType | null,
  ne?: AccountType | null,
};

export type UpdateAccountInput = {
  id: string,
  name?: string | null,
  balance?: number | null,
  type?: AccountType | null,
  currency?: string | null,
  owner?: string | null,
};

export type DeleteAccountInput = {
  id?: string | null,
};

export type CreateOperationInput = {
  id?: string | null,
  amount: number,
  date: string,
  description: string,
  accountID: string,
  owner?: string | null,
};

export type ModelOperationConditionInput = {
  amount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  accountID?: ModelIDInput | null,
  and?: Array< ModelOperationConditionInput | null > | null,
  or?: Array< ModelOperationConditionInput | null > | null,
  not?: ModelOperationConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateOperationInput = {
  id: string,
  amount?: number | null,
  date?: string | null,
  description?: string | null,
  accountID?: string | null,
  owner?: string | null,
};

export type DeleteOperationInput = {
  id?: string | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  type?: ModelAccountTypeInput | null,
  currency?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelOperationFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  accountID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelOperationFilterInput | null > | null,
  or?: Array< ModelOperationFilterInput | null > | null,
  not?: ModelOperationFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount:  {
    __typename: "Account",
    id: string,
    name: string,
    balance: number,
    type: AccountType,
    currency: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount:  {
    __typename: "Account",
    id: string,
    name: string,
    balance: number,
    type: AccountType,
    currency: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount:  {
    __typename: "Account",
    id: string,
    name: string,
    balance: number,
    type: AccountType,
    currency: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOperationMutationVariables = {
  input: CreateOperationInput,
  condition?: ModelOperationConditionInput | null,
};

export type CreateOperationMutation = {
  createOperation:  {
    __typename: "Operation",
    id: string,
    amount: number,
    date: string,
    description: string,
    accountID: string,
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      balance: number,
      type: AccountType,
      currency: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOperationMutationVariables = {
  input: UpdateOperationInput,
  condition?: ModelOperationConditionInput | null,
};

export type UpdateOperationMutation = {
  updateOperation:  {
    __typename: "Operation",
    id: string,
    amount: number,
    date: string,
    description: string,
    accountID: string,
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      balance: number,
      type: AccountType,
      currency: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOperationMutationVariables = {
  input: DeleteOperationInput,
  condition?: ModelOperationConditionInput | null,
};

export type DeleteOperationMutation = {
  deleteOperation:  {
    __typename: "Operation",
    id: string,
    amount: number,
    date: string,
    description: string,
    accountID: string,
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      balance: number,
      type: AccountType,
      currency: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount:  {
    __typename: "Account",
    id: string,
    name: string,
    balance: number,
    type: AccountType,
    currency: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string,
      balance: number,
      type: AccountType,
      currency: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetOperationQueryVariables = {
  id: string,
};

export type GetOperationQuery = {
  getOperation:  {
    __typename: "Operation",
    id: string,
    amount: number,
    date: string,
    description: string,
    accountID: string,
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      balance: number,
      type: AccountType,
      currency: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOperationsQueryVariables = {
  filter?: ModelOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOperationsQuery = {
  listOperations:  {
    __typename: "ModelOperationConnection",
    items:  Array< {
      __typename: "Operation",
      id: string,
      amount: number,
      date: string,
      description: string,
      accountID: string,
      account:  {
        __typename: "Account",
        id: string,
        name: string,
        balance: number,
        type: AccountType,
        currency: string,
        owner: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListOperationsByOwnerQueryVariables = {
  owner?: string | null,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOperationsByOwnerQuery = {
  listOperationsByOwner:  {
    __typename: "ModelOperationConnection",
    items:  Array< {
      __typename: "Operation",
      id: string,
      amount: number,
      date: string,
      description: string,
      accountID: string,
      account:  {
        __typename: "Account",
        id: string,
        name: string,
        balance: number,
        type: AccountType,
        currency: string,
        owner: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  owner: string,
};

export type OnCreateAccountSubscription = {
  onCreateAccount:  {
    __typename: "Account",
    id: string,
    name: string,
    balance: number,
    type: AccountType,
    currency: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  owner: string,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount:  {
    __typename: "Account",
    id: string,
    name: string,
    balance: number,
    type: AccountType,
    currency: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  owner: string,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount:  {
    __typename: "Account",
    id: string,
    name: string,
    balance: number,
    type: AccountType,
    currency: string,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOperationSubscriptionVariables = {
  owner: string,
};

export type OnCreateOperationSubscription = {
  onCreateOperation:  {
    __typename: "Operation",
    id: string,
    amount: number,
    date: string,
    description: string,
    accountID: string,
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      balance: number,
      type: AccountType,
      currency: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOperationSubscriptionVariables = {
  owner: string,
};

export type OnUpdateOperationSubscription = {
  onUpdateOperation:  {
    __typename: "Operation",
    id: string,
    amount: number,
    date: string,
    description: string,
    accountID: string,
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      balance: number,
      type: AccountType,
      currency: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOperationSubscriptionVariables = {
  owner: string,
};

export type OnDeleteOperationSubscription = {
  onDeleteOperation:  {
    __typename: "Operation",
    id: string,
    amount: number,
    date: string,
    description: string,
    accountID: string,
    account:  {
      __typename: "Account",
      id: string,
      name: string,
      balance: number,
      type: AccountType,
      currency: string,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
