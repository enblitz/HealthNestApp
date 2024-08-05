# HealthNestApp
This App allow user to list doctor near by location and allow book appoinment.


## Run App locally
```bash
# Clone this app
git clone https://github.com/enblitz/HealthNestApp.git

# run this app
docker-compose up -d

#Acees this app
http://localhost:65483
```

## for Developer's
### Backend - Go-to the Backend folder
```bash
cd backend
```
Install all the modules
```bash
npm i
```
Start the server
```bash
npm start
```

To Test backend:
http://3.1.222.229:8081/doctors
### Go-to the Frontend folder

```bash
cd frontend
```
Install all the modules
```bash
npm i
```
Start the server
```bash
npm start
```

### DATABASE

```bash
Setting up the MySQL Database
Start XAMPP:

Open XAMPP Control Panel.
Start Apache and MySQL.
Create the Database:

Open your web browser and go to http://localhost/phpmyadmin. or click on admin near the mysql button in controller of xampp.
Click on the "Databases" tab.
In the "Create database" field, enter test and click "Create".
Import the SQL Schema:

Click on the "test" database you just created.
Go to the "SQL" tab in the navbar.
Paste your SQL code into the text area provided.
Click "Go" to execute the SQL code and create the necessary tables.
```
