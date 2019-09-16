---
title: "Af Jobs"
disableToc: true
menuTitle: "Af Jobs"
weight: 10
date: 2019-01-19T20:06:16+01:00
type: "github"
description: "The open API “Af Jobs ” for job advertisements will be replaced in 2019 with a new version, the closure will take place on the last of November. The support of the current version will end at September 1, 2019 "
url: "/apis/Af Jobs"   
consoleurl: "/devguide/apiconsole.html?urls.primaryName=Jobs-%20Deprecated"        
---

## Af Jobs

{{% notice info %}}
The open API "Af Jobs " for job advertisements will be replaced in 2019 with a new version, 
the closure will take place on the last of November. The support of the current version will end at September 1, 2019 and the new API will be available in June.   
**A beta version is available already.  
Information on how to access the beta version is available at https://jobtechdev.se/api/beta/jobsearch/**
{{% /notice %}}



The Af Job API contains all current job ads from Swedish Public Employment Service. Somewhere around 100000 job ads, about 3000 new ads are submitted daily by employers, 5 million accesses to the job posting database daily.


>Example of fuzzy matching:
If you are looking for a "bagare" (baker), you also get hits for "Konditor" (confectioner) because these two occupations are closely related.

See the technical description for details requests.





### Table of Contents

* [Authentication](#authentication)
* [Endpoints](#endpoints)
* [Results](#results)
* [Errors](#errors)
* [Use case](#use case)

### Short introduction


The endpoints for .....:  
 You will find the endpoints and documentation [here](/pdf/Teknisk_beskrivning_af_jobs)



### Authentication

The API is an open interface without contract or registration requirements. 




### Endpoints




### Results
Some of the data returned from the service is of the type of fuzzy matching.
This means that the results from a list search results in hits closely related keywords. 
Soft matching takes place in the professions and municipalities.

The results of your queries will be in JSON format. We won't attempt to explain this attribute by attribute in this document. 


### Errors

400 Invalid call/request  
404 Prognosis not found  
500 Internal server error  


### Use cases
<hr>
* 