# Agent Scheduling

Agents can now be scheduled to run at a particular time and also run recursively at pre-defined timer intervals and also after ‘n’ number of run completions.

Agents can either be created and scheduled simultaneously or, if they've already been created, they can be scheduled at a later time. However, it's essential to note that each agent can only be assigned one schedule. Currently, the system does not support assigning multiple schedules to a single agent. For those using the local version, it's crucial to ensure that Docker is running for the schedule to execute at the intended time.

Note: **It is suggested that while creating a schedule, the agent should be scheduled 5 min before the intended time.**  

The calendar icon beside the agent name shows when a particular agent is scheduled.

![Screenshot 2023-07-21 at 1.51.23 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83a931d6-0518-4a4f-94e3-9ac7329d3db6/Screenshot_2023-07-21_at_1.51.23_PM.png)

## Schedule components

### Schedule and Run

For a new agent, we get a dropdown at the create and run with the ‘schedule and run’ CTA which on click pops up a modal where the date of schedule, recursion and expiry details can be given.

![Screenshot 2023-07-21 at 1.52.16 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/338e47c6-dda0-46bd-a9f3-b781e1b4c0aa/Screenshot_2023-07-21_at_1.52.16_PM.png)

For an existing agent, we have the schedule run option in the three dots beside the new run. This opens up a similar modal.

![Screenshot 2023-07-21 at 1.53.07 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1fbd8e89-0420-4e4d-880e-31e7dd56597a/Screenshot_2023-07-21_at_1.53.07_PM.png)

Each schedule’s details are shown in the details section as long as it’s schedule is yet to start. As soon as the last schedule creates a new run, the details are removed from the frontend.

![Screenshot 2023-07-21 at 1.55.04 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bdf0077-bd0e-4b76-8fe5-0da0f24468d2/Screenshot_2023-07-21_at_1.55.04_PM.png)

### Recurring Schedule

Recurring can be enabled while scheduling a run and can be set for days, hours and minutes that is relative to the scheduled date.

![Screenshot 2023-07-21 at 1.59.37 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4666d3b-e784-4911-b2d0-dbbf761f9961/Screenshot_2023-07-21_at_1.59.37_PM.png)

### Schedule Expiry

Schedule can be expired after ‘n’ number of runs or after a specific date.

![Screenshot 2023-07-21 at 2.00.17 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b8b195cf-71ac-44a7-a8bb-ac0ad77379e3/Screenshot_2023-07-21_at_2.00.17_PM.png)

### Edit Schedule

The edit schedule option is available in the three dots beside new run. After a schedule is already made, it can be edited such that it overwrites the previous schedule and all the details also get updated.

### Stop Schedule

The stop schedule option is available in the three dots beside new run. After a schedule is already made, it can be stopped from executing the following schedules.

![Screenshot 2023-07-21 at 2.00.57 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/299b309e-838f-4edf-bde3-d5d0bdd5313c/Screenshot_2023-07-21_at_2.00.57_PM.png)