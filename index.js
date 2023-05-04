// Chapter one***
// class 00 learn: react js introduction
/**
 * React js is an one kind of library of JS
 * contiguously have some framework: vue js, angular js
 * it can be make a interactive UI (user interface) and interacting design.
 *
 * React is all about at javascript
 */

// class 01 learn: understanding react:
/**
 * How does website work
 * How does single page application (SPA) work
 * Which type of problem reactjs is solving
 * How does reactjs work
 * Core features of reactjs
 * Advanced features of reactjs
 * other necessary tools to work with reactjs
 */

// class 02 learn: how does reactjs work:
/**
 * React works on small and small part. So, Everything is a component in reactjs. component is a fragmentation or UI.
 * In which component can do:
 * we can reuse it
 * we can use it with other component
 * we can pass data from outside
 * it can have. it's own data
 * it can be styled separately
 * it can be used as many time according demanded
 *
 * Main component unity - (component a, component b, component c) called this component composition.
 *
 * A component has two main layer: (data layer, representation layer)
 * Data layer - our all work is done here. Data layer is dynamic.
 *
 * representation layer - this layer is static. this is called to html tag and style. It means, How will be the structure and style.
 *
 * In react, Our responsibility is to create a static view for small piece of UI & change the data anyhow. Rest of the thing react will do for us.
 *
 * It's easy, representation layer of a component can render other components.
 */

// class 03 learn: which type of problem reactjs is solving:
/**
 * Single page application
 * Multiple page application
 */

// class 04 learn: core features of reactjs:
/**
 * we're going to learn:
 * components (basic)
 * props & state
 * events
 * conditional rendering
 * lists & tables
 * forms & input elements
 * lifting state up (child component data pass in parent component)
 * composition & component tree
 * finally a project
 */

// class 05 learn: how to use this course:
/**
 * article
 * video
 * reference (website links, article, booklist)
 * quizzes
 *
 * Architecture of this course:
 * start react
 * environment set up
 * components
 * react state
 * events
 * lists
 * tables
 * forms
 * project & practice
 */


// Chapter two: Make our hands dirty with react:
// class 01 learn: we're going to learn:
/**
 * tools we need to up & running react
 * babeljs & webpack setup
 * create our custom environment
 * finally our first react app
 */

// class 02 learn: tools we need to compile react code:
/**
 * react uses modern javascript
 * some syntaxes are not relevant
 * performance optimization
 * development experience
 *
 * mainly two tools need to reactjs: (babel, webpack)
 */

// class 03 learn: custom environment setup:
/**
 * visit this page: createapp.dev and select babel, webpack, css, css modals, png, reactjs and download project and extract file.
 */

// class 04 learn: how to create a react app with live server:
/**
 * make directory awesome-react
 * command: create-react-app awesome-react
 * command for liver server: npm start
 */

// class 05 learn: our first react application:
/**
 * file run and show by browser
 */


// Chapter three:
// class 01 learn: installing create react app:
/**
 * we are going to learn in this chapter:
 * create react app -react CLI
 * react project structure
 * start our journey with react
 */

// class 02 learn: create react app:
/**
 * react configuration tools: site visit: create-react-app.dev
 * cli dommand: create-react-app
 */

// class 03 learn: create first project:
/**
 * install: node js
 * install: npm i
 * directory create: mkdir react-project
 * command: npx create-react-app first-react-project
 * command: cd first-react-project
 * command: code .
 * command: npm start
 */


// class 04 learn: react script in create react app:
/**
 * *script*: {
 * "start": "react-script start" [can start development environment],
 *
 * "build": "react-script build" [can build it through after ready the project. It will be need production],
 *
 * "test": "react-script test" [It can application test],
 *
 * "eject": "react-scripts eject" [can see hidden file it through. Most important point: if i hide some file using by eject scripts. Then can't wrap ejected file]
 * }
 */

// class 05 learn: create react app file structure:
/**
 * file conversation
 */

// class 06 learn: our first react component:
/**
 * create a components
 *
 * tailwindcss install command and usecase:
 * npm install -D tailwindcss
 * npx tailwindcss init
 */


// Chapter four: components and props:
// class 01 learn: components and props:
/**
 * understanding & working with components
 * understanding & working with jsx
 * understanding & working with props. props means to data share.
 */

// class 02 learn: component, what is react component:
/**
 * component mean to class.
 *
 * there are two layer in a component:
 * data layer or logic layer-
 * 1. state
 * 2. variables or properties
 * 3. functions or methods
 * 4. life cycle methods
 *
 * representation layer or required fill. in which can't change-
 * 1. JSX
 *
 * must be apply 'render()' for component and representation.
 *
 * if variables and properties changes, so will not work render()
 *
 */

