const Data = [
  {
    id: "column-1",
    name: "Backlog",
    tasks: [
      {
        id: "task-1",
        dueDate: "June 21, 2024",
        labels: [
          { text: "UI", color: "#1E90FF" },  // DodgerBlue
          { text: "Enhancement", color: "#32CD32" },  // LimeGreen
        ],
        priority: "low",
        content: "Improve the login page UI",
        description: "Update the login page design to be more user-friendly",
        progress: 0,
      },
      {
        id: "task-2",
        dueDate: "July 10, 2024",
        labels: [
          { text: "Bug", color: "#FF4500" },  // OrangeRed
          { text: "Critical", color: "#FF6347" },  // Tomato
        ],
        priority: "high",
        content: "Fix the payment gateway bug",
        description: "Resolve issues causing payment failures during checkout",
        progress: 10,
      },
      {
        id: "task-11",
        dueDate: "August 1, 2024",
        labels: [
          { text: "Feature", color: "#8A2BE2" },  // BlueViolet
          { text: "Backend", color: "#FFD700" },  // Gold
        ],
        priority: "medium",
        content: "Add user roles and permissions",
        description: "Implement role-based access control for different user types",
        progress: 0,
      },
      {
        id: "task-12",
        dueDate: "July 20, 2024",
        labels: [
          { text: "Research", color: "#20B2AA" },  // LightSeaGreen
        ],
        priority: "low",
        content: "Investigate new caching strategies",
        description: "Research and propose new strategies for application caching",
        progress: 0,
      },
      {
        id: "task-13",
        dueDate: "July 25, 2024",
        labels: [
          { text: "Improvement", color: "#3CB371" },  // MediumSeaGreen
          { text: "Performance", color: "#00CED1" },  // DarkTurquoise
        ],
        priority: "medium",
        content: "Refactor codebase for better performance",
        description: "Optimize the existing codebase for improved performance and readability",
        progress: 0,
      },
    ],
  },
  {
    id: "column-2",
    name: "To Do",
    tasks: [
      {
        id: "task-3",
        dueDate: "June 25, 2024",
        labels: [
          { text: "Feature", color: "#800080" },  // Purple
          { text: "API", color: "#FFD700" },  // Gold
        ],
        priority: "medium",
        content: "Develop user profile API",
        description: "Create endpoints for user profile management",
        progress: 20,
      },
      {
        id: "task-4",
        dueDate: "July 5, 2024",
        labels: [
          { text: "Testing", color: "#FF1493" },  // DeepPink
          { text: "QA", color: "#A52A2A" },  // Brown
        ],
        priority: "high",
        content: "Write unit tests for authentication module",
        description: "Ensure all functions in the authentication module are covered by unit tests",
        progress: 5,
      },
      {
        id: "task-14",
        dueDate: "June 29, 2024",
        labels: [
          { text: "Bug", color: "#FF4500" },  // OrangeRed
          { text: "Critical", color: "#FF6347" },  // Tomato
        ],
        priority: "high",
        content: "Resolve login issues",
        description: "Fix bugs causing login failures for some users",
        progress: 0,
      },
      {
        id: "task-15",
        dueDate: "July 15, 2024",
        labels: [
          { text: "Feature", color: "#8A2BE2" },  // BlueViolet
        ],
        priority: "medium",
        content: "Implement password reset feature",
        description: "Allow users to reset their passwords via email link",
        progress: 0,
      },
      {
        id: "task-16",
        dueDate: "July 18, 2024",
        labels: [
          { text: "Documentation", color: "#708090" },  // SlateGray
        ],
        priority: "low",
        content: "Update API documentation",
        description: "Ensure all API endpoints are well-documented",
        progress: 0,
      },
    ],
  },
  {
    id: "column-3",
    name: "In Progress",
    tasks: [
      {
        id: "task-5",
        dueDate: "June 30, 2024",
        labels: [
          { text: "Database", color: "#708090" },  // SlateGray
          { text: "Optimization", color: "#00CED1" },  // DarkTurquoise
        ],
        priority: "high",
        content: "Optimize database queries",
        description: "Improve performance of database queries for faster data retrieval",
        progress: 50,
      },
      {
        id: "task-6",
        dueDate: "July 1, 2024",
        labels: [
          { text: "Feature", color: "#800080" },  // Purple
          { text: "Frontend", color: "#32CD32" },  // LimeGreen
        ],
        priority: "medium",
        content: "Implement dark mode in the application",
        description: "Add an option for users to switch to dark mode",
        progress: 40,
      },
    ],
  },
  {
    id: "column-4",
    name: "Review",
    tasks: [
      {
        id: "task-7",
        dueDate: "June 28, 2024",
        labels: [
          { text: "Bug", color: "#FF4500" },  // OrangeRed
          { text: "UI", color: "#1E90FF" },  // DodgerBlue
        ],
        priority: "high",
        content: "Fix broken links in the footer",
        description: "Identify and correct all broken links in the website footer",
        progress: 90,
      },
      {
        id: "task-8",
        dueDate: "July 3, 2024",
        labels: [
          { text: "Feature", color: "#8A2BE2" },  // BlueViolet
          { text: "Backend", color: "#FF00FF" },  // Magenta
        ],
        priority: "medium",
        content: "Add logging to user actions",
        description: "Implement logging for user actions for better monitoring and debugging",
        progress: 80,
      },
    ],
  },
  {
    id: "column-5",
    name: "Done",
    tasks: [
      {
        id: "task-9",
        dueDate: "June 20, 2024",
        labels: [
          { text: "Deployment", color: "#000080" },  // Navy
          { text: "DevOps", color: "#808000" },  // Olive
        ],
        priority: "critical",
        content: "Deploy version 2.0 to production",
        description: "Ensure all tests pass and deploy the new version to the production environment",
        progress: 100,
      },
      {
        id: "task-10",
        dueDate: "June 18, 2024",
        labels: [
          { text: "UI", color: "#1E90FF" },  // DodgerBlue
          { text: "Bug", color: "#FF4500" },  // OrangeRed
        ],
        priority: "high",
        content: "Fix alignment issues on the homepage",
        description: "Correct alignment issues in the homepage header and footer sections",
        progress: 100,
      },
    ],
  },
];

export default Data;
