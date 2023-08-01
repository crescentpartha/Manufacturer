import React from 'react';
import { FcBusinessman, FcCalendar, FcClock, FcOpenedFolder } from 'react-icons/fc';
import Code from './SyntaxHighlighter/Dracula_SyntaxHighlighter';

const ImplementSearch = () => {
    const port = undefined;
    const query = undefined;
    const search = undefined;

    const code1 = `mkdir siApp`;
    const code2 = `yarn init`;
    const code3 = `{
    "name": "your-app-name",
    "version": "1.0.0",
    "main": "index.js",
    "author": "sproff",
    "license": "MIT",
},`;
    const code4 = `yarn add express`;
    const code5 = `{
    "name": "your-app-name",
    "version": "1.0.0",
    "main": "index.js",
    "author": "sproff",
    "license": "MIT",
    "dependencies": {
        "express": "^4.17.1",
    },`;
    const code6 = `const express = require("express")
const app = express()
const port = 9000

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log('Server is running on PORT:${port}')
})`;
    const code7 = `// product.controller.js
const searchProduct = async (req, res, next) => {
    try {
    const { q } = req.query;
    const products = await Product.find({ name: { $regex: q, $options: 'i' } });
    
    if (products.length < 1) throw new ErrorHandler(404, 'No product found');

    res.status(201).json({
        status: 'success',
        message: 'Product has been found successfully',
        products,
    });
    } catch (error) {
    next(error);
    }
};`;
    const code8 = `yarn create react-app my-app react-router-dom`;
    const code9 = `// route.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Routes = () => {
    return (
    <Router>
        <Switch>
        <Route path="/search">
            <SearchResults />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        </Switch>
    </Router>
    );
};`;
    const code10 = `touch SearchInput.jsx`;
    const code11 = `// SearchInput.jsx
import React, { useState} from "react";
import { useHistory } from "react-router-dom";

export const SearchInput = () =>
{
    const [search, setSearch] = useState("");
    const history = useHistory();
    return (
    <div>
        <InputGroup>
        <Input
        onChange={(e) => {
        setSearch(e.target.value)
        }}
        type="search"
        placeholder="Search product"
        />
        <InputRightElement>
        <div>
            <button onClick={() => history.push('/search?query=${search}')} >Search</button>
        </div>
        </InputRightElement>
        </InputGroup>
    </div>
    )
}`;
    const code12 = `touch SearchResults.jsx`;
    const code13 = `// SearchResults.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(false);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");
    const { slug } = useParams();
    useEffect(() => {
    const searchProduct = async () => {
        try {
        const { data } = await axios.get('API_URL/search?q=${query}'); setSearchResults(data.products);
        } catch (error) {
            setError(error.response?.data?.message);
            }
        };
            searchProduct();
        }, []);

    return (
    <div>
        {searchResults.map((searchResult) => (
        <div
            key={searchResult.id}>
            <p>{searchResult.name}</p>
        </div>
        ))}
    </div>
    )
}`;

    return (
        // <div>
        //     <h2>How will you implement a search to find products by name of an array of products?</h2>
        // </div>
        <div className='my-10 mx-auto max-w-screen-2xl'>
            <div className='mx-10 sm:mx-20 lg:mx-36 xl:mx-56'>
                {/* Intro Banner Section */}
                <div>
                    <img className='w-full mx-auto' src="https://i.ibb.co/DbXj9B4/search-items-in-array.jpg" alt="Improving Performance" />
                    <h2 className='text-start text-2xl font-opensans font-bold my-2'>How will you implement a search to find products by name of an array of products?</h2>
                    <div className='flex flex-row flex-wrap gap-3 justify-start items-center text-sm mb-5'>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcCalendar />
                            <p>January 01, 2023</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcBusinessman />
                            <p>Posted by Admin</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcOpenedFolder />
                            <p>JavaScript Programming</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcClock />
                            <p>25 min read</p>
                        </div>
                    </div>
                </div>

                {/* Main contents */}
                <div className='flex flex-col gap-2 text-justify font-opensans text-md'>
                    {/* Intro Section */}
                    <div>
                        <p className='mb-3 text-xl'>Having a functional search integration will enhance the user interaction on your website. Let's learn how to add a standard full-text search to your React web app.</p>
                        <p className='mb-3'>Search integration enables you to find things easily on a web application. With search integration, you can look for an item/product without going through the stress of scrolling manually to find the specific item or product.</p>
                        <p className='mb-3'>Search integration means the process of implementing a user search input on a web application to help query the searched value from a connected database.</p>
                        <p className='mb-3'>Having a functional search integration will enhance the user interaction on your website. It will give users a better experience when navigating your web application.</p>
                        <p className='mb-3'>This article includes a step-by-step guide to implementing search integration into a web application.</p>
                        <p className='mb-3'>In this article, you will learn:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li>What search integration is</li>
                            <li>Types of search integration</li>
                            <li>What react-router-dom is</li>
                            <li>The best approach for implementing a standard search</li>
                        </ul>
                    </div>

                    {/* Prerequisites */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Prerequisites</h2>
                        <p className='mb-3'>To understand this tutorial, you will need to have:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li>React v16 or newer</li>
                            <li>A basic understanding of React</li>
                            <li>A basic understanding of Node.js</li>
                            <li>A text editor</li>
                        </ul>
                    </div>

                    {/* Types of Search Integration */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Types of Search Integration</h2>
                        <p className='mb-3'>There are two significant types of text search:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li><span className='font-bold'>Full-text search:</span> A full-text search is a form of searching that compares every word in the search request to every word in the database.</li>
                            <li><span className='font-bold'>Partial text search:</span> Partial text search is when you enter part of a query word, but the database still manages to find the whole word.</li>
                        </ul>
                        <p className="mb-3">The most reliable text search is the full-text search. This search type gives you a better experience when looking for a product/item on a web application. This is the type we'll focus on today.</p>
                        <p className="mb-3">Before diving into the code aspect of the post, there are some additional terms you need to know for performing a full-text search:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li><span className='font-bold'>Routing:</span> When you click an element (link, button) within an application, routing allows you to move between different portions of the web application. That makes the transition of pages seamless without having to reload or re-render the whole page.</li>
                            <li><span className='font-bold'>React-router-dom:</span> This is a React library for creating dynamic routing in a React web application using the react-router-dom package.</li>
                        </ul>
                    </div>

                    {/* The Best Approach for Implementing a Standard Search */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>The Best Approach for Implementing a Standard Search</h2>
                        <p className='mb-3'>Let's begin by setting up our project environment. First, create a project directory.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code1}></Code>
                        </div>
                        <p className="mb-3">Next, initialize Yarn in the project directory.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code2}></Code>
                        </div>
                        <p className="mb-3">You will be asked some questions, and then it will automatically generate a package.json file that will contain the responses to the questions you answered earlier. See the basic structure below.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code3}></Code>
                        </div>
                        <p className="mb-3">Now you can start installing your packages. But for this tutorial, I will be installing Express.js.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code4}></Code>
                        </div>
                        <p className="mb-3">The package will be added to the dependencies inside your package.json file. See the structure below.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code5}></Code>
                        </div>
                        <p className="mb-3">As you can see, the Express package is now a dependency. Now, let's create a <span className='font-bold'>Hello World</span> app inside the index.js file.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code6}></Code>
                        </div>
                        <p className="mb-3">After setting up your index.js file, run node index.js in your terminal. Then, go to your browser and visit localhost:9000. You should see your message—“Hello World.”</p>
                        <p className="mb-3">Next, we need to set up the search controller inside your Node.js application. Create a folder inside your parent folder called controllers, then create a file inside called product.controller.js.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code7}></Code>
                        </div>
                        <p className="mb-3">In the code above, we started by declaring a try-catch statement and then assigned query params. Then we declared a variable that will contain a Mongoose attribute of find.</p>
                        <p className="mb-3">The find attribute tends to query the database whenever you input a particular letter/word. Then you validate your response by checking if the product is available or not by creating a conditional statement.</p>
                        <p className="mb-3">Next, we need to create a new React app with react-router-dom.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code8}></Code>
                        </div>
                        <p className="mb-3">Now, we need to set up the route. To set up your route, create a folder called <span className='font-bold'>routes</span> and then create a file inside the folder called <span className='font-bold'>route.js</span>.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code9}></Code>
                        </div>
                        <p className="mb-3">The code above contains the route that will handle the transition of your pages.</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li><span className='font-bold'>BrowseRouter</span> can be renamed to any name, so it is renamed to <span className='font-bold'>Router</span> to keep it short, which is also the standard naming convention.</li>
                            <li><span className='font-bold'>Router</span> serves as a parental div that will wrap all the routes; without the Router, your routes won't work.</li>
                            <li><span className='font-bold'>Switch</span> does what its name implies—it allows you to navigate from one page to another.</li>
                            <li><span className='font-bold'>Route</span> is the primary tag that nests your component. It specifies the pages that should be rendered whenever you click a specific link. It takes some props called <span className='font-bold'>path</span> and <span className='font-bold'>exact</span>.</li>
                        </ul>
                        <p className="mb-3">Next, we need to create a new file for search input. Navigate to your parent folder, create a subfolder called <span className='font-bold'>component</span>, and then create the search input file using this command below.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code10}></Code>
                        </div>
                        <p className="mb-3">Paste the following code into SearchInput.jsx.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code11}></Code>
                        </div>
                        <p className="mb-3">A state is created in the code above to listen to your input; the setSearch handles the onChange event; and the search state handles the input rendering, which will be triggered when you click the search button.</p>
                        <p className="mb-3">The useHistory hook provides access to the history instance, which is used to navigate. The action executed inside the button tag means that you are listening for an onClick event that will trigger the history.push. This will push you to another route (/search) created earlier, then store your input inside the search state.</p>
                        <p className="mb-3">The search state will be passed as a query to the new route (/search) and then render the output based on the database results.</p>
                        <p className="mb-3">Next, create a new file for search results. Navigate to your parent folder, create a subfolder called pages, and then create the search input file using this command below.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code12}></Code>
                        </div>
                        <p className="mb-3">Paste the following code into SearchResults.jsx.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code13}></Code>
                        </div>
                        <p className="mb-3">Above, we created two React hooks which are the useState and the useEffect. Two different states have been created, which are the searchResults and error states.</p>
                        <p className="mb-3">The useState hook declares state variables to preserve some values between the function calls, and it returns a pair of values: the current state and a function that updates it. The useEffect hook helps in data fetching, while the searchResults state handles the data coming from a specific API. Lastly, the error state handles errors coming from the overall actions.</p>
                        <p className="mb-3">The useLocation hook returns the location object representing the current URL. It serves as a redirect to another page whenever you click on a component. The hook is then attached to the query variable where an event will trigger it.</p>
                        <p className="mb-3">The API URL is attached to a search query that will enable the stored user input to trigger the .find attribute in Mongoose, which was declared earlier. The setSearchResults state will listen to the results obtained from the API and then render it to the user using a map function by mapping through with the searchResults state.</p>
                    </div>

                    {/* Conclusion */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Conclusion</h2>
                        <p className='mb-3'>Finally, we have created a functional search input with standard search results without any external library needed. We touched on the different types of text search, discussed what react-router-dom is, and highlighted a standard way to perform a full-text search.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImplementSearch;