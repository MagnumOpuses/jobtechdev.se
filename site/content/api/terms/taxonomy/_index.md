---
title: "Taxonomy"
disableToc: true'
menuTitle: "Taxonomy"
weight: 33
date: 2019-01-19T20:06:16+01:00
---

Taxonomi Service contains data commonly used by Arbetsförmedlingen.
For example you can find all occupation names, all Unemployment Benefit Societies (a-kassor), local groups (SSYK), and much more.

{{% notice tip %}}
You need to use the language code 502 (Swedish) to get the results of the requests.
{{% /notice %}}

#### Endpoint
```
http://api.arbetsformedlingen.se/taxonomi/v0/TaxonomiService.asmx?
```
[Taxonomy webservice](http://api.arbetsformedlingen.se/taxonomi/v0/TaxonomiService.asmx?)


#### Taxonomy Occupations CSV - OccupationField, SSYK, OccupationName

If you need an easy way to connect SSYK to occupationNameId (yrkeid), or occupationFieldId you can use this csv.

[Taxonomy Occupations CSV](https://github.com/JobtechSwe/taxonomy-dump)
