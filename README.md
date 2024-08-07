# HealthNestApp
This App allow user to list doctor near by location and allow book appoinment.


## For user to test app
```bash
# Clone this app
git clone https://github.com/enblitz/HealthNestApp.git

# Copy env file
cp .env.samples .env
source .env

# run this app
docker-compose up -d

#Acees this app
http://localhost:65483
```

## Dev's: to contribute in this app

### Setup Development env.
```bash
cp .env.sample .env
```

### Setup Database


1. Install Database using `brew install mysql` or using `xampp`
2. Setup database - create user and database
    ```sql
    -- Database user Creation
    CREATE USER 'healthnest'@'%' IDENTIFIED WITH mysql_native_password BY 'hel#net191';

    -- Various Grant Permissions for DB-User
    GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'healthnest'@'%' WITH GRANT OPTION;

    -- Database Creation
    CREATE DATABASE `healthnest-db`;

    -- Grant Privilege to the DB User
    GRANT ALL PRIVILEGES ON `healthnest-db`.* TO 'healthnest'@'%';

    -- Reloading Privileges
    FLUSH PRIVILEGES;

    -- View the DB-User Permission
    SHOW GRANTS FOR 'healthnest'@'%';
    ```
3. Setup database - create tables
    ```bash
    mysql -uroot
    use healthnest-db;
    source database/tables.sql
    ```

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

