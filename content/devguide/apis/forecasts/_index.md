---
title: "Af Occupation Forecast"
disableToc: true
menuTitle: "Af Occupation Forecast"
weight: 10
date: 2019-01-19T20:06:16+01:00
description: "API Af Occupation Forecasts contains 1 and 5 years forecasts for different occupations. The Forecasts are made and published in February 2018"
type: "github"


---

## Af Occupation Forecast - Getting started

<hr>

PI Af Occupation Forecasts contains 1 and 5 years forecasts for different occupations. The Forecasts are made and published in February 2018.
The forecasts are based on the standard SSYK (Swedish standard occupation classification)
Read more about [SSYK](http://www.scb.se/dokumentation/klassifikationer-och-standarder/standard-for-svensk-yrkesklassificering-ssyk/)
With API AF Occupation Forecasts it is possible to integrate Arbetsförmedlingen (the Employment Agency) forecasts into in custom built applications.
The API is an open interface without contract or registration requirements.


### Table of Contents
<hr>
* Authentication
* Endpoints
* Results
* Errors
* Use case




### Short introduction
<hr>
The endpoints for Af Occupation forecast API are:

* /Description/{ssyk} - Get forecast information about given SSYK
* /getPrognosGeoJson/{ssyk} - Get Prognos GeoJson for ssyk
* /occupationalArea/forcasresRefs/list - Get references to all available forecasts, listed per occupational area ('yrkesområde')
* /occupationalArea/longTerm/{occupationalAreaId - Get available forecasts for given occupational area id ('yrkesområde
* /occupationalArea/shortTerm/{occupationalAreaId} - Get long term prognosis per Occupational Area ('yrkesområde')
* /occupationalGroup/longTerm/{ssyk} - Get short and medium long term prognosis per Occupational Area ('yrkesområde')
* /occupationalGroup/longTerm/{ssyk} - Get long term prognosis per occupational group ('yrkesgrupp')
* /occupationalGroup/shortTerm/{ssyk} - Get short and medium long term prognosis per occupational group ('yrkesgrupp')
* /version - version Api Version


### Authentication
<hr>
This Api does not requier any authentication



### Endpoints
<hr>





### Results
<hr>



### Errors
<hr>


### Use cases
<hr>




