---
url : https://jobtechdev.se
---

![alt text][logo]
 
[logo]: https://github.com/MagnumOpuses/project-meta/blob/master/img/jobtechdev_black.png "JobTech dev logo"

[A JobTech Project](https://www.jobtechdev.se)

# Jobtechdev.se (documentation website for developers)

This project's purpose is to serve all necessary details for developers to integrate with Jobtech Dev's open infrastructure. This is the central hub to find information about our infrastructure projects, API specifications, integration guidelines, licenses, contact details and other important notices.


The website is built using the static website generation framework [Hugo](https://gohugo.io/) (see [Hugo documentation](https://gohugo.io/documentation/)).

## Getting started

First and foremost, if you wish to develop for and contribute to this open-source project. Please read the guidelines for [Contributing](CONTRIBUTING.md) and the [Hugo Getting Started Guide](https://gohugo.io/getting-started/). This will provide you all required knowledge to develop for this project.

Next up, install all [Prerequisites](#prerequisites) and follow the [Installation](#installation) steps.

Local compilation and deployment is a breeze with the provided [NPM](https://www.npmjs.com) run scripts and Dockerfile build instructions (please see [Deployment](#deployment) section).

### Prerequisites

 * [Git](https://git-scm.com/)
 * [Hugo](https://gohugo.io/)
 * [Node.js](https://nodejs.org/en/)
 * [Docker](https://www.docker.com)

### Installation

 1. Clone this project, see guide: [Cloning a repository](https://help.github.com/en/articles/cloning-a-repository)
 1. Install all project dependencies with command:
    ```bash
    npm install
    ```

## Test

:warning: *No tests available*

## Deployment

During development on this project it's usually preferable to deploy directly to the local Hugo development server to fully benefit from the automatic [watch and live-reload](https://gohugo.io/getting-started/usage/#livereload) features.

### Deploy to local Hugo development server
```bash
npm run start
```

Visit the locally deployed website here: http://localhost:3000

### Deploy to local Docker environment

#### Stage docker image

```bash
docker build --build-arg ARG_BUILDNAME=stage -t <image name> -f Dockerfile .
docker run -it  -p 8080:8080 -p 80:8080 <image name>
```

Visit the locally deployed website here: http://localhost:8080
 * Username: `default`
 * Password: `default`

#### Production docker image

```bash
docker build -t <image name> -f Dockerfile .
docker run -it  -p 8080:8080 -p 80:8080 <image name>
```

Visit the locally deployed website here: http://localhost:8080

## Built with

* Any IDE or text editor is fine.
* Compiled with [Hugo](https://gohugo.io/).

## Contributing

We would love if you'd like to help us build and improve this product for the benefit of everyone. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org/) code of conduct.

Any contributions, feedback and suggestions are more than welcome.

Please read our guidelines for contribution [here](CONTRIBUTING_TEMPLATE.md).

## License

[Apache License 2.0](LICENSE.md)

## Acknowledgments

N/A
