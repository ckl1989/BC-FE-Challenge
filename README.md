# Frontend Challenge

## Context
Coming into this challenge, I first looked at the constraints given by the API and the challenge requirements in order to come up with a reasonable architecture and UX design.

It was an interesting experience working with plain javascript since at work we work only in ES5 and JQuery, and my side projects consisted primarily of Rails and Ember.js.

I'm going to try to describe a bit of my thought process for why I chose to do what I did.

## Constraints
API Constraint:
* The only given service API was a GET Companies, which returned a JSON of companies that has no ID. The API also only had a unordered fuzzy search so I couldn't be guaranteed to get back a specific company given a name. For this reason, I decided that selecting a company and displaying its details had to be done by maintaining a "store" of companies fetched in the service request. This store would be referenced when a company was selected in the list and its data would be used in the profile view.

Challenge Requirement Constraint:
* Service request submissions happening on delayed keystroke rather than a submission button was kind of a mind bending situation for me. Initially I was going to do a simple search UI where a user could specify all query options first, then hit submit, leading to another page with search results. With the mentioned requirement, though, I went for more of a single page master/detail pattern that more instantly showed search query results.

## Architecture
* I chose to use ES6 and its classes feature so that I could easily instantiate new objects that would cleanly describe what each piece of the UI did. It allowed me to separate each UI component into descriptive classes that made it easier to read and scale as needed.

* Initially I tried, to construct this in a "React"-ish way where each component would render its own related DOM elements but instead of writing a million document.createElement()'s or setting strings onto the element.innerHTML, I decided to use the index.html as sort of a template for all static elements. The difficulty with doing something with innerHTML is that it makes it difficult to nest components within each other and attach their require event handlers since those DOM elements don't even exist yet.

* Each component is attached to a DOM element in the template and is essentially the JS logic on that specific element. Child components are initialized inside the component with the respective child DOM element.

* Instead of storing page/limit/query options in the URL hash and doing some sort of onHashChange event to fire off request calls, I opted for a general pattern Ember.js revolves around (I'm not sure if this is used in React). It is the "Data Down, Action Up" pattern, where data gets passed "down", to the many layers of components, while actions(aka callbacks) are passed through to components in their options param so that they can be called on something like a button click. The action will be sent "up" to the parent component that defined that callback, which in turn can do something with another component that is a child of that parent.

## Other Considerations
* I probably could have tied each component to a template html file similar to how Ember does it. It would just require loading the html for every component

* Unfortunately I didn't get to adding in the Labor Types filter but what I'd do is between the search box and the search results components, I'd add another component that would expand and display labor types in checkbox form. Upon each checkbox selection, the search results would update instantly, to match how the company name search works.

## Conclusion
Overall this assignment was a lot of fun and I learned a huge amount. Coming from a background of JQuery, ES5, and a proprietary framework at Informatica, I honestly had to look up a lot of things and figure out how things worked in the "modern" age. Even now I can think of so many ways to build upon what I have, but I guess that's the way with everything!

Thank you for the opportunity to work on this challenge. It was a great experience!
