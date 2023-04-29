import React from 'react';
import { FcBusinessman, FcCalendar, FcClock, FcOpenedFolder } from 'react-icons/fc';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

const ImprovingPerformance = () => {
    return (
        <div className='my-10 mx-auto max-w-screen-2xl'>
            <div className='mx-10 sm:mx-20 lg:mx-36 xl:mx-56'>
                {/* Intro Banner Section */}
                <div>
                    <img className='w-full' src="https://i.ibb.co/6HbDQDf/improving-performance.png" alt="Improving Performance" />
                    <h2 className='text-start text-2xl font-opensans font-bold my-2'>How will you improve the performance of a React Application?</h2>
                    <div className='flex flex-row flex-wrap gap-3 justify-start items-center text-sm mb-5'>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcCalendar />
                            <p>April 29, 2023</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcBusinessman />
                            <p>Posted by Admin</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcOpenedFolder />
                            <p>Non-Functional Requirements</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcClock />
                            <p>12 min read</p>
                        </div>
                    </div>
                </div>

                {/* Intro contents */}
                <div className='text-start font-opensans text-md'>
                    <p className='text-justify mb-3'>Optimizing application performance is key for developers who are mindful of keeping a user's experience positive to keep them on an app and engaged. According to research by Portent, a site that loads in one second has a conversion rate that is five times higher than a site that loads in ten seconds. It's no secret that developers must create apps with optimized performance.</p>
                    <p className='text-justify'>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter performance issues. In this guide, we will discuss some important ways to optimize the performance of a React application, including pre-optimization techniques.</p>
                </div>

                {/* Table of Contents */}
                <div className='text-start font-opensans text-md'>
                    <h2 className='text-2xl font-semibold mt-4 mb-1'>Table of Contents</h2>
                    <ul className='text-primary'>
                        <li>
                            <Link to='/blogs/how-will-you-improve-the-performance-of-a-react-application#how-to-improve-performance' className='hover:text-blue-400'>How to Optimize Performance</Link>
                            <ul className='list-disc ml-10'>
                                <li><Link to='/blogs/how-will-you-improve-the-performance-of-a-react-application#optimizing-images' className='hover:text-blue-400'>Optimizing images</Link></li>
                                <li><Link to='/blogs/how-will-you-improve-the-performance-of-a-react-application#code-splitting-and-lazy-loading' className='hover:text-blue-400'>Code splitting and Lazy Loading</Link></li>
                                <li><Link to='/blogs/how-will-you-improve-the-performance-of-a-react-application#optimizing-the-dom' className='hover:text-blue-400'>Optimizing the DOM</Link></li>
                                <li><Link to='/blogs/how-will-you-improve-the-performance-of-a-react-application#avoid-unnecessary-component-rerenders' className='hover:text-blue-400'>Avoid unnecessary component re-renders</Link></li>
                                <li><Link to='/blogs/how-will-you-improve-the-performance-of-a-react-application#rendering-patterns' className='hover:text-blue-400'>Rendering patterns</Link></li>
                                <li><Link to='/blogs/how-will-you-improve-the-performance-of-a-react-application#cdns' className='hover:text-blue-400'>CDNs</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/blogs/how-will-you-improve-the-performance-of-a-react-application#wrapping-up' className='hover:text-blue-400'>Wrapping Up</Link></li>
                    </ul>
                </div>

                {/* Main contents */}
                <div className='flex flex-col gap-5 text-justify font-opensans text-md'>
                    <div id='how-to-improve-performance'>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>How to Improve Performance</h2>
                        <p>let's go through some of the optimization techniques we can use to make it better.</p>
                    </div>
                    <div id='optimizing-images'>
                        <h2 className='text-2xl font-semibold mb-3'>Optimizing Images</h2>
                        <p className='mb-3'>Images are one of the primary culprits for slow loading websites. You can optimize images by compressing them without compromising their quality. Tools like <Link to='https://tinypng.com/' className='hover:text-primary underline hover:no-underline'>tinyPng</Link> can compress your images and help you reduce the size of your website, and therefore it's load time.</p>
                        <p>Meta frameworks such as Next come with built-in image optimization.</p>
                    </div>
                    <div id='code-splitting-and-lazy-loading'>
                        <h2 className='text-2xl font-semibold mb-3'>Code splitting and Lazy Loading</h2>
                        <p className='mb-3'>Lazy loading involves loading content only when it is needed, instead of loading everything at once. This is done through something called <span className='font-semibold'>"code splitting"</span>. This is a bundling technique that allows you to break up code in smaller chunks that are downloaded only when needed, instead of downloading the whole code in the first render.</p>
                        <p className='mb-3'>A classic example of when this technique can come in handy is when navigating through different routes. Let's say our website has two main routes, "Home" and "Contact".</p>
                        <p className='mb-3'>We'd only want to download the code related to the "Home" page when we're in that route, and the "Contact" code to download when we are in that other route. Code splitting allows us to do that, and in this way help reduce the initial load time of the application and improve the user experience.</p>
                        <p>You can use tools such as <span className='font-semibold'>React.lazy()</span> and <span className='font-semibold'>Suspense</span> to implement lazy loading in your application. If you'd like a deeper dive into how these tools work, check out <Link to='https://www.youtube.com/watch?v=JU6sl_yyZqs' className='hover:text-primary underline hover:no-underline'>this video.</Link></p>
                    </div>
                    <div id='optimizing-the-dom'>
                        <h2 className='text-2xl font-semibold mb-3'>Optimizing the DOM</h2>
                        <p className='mb-3'>The size of the Document Object Model (DOM) can impact the performance of the application. The bigger and more complex it is, the longer it'll take to load and be modified.</p>
                        <p>You can optimize the DOM by reducing the number of elements, removing unnecessary elements, and minimizing the use of CSS animations.</p>
                    </div>
                    <div id='avoid-unnecessary-component-rerenders'>
                        <h2 className='text-2xl font-semibold mb-3'>Avoid unnecessary component re-renders</h2>
                        <p className='mb-3'>As you may know, React is a library that allows us to build user interfaces. In React, each piece of the UI is represented in code by a component. When a piece of the UI needs to be modified, React re-renders the component with the updated information.</p>
                        <p className='mb-3'>There are two things that trigger a component re-render: A change in state or a change in props. But sometimes, components can re-render unnecessarily, meaning there's no actual change in the information to be displayed.</p>
                        <p className='mb-3'>To prevent unnecessary re-renders, we can implement some of the following techniques:</p>
                        <ul className='list-disc ml-10'>
                            <li className='mb-3'><span className='font-semibold'>Memoization:</span> In React, memoization allows a component to "remember" the value of the state and/or props it receives. Before re-rendering, it can check if the value has actually changed. If it hasn't, then it doesn't re-render. This technique can be achieved through hooks like <span className='font-semibold'>useMemo</span> and <span className='font-semibold'>useCallback</span>. If you'd like a deeper dive on that, check out <Link to='https://www.freecodecamp.org/news/memoization-in-javascript-and-react/' className='hover:text-primary underline hover:no-underline'>this article.</Link></li>
                            <li className='mb-3'><span className='font-semibold'>Use key prop for lists:</span> When rendering a list of items in React, it's important to provide a unique key prop for each item. This helps React identify which items have changed and need to be re-rendered. If you don't provide a key prop, React will use the index of the item in the array, which can lead to unnecessary re-renders if the order of the items changes.</li>
                            <li><span className='font-semibold'>Keeping state as local as possible:</span> By keeping state local, I mean that the state that a component uses should be (when possible) within the component itself or as close in the component tree as possible. This is because when a component re-renders, all children components will re-render as well. It's not necessarily a terrible thing, but if we can avoid it, we probably should. So It's not a good idea to centralize all state in a single parent component, unless that states needs to be used from multiple parts of the application down the component tree. Here's <Link to='https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster' className='hover:text-primary underline hover:no-underline'>a great article about this topic</Link> if you're interested in learning more.</li>
                        </ul>
                    </div>
                    <div id='rendering-patterns'>
                        <h2 className='text-2xl font-semibold mb-3'>Rendering patterns</h2>
                        <p className='mb-3'>Another thing that can have an impact on the performance of your app is the rendering pattern it uses. A rendering pattern refers to the way in which the HTML, CSS, and JavaScript code is all processed and rendered in a web application or website.</p>
                        <p className='mb-3'>Different rendering patterns are used to achieve different performance and user experience goals. The most common rendering patterns in web development are:</p>
                        <ul className='list-disc ml-10'>
                            <li className='mb-3'><span className='font-semibold'>Client-side rendering (CSR):</span> In CSR, the client's browser generates the HTML content of a web page on the client-side using JavaScript. This approach can provide a fast and interactive user experience but can be slower for initial loading times and bad for SEO.</li>
                            <li className='mb-3'><span className='font-semibold'>Server-side rendering (SSR):</span> In SSR, the web server generates the HTML content of a web page on the server-side and sends it to the client's browser. This approach can improve initial loading times and SEO (search engine optimization) but can be slower for dynamic content.</li>
                        </ul>
                        <p className='mb-3'>Server-Side Rendering (SSR) can help improve the initial load time of the application by rendering the initial page on the server-side. This can help improve the Time-to-Interactive (TTI) and First Contentful Paint (FCP) metrics. You can use tools such as Next.js or Gatsby to implement SSR in your application.</p>
                        <p className='mb-3'>The choice of rendering pattern depends on the specific needs and requirements of a project, such as performance, SEO, user experience, and flexibility. If your priority is to provide users with a fluid, native-like experience, CSR is probably a good choice. If you need ultra fast page load times, SSR or SSG can be a better option.</p>
                        <p>For a deeper dive into rendering patterns, check out <Link to='https://www.freecodecamp.org/news/rendering-patterns/' className='hover:text-primary underline hover:no-underline'>this article.</Link></p>
                    </div>
                    <div id='cdns'>
                        <h2 className='text-2xl font-semibold mb-3'>Content Delivery Network (CDN)</h2>
                        <p className='mb-3'>A CDN, or Content Delivery Network, is a system of distributed servers or nodes that work together to deliver web content, such as images, videos, and other files, to users based on their geographic location.</p>
                        <p className='mb-3'>When a user requests content from a website, the CDN will serve the content from the server closest to the user, which helps to reduce latency and improve website performance. CDNs can also help to reduce the load on a website's origin server by caching frequently accessed content and delivering it from the CDN's servers instead of the origin server.</p>
                        <p className='mb-3'>CDNs are normally used to host static content (meaning content that doesn't change frequently over time), such as images, videos, blog posts and so on. Also, if you're using Static Site Generation (SSG) as a rendering pattern, you could host your rendered sites in a CDN for an even faster delivery.</p>
                        <p className='mb-3'>Some examples of popular CDNs are Cloudflare and Amazon CloudFront.</p>
                        <p>For more detail on how CDNs work, check out <Link to='https://www.youtube.com/watch?v=RI9np1LWzqw' className='hover:text-primary underline hover:no-underline'>this awesome video.</Link></p>
                    </div>
                    <div id='wrapping-up'>
                        <h2 className='text-2xl font-semibold mb-3'>Wrapping Up</h2>
                        <p className='mb-3'>Well everyone, in this article we've discussed how to optimize the performance of a React application.</p>
                        <p className='mb-3'>We've seen some optimization techniques such as optimizing images, code splitting and lazy loading, optimizing the DOM, and avoiding unnecessary component re-renders.</p>
                        <p className='mb-3'>As always, I hope you enjoyed the article and learned something new.</p>
                        <p>If you want, you can also follow me on <Link to='https://www.linkedin.com/in/crescent-deb-nath-partha/' className='hover:text-primary underline hover:no-underline'>LinkedIn</Link>. See you in the next one!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImprovingPerformance;