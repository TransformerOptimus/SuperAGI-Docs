---
sidebar_position: 1
---

# Pinecone

## Setting up Pinecone with SuperAGI

1. Login to your account on Pinecone. If you don't have one, you can create an account [here](https://login.pinecone.io/login?state=hKFo2SB6OXByRUtNU0QwU1ZJbXJSZk9menhXMEk5QTlDV3dGdaFupWxvZ2luo3RpZNkgQ0lwUDFmYU45cjctYktfTmRBRnFmaldjcGJ5WUF5bFOjY2lk2SBUOEkyaEc2Q2FaazUwT05McWhmN3h6a1I0WmhMcVM0Qw&client=T8I2hG6CaZk50ONLqhf7xzkR4ZhLqS4C&protocol=oauth2&audience=https%3A%2F%2Fus-central1-production-console.cloudfunctions.net%2Fapi%2Fv1&scope=openid%20profile%20email%20read%3Acurrent_user&redirect_uri=https%3A%2F%2Fapp.pinecone.io&sessionType=signup&response_type=code&response_mode=query&nonce=OWJhOX52SGZ%2BOE8yNEJuWkdOemhQVXJVYU1ONk9DMWs5fk8yMnlVNC0yQQ%3D%3D&code_challenge=0zqg-z2iKUi16yErH4E3mlLyEFXrHyf3rvrziVBuZAQ&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS41LjAifQ%3D%3D)
2. If you are new to Pinecone, you can create an index as follows. If you already have an existing index, you can skip to step 5

![alt_text](/../assets/images/pinecone1.png)

3. Input index name and add 1536 in dimensions. For knowledge embeddings, we use OpenAI’s text-embedding-ada-002 model which creates embeddings of 1536 dimensions.

![alt_text](/../assets/images/pinecone2.png)

4. Once your index is created, go to Vector Settings in SuperAGI by clicking the settings icon on the top right corner.

5. In the Vector Database Settings, select Pinecone

![alt_text](/../assets/images/pinecone3.png)
![alt_text](/../assets/images/pinecone4.png)

6. To connect Pinecone, add the API Key, environment and index name.

![alt_text](/../assets/images/pinecone5.png)

7. Go to Pinecone dashboard and click Indexes to get the index name

![alt_text](/../assets/images/pinecone6.png)

8. Go to Pinecone dashboard and click API keys to get API key and environment. 

![alt_text](/../assets/images/pinecone7.png)

9. Add these in Vector Database settings and click Connect. This will connect your Pinecone index.

![alt_text](/../assets/images/pinecone8.png)
