---
title: "Examples"
date: 2018-01-28T21:58:09+01:00

weight: 20
# Table of content (toc) is enabled by default. Set this parameter to true to disable it.
# Note: Toc is always disabled for chapter pages
disableToc: "false"
# If set, this will be used for the page's menu entry (instead of the `title` attribute)
menuTitle: ""
# The title of the page in menu will be prefixed by this HTML content
pre: ""
# The title of the page in menu will be postfixed by this HTML content
post: ""
# Set the page as a chapter, changing the way it's displayed
chapter: false
---

### Your first JobTech Dev Taxonomy API query

Once you have obtained your API key, you can test it with a curl query. Replace `YOUR_API_KEY_HERE` with the your own API key.

```bash
curl -X GET "https://open-api.dev.services.jtech.se/taxonomy/search?offset=0&limit=3&show-count=false" -H "accept: application/json" -H "api-key: YOUR_API_KEY_HERE"
```

If successful you will receive a json response that contains a result of three taxonomy entries.

```json
{
  "search": {
    "offset": "0",
    "limit": "3"
  },
  "total": {
    "value": 12495,
    "relation": "eq"
  },
  "result": [
    {
      "conceptId": "tWjg_Y7L_yXK",
      "id": "0",
      "term": "Saknar formell, grundläggande utbildning",
      "typ": "sun-education-level-1",
      "type": "sun-education-level-1"
    },
    {
      "conceptId": "56We_aRa_v1a",
      "id": "0",
      "term": "Allmän utbildning",
      "typ": "sun-education-field-1",
      "type": "sun-education-field-1"
    },
    {
      "conceptId": "nmJt_fJC_a9g",
      "id": "00",
      "term": "Förskoleutbildning",
      "typ": "sun-education-level-2",
      "type": "sun-education-level-2",
      "parentId": "tWjg_Y7L_yXK"
    }
  ]
}
```

We may now proceed with building the application.

### Creating the application

We will use the JavaScript runtime [Node.js](https://nodejs.org) to execute our application.

Let's start by creating a folder and file `app.js` for the application.

```bash
mkdir related-occupation-names
cd related-occupation-names
touch app.js
```

Open the new `app.js` in a text editor of your choice.

{{< tabs name="consume-taxonomy-api" >}}
{{< tab name="Node.js" codelang="js" >}}

/* Import npm package 'https' for request and response handling. */
const https = require('https');

/* Import npm package 'querystring' for building query parameter strings */
const querystring = require('querystring');

/* Define all details of our HTTP request.
 * - 'hostname': The URL of the Taxonomy API
 * - 'path': The endpoint path including query parameters.
 *   - 'limit': Number of result rows to fetch.
 *   - 'q': Freetext query for fetching a filtered result.
 * - 'headers': Additional information passed along with the http request.
 *   - 'accept': The MIME type our client expects as response.
 *   - 'api-key': Your API key used to authenticate Taxonomy API HTTP requests.
 */
let opts = {
    headers: {'accept': 'application/json', 'api-key': 'YOUR_API_KEY'},
    hostname: 'open-api.dev.services.jtech.se',
    path: '/taxonomy/search?' + querystring.stringify({
        'limit': 3,
        'q': 'vakt'
    })    
};

/* Prepare a request object */
let req = https.request(opts, function (res) {
    /* Define handling upon successful data response */
    res.on('data', function (chunk) {
        /* Extract the result rows from the response body and print to console. */
        let data = JSON.parse(chunk)['result'];
        console.log(data);
    });
});

/* Define error handling upon unsuccessful request */
req.on('error', function (err) {
    console.log('Problem with request:', err.message);
});

/* Send the HTTP request, response is handled by the defined callbacks above. */
req.end();

{{< /tab >}}
{{< tab name="Python" codelang="python" >}}

# Import requests library for request and response handling.
import requests 

# The URL of the Taxonomy API
URL = 'https://open-api.dev.services.jtech.se/taxonomy/search'

# Define request parameters
PARAMS = {
    # Number of result rows to fetch.
    'limit': 3,
    # Freetext query for fetching a filtered result.
    'q': 'vakt'
} 

# Define additional information passed along with the http request.
HEADERS = {
    # The MIME type our client expects as response.
    'accept': 'application/json',
    # Your API key used to authenticate Taxonomy API HTTP requests.
    'api-key': 'YOUR_API_KEY'
}

# sending get request and saving the response as response object 
res = requests.get(url = URL, params = PARAMS, headers = HEADERS) 

# Extract the result rows from the response body and print to console.
data = res.json()['result']
print(data)

{{< /tab >}}
{{< /tabs >}}