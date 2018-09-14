# {{ name }}

👉 [Roadmap](https://www.pivotaltracker.com/n/projects/{{ pivotalProjectNumber }})<br/>
👉 [Development Website](https://{{ herokuAppName }}.herokuapp.com/)<br/>
👉 [Contentful](https://app.contentful.com/spaces/{{ contentfulSpaceId }}/entries)<br/>

## 🛠 Installation

First, make sure to have a [Docker](https://docker.com) daemon running.

__Build & launch the project Docker image.__

```shell
docker-compose up # Launch the local server.
open http://localhost:3000
```

## 🏗 Project architecture

```shell
.
├── .dockerignore # Ignored filed while creating docker image.
├── .eslintrc.js # ESLint configuration.
├── Dockerfile # Development Docker file.
├── README.md
├── api/ # Fetch & parse data from Contentful API.
├── assets/ # global css / fonts / images...
├── components/ # Page's components.
├── docker-compose.yml
├── heroku.yml # Automatic deployment on Heroku (can specify a Dockerfile).
├── layouts/ # Top level layouts.
├── middleware/ # Pre-requesties for a route change (for exemple: Fetching contentful data).
├── mixins/ # Global VueJS component helpers.
├── node_modules/
├── nuxt.config.js # Global app configuration.
├── package-lock.json
├── package.json
├── pages/ # Pages's entry points.
├── plugins/ # Custom front-end libraries (google-map-api, i18n, animate.css, ...).
├── static/ # Accessible directily.
└── store/ # Data storage and accessors.
```

## 👩‍💻 Everyday actions

```shell
# Launch the services.
docker-compose up # Start.
docker-compose stop # Stop.
docker-compose up -d # Start (deamon).
docker-compose logs -f # Outputs the latest containers logs and follow the log output.
docker-compose run app npm i --save <package-name> # Install a NPM package.
docker-compose run app npm run lintfix # Auto-correct code format.
docker run --rm -i -v=cfoconnect_app_logs:/var/log busybox ls -alh /var/log # List volume content.
docker run --rm -i -v=cfoconnect_app_node_modules:/app/node_modules busybox ls -alh /app/node_modules
```

## 🥞 Stack

👉 [NuxtJS](https://nuxtjs.org/), the rendering framework.<br/>
👉 [Contentful](https://app.contentful.com/spaces/{{ contentfulSpaceId }}/entries), the content hosting service.<br/>
👉 [Docker](https://docker.com), the development environment.<br/>
👉 [Heroku](https://dashboard.heroku.com/apps/{{ herokuAppName }}), where the code is hosted.<br/>

## 💫 Deployments

Every commit on the `master` branch triggers a deployment on [Heroku](https://dashboard.heroku.com/apps/{{ herokuAppName }}).

## 🎳 Team

- [Audrey Labuxière](mailto:audrey@muxumuxu.com)
- [David Miotti](mailto:david@muxumuxu.com)
- [Quentin Bellanger](mailto:quentin@muxumuxu.com)

---

Made with ❤ by [Muxu.Muxu](https://muxumuxu.com).
