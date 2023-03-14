# Security Labs

This project demonstrates various security concerns with web applications, based
on the **OWASP Top 10 2017 - The Ten Most Critical Web Application Security
Risks**.

[![](https://kyn.ac/SCR-20230314-u3b.png)](https://kyn.ac/SCR-20230314-u3b.png)

**_Screenshot_**

## Features

_**Do NOT try this at home! :)**_

- **(SQL) Injection Lab** - Play and learn about SQL injection
- **Broken Authentication Lab** - Brute force authentication [using 100 of the most used passwords](/bin/brute-force-entry)
- **Sensitive Exposure Lab** - Learn why you need to salt hashes by using rainbow tables / sites like Crack Station to lookup plain text values for unsalted hashes.
- **Broken Access Control Lab** - See what happens if you forget to authorize users properly and users start guessing URL parameters
- **Cross Site Scripting (XSS) Lab** - Experience how a JWT Token can be stolen if you allow arbitrary JavaScript to be run on a page
- Convenient scripts to brute force entry, create seeds, and create `SHA1` hashes

## Disclaimer

**The code in this project serves purely educative purposes and should should not be used in production environments!**

This project was originally created as a demo project for the Codaisseur Advanced Class on Securing
Web Applications. Later on, it got updated and for Cybersecurity labs and maintenance was adopted by
[Kyna](https://kyna.co) and [Techmongers](https://www.techmongers.nl).

## Get Started

This project can be run locally in Docker from the provided `docker-compose.yaml`.

Clone the repository, then run the app container and install the
node modules:

```bash
$ docker-compose run app /bin/bash
$ yarn install
$ exit
```

Then start the app and the postgres container:

```bash
$ docker-compose up
```

Then open http://localhost:5000 and start crackin'!

## Troubleshooting

The application container depends on PostgreSQL. It might be that the first time
you start the stack from `docker-compose`, the seeds in the PostgreSQL container
take too long to run an the app won't start.

Just `CTRL-C` out of the docker-compose process to stop it, then start it again
with the `docker-compose up` command.

## MIT License

Copyright 2022-2023 [Techmongers BV](https://www.techmongers.nl)
Copyright 2021-2023 [Mindgym BV](https://kyna.co)
Copyright 2017-2022 [Codaisseur BV](https://www.codaisseur.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
