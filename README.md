# Development

### Link to Deployed Website
https://hungrylizard586.github.io/devolopment-project/

### Goal and Value of the Application
The goal of the application is to create a functioning web app that lets you see courses offered at brown. The value of the app is that is tells the user all the basic necessary information about the app.

### Usability Principles Considered
The main usability principle I considered was varying font size. It clearly shows what is a header or a section title. There is also a clear distinction on screen as to where the components are and the various settings, having the screen split between them shows some separation.

### Organization of Components
Each component consists of the class number, name, deparment, time, minutes per week, enrollment number, professor, and a picture of a professor. These are listed vertically in each component. Then there is an add to cart button and a remove from cart button.

### How Data is Passed Down Through Components
Data is passed down through components as props. It is passed in sort of like parameters when the component is made in the App function, then in the component funciton it uses the 'props' keyword to call on and use whatever data was passed in.

### How the User Triggers State Changes
The user triggers state changes in various ways. Whenever they decide to filter or sort there is a state change. Additionally, whenever they add or removed from cart.
->Filtering by Department:
  ->No filter: No change, goes back to original state.
  ->Computer Science, Biology, Applied Math, Music: Each shows the classes offered in the respective department.
->Filtering by Time:
  ->No Filter: No change, goes back to original state.
  ->Time DOW: Each shows the classes offered at the time.
Both kinds of filters can be applied simulateously in any order.
->Sort by Enrollment:
  Don't want a class too big? Sort by enrollment size from smaller to larger. 
  Can be used with filters.
->Add/Remove to cart
  Want to go to a class? Add it to your cart. Have a class you don't like anymore? Remove it from cart. Each class can only be added to cart once (since you can really only be enrolled in the class once)
  The aggregator is the total amount of class time you will be spending in all your classes.
  

