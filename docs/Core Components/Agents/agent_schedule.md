# Agent Scheduling

Agents can now be scheduled to run at a particular time and also run recursively at pre-defined timer intervals and also after ‘n’ number of run completions.

Agents can either be created and scheduled simultaneously or, if they've already been created, they can be scheduled at a later time. However, it's essential to note that each agent can only be assigned one schedule. Currently, the system does not support assigning multiple schedules to a single agent. For those using the local version, it's crucial to ensure that Docker is running for the schedule to execute at the intended time.

Note: **It is suggested that while creating a schedule, the agent should be scheduled 5 min before the intended time.**  

The calendar icon beside the agent name shows when a particular agent is scheduled.

![Alt text](/../assets/images/agent_schedule_1.png)
## Schedule components

### Schedule and Run

For a new agent, we get a dropdown at the create and run with the ‘schedule and run’ CTA which on click pops up a modal where the date of schedule, recursion and expiry details can be given.

![Alt text](/../assets/images/agent_schedule_2.png)

For an existing agent, we have the schedule run option in the three dots beside the new run. This opens up a similar modal.

![Alt text](/../assets/images/agent_schedule_3.png)

Each schedule’s details are shown in the details section as long as it’s schedule is yet to start. As soon as the last schedule creates a new run, the details are removed from the frontend.

![Alt text](/../assets/images/agent_schedule_4.png)

### Recurring Schedule

Recurring can be enabled while scheduling a run and can be set for days, hours and minutes that is relative to the scheduled date.

![Alt text](/../assets/images/agent_schedule_5.png)

### Schedule Expiry

Schedule can be expired after ‘n’ number of runs or after a specific date.

![Alt text](/../assets/images/agent_schedule_6.png)

### Edit Schedule

The edit schedule option is available in the three dots beside new run. After a schedule is already made, it can be edited such that it overwrites the previous schedule and all the details also get updated.

### Stop Schedule

The stop schedule option is available in the three dots beside new run. After a schedule is already made, it can be stopped from executing the following schedules.

![Alt text](/../assets/images/agent_schedule_7.png)