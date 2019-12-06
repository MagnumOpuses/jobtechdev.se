---
title: ""
date: 2018-01-28T21:58:09+01:00
disableToc: true
menuTitle: ""
weight: 26
---
#### JobTech Search - API for job ads 
# Search API for job adds - getting started
_Please note that this API is in a late BETA. All features except for the one called "ALL JOB ADDS" will remain in our 1.0 but a small refactoring might be needed in the coming weeks._

The aim of this text is to walk you through what you're seeing in the Swagger UI at https://jobs.dev.services.jtech.se/ to give you a bit of orientation on what can be done with the Job Search API's.

## Resources
This API service is divided into four sections.

### 1. Open-API
The endpoints in the first section will return job ads from Arbetsförmedlingen that are currently open for applications. The ads published in Arbetsförmedlingen are tagged with some meta data like "annonsid", "logotypurl", "yrkesbenamning" and "yrkesid" and the information in the ads is divided into sections with headlines like "annonsrubrik", "annonstext", "arbetstidvaraktighet" and "loneform". The ads might have information in all the fields or some of them.

#### Open-Ad-ID
This endpoint is used for fetching specific job ads with all available meta data, by their ad ID number. The ID number can be found by doing a query with the other endpoint within this section, Open-Search.

#### Open-Search
The second endpoint searches all job ads that are currently open for application, with the possibility to filter by specific parameters like occupation, location, or required skills. Some are these parameters are set using an concept-ID which you find in Jobtech-Taxonomy (see the fourth headline on the page).

Exception: The parameters "Municipality" and "Region" also needs to be set with an ID but with these two parameters you need the shorter "id" from Jobtech-Taxonomy, instead of the longer "Concept-ID".

### 2. AF-Job-Ads
#### Complete
This endpoint is meant to help you create autocomplete functions a.k.a type aheads. The result set will return the most frequent job market terms starting with the letters you put in. It's most easily described using the q field. Query for "läk" and you will get results "läkarsekreterare", "läkare", "läkemedel" etc. If you put in more than one word you get the most common terms in the context of the first word. For example "läkare L" will give you "linköping","lund" etc.

#### Search
This endpoint is mainly made for Arbetsförmedlingen's internal systems and will not be further described in this documentation.

### 3. All-Job-Ads
PLEASE NOTICE These endpoints can be used for Hack 4 Sweden but will be deprecated some time later this spring or summer. We hope to be able to bring back this functionality later on.

This data-set tries to bring you a complete set of current job ads from any source in Sweden. Since the sources of these ads are external webpages we dont have as much meta-data for them as for the internal ads from Arbetsförmedlingen.

### 4. Jobtech-Taxonomy
This endpoint provides labour market terms and their corresponding unique ID. The ID's are required in some parameters in the /open/search endpoint.

Taxonomy contains terms within different categories. In the drop down list under "filter by type" all available categories are listed.

* Occupations. You can query three levels of occupation terms. The top level is Occupation Fields, which are broad areas of labor. The next level is Occupation Groups, which narrows the areas down a bit. Each Occupation Group belongs to a specific Occupation Field - it's "parent". The third and final level is Occupation Name, which is individual occupations. Each Occupation Name also has a "parent" Occupation Group.
* Skills. These terms are often used in job ads and describes what a person knows or can do related to their job.
* Language. In this category most human languages (a.k.a. Natural languages) are listed.
* Geographic places (Country, Region, Municipality). Most languages in the world are listed in the category Country. The next level, Regions, are Swedish regions with unique NUTS 3 Codes in accordance with Eurostats. In Sweden, the regions are similar to "Län". Each Region has a "parent" in the Country level. The third level of geographic places is the Municipality level. This is the Swedish "kommuner". Each Municipality has a "parent" in the Region level.
* Wage type. This category contains descriptions of different forms of payment, like fixed monthly salary and commission.
* Employment type. This lists different employment types, like jobs during the summer, or work on demand.
* Driving license. This contains all different driver's license categories in Sweden, and their description.
* Worktime extent. This contains terms like full time job and part time job.
* Sun education fields. These three categories describes different fields of education. The top level, Sun Education Field 1, contains the broad descriptions of education areas. The next level Sun Education Field 2 narrows the fields down a bit. Sun Education Field 3 contains specific education programs or trainings. Each concept in level 3 has a "parent" in level 2, and each level 2 concept has a level 1 "parent".
* Sun education levels. The three categories describes different levels of formal education in Sweden. Sun Education Level 1 is the top category and contains broad descriptions of education levels. The next level is Sun Education Field 2 describes more specific levels or generic degrees. Sun Education Field 3 contains specific degrees from Swedish formal education. Each concept in level 3 has a "parent" in level 2, and each level 2 concept has a level 1 "parent".
## API key
For all API's, use the key "h4s".

## Examples
### Getting all the adds for souschefs
The easiest way to get the adds that contain a specific word is to use a free text query (q) with the Open-Search endpoint. This will give you ads with the specified word in either headline, ad description or place of work.

