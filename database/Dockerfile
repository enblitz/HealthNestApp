# # Use the official MySQL 5.7 image as the base image
# FROM mysql:8.4.0

# # Copy custom configuration file to the container (optional)
# # COPY ./my-custom.cnf /etc/mysql/conf.d/
# COPY tables.sql /docker-entrypoint-initdb.d

# # Expose the default MySQL port
# EXPOSE 3306

# # Command to run the MySQL server
# CMD ["mysqld"]


# New code

# Use the official MySQL 5.7 image as the base image
FROM mysql:8.4.0

# Set environment variables
ENV MYSQL_ROOT_PASSWORD example_password
ENV MYSQL_DATABASE test
ENV MYSQL_USER example_user
ENV MYSQL_PASSWORD example_password

# Copy initialization scripts (if any)
COPY . /docker-entrypoint-initdb.d