---
title: "Af Occupation info"
disableToc: true
menuTitle: "Af Occupation Info"
weight: 31
date: 2019-01-19T20:06:16+01:00
---

AF Occupational info is an API, containing descriptions of nearly 350 different occupations. The API is supposed to be used by anyone who wants to download texts and descriptions of one or more professions from the Swedish Public Employment Service Profession A-Ö application.

To access this API you need to request the keys via email below. The information you provide will be used for statistical purpose and for reaching out to you in case of scheduled downtime, bug reporting etc. On a second phase, we will use this information to create an account where you will be able to manage your keys directly.


#### Authentication
Once the keys are acquired, the authentication to the services is done using two query parameters client_id and client_secret. These are required on all requests. Below is a sample of how query parameters are used:
````
https://apier.arbetsformedlingen.se/yrkesinfo/publik/raf/v1/yrken?client_id=123&client_secret=123
````
By requesting the API Key, you are authorizing the data you are providing, to be stored for as long as you will have access to this API.

{{% notice info %}}
**Swedish Public Employment Service API** (Arbetsförmedlingens API)  
You can request access to this API via email to <apirequest@jobtechdev.se>  
Please include following in your request:  
**Email Subject:** API request – "Name of the API"  
**Email Body:**Name:  Surname:  Company name: (if applicable):  
**Application name:** Name of your application  
**Application description:** (please be short):  
{{% /notice %}}
#### Endpoint
````
https://jobtechdev.se/raml_vagledning/index.html#docs/summary/summary
````

[AF Occupations info ](/raml_vagledning/index.html#docs/summary/summary)
