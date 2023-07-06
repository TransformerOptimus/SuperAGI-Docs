# Slack

This SuperAGI Tool lets users send messages to Slack Channels and provides a strong foundation for use cases to come.

## **Features:**

1. Send Message - This tool gives SuperAGI the ability to send messages to Slack Channels that you have specified

### **Slack Configuration:**

1. Create an Application on SlackAPI Portal
    
![](https://github.com/Phoenix2809/SuperAGI/assets/133874957/9e612d67-439c-4e45-901a-38c61b52b08f)

2. Select "from scratch"
    
![](https://github.com/Phoenix2809/SuperAGI/assets/133874957/c9dcfb6a-8403-49d1-bdf4-680dd1d9d8bf)

3. Add your application's name and the workspace for which you'd like to use your Slack Application
    
![](https://github.com/Phoenix2809/SuperAGI/assets/133874957/af21f530-25aa-4bbc-a555-3d52f9bd42eb)
    
4. Once the app creation process is done, head to the "OAuth and Permissions" tab

![](https://github.com/Phoenix2809/SuperAGI/assets/92881074/38e8761d-5d48-4d94-bf36-0c9561a96942)


5. Find the “**bot token scopes”** and define the following scopes:
    
    **"chat:write",**  and save it

![](https://github.com/Phoenix2809/SuperAGI/assets/133874957/7d1d00a9-ff10-4694-9781-490e4f9b80d8)
    
6. Once you've defined the scope, install the application to your workspace

![](https://github.com/Phoenix2809/SuperAGI/assets/133874957/fe206e70-14d4-4595-bbcc-f92ad2a7e950)

7. Post installation, you will get the bot token code

![](https://github.com/Phoenix2809/SuperAGI/assets/92881074/10581710-12e5-4bc8-a1e8-18d1a892faff)


8. Once the installation is done, you'll get the Bot User OAuth Token, which needs to be added in the Slack Toolkit Page

![](https://github.com/Phoenix2809/SuperAGI/assets/133874957/2ecf1abf-1384-41f1-a317-c77d20f55330)

Once the configuration is complete, you can install the app in the channel of your choice and create an agent on SuperAGI which can now send messages to the Slack Channel.
