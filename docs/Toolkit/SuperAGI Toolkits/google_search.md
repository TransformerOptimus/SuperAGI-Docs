# Google Search

The SuperAGI Google Search Tool helps users perform a Google search and extract snippets and webpages.

## Features

1. **Google Search:** Perform Google searches using the SuperAGI Google Search Tool and obtain relevant results.

2. **Webpages Extraction:** Extract webpages from the search results for further analysis and processing.

## Installation

For the installation of Google Search tool, you will require `Google API Key` and `Custom Search Engine ID`.

### Follow the steps below to get your Google API Key:

1. Navigate to [https://console.cloud.google.com/](https://console.cloud.google.com/)

![Google Console](/../assets/images/Google_Console.png)

2. From the Left Navigation Menu, hover over `APIs & Services` and then `Enabled APIs and Services`

![Enabled APIs](/../assets/images/Enabled_APIs.png)

3. Create a new project.

![New Project](/../assets/images/Create_a_Project.png)

4. After Creation of a new project, move to the `Library` tab and Search for `Custom Search API`

![Library](/../assets/images/Custom_API_Search.png)

5. Open Custom Search API and Click on `TRY THIS API`

![Try API](/../assets/images/Try_Google_API.png)

6. You will be redirected to a new window where you will find the `GET A KEY` button.

![Get a Key](/../assets/images/Get_a_key.png)

7. After Agreeing to the terms and conditions you'll recieve your Google API key.

![Copy your Key](/../assets/images/Copy_your_key.png)


### Follow the steps below to get your Search Engine ID:

1. Navigate to [https://programmablesearchengine.google.com/controlpanel/create](https://programmablesearchengine.google.com/controlpanel/create)

![Create SE](/../assets/images/Create_SE.png)

2. Name your Custom Search Engine, select whether you want the crawlers to search specific domains or the entire web, turn on Image Search and Safe Search according to your needs and then click on `Create`

![Copy ID](/../assets/images/Copy_SE_ID.png)

Once you've collected the `Google API key` and `Custom Search Engine ID`, Copy them and paste them into the Google Search Toolkit Configuration tab.

![SuperAGI Search Config](/../assets/images/Google_search_config.png)

## Running SuperAGI Google Search Tool

Select the Google Search Toolkit during the agent creation and then you can simply ask your agent about latest information about anything from the internet and your agent will get that information for you.