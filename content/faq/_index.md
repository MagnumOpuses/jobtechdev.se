{
"title":"FAQ",
"FAQ":[
    {
    "title":"General Questions",
    "qa":[
          {
           "q":"Am I allowed to cache and store data in my own backend?",
           "a":"Yes, you are allowed to cache and store data from our open APIs to your own backend."
          },
          {
           "q":"Can I add an application of my own as a showcase?",
           "a":"Yes, we'd love to show what you've done! To add a sample, it needs to be open source. Please email us at contact@jobtechdev.se if you would like to publish a sample of your own."
          },
          {
           "q":"What's the difference between SSYK and Yrkesid?",
           "a":"In short, SSYK is the standard for the Swedish Standard Classification of Occupations. SSYK also refers to the whole occupation classification structure. Yrkesid represents a specific occupation."
          },
          {
           "q":"How can I get in touch with JobTech?",
           "a":"If you would like to contact us, please e-mail us at <a href='mailto:contact@jobtechdev.se'>contact@jobtechdev.se</a>"
          }                   
    ]
    },  
    {
         "title":"Job Search",
         "qa":[
               {
                "q":"I lost my API key, could I get it back?",
                "a":"Just register for a new key, with the same e-mail address and you will get it back."
               },
               {
                "q":"How can I get all job ads from outside Sweden?",
                "a":"You could do negative query for Sweden, search?country=-199, that will give you every ad that not have Sweden as country."
               },
               {
                "q":"Which SLA does the API have?",
                "a":"We do not have any plans for SLA for this API yet."
               },
               {
                "q":"What uptime can we expect?",
                "a":"This is the same API used by Arbetsförmedlingens Platsbank, the expected uptime is 24/7."
               },
               {
                "q":"How can I get all job ads?",
                "a":"If you want all ads we recommend you to use the Bulk API."
               }, 
               {
                "q":"The API deliver to much information, can I filter some how?",
                "a":"You could use X-files header to decide what information you want. For example: curl -X GET “https://open-api.dev.services.jtech.se/search?offset=0&limit=10” -H “accept: application/json” -H “api-key: XXXXX” -H “X-Fields: {hits{id, headline}}”"
               }                                
          ]
    }                 
]
}
  <hr>
{{< FAQ >}}
