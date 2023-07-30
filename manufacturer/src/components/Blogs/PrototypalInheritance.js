import React from 'react';
import { FcBusinessman, FcCalendar, FcClock, FcOpenedFolder } from 'react-icons/fc';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
import prototypalInheritance from '../../images/blogs/prototypical_inheritance/01prototypical_Inheritance.png';
import prototypalInheritance2 from '../../images/blogs/prototypical_inheritance/02prototypical_difference.svg';
import Code from './SyntaxHighlighter/Dracula_SyntaxHighlighter';

const PrototypalInheritance = () => {
    const code1 = `//using __proto__ to access and set the [[Prototype]] of "anObject"
    anObject.__proto__ = someotherObject`;

    const code2 = `Object.create(proto, [propertiesObject])`;

    const code3 = `let o = {} o.constructor === Object // true 

let o = new Object o.constructor === Object // true 

let a = [] a.constructor === Array // true 

let a = new Array a.constructor === Array // true 

let n = new Number(3) n.constructor === Number // true`;

    const code4 = `obj.hasOwnProperty(prop)`;

    const code5 = `let user = { 			//create the user object
    showAccess: true 	//create and set showAccess property of user
};
let premiumUser = {		//repeat of the above for this object
    ads: false
};
 
premiumUser.__proto__ = user;	//user is the prototype of premiumUser
 
console.log(premiumUser.showAccess);	// "true"`;

    const code6 = `let user = {
    email: "educative@gmail.com", //create and set email property
    IDnumber: "#12345",		//create and set the Idnumber property
    showAccess: true,
    
    set accountInfo(value) {	//Setter method to change values of email and ID
        [this.email, this.IDnumber] = value.split(" ");
    },
     
    // defined method in the prototype
    get accountInfo() {
        return '${this?.email} ${this?.IDnumber}';
    }
};
     
let premiumUser = {
    __proto__: user,
    ads: false
};
    
// calls the inherited getter method
console.log(premiumUser.accountInfo); // "educative@gmail.com #12345"
    
premiumUser.accountInfo = "blogreader2020@hotmail.com #54321"; // calls the inherited setter method
    
console.log(premiumUser.accountInfo); // "blogreader2020@hotmail.com #54321"
//ID and Email values are now different for each object
console.log(user.accountInfo);	     // "educative@gmail.com #12345"`;

    const code7 = `let user = {
    email: "missing email", 	//fillers to reveal errors in inheritance at print
    IDnumber: "missing ID number",
    showAccess: true,
    
    set accountInfo(value) {
        [this.email, this.IDnumber] = value.split(" ");
    },
    
    get accountInfo() {
        return '${this?.email} ${this?.IDnumber}';
    }
};
    
let premiumUser = {
    __proto__: user,
    Ads: false
};
    
let familyPremium = {		//our new third tier of membership
    __proto__: premiumUser,	// in an inheritance chain with prior two objects
    multipleDevices: true
};
    
let me = { 			//an object for an individual user, me in this case
    __proto__: familyPremium, 	//inheritance to decide class
    email: "mymail@outlook.com",	//setting property values exclusive to this object
    IDnumber: "#67899"
};
    
console.log(me.multipleDevices); // true
console.log(me.accountInfo); 	// mymail@outlook.com #67899
    
//Least specific to most: not all user accounts are premium accounts, not all premium accounts are family premium accounts.`;

    return (
        <div className='my-10 mx-auto max-w-screen-2xl'>
            <div className='mx-10 sm:mx-20 lg:mx-36 xl:mx-56'>
                {/* Intro Banner Section */}
                <div>
                    <img className='w-full mx-auto' src="https://i.ibb.co/tqt5L6D/prototypal-inheritance.png" alt="Improving Performance" />
                    <h2 className='text-start text-2xl font-opensans font-bold my-2'>How does prototypical inheritance work?</h2>
                    <div className='flex flex-row flex-wrap gap-3 justify-start items-center text-sm mb-5'>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcCalendar />
                            <p>March 20, 2023</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcBusinessman />
                            <p>Posted by Admin</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcOpenedFolder />
                            <p>Frontend</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcClock />
                            <p>35 min read</p>
                        </div>
                    </div>
                </div>

                {/* Intro contents */}
                <div className='text-start font-opensans text-md'>
                    <p className='text-justify mb-3'>JavaScript is a prototype-based, object oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.</p>
                    <p className='text-justify mb-3'>Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).</p>
                    <p className='text-justify mb-3'>JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
                    <p className='text-justify'>Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
                </div>

                {/* Table of Contents */}
                <div className='text-start font-opensans text-md'>
                    <h2 className='text-2xl font-semibold mt-4 mb-1'>Table of Contents</h2>
                    <ul className='text-primary list-disc ml-10'>
                        <li><Link to='/blogs/how-does-prototypical-inheritance-work#what-is-prototypical-inheritance' className='hover:text-blue-400'>What is prototypical inheritance?</Link></li>
                        <li><Link to='/blogs/how-does-prototypical-inheritance-work#cons-of-prototypical-inheritance' className='hover:text-blue-400'>Cons of prototypical inheritance</Link></li>
                        <li><Link to='/blogs/how-does-prototypical-inheritance-work#important-terms' className='hover:text-blue-400'>Important terms</Link></li>
                        <li><Link to='/blogs/how-does-prototypical-inheritance-work#setting-up-prototypical-relationships' className='hover:text-blue-400'>Setting up prototypical relationships</Link></li>
                        <li><Link to='/blogs/how-does-prototypical-inheritance-work#inheriting-methods' className='hover:text-blue-400'>Inheriting methods</Link></li>
                        <li><Link to='/blogs/how-does-prototypical-inheritance-work#three-tier-inheritance-and-scalability' className='hover:text-blue-400'>Three-Tier Inheritance and Scalability</Link></li>
                        <li><Link to='/blogs/how-does-prototypical-inheritance-work#wrapping-up-and-resources' className='hover:text-blue-400'>Wrapping up and resources</Link></li>
                    </ul>
                </div>

                {/* Main contents */}
                <div className='flex flex-col gap-2 text-justify font-opensans text-md'>
                    {/* What is prototypical inheritance? */}
                    <div id='what-is-prototypical-inheritance'>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>What is prototypical inheritance?</h2>
                        <img className='mx-auto' src={prototypalInheritance} alt="Prototypical Inheritance" />
                        <p className='mb-3'>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a <span className='font-bold'>JavaScript prototype</span> to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                        <p className='mb-3'>All JavaScript objects inherit properties and methods from a prototype:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li><span className='text-error bg-gray-100'>Date</span> objects inherit from <span className='text-error bg-gray-100'>Date.prototype</span>.</li>
                            <li><span className='text-error bg-gray-100'>Array</span> objects inherit from <span className='text-error bg-gray-100'>Array.prototype</span>.</li>
                            <li><span className='text-error bg-gray-100'>Player</span> objects inherit from <span className='text-error bg-gray-100'>Player.prototype</span>.</li>
                        </ul>
                        <p className='mb-3'>The <span className='text-error bg-gray-100'>Object.prototype</span> is on top of the prototype inheritance chain. <span className='text-error bg-gray-100'>Date</span> objects, <span className='text-error bg-gray-100'>Array</span> objects, and <span className='text-error bg-gray-100'>Player</span> objects all inherit from <span className='text-error bg-gray-100'>Object.prototype</span>.</p>
                        <img className='mx-auto' src={prototypalInheritance2} alt="Prototypical Inheritance" />
                    </div>

                    {/* Cons of prototypical inheritance */}
                    <div id='cons-of-prototypical-inheritance'>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Cons of prototypical inheritance</h2>
                        <p className='mb-3'>Prototypical inheritance clearly has a lot of benefits for JavaScript programmings, but, like all tools, it does have limitations. Let's take a look at the key downsides to look out for as you write a prototype-based program:</p>
                        <ul className='list-disc ml-10'>
                            <li><span className='font-bold'>Inheritance cannot flow in circles as this will create an error.</span> For example, if <span className='text-error bg-gray-100'>user</span> linked <span className='text-error bg-gray-100'>premiumFamily</span> as a prototype in the above program, an error would occur as this would create a loop.</li>
                            <li><span className='font-bold'>Objects cannot inherit from multiple prototypes.</span> As we saw above, they can inherit multiple object's properties through a chain, however another object linked as a prototype explicitly will cause an error. This is the case even if the additional prototype is within the same chain. For example, <span className='text-error bg-gray-100'>familyPremium</span> could not have explicit links to both <span className='text-error bg-gray-100'>premiumUser</span> and <span className='text-error bg-gray-100'>user</span>.</li>
                            <li><span className='font-bold'>Prototypical relationships can only be made to objects.</span> This is because the <span className='text-error bg-gray-100'>__proto__</span> function works as a forwarder, directing the program where to find the value it is looking for. As the program either knows where to look or it doesn't, the function can be only either null or an object. All other types will be discarded.</li>
                        </ul>
                    </div>

                    {/* Important terms */}
                    <div id='important-terms'>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Important terms</h2>
                        <div>
                            <h3 className='text-xl font-semibold mb-3 mt-4'><span className='text-error bg-gray-100'>__proto__</span> property</h3>
                            <p className='mb-3'>In Javascript, every object has its own hidden, internal property, <span className='text-error bg-gray-100'>[[Prototype]]</span>. We can access that <span className='text-error bg-gray-100'>[[Prototype]]</span> using the <span className='text-error bg-gray-100'>__proto__</span> property. This calls the program to mark the template object as a hidden type. JavaScript objects must be linked to this prototype object. Now, an object's properties can be accessed by the inheritor object.</p>
                            <p className='mb-3'>Let's take a look at the syntax for accessing and setting the <span className='text-error bg-gray-100'>[[Prototype]]</span> property of an object.</p>
                            <div>
                                <Code language='javascript' code={code1}></Code>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-3 mt-4'>Object.create</h3>
                            <p className='mb-3'>JavaScript ECMAScript 5 comes with the function <span className='text-error bg-gray-100'>Object.create( )</span>. This method can be used to replace<span className='text-error bg-gray-100'>new</span>. We can use it to create an empty object based on a defined prototype and then assign it to a different prototype. Take a look at the syntax:</p>
                            <div className='mb-3'>
                                <Code language='javascript' code={code2}></Code>
                            </div>
                            <p className='mb-3'><span className='text-error bg-gray-100'>Object.create</span> methods can accept two arguments: <span className='text-error bg-gray-100'>propertiesObject</span> and <span className='text-error bg-gray-100'>prototypeObject</span>.</p>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-3 mt-4'>Object.prototype.constructor</h3>
                            <p className="mb-3">All objects have a constructor property. If an object is created without the using a constructor function, it will have a constructor property. The constructor property will return a reference to the object's <span className='text-error bg-gray-100'>Object</span> constructor function. It will return <span className='text-error bg-gray-100'>1</span>, <span className='text-error bg-gray-100'>true1</span>, and <span className='text-error bg-gray-100'>”test”</span>. Take a look at an example below.</p>
                            <div>
                                <Code language='javascript' code={code3}></Code>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-3 mt-4'>hasOwnProperty</h3>
                            <p className='mb-3'>Using <span className='text-error bg-gray-100'>hasOwnProperty</span>, we can test if an object contains a certain prototype property; the method will return <span className='text-error bg-gray-100'>true</span> or <span className='text-error bg-gray-100'>false</span> depending. This will help you clarify if an object has its own property or if it is inheriting instead. Take a look at the syntax below:</p>
                            <div>
                                <Code language='javascript' code={code4}></Code>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-3 mt-4'>The Prototype Chain</h3>
                            <p className='mb-3'>Prototypal inheritance uses the concept of <span className='font-bold'>prototype chaining</span>. Let's explore that concept. Every object created contains <span className='text-error bg-gray-100'>[[Prototype]]</span>, which points either to another object or null. Envision an object C with a <span className='text-error bg-gray-100'>[[Prototype]]</span> property that points to object B. Object B's <span className='text-error bg-gray-100'>[[Prototype]]</span> property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.</p>
                            <p className='mb-3'>This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object's prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or <span className='text-error bg-gray-100'>null</span> is reached.</p>
                            <p className='mb-3'>In the following sections, we'll take a look at some implementations using the handling of accounts in a streaming service.</p>
                        </div>
                    </div>

                    {/* Setting up prototypical relationships */}
                    <div id='setting-up-prototypical-relationships'>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Setting up prototypical relationships</h2>
                        <p className='mb-3'>For this first example, we'll write a simple prototypical relationship between two objects, <span className='text-error bg-gray-100'>user</span> and <span className='text-error bg-gray-100'>premiumUser</span>, using the <span className='text-error bg-gray-100'>._proto_</span> function. Each of these objects has their own properties which would be shared among all accounts at that tier: all <span className='text-error bg-gray-100'>users</span> have access to stream shows, <span className='text-error bg-gray-100'>showAccess = true</span>, and all <span className='text-error bg-gray-100'>premiumUsers</span> have advertisements disabled, <span className='text-error bg-gray-100'>ads = false</span>.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code5}></Code>
                        </div>
                        <p className='mb-3'>The prototypical relationship here ensures that <span className='text-error bg-gray-100'>premiumUser</span> inherits the <span className='text-error bg-gray-100'>showAccess</span> property set from <span className='text-error bg-gray-100'>user</span> without having to set it manually at the premium tier.</p>
                        <p className='mb-3'>To check that this has inherited properly, we add a line to have the console print the current value of <span className='text-error bg-gray-100'>showAccess</span> for <span className='text-error bg-gray-100'>premiumUser</span>. As it returns <span className='text-error bg-gray-100'>true</span>, we can see that <span className='text-error bg-gray-100'>premiumUser</span> has inherited this property from <span className='text-error bg-gray-100'>user</span>.</p>
                    </div>

                    {/* Inheriting methods */}
                    <div id='inheriting-methods'>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Inheriting methods</h2>
                        <p className='mb-3'>Prototypal Inheritance can be used not only to inherit properties from other objects but methods as well.</p>
                        <p className='mb-3'>In the example below, we build off our previous code and now add <span className='text-error bg-gray-100'>email</span> and <span className='text-error bg-gray-100'>IDnumber</span> properties to user, tracking account info for this user, as well as a setter method, <span className='text-error bg-gray-100'>accountInfo</span> which when called will parse a passed string, setting <span className='text-error bg-gray-100'>email</span> and <span className='text-error bg-gray-100'>IDnumber</span> to the new passed values.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code6}></Code>
                        </div>
                        <p className='mb-3'>The key section of this example is the calling of the three methods at the bottom. Each of these methods are defined under the <span className='text-error bg-gray-100'>user</span> object and therefore would usually be inaccessible by <span className='text-error bg-gray-100'>premiumUser</span>. However, because <span className='text-error bg-gray-100'>user</span> is the prototype of <span className='text-error bg-gray-100'>premiumUser</span>, all methods and properties of <span className='text-error bg-gray-100'>user</span> are shared with any inheritor objects.</p>
                        <p className='mb-3'>From the final two methods, we also see how the value of the properties shared are not stagnant but can be set to new values regardless of the properties' values in the prototype.</p>
                    </div>

                    {/* Three-Tier Inheritance and Scalability */}
                    <div id='three-tier-inheritance-and-scalability'>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Three-Tier Inheritance and Scalability</h2>
                        <p className='mb-3'>As you might have noticed, the examples above allow for only one account in <span className='text-error bg-gray-100'>user</span> and one account in <span className='text-error bg-gray-100'>premiumUser</span>. To introduce much needed scalability, we pivot from using these objects as variables and instead use them as an equivalent to classes.</p>
                        <p className='mb-3'>Instead of changing properties' values, we create new objects for each account, setting the prototype for that new object based on the tier of the account.</p>
                        <p className='mb-3'>In the example below, the object <span className='text-error bg-gray-100'>me</span> will be my account. This object then calls the inherited setter method to set values for the <span className='text-error bg-gray-100'>email</span> and <span className='text-error bg-gray-100'>IDnumber</span> property exclusive to this account, and set its tier by making the newly added <span className='text-error bg-gray-100'>familyPremium</span> object as its prototype.</p>
                        <p className='mb-3'>While this is an example using a single account object, this procedure could be scaled to assign the correct properties to any number of objects.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code7}></Code>
                        </div>
                        <p className='mb-3'>Even with three levels of inheritance, we can see that <span className='text-error bg-gray-100'>me</span> has access to data throughout the chain, from the immediately inherited <span className='text-error bg-gray-100'>multipleDevices</span> property to the inherited <span className='text-error bg-gray-100'>accountInfo</span> method, defined at the top of its chain in <span className='text-error bg-gray-100'>user</span>.</p>
                        <p className='mb-3'>Regardless of how many levels the inheritance chain has, all information from previous levels are retained and accessible.</p>
                        <p className='mb-3'>Through the use of prototypical inheritance, we're able to create a program in which new accounts can be added and assigned established properties in only a few lines of code rather than having to set manually.</p>
                        <p className='mb-3'>It also allows for ease of adaptability of those properties. If we could change properties of all inheritor accounts by only changing the properties in the prototype.</p>
                        <p className='mb-3'>As a result, we get a program which is scalable, adaptable, and efficient in execution, all possible thanks to a prototype-based approach.</p>
                    </div>

                    {/* Wrapping up and resources */}
                    <div id='wrapping-up-and-resources'>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Wrapping up and resources</h2>
                        <p className='mb-3'>Like JavaScript itself, prototypical inheritance is an invaluable tool in the world of website development and server management.</p>
                        <p className='mb-3'>Specifically, prototypes and prototypical inheritance are commonly used in many web application frameworks, such as AngularJS, to allow sharing of common behavior and state among similar components.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrototypalInheritance;