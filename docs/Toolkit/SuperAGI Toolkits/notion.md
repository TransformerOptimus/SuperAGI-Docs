# Notion

Introducing Notion Toolkit to increase your productivity via SuperAGI. With Notion toolkit, you can:

1. Create Pages in a database (Notion Create Tool)
2. Fetch the contents of a Page (Notion Fetch Tool)

# Setting up notion

The notion toolkit can be installed from the marketplace. To setup and use notion toolkit, users need to create a workspace in notion for which the user is the admin.

## Notion Integration Token

### Step 1

Go to https://www.notion.so/my-integrations and click on “Create new integration”

![alt_text](/../assets/images/NOTION1.png)

### Step 2

Fill in the required details and connect the integration to the appropriate workspace(make sure that you are the admin of that workspace)

![alt_text](/../assets/images/NOTION2.png)

### Step 3

You can get your Integration Token after submitting the previous form. Click show and then copy the Internal Integration Secret.


![alt_text](/../assets/images/NOTION3.png)

## Database ID

### Step 1

Create a teamspace and go to one of the pages(database) in that teamspace. Go to the settings of that page and the integration name will be visible in the “+Add connections” section.

![alt_text](/../assets/images/NOTION4.png)

### Step 2

After making the connection, database ID can be found in the URL. The format of the url will be https://www.notion.so/{workspace_name}/{database_id}?v={view_id}.
Copy the database_id.

![alt_text](/../assets/images/NOTION5.png)

## Using Notion

Paste the Integration token and the database ID in the tool configurations and the Notion Toolkit will be good to use.

![alt_text](/../assets/images/NOTION6.png)