### Next Bootcamp 
## Created app using npx create-next-app
# Routing
    - How File-based Routing Works
    - Adding static Routes
    - Adding dynamic Routes 
    - useRouter object .pathname, .query 
    - catchAllRoutes [...slug]
    - Navigation with the Link component & dynamic routing to clients 
    - Navigate programmaticly using router.push()
    - 404 page 

### Turned project to events App 
## 4 routes 
    - /                list of featured events 
    - /events          list of all events 
    - /events/id       Event details page 
    - /events/...slug  Filtered Events Page by date  

# Added pictures to Public folder under images folder

# Added a Components folder to create components away from pages folder that direct the routing of components.
# Built EventList && EventItem components to take props and render information 

### Styling
# Learned how to use CSS classes object by creating .module.css files 
# Added Icons from heroIcons  
# Global.css file has styling for all the app and no need to import it 

### Navbar
# _app.js wraps the app component where you can add a navbar layout for all pages to render.

### Slug 
# router.query.slug will output what's in the url after /events 
# 

### General 
- +variable  turns a string into number


### getStaticProps() to pre render page with some data => index page 
# using await keyword to wait on other functions async


### Data Fetching 
- moved database from dummy_data.json to firebase by google.
- fetching data using SWR hook 