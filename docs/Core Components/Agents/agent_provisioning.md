---
sidebar_position: 1
---
# Agent Provisioning

## Introduction:

Agent Provisioning provides you with the Capability of Creating New Agents. You can customize the agent extensively and provision agents that best suit your requirements. 

![Alt text](/../assets/images/Introduction_Screen.png)

## Name & Description

You can start by providing a unique name for your Agent and provide a description of the Agent’s Characteristics. This is meant for identification purposes which makes it easier for you to understand the Agent you are working with.

![Alt text](/../assets/images/Name_Description.png)

## Goals:

Goals are the desirable outcomes or objectives you can define for the agent. The goals you define are the overarching targets based on which the behavior of the agent is driven towards. 

You can define the goals of your agent to achieve in plain and simple English, step-wise. Feel free to engineer your prompt and experiment with goals so that you can direct the agent towards your desirable outcomes. 

An example of goals set for an agent would look like this: 

![Alt text](/../assets/images/Goals_Agent.png)

## Instructions:

Instructions are directives or guidelines that you can prescribe to the agent. With instructions, you can provide actionable information that helps the agent understand how to navigate towards the given goals and make appropriate choices that help the agent progress towards the desired objectives. 

It is worth noting that it is not necessary to always give instructions to your Agent. However, with instructions in place, it acts as a catalyst that brings in notable performance improvements of the agent.

![Alt text](/../assets/images/Instructions_Agent.png)

## Models

While creating an agent, you can select the Large Language Model of choice with which you would like to deploy your agent. 

As of now, SuperAGI currently supports OpenAI’s GPT 3.5-Turbo, GPT 3.5-Turbo-16k, GPT-4, GPT-4-32k and Google Palm Bison.

![Alt text](/../assets/images/Models_Agent.png)


## Tools & Toolkit

You can select your required toolkits or tools which the agent can interact with and perform operations. Using toolkits can help you streamline your agent workflows and achieve better results. 

You can select multiple toolkits or tools that suit your specific requirements. To learn more about how SuperAGI’s Toolkits work, you can head to the Toolkit Section. 

![Alt text](/../assets/images/Toolkit_Agent.png)

## Advanced Options

The advanced options in SuperAGI allows you to get more hands-on in being able to modify  your agent’s behavior as per your requirements. 

## Agent Type

Choosing an agent type allows you to change the agent's thought processs. Such as a ReAct-based agent, Fixed Task and a Dynamic Task-based agent. To learn more about how each of these agent types work, you can navigate to the [Agent Type](docs\Core%20Components\Agents\agent_type.md) page.

![Alt text](/../assets/images/Agent_Type.png)

## Adding Resources

You can add resources in formats such as .txt, .pdf, .csv, which the agent would ingest during the run. To learn more about how the Resource Manager works, navigate to the [Resource Manager](docs\Core%20Components\resourcemanager.md) section.

![Alt text](/../assets/images/Resource_Agent.png)

## Constraints

Constraints are specific guardrails within which the Agent has to operate. These constraints ensure that the agent operates within the set environment and guidelines are met. 

Constraints are pre-defined while creating an agent. However, you can change the constraints if required to better optimize the agent’s behavior. 

![Alt text](/../assets/images/Constraints.png)

## Maximum Iterations

Maximum Iterations are pre-defined iteration limits that are set for the agent. Since it can get expensive to run LLMs and it is possible for the Agent to hallucinate, you can set the number of iterations within which the agents have to operate. 

![Alt text](/../assets/images/Max_Iteration.png)

## Permission Type

You can choose between "God Mode" - a truly Autonomous Agent that would independently take decisions and execute based on your goals and instructions and "Restricted" - an agent that would ask for your permission before proceeding with execution of the task. 

![Alt text](/../assets/images/Permission_Type.png)