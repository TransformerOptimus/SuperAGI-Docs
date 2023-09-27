---
sidebar_position: 2
---

# NodeJS SDK

# SuperAGI-NodeJS Client Library

The SuperAGI NodeJS client library is designed to offer developers a seamless way to interact with the SuperAGI API. This library enables users to create, manage, and execute autonomous agents within the SuperAGI framework.

### Installation

To begin, you need to install the library using npm:

```bash
npm install superagi-client
```

### Initialization

After installation, initialize the SuperAGI-NodeJS Client:

```jsx

const { Client } = require('superagi_client');

const client = new Client({
  apiKey: "YOUR_API_KEY",
  url: "YOUR_OPTIONAL_URL"
});

```

### Parameters:

- **`apiKey`**: Your unique API key for authentication with the SuperAGI service.
- **`url`**: The URL endpoint for the SuperAGI service. The default is "**[https://app.superagi.com/](https://app.superagi.com/)**".

### **Creating an Agent with SuperAGI**

To create an agent:

```jsx

const { AgentConfig } = require('superagi_client');

const agentConfig = new AgentConfig({
  name: "Example Agent",
  description: "A detailed description outlining the purpose of the agent.",
  goal: ["List specific tasks for the agent"],
  instruction: ["List any guiding instructions for the agent"],
  agentWorkflow: "Goal Based Workflow",
  constraints: [],
  tools: [{ name: "Toolkit Name" }],
  iterationInterval: 500,
  maxIterations: 10,
  model: "gpt-4"
});

const agent = await client.createAgent(agentConfig);

```

### **Managing Agent Runs**

After creating an agent, you can control its runs, check their status, and pause or resume them as needed.

### **Starting an Agent Run:**

```jsx
const agentId = agent.agentId;
const runAgent = client.createAgentRun(agentId);

```

On initiating a run, the **`runAgent`** will contain the **`runId`** for the started run.

### Checking the Status of Agent Runs:

```jsx
const runStatus = client.getAgentRunStatus(agentId);

```

To extract the status of specific runs or statuses, use the **`AgentRunFilter`** class:

```jsx
const { AgentRunFilter } = require('superagi_client');

const filterConfig = new AgentRunFilter({ runIds: [runId1, runId2] });
const runStatus = await client.getAgentRunStatus(agentId, filterConfig);

```

### Pausing and Resuming Agent Runs:

```jsx
await client.pauseAgent(agentId, [runId]);
await client.resumeAgent(agentId, [runId]);

```

### Updating an Agent's Configuration:

```jsx
const { AgentUpdateConfig } = require('superagi_client');

const updatedConfig = new AgentUpdateConfig({
  name: "New Agent Name",
  goal: ["List the new goals for the agent"]
});

await client.updateAgent(agentId, updatedConfig);

```

### 

## Data Types in SuperAGI-Client for NodeJS

### 1. AgentSchedule

Defines the scheduling attributes of an agent.

**Properties**:

- **`agentId`**: (Optional) A number representing the ID of the agent.
- **`startTime`**: **`Date`** object indicating when the agent should begin its task.
- **`recurrenceInterval`**: (Optional) A string indicating how frequently the agent should be run (e.g., 'daily', 'weekly').
- **`expiryDate`**: (Optional) A **`Date`** object indicating when the agent's task schedule should expire.
- **`expiryRuns`**: (Optional) A number representing after how many runs the agent's task should expire. By default, it's set to -1 (indicating no expiration based on number of runs).

### 2. AgentConfig

Represents the configuration attributes required to set up an agent.

**Properties**:

- **`name`**: Name of the agent.
- **`description`**: Brief description of the agent.
- **`projectId`**: (Optional) Associated project ID.
- **`goal`**: Goals or tasks you want the agent to achieve.
- **`instruction`**: Specific instructions guiding the agent.
- **`agentWorkflow`**: Workflow type. Currently, "Goal Based Workflow" is supported.
- **`constraints`**: (Optional) Constraints on the agent's operations.
- **`tools`**: Tools available for the agent.
- `**ltmDb**`: (Optional) Reference to a Long-Term Memory Database.
- **`exit`**: (Optional) Conditions upon which the agent should terminate.
- **`permissionType`**: (Optional) Permission level for the agent.
- **`iterationInterval`**: Time between agent iterations.
- **`model`**: AI model, e.g., "gpt-4".
- **`schedule`**: (Optional) Schedule details for the agent.
- **`maxIterations`**: Maximum iterations for the agent.
- **`userTimezone`**: (Optional) User's timezone.
- **`knowledge`**: (Optional) Reference to the agent's knowledge base.

### 3. AgentUpdateConfig

Describes the configuration for updating an existing agent. All properties are optional, meaning you only need to include the ones you want to update.

**Properties**:

- **`name`**: (Optional) Updated name of the agent.
- **`description`**: (Optional) New or revised description for the agent.
- **`projectId`**: (Optional) If you wish to change or assign a project ID.
- **`goal`**: (Optional) Modify or redefine the goals or tasks you want the agent to achieve.
- **`instruction`**: (Optional) Change or provide new specific instructions guiding the agent.
- **`agentWorkflow`**: (Optional) New workflow type if changing. Currently, "Goal Based Workflow" is supported.
- **`constraints`**: (Optional) If you need to add or modify constraints on the agent's operations.
- **`tools`**: (Optional) Update or change the tools available for the agent.
- `**ltmDb**`: (Optional) Change or update the reference to a Long-Term Memory Database.
- **`exit`**: (Optional) Modify conditions upon which the agent should terminate.
- **`permissionType`**: (Optional) Change the permission level for the agent.
- **`iterationInterval`**: (Optional) Modify the time between agent iterations.
- **`model`**: (Optional) Change the AI model, e.g., if you want to switch from "gpt-4" to another model.
- **`schedule`**: (Optional) Update the schedule details for the agent.
- **`maxIterations`**: (Optional) Change the maximum iterations for the agent.
- **`userTimezone`**: (Optional) Update the user's timezone if needed.
- **`knowledge`**: (Optional) Update or change the reference to the agent's knowledge base.

### 4. AgentRun

Denotes the configuration attributes for starting a new agent run.

**Properties**:

- **`name`**: A string representing the name of the run.
- **`goal`**: (Optional) An array of specific goals for this run.
- **`instruction`**: (Optional) An array of specific instructions for this run.

### 5. AgentRunFilter

Defines filters for selecting specific agent runs.

**Properties**:

- **`runIds`**: (Optional) An array of numbers representing specific run IDs.
- **`runStatusFilter`**: (Optional) A string indicating a specific status to filter runs (e.g., 'completed', 'paused').

---

These data types form the backbone of the SuperAGI-Client library for NodeJS. Proper understanding and utilization of these can significantly streamline your interactions with the SuperAGI platform.
