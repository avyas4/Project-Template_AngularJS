# Project-Template_AngularJS
This is a representation of Reusable component using Angular JS , HTML5 and SASS.

This Application is a static responsive template.

This project contains AngularJS reusable component with SASS and HTML5. 
This project is responsive and provide support for different browsers, tablets and smart phones.
It just shows how to define reusable component and views using HTML and CSS.

# Getting Started

To get you started you can simply clone the project template repository and install the dependencies:

#Install Dependencies 

npm is already preconfigured to automatically run bower by simply giving the command:

npm install

Behind the scenes this will also call bower install. After that, you should find out that you have two new folders in your project.

•	node_modules - contains the npm packages for the tools we need
•	app/bower_components - contains the Angular framework files

Note that the bower_components folder would normally be installed in the root folder but Accordion changes this location through the .bowerrc file. Putting it in the app folder makes it easier to serve the files by a web server.
Run the Application
The project is preconfigured with a simple development web server. The simplest way to start this server is:

npm start

Now browse to the app at http://localhost:3000

# Directory Layout

app/                     --> all the source files for the application

   assets/                 --> define assets of application
   
      css/	                  --> define stylesheet
      
          style.css       --> default stylesheet
          
      Images /           --> image folder  
      
  components/      --> version related components
  
      header/	   --> Header component with html and JS file
      
      content/          --> content component
      
      footer/             --> Footer component
      
index.js	                 --> main application modules

index.html	   --> app layout file (the main html template file of the app) 

  stylesheets/        --> SASS stylesheet  
  
      styles.scss       --> stylesheet 



# Summary:

•	This is a responsive Application that provides support to all latest browser, tablets and smart phones.

•	JS Framework - Angular JS.

•	This application contains reusable component for header, content and footer.

•	This application shows responsive carousel design. 

•	On Click of large image below carousel shows window modal caption.

•	This application contains SASS file inside stylesheets folder that is externally minified to css file inside assets/css folder.


# Things to do:

•	Creating more reusable component

•	Pages are static, It could change to dynamic using (either jQuery) functions, JSON object and RESTapi (get/post/put/delete) 

•	Create two more components as per design based on grid structure 

•	More Cleaner Structure by using HTML semantic element and naming convention


 


