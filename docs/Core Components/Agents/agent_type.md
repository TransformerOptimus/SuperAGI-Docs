# Agent Type

Agents in SuperAGI currently follow Re-Act architecture, where there is a thinking step that is performed by the LLM and an Execution with the tool that is suggested in the thinking step.

SuperAGI will be launching Chat based agent and S-Re-Act architecture, where the agent will be able to handle a conversation with the user in chat based agent and also sense the occurrence of an event and then think and execute the actions in Sense-Re-Act architecture.

![Alt text](/../assets/images/agent_type_1.png)

## Default

Think → Execute

The agent takes the goals that go to the thinking tool which gives a Thought, Plan, Criticism and Tool. The decided tool is then executed which completes 1 call (iteration)

![Alt text](/../assets/images/agent_type_2.png)

## Fixed Task Queue

Think → Prioritize → Execute

The agent takes the goals and makes them into a list of tasks and prioritizes them. Each task goes to thinking and then goes to the tool to execute. The Agent finishes all tasks completely when the final task listed is completed.

![Alt text](/../assets/images/agent_type_3.png)

## Dynamic Task Queue

Think → Prioritize → Execute → Add Task → Execute

The agent takes the goals and makes them into a list of task and prioritizes them. Each task goes to thinking and then goes to the tool to execute. If the thinking creates another task as a part of the Thought, Plan, Criticism and Tool, then this task also gets added to the task list and reprioritizes. The Agent finishes all tasks completely when the final task listed is completed.

![Alt text](/../assets/images/agent_type_4.png)