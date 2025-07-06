localStorage.clear()
const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "e@e.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "complete": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Task 1",
        "date": "2024-11-02",
        "description": "This is a description of Task 1",
        "category": "Development"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Task 2",
        "date": "2024-10-15",
        "description": "This is a description of Task 2",
        "category": "Design"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Ravi",
    "email": "e2@e.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "complete": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Task 1",
        "date": "2024-11-02",
        "description": "Description of Task 1",
        "category": "Research"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "title": "Task 2",
        "date": "2024-10-10",
        "description": "Description of Task 2",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Sanjay",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "complete": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": false,
        "newTask": true,
        "complete": true,
        "failed": false,
        "title": "Task 1",
        "date": "2024-11-01",
        "description": "Description of Task 1",
        "category": "Finance"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": true,
        "title": "Task 2",
        "date": "2024-10-20",
        "description": "Description of Task 2",
        "category": "Human Resources"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "complete": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Task 1",
        "date": "2024-11-02",
        "description": "Description of Task 1",
        "category": "Support"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Task 2",
        "date": "2024-10-05",
        "description": "Description of Task 2",
        "category": "Quality Assurance"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Anjali",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "complete": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "title": "Task 1",
        "date": "2024-11-02",
        "description": "Description of Task 1",
        "category": "Operations"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "title": "Task 2",
        "date": "2024-10-01",
        "description": "Description of Task 2",
        "category": "Logistics"
      }
    ]
  }
];

const admin = [
{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

    // console.log(employees, admin)
    return {employees,admin}
}