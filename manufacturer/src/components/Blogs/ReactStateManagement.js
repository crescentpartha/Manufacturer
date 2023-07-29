import React from 'react';
import { FcBusinessman, FcCalendar, FcClock, FcOpenedFolder } from 'react-icons/fc';
import Code from './SyntaxHighlighter/OneLight_SyntaxHighlighter';

const ReactStateManagement = () => {
    const code1 = `GET:- https://example.com/products/23

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";
    
export default function URLExample() {
    return (
        <Router>
            <div>
                <h2>Products</h2>
                <ul>
                    <li>
                        <Link to="/products/23">Product Details</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/products/:id" component={ProductDetails} />
                </Switch>
            </div>
        </Router>
    );
}
    
function ProductDetails() {
    // We can use the 'useParams' hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    return (
        <div>
            <h3>ProductID: {id}</h3>
        </div>
    );
}`;

const code2 = `import React, { useState, useEffect } from 'react';

function LocalStorage () {
  const [state, setState] = useState({});

  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    setState({ user, rememberMe });
  }, []);

  function handleChange (event) {
    const input = event.target;
    let { user, rememberMe } = state;
    if (input.type === 'checkbox') {
      rememberMe = input.checked
    } else {
      user = input.value
    }
    setState({ user, rememberMe });
  }

  function handleFormSubmit () {
    const { user, rememberMe } = state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? user : '');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        User: <input name="user" value={state.user} onChange={handleChange}/>
      </label>
      <label>
        <input name="rememberMe" checked={state.rememberMe} onChange={handleChange} type="checkbox"/> Remember me
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}`;

const code3 = `import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PlayerInfo(props) {
    const [show, setShow] = useState(true);

    function toggleButton() {
    setShow(!show)
    }

    return (
    <div>
        <button onClick={toggleButton}> Toggle </button>
        {show ? props.children : null}
    </div>
    );
}

function App() {
    return (<PlayerInfo>
        <div>
            Player: Smith
        </div>
    </PlayerInfo>)
}

export default App;`;

const code4 = `function PlayerInfo () {
    const [gender, setGender] = useState("Male");

    function handleChange (event) {
      setGender(event.target.value)
    }

    return (
      <div>
        <Dropdown onChoose = {handleChange} />
        <Choosen choice = {gender} />
      </div>
    );
  }`;

  const code5 = `<IconButton aria-label="cart">
  <StyledBadge badgeContent={ {this.state.cart.items.length} } color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>`;

    return (
        <div className='my-10 mx-auto max-w-screen-2xl'>
            <div className='mx-10 sm:mx-20 lg:mx-36 xl:mx-56'>
                {/* Intro Banner Section */}
                <div>
                    <img className='w-full' src="https://i.ibb.co/86bpdLS/react-state-management.png" alt="Improving Performance" />
                    <h2 className='text-start text-2xl font-opensans font-bold my-2'>What are the different ways to manage a state in a React application?</h2>
                    <div className='flex flex-row flex-wrap gap-3 justify-start items-center text-sm mb-5'>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcCalendar />
                            <p>April 05, 2023</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcBusinessman />
                            <p>Posted by Admin</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcOpenedFolder />
                            <p>React</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcClock />
                            <p>10 min read</p>
                        </div>
                    </div>
                </div>

                {/* Intro contents */}
                <div className='text-start font-opensans text-md'>
                    <p className='text-justify mb-3'>In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.</p>
                </div>

                {/* Main contents */}
                <div className='flex flex-col gap-5 text-justify font-opensans text-md'>
                    {/* URL */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>URL</h2>
                        <p className='mb-3'>We can use URL to store some data e.g.</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li>The id of the current item, being viewed</li>
                            <li>Filter parameters</li>
                            <li>Pagination offset and limit</li>
                            <li>Sorting data</li>
                        </ul>
                        <p className='mb-3'>Keeping such data in the URL allows users to share deep links with others.</p>
                        <p className='mb-3'>It is recommended to avoid storing such information in the app's state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change.</p>
                        <p className='mb-3'>React Router is a great tool to handle routes and manage the params.</p>
                        <div>
                            <Code language='javascript' code={code1}></Code>
                        </div>
                        <p className="">We do not need to store the id in a state or pass it as props to the <span className='bg-info'>ProductDetails</span> component instead, it can be fetched using <span className='bg-info'>useParams&#40;&#41;</span>.</p>
                    </div>
                    {/* Web Storage */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3'>Web Storage</h2>
                        <p className='mb-3'>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</p>
                        <p className='mb-3'>Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.</p>
                        <p className='mb-3'>We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.</p>
                        <p className='mb-3'>Here is an example of saving user preferences locally in the browser or even persist the complete state for one or more of our components.</p>
                        <div>
                            <Code language='javascript' code={code2}></Code>
                        </div>
                    </div>
                    {/* Local State */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3'>Local State</h2>
                        <p className='mb-3'>The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.</p>
                        <div>
                            <Code language='javascript' code={code3}></Code>
                        </div>
                    </div>
                    {/* Lifted State */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3'>Lifted State</h2>
                        <p className='mb-3'>The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.</p>
                        <p className='mb-3'>In the below example, we have lifted the state and the <span className='bg-info'>handleChange</span> event in the parent component, helping to maintain consistency.</p>
                        <div>
                            <Code language='javascript' code={code4}></Code>
                        </div>
                    </div>
                    {/* Derived State */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3'>Derived State</h2>
                        <p className='mb-3'>The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling <span className='bg-info'>.length</span> on an array to determine the number of records instead of storing a separate <span className='bg-info'>numItems</span> variable in the state or deriving an <span className='bg-info'>errorsExist</span> boolean by checking if the errors array is empty.</p>
                        <p className='mb-3'>So, why bother deriving the state? Well, deriving the state avoids our state values getting out of sync. It simplifies our code since we do not have to remember to keep separate values in sync. When we update the state, derived values are automatically recalculated in the render.</p>
                        <p className='mb-3'>For example, we can calculate the items added to the cart and show it on the cart icon like this, <span className='bg-info'>this.state.cart.items.length</span> and pass it as a prop to Badge Component. We do not need to store the <span className='bg-info'>itemsCount</span> key in a cart state. Each time the cart state gets changed, the count on the Badge will be calculated automatically.</p>
                        <div>
                            <Code language='javascript' code={code5}></Code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactStateManagement;