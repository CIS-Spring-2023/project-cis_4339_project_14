###  Back-end Implemetation (Sprint 3)


BACKEND API DOCUMENTATION CAN BE FOUND AT:

    https://documenter.getpostman.com/view/23609726/2s93eR6GrM


PLEASE MAKE SURE YOU HAVE THE FOLLOWING UNDER THE "backend" FOLDER

1. .env file with parameters: 

    MONGO_URL = "mongodb+srv://admin:test123@cis4339cluster.urmwerk.mongodb.net/?retryWrites=true&w=majority"
    PORT = 27017
    ORG = "1"

2. open a new terminal
3. enter "cd backend"
4. enter "npm install"
5. run with "node app.js"

PLEASE ALSO MAKE SURE YOU HAVE THE FOLLOWING UNDER THE "frontend" FOLDER

1. .env file with parameters:

    VITE_ROOT_API = http://localhost:27017

2. open a new terminal
3. enter "cd frontend"
4. enter "npm install"
5. run with "npm run dev"




STEPS TO DEMONSTRATE FUNCTIONALITY REMAIN SIMILAR TO SPRINT 2

### Services demonstration (Sprint 3)
To demonstrate functionality of the Services, Service Intake, and Services offered when creating an event, follow these steps:

1. Create a new service Front the Service Intake form. NOTE: ALL SERVICES ARE CREATED AS AN INACTIVE SERVICE
2. Go to the Services View/Update Page.
3. The Services that the user added will now be listed in the table at the top. NOTE: ALL SERVICES ARE CREATED AS INACTTIVE
4. Edit a Service Status by clicking which service you would like to change from the table at the top of the page
5. The changes will be applied once the 'Save Service' button is pressed
6. If a Service is set as active, the service will now appear in the 'Create Event' form
7. Service Edit form can only be accessed by an editor

EXAMPLE DEMONSTRATION
- Login as editor
- Add a service from the 'Service Intake' Page
- ALL NEW SERVICES ARE FIRST ADDED AS AN INACTIVE SERVICE SO THE USER NEED TO SET A SERVICE AS ACTIVE BEFORE BEING ABLE TO USE THE SERVICE
- Proceed to 'Services View/Update' Page
- select a service to edit from the table of services
- SET ACTIVE CHECKBOX TO CLICKED IF YOU WOULD LIKE TO SET THE SERVICE AS ACTIVE. the user can also change other properties
- Once finished, please click 'Save Service' to finish applying changes to a given service
- Go back to the 'Create Event' Page to find recently activated service(s) at the 'Services Offered' section of the form




### Login demonstration (Sprint 2)
To demonstrate the functionality of our project, login into the application as an editor or a viewer. Both the username and password vary. They are both lowercase.

Editor
Username: editor 
Password: editpassword

Viewer:
Username: viewer
Password: viewpassword