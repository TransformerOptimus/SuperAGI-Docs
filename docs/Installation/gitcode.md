---
sidebar_position: 3
---

# GitHub Codespaces

1. Open the SuperAGI GitHub repository `https://github.com/TransformerOptimus/SuperAGI/` and click on `Code > Codespaces > Create new codespace`
2. Navigate to the directory and create a copy of `config_template.yaml` and name it `config.yaml`.
3. Open up the terminal at the bottom of the codespace and run the following command: `docker compose up --build` and wait for the build to complete.
4. Go to the 'Ports' tab, copy the 8001 and 3000 public addresses. Replace the `localhost` link in the `docker-compose.yaml` file with the 8001 public address, and paste the 3000 public address as a string into the `main.py` file.
5. Make sure to remove the trailing forward slash from the end of URL in both places.
6. Run the `docker compose up --build` command again.
7. Once the build is complete, change the visibility of both ports to public and open the 3000 public URL in a new tab.