// class 03 learn: type of component react:
/**
 * there are two component in react:
 * 1. class based component/stateful component/smart component
 *
 * 2. functonal component/stateless component/ dumb component
 */

// class 04 learn: create functional component:
/**
 * normal js function() {} called this functional component in react.
 *
 * functional component are called dumb component.
 *
 */

// class 05 learn: JSX in react:
/**
 * jsx means JavaScript Extention
 *
 */

// class 06 learn: how to use jsx in react.
/** can be used anywhere
 * react jsx
 */

// class 07 learn: create a simple profile apps component:
/**
 * where there will be some information. like as:
 * name, position, skills name, social links provided here.
 */

// class 08 learn: split profile component into multiple child component:
/**
 * react always work with component. react work different component for future update.
 * 1. group fo data
 * 2. reuseability
 * 3. multiple uses data
 * 4. future proof
 *
 * where hasn't work of data and  representation has work there use functional component.
 *
 * functional component:
 * const Bio = () => {
 *  <h1>I am Kajal</h1>
 * }
 *
 * render () {
 *  return () {
 * <div>
 *  <Bio/>
 * </div>
 *  }
 * }
 *
 * that functional components will keep in new created react file and have to import and export file name.
 *
 */

// class 09 learn: how reuse react component:
/**
 * multiple component globally reuse any file.
 * file import and export
 * then component call and apply.
 */

// class 10 learn: props
/**
 * props has come for save from code duplication.
 * dynamically, props can be changed component data. that data we will provide. that will get return in browser and this is called props.
 * props time is to work take functional component
 * functional component will be call where from. have to provide data change dynamically.
 * given the attribute with custom component that is called props. like as:
 * <componentName name='changed data' />
 * then dynamically changed data.
 * <tag>Your name is {props.name}<tag/>
 * */

// class 11 learn: modify profile component using props:
/**
 * props use data modify in component. that is called data update.
 *
 */

// class 12 learn: how to pass function as props:
/**
 * if i want, can be pass the function as props to child component.
 * function pass as props to child component.
 *
 * create a function with parameter(context) in main component before render() function. like as:
 * getContext(context) {
 *  console.log(context)
 * }
 *
 * then call this function after render() { calll here } like as:
 * this.getContext(this)
 *
 * create a new child component for created the function. then called that created function after render () { called here with this.props.functionName(this) } like as:
 * this.props.func(this)
 *
 * thereafter created child component called that in parent compontent like as:
 * <Child func={this.getContext} />
 *
 * flow:
 * universal truth: parent component to child component (pass).
 * false: child component to parent component (pass) not allow for this flow.
 */

// class 13 learn: how to render children props:
/**
 * In a component, can be stay many child component. and if we want to use the component oppenning and closing tag. don't have to use more self closing tag.
 * like as:
 * <componentName>...<componentName/>
 * this props is very important for higher order component.
 */


// Chapter Five: understanding react state:
// class 01 learn: we're going to learn in this chapter:
/**
 * what's state?
 * why do we need state?
 * how to change state?
 * this term is very important than other terms. Like that term use to create a react application.
 */

// class 02 learn: what does mean by state:
/**
 * state means a components own data.
 * state property, variable can be declared in two ways.
 *
 * state declaration code syntax for less than 16 version node JS:
 * in class: constructor(props) {
 *  super(props)
 *  this.count = 0
 * }
 *
 * and state declaration code syntax for greater than 16 version node JS:
 * count = 0 or state = { count: 0 }
 *
 * while the data value will not be change at a time. so then, use for solving this "state"
 * state variable's the value increase, update, change.
 * as a result of which, having change the value. but doesn't update view in browser.
 * state variable/object uses for this problem.
 */

// class 03 learn: introducing state
/**
 * state is a javascript object. which can hold anything.
 * state is to define into the component. like as:
 * constructor (props) {
 *  super(props)
 *  this.state = {
 *      count: 0
 *  }
 * }
 *
 * the data to be updated in the output. that data will store in a state = {} object.
 * In the next time, as if it can be updated data available in the output.
 *
 *
 * have another way to declare state variable/object. like as:
 * state = {
 *  count: 0
 * }
 */

// class 04 learn: react state works:
/**
 * react state can be used anywhere with declaration.
 * actually, react state works as a store in component.
 * some function is to create for update react state. like as: through: events handling, this.setState({count: this.state.count})
 * where will be stay dynamic data. there will be use "state system".
 *
 */

// class 05 learn: how does react state works:
/**
 * while a state use in a component, then the state/component works like to store.
 * store has two main functionality:
 * 1. subscriber:
 * if any customer subsciption keep it on. so every update data will send to subscriber as message.
 *
 * 2. view layer:
 * <div>view layer</div>
 *
 * the state update system is using setState({}) method.
 */

