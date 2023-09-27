---
sidebar_position: 1
---


# Python SDK

## SuperAGI Client Library

The SuperAGI client library is a Python library that provides a convenient way to interact with the SuperAGI API. It allows developers to easily create, manage, and run autonomous agents using the SuperAGI framework.

## Initialization

The SuperAGI-Client library is designed to help you seamlessly interact with the SuperAGI platform. To start, first install the library:

```bash
pip install superagi-client
```

After installation, initialize the SuperAGI-Client:

```python

from superagi_client import Client

client = Client(api_key="YOUR_API_KEY", url="YOUR_OPTIONAL_URL")
```

## Parameters:

- **`api_key`**: Your unique API key for authentication.
- **`url`**: (Optional) The URL endpoint for the SuperAGI service. By default, it is set to "[https://app.superagi.com/](https://app.superagi.com/)".

## Creating an Agent with SuperAGI

An agent is the primary entity in SuperAGI that carries out tasks. To create one:

```python

from superagi_client import AgentConfig

agent_config = AgentConfig(
    name="Sample Agent",
    description="A descriptive purpose of the agent.",
    goal=["Define a specific task for the agent"],
    instruction=["Provide additional guiding instructions"],
    agent_workflow="Goal Based Workflow",
    constraints=[],
    tools=[{"name": "ToolName"}],
    iteration_interval=500,
    max_iterations=10,
    model="gpt-4"
)

agent = client.create_agent(agent_config=agent_config)

```

## Agent Configuration:

- **`name`**: A string representing the name of the agent.
- **`description`**: A brief description of the agent's purpose.
- **`goal`**: A list of goals/tasks you want the agent to achieve.
- **`instruction`**: A list of specific instructions to guide the agent's approach.
- **`agent_workflow`**: Workflow type for the agent. Currently, only "Goal Based Workflow" is supported.
- **`constraints`**: (Optional) A list of any constraints you want to place on the agent's operations.
- **`tools`**: A list of dictionaries where each dictionary defines a tool the agent can use. Example: **`{"name": "ReadFile"}`**.
- **`iteration_interval`**: The time interval (in milliseconds) between each iteration/check by the agent.
- **`max_iterations`**: The maximum number of iterations allowed for the agent.
- **`model`**: The AI model to be used, e.g., "gpt-4".

## Managing Agent Runs

Once the agent is created, you can initiate its runs, monitor their statuses, and pause or resume them if required.

## Starting an Agent Run:

```python
agent_id = agent['agent_id']
run_agent = client.create_agent_run(agent_id=agent_id)

```

This starts an agent run and the run_agent contains the **`run_id`** for the initiated run.

## Checking the Status of Agent Runs:

```python
run_status = client.get_agent_run_status(agent_id=agent_id)

```

This retrieves the status of the runs associated with the specified **`agent_id`**. To filter specific runs or statuses, you can utilize the **`AgentRunFilter`** type. For instance, to get the status of runs with specific **`run_ids`**:

```python

from superagi_client import AgentRunFilter

filter_config = AgentRunFilter(run_ids=[run_id_1, run_id_2])
run_status = client.get_agent_run_status(agent_id=agent_id, agent_run_filter=filter_config)

```

## Pausing and Resuming Agent Runs:

If needed, you can pause specific agent runs and later resume them.

```python
client.pause_agent(agent_id=agent_id, agent_run_ids=[run_id])
client.resume_agent(agent_id=agent_id, agent_run_ids=[run_id])

```

## Updating an Agent's Configuration:

Over time, if you want to update any agent's parameters:

```python

from superagi_client import AgentUpdateConfig

updated_config = AgentUpdateConfig(
    name="Updated Agent Name",
    goal=["New goal for the agent"]
)

client.update_agent(agent_id=agent_id, agent_update_config=updated_config)

```

The **`AgentUpdateConfig`** contains optional parameters allowing you to update only specific attributes of an agent.

## Fetching Resources of Agent Runs:

To inspect the resources associated with certain runs:

```python
resources = client.get_agent_run_resources(agent_run_ids=[run_id])
```

