# Agent Performance Monitoring

APM is the analytics dashboard that gives detailed insights into all the agents, models, tokens, runs, etc.

The KPIs are structured in a way that the user will be able to derive actionable insights. The entire dashboard is interactive and any metric card can be re-ordered or re-sized.

All the KPIs are updated only after run completion.

## Organization-Level metrics:

These KPIs give an executive overview of SuperAGI.

![Alt text](/../assets/images/apm_1.png)

**Total number of agents:** The total agents that have run till date irrespective of deletion.

**Total tokens consumed:** Total Tokens consumed by all the agents that have run till date irrespective of deletion.

**Total Runs:** Total Runs performed by all the agents that have run till date irrespective of deletion.

**Number of Agents per model:** How many agents have used a particular model

**Number of Runs per model:** How many runs have been made using a particular model

**Total tokens consumed per model:** How many tokens have been consumed while using a particular model

**Active Runs:** The runs that are currently running

**Most used Tools:** The number of times a Tool has been called or The number of times an Agent has the tool assigned

## Agent-Level metrics:

This shows the model used, tokens consumed, runs made, avg. tokens per run, tools used, calls made, avg. run time for each agent.

![Alt text](/../assets/images/apm_2.png)

**Model:** Each agent can use only one model

**Tokens Consumed:** The tokens consumed by a particular agent over all its runs for each agent

**Runs:** Total runs executed in that agent

**Average Tokens per run:** Total tokens consumed by the agent/Total runs made by the agent

**Tools used:** Tools that have been used by an agent over all its runs for each agent

**Calls made:** Number of calls made across all the runs for each agent

**Average Run time:** The Total time taken/Total runs made

## Run

The three plots of run analytics are connected by a single Agent wise filter which give Tokens consumed per run, calls made per run and Average tokens consumed over all calls per run for a particular agent.

![Alt text](/../assets/images/apm_3.png)

**Tokens consumed per run:** Total Tokens consume for a particular run of an agent

**Calls made per run:** Total calls made for a particular run of an agent

**Average tokens consumed in all call per run:** The Total Tokens consumed by a Total calls made for a particular run of an agent.