// class 06 learn: how to update state:
/**
 * state is js object. but can't update like properties.
 * can't changed muteable data from outside. so use setState({})
 * the properties who use as object take and will work inside setState({}) method. that only given data update and another properties no change.
 * we can use function inside the setState() method for extension advantages.
 * setState() method is a asynchronous function.
 */

// class 07 lean: simple timer project:
/**
 * set timer project
 */


// Chapter Seven: Understanding Styles in react:
// class 01 learn: We're going to learn:
/**
 * How to style react apps
 * Which is the best method to style
 * Styles in action
 */

// class 02 learn: How to styles react application:
/**
 * There are four main method to style react app:
 * 1. Inline CSS
 * 2. CSS class
 * 3. CSS module
 * 4. JSS (Styled component)
 *
 * 1. Inline CSS: How could write the css inside html tag using by style attribute. At the same way, can also be used in react. But Have some limitation here. Like as, can't be used media query, extra class and pesudo class here.
 *
 * 2. CSS class: Like css file create and attached with html file.
 *
 * 3. CSS module: This method works properly and perfect for css usecase. Just will be unique identifier generate using by webpack. As if doesn't stay more css scope problem.
 *
 * 4. JSS (Styled Component): It has become popularity. We will write css style inside javascript. If the want, you can use more and more library for styling. But Best choose is Styled Component. It has also some good effect and bad effect. Then also it's good solution.
 *
 * We can create a style full application of this four method.
 */

// class 03 learn: Inline styles:
/**
 * Have to use style name with camelcase and css format: Like as:
 * create a object & css camelcase  declare:
 * const headding = {
 *  fontSize: 30px,
 *  fontFamily: 'Arial',
 * }
 * Then use created objectName inline css with style attribute.
 * Two way Declaration:
 * First way:
 * <h1 style={headding}></h1>
 * Second way:
 * <h1 style={{fontSize: 'fontSize', color: 'red', backgroundColor: 'black'}}></h1>
 *
 * But can't be used some property in react using by inline css. Like as: hover, after, before etc.
 */

// class 04 learn: How to use css class:
/**
 * This is use same before css code.
 * Here is one problem. That is css ClassName and same className not reachable for a complete project. Thereby it's not perfect way. It needs webpack for solve the problem.
 */

// class 05 learn: What's css module:
/**
 * Module means create seperate file and connect one with another file. This is called module.
 * file name: name.module.css
 * different file but same className and automatically name modify using webpack.
 * Here is the main purpose fileName.
 *
 * where will import the css file there will need to use that props, children, classes given below:
 * like this:
 *
import classes from './style.module.css' // file module and import.
const Button = (props) => (
    <div>
        <button className={classes.button} {...props}>
            {props.children}
        </button>
    </div>
 */

// class 06 learn: JSS (Styled Component):
/**
 * We can throught this. Can write a javascript code like javascript styles.
 * Have a great example as styled component.
 *
 * Visit site and Documentation research: styled-components.com
 */


// Chapter Seven: Events:
// class 01 learn: Events in react:
/**
 * What we are going to learn:
 * 1. What is Event
 * 2. How to handle event in react
 * 3. Some basic envents in react
 */

// class 02 learn: What is Events:
/**
 * Event is an object which only triggers when something special happens and return an object to the listener which contains information related to that event.
 *
 * Note: Event is the only way to interact with users and get users feedback.
 *
 * Every event has -
 *      - Name
 *      - Listener function
 *
 */

// class 03 learn: First react event:
/**
 * create a function for event handling and write event name in tag like this:
 * In class:
 * arrow function:
 * eventHandler = () => {
 *      alert('You clicked!')
 * }
 * <button onClick={this.eventHandler}></button>
 */

// class 04 learn: Text field change event:
/**
 * Same work all event handler. Just different event name.Like as:
 * onClick, onChange, onmouse, ondblClick.
 */

// class 05 learn: Two way data bindings:
/**
 * In this way, if want, can change the data and view update using by state with value. Like:
 * value={this.state.name}
 *
 * When will we use the form_field, input_text_field with state object. Then must be use 'onChange' event handler.
 *
 * Then will use setState() method for updating data.
 *
 * First work: Data show with data bind
 * Second work: Data updating with data bind
 *
 * That's called two way data bindings.
 */

// class 06 learn: Text_field_blur and focus in react:
/**
 * Events can be use more than one in one element.
 */


// Chapter Eight: Input elements & forms:
// class 01 learn: input elements & forms:
/**
 * What we are going to learn:
 * 1. Basic input elements
 * 2. Checkbox and radio buttons
 * 3. Controlled and uncontrolled forms
 * 4. Create forms in react
 * 5. Form validation
 * 6. State lifting
 */

