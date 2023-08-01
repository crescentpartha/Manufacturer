import React from 'react';
import { FcBusinessman, FcCalendar, FcClock, FcOpenedFolder } from 'react-icons/fc';
import typesOfTesting from '../../images/blogs/unit_testing/types-of-testing.png';
import unitTestingFrameworks from '../../images/blogs/unit_testing/unit-testing-frameworks.png';

const UnitTesting = () => {
    return (
        <div className='my-10 mx-auto max-w-screen-2xl'>
            <div className='mx-10 sm:mx-20 lg:mx-36 xl:mx-56'>
                {/* Intro Banner Section */}
                <div>
                    <img className='w-full mx-auto' src="https://i.ibb.co/grZYhRM/unit-testing.png" alt="Improving Performance" />
                    <h2 className='text-start text-2xl font-opensans font-bold my-2'>What is a unit test? Why should write unit tests?</h2>
                    <div className='flex flex-row flex-wrap gap-3 justify-start items-center text-sm mb-5'>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcCalendar />
                            <p>December 16, 2022</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcBusinessman />
                            <p>Posted by Admin</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcOpenedFolder />
                            <p>Unit Testing</p>
                        </div>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcClock />
                            <p>10 min read</p>
                        </div>
                    </div>
                </div>

                {/* Main contents */}
                <div className='flex flex-col gap-2 text-justify font-opensans text-md'>
                    {/* What is Unit Testing? */}
                    <div>
                        <p className='mb-3'>Software engineers have been testing ever since they could write code. However, the ability to automate software tests commercially emerged only in the 1980s with the introduction of AutoTester. In this article, we will explain why you should write unit tests.</p>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>What is Unit Testing?</h2>
                        <p className='mb-3'>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. <span className='font-bold'>A unit can be anything you want it to be — a line of code, a method, or a class.</span></p>
                        <p className='mb-3'>Generally, smaller tests are better as they give a more granular view of your code's performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.</p>
                        <img className='mx-auto w-2/4' src={typesOfTesting} alt="Unit Testing" />
                        <p className='mb-3 text-center italic'>Different levels of software testing</p>
                        <p className='mb-3'>There are two types of unit testing:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li><span className='font-bold'>Manual:</span> As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them.</li>
                            <li><span className='font-bold'>Automated:</span> This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.</li>
                        </ul>
                    </div>

                    {/* Why Do We Need Unit Testing? */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Why Do We Need Unit Testing?</h2>
                        <p className="mb-3">To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li>Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</li>
                            <li>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</li>
                            <li>It simplifies the debugging process.</li>
                            <li>Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</li>
                            <li>Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</li>
                            <li>Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</li>
                            <li>In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.</li>
                        </ul>
                    </div>

                    {/* Unit Testing Techniques */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Unit Testing Techniques</h2>
                        <p className="mb-3">There are three unit testing techniques to test code in isolation. Your application's requirements would determine which to adopt:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li><span className='font-bold'>Black Box Testing:</span> Testing the user interface, input, and output</li>
                            <li><span className='font-bold'>White Box Testing:</span> Testing the behavior of your functions</li>
                            <li><span className='font-bold'>Grey Box Testing:</span> Executing test suites, test cases, and risk analysis</li>
                        </ul>
                    </div>

                    {/* Unit Testing Tools */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Unit Testing Tools</h2>
                        <p className="mb-3">We have several frameworks for unit testing. Here are a few tools that you can use:</p>
                        <img className='mx-auto w-full' src={unitTestingFrameworks} alt="Unit Testing Frameworks" />
                    </div>

                    {/* Best Practices, Pros, and Cons */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Best Practices, Pros, and Cons</h2>
                        <p className="mb-3">Now that we understand unit testing, testing techniques, and tools, let's look at factors you need to consider to write effective unit tests:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li>All test cases should be independent of each other. For example, one test case shouldn't be a prerequisite for another to run. This ensures that if one test case fails, others wouldn't be affected by it.</li>
                            <li>If you run your automated unit tests and one or more tests fail, you should fix those before proceeding to the next phase of the SDLC.</li>
                            <li>Always write tests around areas where you fix bugs so that you have the confidence of the bug not re-occurring without knowing.</li>
                            <li>Name your tests appropriately. It could act as documentation and help you when debugging failing tests.</li>
                            <li>Mock external dependencies as much as possible.</li>
                            <li>Let your test coverage report guide you. You can easily detect uncovered lines of code from your test coverage report.</li>
                            <li>Don't ignore tests. If a test fails, try debugging; check if the error originated from your test or the code itself. Ensure all tests pass before merging your pull request.</li>
                        </ul>
                        <p className="mb-3">Let's look at some of the advantages of unit testing:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li>You can test units or functions of your project in isolation.</li>
                            <li>Unit tests act as documentation for your code.</li>
                            <li>They enable you to catch bugs early in the development process.</li>
                            <li>Automated unit tests help a great deal with regression testing.</li>
                            <li>They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</li>
                            <li>They contribute to higher code quality.</li>
                        </ul>
                        <p className="mb-3">Here are a few limitations of unit testing:</p>
                        <ul className='list-disc ml-10 mb-3'>
                            <li>Unit tests cannot catch integration-level bugs.</li>
                            <li>Unit testing increases the amount of code to be written.</li>
                            <li>Writing some complex test cases could take some time, especially if you're adopting TDD (Test-Driven Development).</li>
                        </ul>
                    </div>
                    
                    {/* Conclusion */}
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>Conclusion</h2>
                        <p className="mb-3">Unit tests generally exercise the functionality of the smallest possible unit of code (a method, class, or component) in a repeatable way. Although they can occasionally be complex (depending on the application), unit tests help you write better and cleaner code. Remember that a failing test is either doing its job correctly or poorly written in the first place.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnitTesting;