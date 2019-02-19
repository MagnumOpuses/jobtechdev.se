---
title: "MyData"
disableToc: true
date: 2019-01-19T20:06:16+01:00
---

MyData aims for individuals to have control over their own data.The JobTech MyData goal is a distributed and decentralized data storage for the labour market. Take CV data as an example: It should be accessible for those who have an interest in reading or writing in the data but on the basis that the individual always has control of the information. Massive data sets collected by companies and authorities creates possibility to see patterns in the behavior of people, and create new products and services to create a new value. The data can also be used for other purposes for example monitoring or affect opinions in politics. To control a lot of individual data could mean a risk.

### Purpose
- Protect the individual's right to his data
- Empower the individual with control of his data

### Accelerate innovation
Our second goal is to enable innovation. To be able to in a better way collaborate and develop as powerful digital services as private startups. The private and the public sector should be able to collaborate in both development and with common infrastructure/ standards for increasing the public benefit. By enabling a “digital bureaucracy”, i.e. traceability and standardized communication, new more transparent and effective forms of governance can be established. This is about competitiveness for Sweden and EU, but basically it is primary about increased social benefits for the entire humanity. Opens source is a global movement and has the power to improve, both for small and large countries and organizations. Simplify and increase the efficiency of career work by catalyzing the ecosystem around JobTech.
New and better services for jobseekers and employers. Free and efficient cross-border mobility, reducing the cost of employers and an easier user experience.

### Transparency and collaboration
Our goal is to be 100% transparent and we will put all code and documentation on Github. The meaning is to consolidate knowledge and increase collaboration with other initiatives working on the same thought. We would be very happy to get in contact with you and we will support you with our knowledge but also learn from yours.

### The code
By visualizing and practically show how ownership of your own data could work, it will become easier for others to take stand on the concept.
We strive to reuse as much as possible for not inventing the wheel again. The project in influenced by Mydata.org

The architecture is divided into four subsystem:

- [mydata-app](https://github.com/JobtechSwe/mydata-app): An app were the individuals handles their data.

- [mydata-operator](https://github.com/JobtechSwe/mydata-operator): A technical operator who granted an approval from the individual, manages the communication between the individual, the data snd an external service.

- [mydata-cv](https://github.com/JobtechSwe/mydata-cv): a sample service that reads /writes to the individual’s data after being allowed to. (Data Source and Data Sink)

- [mydata-pds](https://github.com/JobtechSwe/mydata-pds): secure data storage, only available for the individual. PDS stands for Personal Data Storage.
