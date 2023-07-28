# How to add a Custom Toolkit

With a few easy-to-follow steps, you can get started with building and adding your own custom Toolkits to SuperAGI: 

**Step 1**: Set Up Your GitHub Repository. 

First things first, you need a place to store and manage your tool's code. For this, you can use GitHub. Create a new repository and make sure it contains the following files:

- `__init__.py`: This file is crucial as it helps Python recognize your repository as a package. It’s usually an empty file.
- `tool1.py`: This is where the code for your first tool should go.
- `tool2.py`: If you have a second tool, this is where its code should reside.
- `toolname_toolkit.py` : This file will have the toolkit name, and description, followed by all tools and config details of that toolkit.
- `requirements.txt`: This file lists all the dependencies needed for your tool to run smoothly.

Your repository structure should look something like this:

```markdown
Your-Repository-Name 
├── __init__.py 
├── tool1.py 
├── tool2.py 
├── toolname_toolkit.py
└── requirements.txt
```

You can find a sample repo here to understand custom tool building: https://github.com/luciferlinx101/GreetingTool

**Step 2**: Use the following pip command (https://pypi.org/project/superagi-tools/) to get the required APIs and BaseTool related classes to easily integrate your tool with SuperAGI. Run the following command in your terminal or command prompt:

```bash
pip install superagi-tools
```

This will install the necessary SuperAGI base tool and toolkit class.

**Step 3**: Start SuperAGI using “Docker compose up” Link Your GitHub Repository to SuperAGI. Next, you need to add your GitHub repository link to SuperAGI’s front-end. This is how SuperAGI will know where to find your tool. When you add the GitHub link, it is stored in a database. Also, make sure to provide a name for your toolkit, which will be used to identify it on the SuperAGI platform. The GitHub link and toolkit name are stored in a file called `tools.json` like this:

```json
{ "toolkit-name": "your-github-link" }
```

**Step 4**: Once your GitHub link is added, the SuperAGI tool manager will take care of installing your tool along with it’s dependencies. It will be placed in a directory named `superagi/tools`.

**Step 5**: Once this is added, you have to restart your docker. Now that your tool is installed, it’s time to build and run it. Run the following command:

```bash
docker compose down
docker compose up --build
```

This command restarts your docker, builds it again, and runs it.

During the Docker run, your tool’s dependencies (specified in `requirements.txt`) will be installed. This is done automatically on startup by a script called `install-tool-dependency.sh`. It automatically installs all the necessary dependencies for your tool. You'll now be able to use the Toolkit on your local GUI.