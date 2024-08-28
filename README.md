# AI-Assisted Hugo Blog 🤖

This repository contains the source code for an AI-assisted blog built with Hugo. It serves as an experiment in rapid development using artificial intelligence.

## 🚀 Technologies

- [Hugo](https://gohugo.io/): A fast and flexible static site generator
- [Paper theme](https://github.com/nanxiaobei/hugo-paper): A clean, responsive Hugo theme
- Custom CSS for dark mode and project/talk styling

## 🛠️ Setup

1. Install [Hugo](https://gohugo.io/getting-started/installing/)
2. Clone this repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
3. Run the Hugo development server:
   ```
   hugo server -D
   ```
4. View the site at http://localhost:1313

## 🧪 AI-Assisted Development

This project was developed with the assistance of AI, focusing on rapid iteration and experimentation. Key features include:

- Custom CSS modifications for dark mode
- Responsive design for various screen sizes
- Integration of project and talk sections

## 📁 Project Structure

- `content/`: Markdown files for blog posts and pages
- `themes/paper/`: The Paper theme (as a Git submodule)
- `static/`: Static assets (images, etc.)
- `config.toml`: Hugo configuration file

## 📚 Adding Your Own Content With Submodules

To add your own content as a submodule and set up secrets for GitHub Actions:

1. Create a new repository for your content (e.g., `my-blog-content`)
2. Add it as a submodule to this repository:
   ```
   git submodule add https://github.com/yourusername/my-blog-content.git content/posts
   ```
3. Update `.gitmodules` file if necessary
4. Create a Personal Access Token (PAT) on GitHub:
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate a new token with `repo` scope
5. Add the PAT as a secret in your blog repository:
   - Go to your blog repo settings > Secrets and variables > Actions
   - Create a new repository secret named `ACCESS_TOKEN`
   - Paste your PAT as the value
6. Check if the GitHub Actions workflow file (`.github/workflows/hugo-deploy.yaml`) has the following lines:
   ```yaml
   - name: Checkout
     uses: actions/checkout@v3
     with:
       submodules: recursive
       token: ${{ secrets.ACCESS_TOKEN }}
   ```
7. Commit and push your changes

Now your GitHub Actions workflow will have access to your private content repository.

## 🤝 Contributing

Please open an issue or submit a pull request if you have suggestions or improvements.

## 📄 License

This project is open source and available under the [MIT License](LICENSE). The content of this blog are copyrighted by Mickey Beurskens.