Request URL:

    https://jobs.dev.services.jtech.se/open/search?q=souschef&offset=0&limit=10
If you want to be more certain that the ad is for a souschef - and not just mentions a souschef - you can use the occupation ID in the field "occupation". If the ad has been registered by the recruiter with the occupation field set to "souschef", the ad will show up in this search. To do this query you use both the Jobtech-Taxonomy endpoint and the Open-Search endpoint. First of all, you need to find the occupation concept-ID for souschef by text searching (q) in Jobtech Taxonomy for the term in the right category (occupation-name).

Request URL:

    https://jobs.dev.services.jtech.se/vf/search?offset=0&limit=10&q=souschef&type=occupation-name&show-count=false
Now you can use the concept-ID in Open-Search to fetch the ads registered with the term souschef in the occupation field

Request URL:

    https://jobs.dev.services.jtech.se/open/search?occupation=iugg_Qq9_QHH&offset=0&limit=10
This will give a smaller result set with a higher certainty of actually being for souschef jobs, however the result set will likely miss a few relevant ads since the occupation field isn't always set by recruiters. You might find that a larger set is more useful since there are multiple sorting factors working to show the most relevant hits first anyway.

### Getting all the jobs in the IT industry
Firstly use the Jobtech-Taxonomy endpoint to list the different occupation fields.

Request URL:

    https://jobs.dev.services.jtech.se/vf/search?offset=0&limit=10&type=occupation-field&show-count=false
In the response body you’ll find all occupation fields listed and you can find the Concept-ID for Data/IT. Use this with the Open Search endpoint (field) to only get job ads within the specific industry.

Request URL:

    https://jobs.dev.services.jtech.se/open/search?field=apaJ_2ja_LuF&offset=0&limit=10
### Getting all jobs as a pre school teacher in specific location
In the Jobtech Taxonomy endpoint you'll get the Concept-ID for the occupation name "förskollärare". If this is done with a free text query you’ll find that there is a skill, an occupation group and an occupation name related to the term.

Request URL:

    https://jobs.dev.services.jtech.se/vf/search?offset=0&limit=10&q=f%C3%B6rskoll%C3%A4rare&show-count=false
If you are only interested in the specific occupation you might as well filter the results to only show you Occupation names. You will see the result "Lärare i förskola/Förskollärare" with it's attached Concept-ID.

Request URL:

    https://jobs.dev.services.jtech.se/vf/search?offset=0&limit=10&q=f%C3%B6rskoll%C3%A4rare&type=occupation-name&show-count=false
Now you need to get the Concept-ID for the location you are interested in. How about Luleå? Use the Jobtech Taxonomy endpoint to find the municipality ID (note that for Municipalities and Regions you'll have to use the plain old "id" instead of the Concept-ID). Put "Luleå" in the text query box and filter the results to only show you Municipalities.

Request URL:

    https://jobs.dev.services.jtech.se/vf/search?offset=0&limit=10&q=Lule%C3%A5&type=municipality&show-count=false
So now when we got the conceptId for Luleå and Förskollärare we can combine them in the Open Search endpoint.

Request URL:

    https://jobs.dev.services.jtech.se/open/search?occupation=3oGcRGX83S&municipality=51WRN_Mtjk&offset=0&limit=10
Not a whole lot of adds? Lets expand the search with Norrbottens län. When using both the municipality and the region, the more local area - municipality - will be prioritised in the sorting of the results. To get the id for the region Norbotten search for it in the Jobtech Taxonomy endpoint.

Request URL:

    https://jobs.dev.services.jtech.se/vf/search?offset=0&limit=10&q=norrbotten&type=region&show-count=false
Now we add the region ID to the previous search for job ads (pre school teachers in Luleå) in Open Search.

Request URL:

    https://jobs.dev.services.jtech.se/open/search?occupation=rUcW_z9R_Qsv&municipality=2580&region=25&offset=0&limit=10
Hopefully a few more hits this time.

### How to use offset
A very common use case is COLLECT ALL THE ADDS. Typically an automated process with a set time frame. We want all the adds so lets max out the result set limit to 100.

Request URL

    https://jobs.dev.services.jtech.se/open/search?published-after=2019-02-14T13%3A13%3A13&offset=0&limit=100
In my case the first row of the response says "antal_platsannonser": 168, while I got just 100 adds. How do i get the next 68? I use the offset to 101 and fetch the last 68 adds.

Request URL

    https://jobs.dev.services.jtech.se/open/search?published-after=2019-02-14T13%3A13%3A13&offset=101&limit=100
© 2019 GitHub, Inc.

#### Endpoint

````
 https://jobs.dev.services.jtech.se/
````
[Getting started (github)](https://github.com/JobtechSwe/sokannonser-api/blob/H4S-documentation/H4S-GETTINGSTARTED.md)
