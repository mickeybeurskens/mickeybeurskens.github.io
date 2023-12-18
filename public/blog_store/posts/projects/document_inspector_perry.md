# Document Inspector Perry

> PDF document search and question answering based on large language model. Check out [the repository for more details](https://github.com/mickeybeurskens/perry-doc-search)

Perry allows you to upload PDF documents for question answering and information search.

![Screenshot of Perry in action.](/blog_store/posts/projects/perry_screenshot.png)

Perry contains a fully functioning backend with authentication built in [FastAPI](https://fastapi.tiangolo.com/), with document search built using [LLamaIndex](https://github.com/run-llama/llama_index). 
The frontend has been built using [Streamlit](https://github.com/streamlit/streamlit), and deployment is done through Docker. 

Everything is this repository has served as a proof of concept for a limited amount of users. You can use if for inspiration, but it is not production ready out of the box. Especially document uploads and session management will not scale with user demand. That being said, I hope you can use this as inspiration for your own projects.