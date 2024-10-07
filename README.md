# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to install and run project (Node version >= 16)

You can check this by running: bash  node -v   
This project requires Node.js v16.x or above.- npm or yarn: Ensure you have npm (comes with Node.js) or yarn installed. Check with: bash  npm -v   or bash  yarn -v 

 ## InstallationTo install and run this project, follow these steps:
 
 1. Clone the repository:  git clone https://github.com/TrungChien2201/management-tasks.git   
 2. Navigate to the project directory: cd management-tasks   
 3. Install dependencies: If you're using npm:   npm install    Or if you're using yarn:  yarn install   

 *Note: Remove package-lock.json and yarn.loc before install node_modules
 ## Running the ProjectOnce dependencies are installed, you can run the project locally.###

   ** To run project in development environment, use the command: npm run dev or yarn dev
   This will start the development server, and you can access the app at http://localhost:3000/.### 
   
   Production BuildTo create a production-ready build of the application:- Using npm:  npm run build  - Using yarn:  yarn build  
   The build files will be created in the build/ directory.
   ## Available ScriptsIn the project directory, you can run the following scripts:
   ### npm run start / yarn start Starts the development server on http://localhost:3000/.
   ### npm run build / yarn build Builds the app for production to the build/ folder.
   ### npm run lint / yarn lint Runs ESLint to check for code style and formatting issues.
   
   ## Folder StructureHere’s an overview of the project’s structure: 
   
    └── ...├── src/│   ├── assets/            # Static assets like images, fonts│  
    ├── api        
    │   ├── request             # Common request config
    │   ├── task               # APIs of the task function
    ├── components
    │   ├── base               # Reusable components
    │   ├── module/            # Page components
    ├── pages
    │   ├── tasks/             # Page view
    ├── utils
    │   ├── config             # Config of the project(BASE_URL, KEY, ... or can use .env files to define)
    │   ├── constants          # Common variables or constants
    │   ├── interface          # Common interface
    |── App.tsx                # Main app component
    │── main.tsx               # Entry point for React
    │── index.html             # Root html file
    │── App.css                # Global CSS file
    │── index.css              # Root css file to reset CSS properties
    │── .gitignore             # Files and directories to ignore in Git
    │── eslint.config.js       # Config Eslint rules...
    │── .prettierrc            # Prettierrc config
    ├── package.json           # Project metadata and dependencies
    ├── README.md              # This README file
    └── ...## ContributingContributions are always welcome! Here's how you can get involved:
    1. Fork the repository.
    2. Create a new feature branch (git checkout -b feature-branch-name).
    3. Commit your changes (git commit -m 'Add some feature').
    4. Push your branch (git push origin feature-branch-name).
    5. Open a pull request.Please make sure your code complies with our linting rules

## Management tasks screen
1. Management task list can view and filter the tasks (Click the search icon button)
2. The Add new button to create a new task
3. The edit icon button to update a task
4. The delete icon button to delete a task, click and confirm to delete
5. Pagination of the list tasks