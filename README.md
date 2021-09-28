# Car registration

**Functional requirements**
* Should be able register a new car.

**Business rules**
* Should not be able to register a car with an existing license plate.
* Should be able to create a car with available true by default.
* The user responsible for the registration must be an administrator user.

# Car listing

**Functional requirements**
* Should be able to list all available cars.
* Should be able to list all available cars by the category name.
* Should be able to list all available cars by the brand name.
* Should be able to list all available cars by the car name.

**Business rules**
* The user does not need to be logged in to the system.

# Registration of car specifications

**Functional requirements**
* Should be able register a specification to a car.

**Business rules**
* Should not be able to register a specification to a non-registered car.
* Should not be able to register an existing specification for the same car.
* The user responsible for the registration must be an administrator user.

# Car image registration

**Functional requirements**
* Should be able to register a car image.

**Non-functional requirements**
* Use multer for file upload.

**Business rules**
* The user should be able to register more than one image to the same car.
* The user responsible for the registration must be an administrator user.

# Car rental

**Functional requirements**
* Should be able register a rent.

**Business rules**
* The rent should be a minimum duration of 24 hours.
* Should not be able to register a new rental if there is already an open rental for the same user.
* Should not be able to register a new rental if there is already an open rental for the same car.
* The user should be logged in to the application.
* When making a rental, the status of the car should be changed to unavailable.

# Car rental return

**Functional requirements**
* Should be able to return a car.

**Business rules**
* If the car is returned in less than 24 hours, it will be charged full night.
* When making the return, the car must be released for another rental.
* When returning, the user must be released for another rental.
* When returning, the total rent must be calculated.
* If the return time exceeds the expected delivery time, a fine will be charged proportional to the days of delay.
* If there is a traffic ticket, it must be added to the total rental.
* The user should be logged in to the application.