// class 02 learn: Basic input and elements in react:
/**
 * If i want to use bootstrap in react. So install bootstrap tool.
 * command: npm add bootstrap
 * Then will server open again.
 * command: npm start
 *
 * Then bootstrap file import in rootFile.jsx
 *
 * Create some elements:
 * form:
 * input, select, textarea, button
 *
 * Declare a name attribute in every elements:
 * <input type="text" name="name" />
 *
 * create a state obj:
 * state = {
 *      name: '',
 *      country: '',
 *      bio: '',
 *      birthday: ''
 *  }
 *
 * Distructure of state object after render function.
 * {name, country, bio, birthday} = this.state
 *
 * create a value in every elements: value={}
 *
 * Create a changeHandler for handling the elements. Like as:
 * changeHandler = (event) => {
        // console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
      })

* and this handler function call as onChange eventHandling in every elements.
 */

// class 03 learn: Checkbox and Radio button:
/**
 * At the same way declaration and handlerFuntion create and call, state distructure, value define.
 */

// class 04 learn: React checkbox and skills array:]
/**
 * At first, declare a skills array in state.
 * state = {
 *      skills: []
 * }
 *
 * Distructure the array.
 * create a handler function and syntax like this:
 * skillChangeHandler = (event) => {
 *           if(event.target.checked) {
 *      this.setState({
 *          skills: [... this.state.skills, event.target.value]
 *      })
 *  } else {
 *      const skills = this.state.skills.filter(skill => skill != event.target.value)
 *      this.setState({skills})
 *  }
 * }
 */

// class 05 learn: Form:
/**
 * Create a uncontrolled form. That mean react will not be use here. That's called uncontrolled form.
 *
 * If we want to work uncontrolled form. So we have to focus on "event".
 *
 * Then create a object and value assign: name, email, password. After printout that created object.
 */

// class 06 learn: Our first react form:
/**
 * We will just copy the uncrontrlled codes. Then create a new file and paste is there.
 *
 * These code customize and use the reactjs.
 */

// class 07 learn: Understand the form philosopy in react:
/**
 * Index - State and logic (some handler)
 * Form - Form jsx
 */

// class 08 learn: Split form into multiple:
/**
 * Split means that every part of form. We will create new component for these split of form.
 * 
 * We have to manage many props perfectly. This is why have to use a simple library. This is called "prop-types". It will manage these props perfectly.
 * 
 * prop-types checkout of prop data type.
 * 
 * prop-types install for react form. prop-types is a small library for using of react component.
 * 
 * command: npm install prop-types
 * 
 * Use of propTypes:
 * componentName.propTypes = {
 *  name: PropTypes.string.isRequired,
 *  label: PropTypes.string.isRequired,
 *  type: PropTypes.string.isRequired,
 *  placeholder: PropTypes.string.isRequired,
 *  value: PropTypes.string.isRequired,
 *  onChange: PropTypes.func.isRequired
 * }
 * 
 * componentName.defaultProps = {
 *  type: 'text',
 *  label: '',
 *  placeholder: ''
 * }
 * 
 * Note:
 * 1. Functional Component
 * 2. Everything has to think as props.
 * 3. Create anything field.
 * 4. Whose these value will be change dynamically. That's also have to think props. I mean, value pass as props.
 * 5. Install prop-types for props manage perfectly. (data type check of props)
 * 6. import PropTypes form 'prop-types'
 * 7. Use of proptypes: ComponentName.propTypes object and collect these value with object data.
 * 8. Data declare in object.
 * 9. If we want, Default data type set up with Component.defaultProps object and set the value in object.
 * 10. Component call his main position and given his right value.
 * 11. Mian functional component events handler declaretion is onChange={props.onChange}
 * 12. create a new functional component for keeping form data. 
 * 13. module import perfectly
 */

// class 09 learn: Create a simple sign up form:
/**
 * import PropTypes from 'prop-types'
 * import React from 'react'
 * 
 * 1. First of all, We have to think about state object for create any form.
 * 2. Create changeHandler for update data with setState()
 * 3. Then create some field in form. Like as: name, email, password, Date of birth etc.
 * 4. components, prop-types, cName.defaultProps = {}, cName.propTypes = {}
 * 
 * export default cName
 */

// class 10 learn: How to validate in react form:
/**
 * Form validation with simple functional and logical system.
 */

// class 11 learn: How to implement form validation in react:
/**
 * Validte: errors, functions, logics, checkout and many kinds of validate.
 */

// class 12 learn: Understanding state lifting in react:
/**
 * 
 */