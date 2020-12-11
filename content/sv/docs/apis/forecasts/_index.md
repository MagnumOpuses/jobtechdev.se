---
title: "Yrkesprognoser"
menuTitle: "Yrkesprognoser "
weight: 19
description: "Yrkesprognos APIet innehåller 1 och 5 åriga prognoser."

metadescription: "Läs mer här"

---
| COVID 19: Covid-19 har förändrat arbetsmarknadsläget för vissa yrken. De prognoser som ska tolkas med försiktighet har markerats i filen [Bedömmningar att flagga](/files/covid.csv). Nya prognoser publiceras i början av 2021.   |
| --- |


## Af Occupation Forecast - Getting started

API Af Yrkesprognoser innehåller 1 och 5 års prognoser för olika yrken. Prognoserna är skapade och publicerade i februari 2018.
Prognoserna baseras på standarden SSYK (standard för svensk yrkesklassificering). Läs mer om <a href="http://www.scb.se/dokumentation/klassifikationer-och-standarder/standard-for-svensk-yrkesklassificering-ssyk/" target="_blank">SSYK</a>


Med Yrkesprognos APIet är det möjligt att integrera Arbetsförmedlingens prognoser med skräddarsydda applikationer.
Yrkesprognos APIet är öppet utan några krav.



### Table of Contents

* [Authentication](#authentication)
* [Endpoints](#endpoints)
* [Results](#results)
* [Errors](#errors)
* [Use case](#use-case)




### Short introduction

Prova APIet med hjälp av <a href="https://api.arbetsformedlingen.se/af/v2/forecasts/api/#!/forecasts/" target="_blank">swagger gränsnittet</a>.


### Authentication

Detta API kräver inga nycklar.



### Endpoints

De id du behöver hittar du här: <a href =" https://api.arbetsformedlingen.se:443/af/v2/forecasts/good_to_have/occupationalName/list> SSYK
  
<a href ="https://api.arbetsformedlingen.se:443/af/v2/forecasts/good_to_have/occupationalArea/list">OccupationalAreaId </a>

De olika endpointsi Yrkesprognos APIet är:

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
Prognos information om angivet SSYK.


##### getPrognosGeoJson
/getPrognosGeoJson/{ssyk}  
Prognos indexbaserat på kordinater.

##### occupationalArea
 
/occupationalArea/forcastsRefs/list  
Referenser till alla tillgängliga prognoser, listade per occupational area ('yrkesområde').

/occupationalArea/forcastsRefs/list/{occupationalAreaId}  
Alla prognoser för angivet occupational area id ('yrkesområde').

/occupationalArea/longTerm/{occupationalAreaId}  
Långa prognoser per Occupational Area ('yrkesområde').

##### occupationalGroup
/occupationalGroup/longTerm/{ssyk}
Korta och medium långa prognoser per Occupational Area ('yrkesområde').

/occupationalGroup/longTerm/{ssyk}
Långa prognoser per occupational group ('yrkesgrupp').

/occupationalGroup/shortTerm/{ssyk}
Korta och medium långa prognoser per occupational group ('yrkesgrupp').

##### version
/version - version Api Version

Visar APIet version



### Results

Resultat visas i JSON format. 

### Errors

400 Invalid call/request  
404 Prognosis not found  
500 Internal server error  


### Use cases

