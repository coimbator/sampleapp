# Use an official httpd image as a parent image
FROM httpd

# Copy the HTML, CSS, and JavaScript files into the httpd directory
COPY . /usr/local/apache2/htdocs/

# Expose port 80 to the outside world
EXPOSE 80