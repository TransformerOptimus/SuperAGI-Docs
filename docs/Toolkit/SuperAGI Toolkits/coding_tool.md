# Coding Toolkit

The Coding Toolkit lies at the heart of SuperAGI's SuperCoder - providing your agent with the ability to create a codebase from a single prompt. 

## Tools Included

1. **WriteSpecTool:** Based on the goal given to the agent, the WriteSpecTool prepares the technical specification required for your project. 

2. **WriteTestTool:** Using the specifications provided by the WriteSpecTool, the WriteTestTool writes test cases for which the code will have to meet the criteria for acceptance. 

3. **WriteCodeTool:** The WriteCodeTool takes in the context of the WriteSpecTool and WriteTestTool and starts generating the codebase for your project. 

4. **ImproveCodeTool:** The ImproveCodeTool can take in the files from your WriteCodeTool or files you upload via the resource manager, analyze the code and improve the code - thus making sure that the code being generated is of qood quality. 

You'll be able to use the Coding Tool on the fly once you have setup SuperAGI.

## Running SuperAGI Coding Toolkit

You can try the Coding Toolkit through the SuperCoder Template or simply select the "Coding Toolkit" while creating an agent. 