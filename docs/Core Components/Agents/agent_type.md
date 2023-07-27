# Agent type

Agents in SuperAGI currently follow Re-Act architecture, where there is a thinking step that is performed by the LLM and an Execution with the tool that is suggested in the thinking step.

SuperAGI will be launching Chat based agent and S-Re-Act architecture, where the agent will be able to handle a conversation with the user in chat based agent and also sense the occurrence of an event and then think and execute the actions in Sense-Re-Act architecture.

![Screenshot 2023-07-21 at 1.43.16 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0128fe84-e0a0-4d59-9d5d-6d3225966acb/Screenshot_2023-07-21_at_1.43.16_PM.png)

## Default

Think → Execute

The agent takes the goals that go to the thinking tool which gives a Thought, Plan, Criticism and Tool. The decided tool is then executed which completes 1 call (iteration)

![Screenshot 2023-07-21 at 1.49.17 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/318e917c-9184-47f1-8f11-eb600df2255e/Screenshot_2023-07-21_at_1.49.17_PM.png)

## Fixed Task Queue

Think → Prioritize → Execute

The agent takes the goals and makes them into a list of tasks and prioritizes them. Each task goes to thinking and then goes to the tool to execute. The Agent finishes all tasks completely when the final task listed is completed.

![Screenshot 2023-07-21 at 1.50.27 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1df334a-66ea-4f1c-85f2-da84882d1974/Screenshot_2023-07-21_at_1.50.27_PM.png)

## Dynamic Task Queue

Think → Prioritize → Execute → Add Task → Execute

The agent takes the goals and makes them into a list of task and prioritizes them. Each task goes to thinking and then goes to the tool to execute. If the thinking creates another task as a part of the Thought, Plan, Criticism and Tool, then this task also gets added to the task list and reprioritizes. The Agent finishes all tasks completely when the final task listed is completed.

![Screenshot 2023-07-21 at 1.47.42 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f15ba1f0-0e65-42cd-a08a-0eaeb6437115/Screenshot_2023-07-21_at_1.47.42_PM.png)