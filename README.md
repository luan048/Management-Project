# Management System

Fictitious Project aimed at Internal Management of companies seeking to move away from traditional paper and pen.

## Summary
- [Install](#1-install-project)
- [Techonologies used](#2-technologies-used)
- [How the project works?](#3-how-the-project-works)

## 1 Install project

## Install the Front-end

```bash
$ cd management-system
```

### To run on server

```bash
$ npm run dev
```

### To pack in dist in electron

```bash
$ npm run build:win
```

## 2 Technologies used 
Technologies used in the project: </br>
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp; ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)&nbsp; </br>
![Electron](https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9)&nbsp; ![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp; </br>
![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp; ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)&nbsp; </br>
![PostegreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)&nbsp; ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)&nbsp; </br>

## 3 How the project works?
This project was developed for small businesses looking for a technological solution to optimize their financial management. </br>
With it, it is possible to register customers — including the most loyal ones —, record purchased products and monitor monthly sales. </br>

In the visualization module, the system displays a detailed report of the monthly balance, showing all entries, exits and the final balance, organized by month. </br>

On the technical side, the front-end was developed with React, while the back-end uses Node.js. </br>
Data storage is done in PostgreSQL, hosted in the cloud via NeonDB, with Prisma as ORM to facilitate integration. </br>
As a differential, this project also uses Electron, allowing you to transform the code into a desktop or executable application (.exe).
