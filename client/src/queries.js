import { gql } from "@apollo/client";

export const ADD_PERSON = gql`
  mutation AddPerson($id: String!, $firstName: String!, $lastName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const GET_PEOPLE = gql`
  {
    people {
      id
      firstName
      lastName
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation UpdatePerson($id: String!, $firstName: String!, $lastName: String!) {
    updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const DELETE_PERSON = gql`
  mutation DeletePerson($id: String!) {
    deletePerson(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

export const DELETE_CARS_BY_PERSON = gql`
  mutation DeleteCars($personId: String!) {
    deleteCars(personId: $personId) {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const ADD_CAR = gql`
  mutation Mutation(
    $id: String!
    $year: Int!
    $make: String!
    $model: String!
    $price: Float!
    $personId: String!
  ) {
    addCar(
      id: $id
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const GET_CARS = gql`
  {
    cars {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const PERSON_CARS = gql`
  query PersonCars($personId: String!) {
    personCars(personId: $personId) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const DELETE_CAR = gql`
  mutation DeleteCar($id: String!) {
    deleteCar(id: $id) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation UpdateCar(
    $id: String!
    $year: Int!
    $make: String!
    $model: String!
    $price: Float!
    $personId: String!
  ) {
    updateCar(
      id: $id
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const PEOPLE_WITH_CARS = gql`
  query personWithCars($id: String!) {
    findPersonById(id: $id) {
      id
      firstName
      lastName
    }
    personCars(personId: $id) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;
