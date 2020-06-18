---
title: "Yrkesprognoser"
menuTitle: "Yrkesprognoser "
weight: 19
description: "Yrkesprognos APIet innehåller 1 och 5 åriga prognoser."


---
| COVID 19: Covid-19 har förändrat arbetsmarknadsläget för vissa yrken. De prognoser som ska tolkas med försiktighet har markerats i [Bedömmningar att flagga](/files/covid.csv). Nya prognoser publiceras i början av 2021.   |
| --- |


## Af Occupation Forecast - Getting started

API Af Occupation Forecasts contains 1 and 5 years forecasts for different occupations. The Forecasts are made and published in February 2018.
The forecasts are based on the standard SSYK (Swedish standard occupation classification). Read more about <a href="http://www.scb.se/dokumentation/klassifikationer-och-standarder/standard-for-svensk-yrkesklassificering-ssyk/" target="_blank">SSYK</a>

With API AF Occupation Forecasts it is possible to integrate Arbetsförmedlingen (the Employment Agency) forecasts into in custom built applications.
The API is an open interface without contract or registration requirements.


### Table of Contents

* [Authentication](#authentication)
* [Endpoints](#endpoints)
* [Results](#results)
* [Errors](#errors)
* [Use case](#use-case)




### Short introduction
Test the Occupation Forecast API <a href="https://api.arbetsformedlingen.se/af/v2/forecasts/api/#!/forecasts/" target="_blank"> https://api.arbetsformedlingen.se/af/v2/forecasts/api/#!/forecasts/</a>.


### Authentication

This Api does not requier any authentication.



### Endpoints
All endpoints requires some Id:s or code: these could be found here:  
SSYK : https://api.arbetsformedlingen.se:443/af/v2/forecasts/good_to_have/occupationalName/list  
OccupationalAreaId : https://api.arbetsformedlingen.se:443/af/v2/forecasts/good_to_have/occupationalArea/list


The endpoints for Af Occupation forecast API are:

* [/Description/{ssyk}](#description) 
* [/getPrognosGeoJson/{ssyk}](#getprognosgeojson) 
* [/occupationalArea/forcasresRefs/list](#occupationalarea) 
* [/occupationalArea/forcastsRefs/list/{occupationalAreaId}](#occupationalarea) 
* [/occupationalArea/longTerm/{occupationalAreaId}](#occupationalarea) 
* [/occupationalArea/shortTerm/{occupationalAreaId}](#occupationalarea) 
* [/occupationalGroup/longTerm/{ssyk}](#occupationalgroup)
* [/occupationalGroup/longTerm/{ssyk}](#occupationalgroup)
* [/occupationalGroup/shortTerm/{ssyk}](#occupationalgroup)
* [/version - version Api Version](#version)


##### description
/description/{ssyk}  
Get forecast information about given SSYK.


##### getPrognosGeoJson
/getPrognosGeoJson/{ssyk}  
Gives you the forecast index based on coordinates.

##### occupationalArea
 
/occupationalArea/forcastsRefs/list  
Get references to all available forecasts, listed per occupational area ('yrkesområde').

/occupationalArea/forcastsRefs/list/{occupationalAreaId}  
Get available forecasts for given occupational area id ('yrkesområde').

/occupationalArea/forcastsRefs/list/{occupationalAreaId}  
Get available forecasts for given occupational area id ('yrkesområde).

/occupationalArea/longTerm/{occupationalAreaId}  
Get long term prognosis per Occupational Area ('yrkesområde').

##### occupationalGroup
/occupationalGroup/longTerm/{ssyk}
Get short and medium long term prognosis per Occupational Area ('yrkesområde').

/occupationalGroup/longTerm/{ssyk}
Get long term prognosis per occupational group ('yrkesgrupp').

/occupationalGroup/shortTerm/{ssyk}
Get short and medium long term prognosis per occupational group ('yrkesgrupp').

##### version
/version - version Api Version

Get the version of the Api.



### Results

The results of your queries will be in JSON format. 

### Errors

400 Invalid call/request  
404 Prognosis not found  
500 Internal server error  


### Use cases

