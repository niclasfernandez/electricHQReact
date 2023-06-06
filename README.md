![](/public/assets/images/logo.png)
# ElectricHQReact

This project is a Single Page Application e-commerce specialized in electric mobility.
It uses Google Firebase Firestore as a database.

## Content

The project counts with a Master branch with the latest version. Components ued are:
* HTML 5
* CSS3
* React "^18.2.0"
* react-dom "^18.2.0",
* react-router-dom "^6.3.0",
* Bootstrap "^5.1.3"
* Firebase "^9.9.2"
* @emailjs/browser "^3.7.0"

## Demo

Below a brief description of the site functionality:
 (https://drive.google.com/file/d/1MGkZK8OCNIy2b9x6LKwZZ3nDpXvEot-D/view?usp=sharing)

In addition to the functionality shown above, the application sends an email to tu customer once the purchase process is finished.

## how to clone this project

In case you want to clone the project locally follow these instructions.
* git clone https://github.com/Adri1985/electricHQ.git 
* position yourself in the directory where you cloned the project and execute NPM I to install tependencies
* start react server by running NPM START


## Pre-visualizaiton

Below you can see a snapshot of the site main page:

![](/public/assets/images/sitio.png)

## Relevant features and characteristics

The code is deigned in a way that is easy to read and re-utilizable

The site is completely responsive, by using css mediaqueries and boostrap.

the use of context allows the visualization and logic of the shopping cart to be independent from other components, and available for any of them

by using react Link, we can navigate between pages without reloading the pages

## Functionalities

The application count with the following features:

* Add product to the shopping cart controlling the stock available loaded from the database. Once the item and the quantity is in the cart, the user is allowed to override the quantity at any time.
* Navigate between different product category (skateboards, bikes, surfboards, seascooters)
* Shopping Cart can be edited on the fly, by removing one specific item or all of them.
* When clicking finish shopping, the app will display a shopping cart view with the details and quantity or the order.
* SPECIAL FEATURE: When submitting the order, the application will do a NEW CHECK against the database to make sure the items are still available, as while navigating on the app, other users might have taken the stock away. In that case, the application will show you which items ran out of stock.
* There is a Search icon where you can search completed order by inputting your email. This is a separate component which will show a modal with the results.
* The information in forms is validated
* The stock is updated on the database once the order is completed.

### Notes

Front end development was something pending on my existing IT career. I found react to be an amazing tool compared to older technologies that I know.