## Data Types in SuperAGI-Client

### 1. AgentSchedule

Defines the scheduling attributes of an agent.

**Attributes**:

- **`agent_id`**: (Optional) An integer representing the ID of the agent.
- **`start_time`**: **`datetime`** indicating when the agent should begin its task.
- **`recurrence_interval`**: (Optional) A string indicating how frequently the agent should be run (e.g., 'daily', 'weekly').
- **`expiry_date`**: (Optional) A **`datetime`** indicating when the agent's task schedule should expire.
- **`expiry_runs`**: (Optional) An integer representing after how many runs the agent's task should expire. By default, it's set to -1 (indicating no expiration based on number of runs).

### 2. AgentConfig

Represents the configuration attributes required to set up an agent.

**Attributes**:

- **`name`**: Name of the agent.
- **`description`**: Brief description of the agent.
- **`project_id`**: (Optional) Associated project ID.
- **`goal`**: Goals or tasks you want the agent to achieve.
- **`instruction`**: Specific instructions guiding the agent.
- **`agent_workflow`**: Workflow type. Currently, "Goal Based Workflow" is supported.
- **`constraints`**: (Optional) Constraints on the agent's operations.
- **`tools`**: Tools available for the agent.
- **`LTM_DB`**: (Optional) Reference to a Long-Term Memory Database.
- **`exit`**: (Optional) Conditions upon which the agent should terminate.
- **`permission_type`**: (Optional) Permission level for the agent.
- **`iteration_interval`**: Time between agent iterations.
- **`model`**: AI model, e.g., "gpt-4".
- **`schedule`**: (Optional) Schedule details for the agent.
- **`max_iterations`**: Maximum iterations for the agent.
- **`user_timezone`**: (Optional) User's timezone.
- **`knowledge`**: (Optional) Reference to the agent's knowledge base.

### 3. AgentUpdateConfig

Describes the configuration for updating an existing agent. All parameters are optional, which means you only need to include the ones you want to update.

**Attributes**:

- **`name`**: (Optional) Updated name of the agent.
- **`description`**: (Optional) New or revised description for the agent.
- **`project_id`**: (Optional) If you wish to change or assign a project ID.
- **`goal`**: (Optional) Modify or redefine the goals or tasks you want the agent to achieve.
- **`instruction`**: (Optional) Change or provide new specific instructions guiding the agent.
- **`agent_workflow`**: (Optional) New workflow type if changing. Currently, "Goal Based Workflow" is supported.
- **`constraints`**: (Optional) If you need to add or modify constraints on the agent's operations.
- **`tools`**: (Optional) Update or change the tools available for the agent.
- **`LTM_DB`**: (Optional) Change or update the reference to a Long-Term Memory Database.
- **`exit`**: (Optional) Modify conditions upon which the agent should terminate.
- **`permission_type`**: (Optional) Change the permission level for the agent.
- **`iteration_interval`**: (Optional) Modify the time between agent iterations.
- **`model`**: (Optional) Change the AI model, e.g., if you want to switch from "gpt-4" to another model.
- **`schedule`**: (Optional) Update the schedule details for the agent.
- **`max_iterations`**: (Optional) Change the maximum iterations for the agent.
- **`user_timezone`**: (Optional) Update the user's timezone if needed.
- **`knowledge`**: (Optional) Update or change the reference to the agent's knowledge base.

### 4. AgentRun

Denotes the configuration attributes for starting a new agent run.

**Attributes**:

- **`name`**: A string representing the name of the run.
- **`goal`**: (Optional) A list of specific goals for this run.
- **`instruction`**: (Optional) A list of specific instructions for this run.

### 5. AgentRunFilter

Defines filters for selecting specific agent runs.

**Attributes**:

- **`run_ids`**: (Optional) A list of integers representing specific run IDs.
- **`run_status_filter`**: (Optional) A string indicating a specific status to filter runs (e.g., 'completed', 'paused').

---

These data types form the backbone of the SuperAGI-Client library. Proper understanding and utilization of these can significantly streamline your interactions with the SuperAGI platform.

