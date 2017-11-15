# Security Labs

[![Docker Repository on Quay](https://quay.io/repository/codaisseur/security-demos/status "Docker Repository on Quay")](https://quay.io/repository/codaisseur/security-demos)

This project demonstrates various security concerns with web applications, based
on the **OWASP Top 10 2017 - The Ten Most Critical Web Application Security
Risks**.

[![](http://cd.sseu.re/Security_Labs_-_Overview-2017-11-15-q0puv.png)](http://cd.sseu.re/Security_Labs_-_Overview-2017-11-15-q0puv.png)

**_Screenshot_**

## Disclaimer

This project is a demo project for the Codaisseur Advanced Class on Securing
Web Applications. **The code in this project serves purely educative purposes and
should should not be used in production environments!**

## Get Started

This project can be run locally in Docker from the provided `docker-compose.yaml`.

Clone the repository, then run:

```bash
$ docker-compose up
```

## Troubleshooting

The application container depends on PostgreSQL. It might be that the first time
you start the stack from `docker-compose`, the seeds in the PostgreSQL container
take too long to run an the app won't start.

Just `CTRL-C` out of the docker-compose process to stop it, then start it again
with the `docker-compose up` command.

## MIT License

Copyright 2017 [Codaisseur BV](https://www.codaisseur.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
