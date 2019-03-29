---
title: "Open Jobs"
date: 2018-01-28T21:58:09+01:00
disableToc: true
menuTitle: "Jobs - Open Jobs"
weight: 25
---

The Open Job API contains all current job ads from Swedish Public Employment Service. Somewhere around 100000 job ads, about 3000 new ads are submitted daily by employers, 5 million accesses to the job posting database daily.

[//]: #{{% notice tip %}}
A API-key i necessary. Get it here.
{{% /notice %}}

<!--
{{< oai-spec url="http://develop.sokapi.platsbanka.nu/swagger.json" api_key="special-key" >}}
-->

{{< swagger-spec url="http://develop.sokapi.platsbanka.nu/swagger.json" >}}

*With the API it is free of charge for everyone to interact with Arbetsförmedlingens job ad database with in custom built services.*

The API is an open interface without contract or registration requirements. Some of the data returned from the service is of the type of fuzzy matching.
This means that the results from a list search results in hits closely related keywords. Soft matching takes place in the professions and municipalities.

>Example of fuzzy matching:
If you are looking for a "bagare" (baker), you also get hits for "Konditor" (confectioner) because these two occupations are closely related.

See the technical description for details requests.

## Endpoint
````
https://jobtechdev.se/swagger/index.html
````


Learn more about the Platsbanken API or start use the API right away

[Open Jobs API (Platsbanken)](/https://jobtechdev.se/doc/api/apiconsole/?urls.primaryName=Jobs%20-%20Online%20Jobs%20-%20Deprecated#/platsannonser)
