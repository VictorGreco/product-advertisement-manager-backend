<br />
<p align="center">

  <h3 align="center">Product Advertisement Manager - Backend</h3>

  <p align="center">
    Backend service for the advertisement manager product app
    <br />
    <a href="https://github.com/victorgreco/product-advertisement-manager-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://product-advertisement-manager.herokuapp.com/graphql">View Demo</a>
    ·
    <a href="https://github.com/victorgreco/product-advertisement-manager-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/victorgreco/product-advertisement-manager-backend/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a CRUD API service to manage all the product advertisements for the company.


### Built With

* [NestJS](https://docs.nestjs.com/)
* [MongoDB](https://www.mongodb.com/docs/)
* [Jest](https://jestjs.io/docs/getting-started)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [GraphQL](https://graphql.org/learn/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
* node v18.13.0

### Installation

1. Clone the repo
```sh
git clone https://github.com/victorgreco/product-advertisement-manager-backend.git
```
2. Install NPM packages
```sh
npm install
```

### Environment Variavles
Do not forget to create a .env file in the root folders following the .env.sample file if you are running this app locally.

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

<!-- USAGE EXAMPLES -->
## Usage

You can run this service locally or use the up and running deployed version.

I enabled the build in graphql playground so do not miss the change to play a bit!

- Access [localhost:3000](localhost:3000) if you are running this locally.
- Access the [deployed demo](https://product-advertisement-manager.herokuapp.com/graphql) if you want to try the deployed version.

**Get one advertisement by id**

Query
```sh
query Advertisement($id: String!){
  advertisement(id: $id) {
    product_id
    title
    valid_until
    discount_percentage
  }
}
```
Variables
```sh
{
  "id": "63bdad4e53e67b7cfac0a272"
}
```

**Get all advertisement**

Query
```sh
query {
  advertisements {
    product_id
    title
    valid_until
    discount_percentage
  }
}
```

Variables
- No variables needed

**Create one advertisement**

Mutation
```sh
mutation CreateNewAdvertisement($newAdvertisementData: NewAdvertisementInput!) {
  addAdvertisement(newAdvertisementData: $newAdvertisementData) {
    product_id
    title
    valid_until
    discount_percentage
  }
}
```
Variables
```sh
{
  "newAdvertisementData": {
      "product_id": 1,
      "title": "Awesome product id",
      "valid_until": "Tue Jan 10 2023 19:19:03 GMT+0100 (hora estándar de Europa central)",
      "discount_percentage": 4
  }
}
```

**Update one advertisement by id**

Mutation
```sh
mutation UpdateAdvertisement($advertisementId: String!, $updateAdvertisementData: UpdateAdvertisementInput!) {
  updateAdvertisement(advertisementId: $advertisementId, updateAdvertisementData: $updateAdvertisementData)
}
```
Variables
```sh
{
  "advertisementId": "63bdad4e53e67b7cfac0a272",
  "updateAdvertisementData": {
      "product_id": 50,
      "title": "Awesome product id",
      "valid_until": "Tue Jan 10 2023 19:19:03 GMT+0100 (hora estándar de Europa central)",
      "discount_percentage": 4
  }
}
```

**Delete one advertisement by id**

Mutation
```sh
mutation RemoveAdvertisement($id: String!) {
  removeAdvertisement(id: $id)
}
```
Query variables
```sh
{
  "id": "63bdad4e53e67b7cfac0a272"
}
```



<!-- ROADMAP -->
## Roadmap

Currenlty this is an MVP in order to achieve the deadlines.

For future iterations I would like to add:
- Metrics
- Robust logger
- Health checker
- Response time alerts with prometheus and kibana
- Need for a token to use the API in order to controll the amount of requests done
- Automatic advertisement generation based on past data
- Hide playground to avoid API architecture exposure
- Create a containarized version of the code in order to be able to escalate in the could provider

See the [open issues](https://github.com/victorgreco/product-advertisement-manager-backend/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Victor Greco - [linkedin](https://www.linkedin.com/in/victor-greco/) - victorgrecotech@gmail.com

Project Link: [https://github.com/victorgreco/product-advertisement-manager-backend](https://github.com/victorgreco/product-advertisement-manager-backend)