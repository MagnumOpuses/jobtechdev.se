---
title: "Af Occupation workability"
disableToc: true
menuTitle: "Af Occupation workability"
weight: 10
date: 2019-01-19T20:06:16+01:00
description: "RAF is a documentation that can be used as support and guidance in assessing workforce in health insurance. RAF can also be used in other contexts, for example in connection with Försäkringskassans communication with insured, employers and the Employment Service."
url: "/apis/Af Workability RAF"
consoleurl: "/devguide/apiconsole.html?urls.primaryName=Occupation%20-%20Occupation%20info%20-Work%20ability%20"
---

## Af Occupation Workability - Getting started

Reference material when assessing work ability (RAF) contains groupings of the professions that are expected to make similar demands on ability from a medical perspective.
These requirements are called activity requirements and are described on the basis of common tasks within the group.

RAF is a documentation that can be used as support and guidance in assessing workforce in health insurance. RAF can also be used in other contexts, 
for example in connection with Försäkringskassans communication with insured, employers and the Employment Service.


### Table of Contents

* [Authentication](#authentication)
* [Endpoints](#endpoints)
* [Results](#results)
* [Errors](#errors)
* [Use case](#use case)




### Short introduction

The endpoints for Af Occupation forecast API are:

* 

### Authentication

To access this API you need to request the keys via email below. The information you provide will be used for statistical purpose and for reaching out to you in case of scheduled downtime, bug reporting etc. 
On a second phase, we will use this information to create an account where you will be able to manage your keys directly.  

You can request access to this API via email to **apirequest@jobtechdev.se**
By requesting the API Key, you are authorizing the data you are providing, to be stored for as long as you will have access to this API.  
Please include following in your request:  
**Email Subject:** API request – “Name of the API”  
**Email Body:** Name: Surname: Company name: (if applicable):  
**Application name:** Name of your application  
**Application description:** (please be short)    

Once the keys are acquired, the authentication to the services is done using two query parameters client_id and client_secret. 
These are required on all requests. Below is a sample of how query parameters are used:




### Endpoints





### Results

The results of your queries will be in JSON format. We won't attempt to explain this attribute by attribute in this document. 


### Errors

400 Invalid call/request  
404 Prognosis not found  
500 Internal server error  


### Use cases
<hr>
* 



