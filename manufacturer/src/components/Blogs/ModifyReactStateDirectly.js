import React from 'react';
import { FcBusinessman, FcCalendar, FcClock, FcOpenedFolder } from 'react-icons/fc';
import Code from './SyntaxHighlighter/Dracula_SyntaxHighlighter';

const ModifyReactStateDirectly = () => {
const code1 = `class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    increment() {
        this.state.counter = this.state.counter + this.props.increment
    }
}
`;

    const code2 = `class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    increment() {
        this.setState({
            counter: this.state.counter + this.props.increment
        })
    }
}
`;

    const code3 = `class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    increment() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + props.increment
        })
    }
}
`;

    return (
        <div className='my-10 mx-auto max-w-screen-2xl'>
            <div className='mx-10 sm:mx-20 lg:mx-36 xl:mx-56'>
                {/* Intro Banner Section */}
                <div>
                    <img className='w-full mx-auto' src="https://i.ibb.co/3fqb1nM/why-not-modify-react-state.png" alt="Improving Performance" />
                    <h2 className='text-start text-2xl font-opensans font-bold my-2'>Why you do not set the state directly in React?</h2>
                    <div className='flex flex-row flex-wrap gap-3 justify-start items-center text-sm mb-5'>
                        <div className='flex flex-row flex-nowrap gap-1 justify-start items-center'>
                            <FcCalendar />
                            <p>February 21, 2023</p>
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
                            <p>5 min read</p>
                        </div>
                    </div>
                </div>

                {/* Main contents */}
                <div className='flex flex-col gap-2 text-justify font-opensans text-md'>
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>The Problem</h2>
                        <p className='mb-3'>The state of a component is managed internally by React. Updating the state of a component directly can have unintended consequences that can be difficult to debug.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code1}></Code>
                        </div>
                        <p className='mb-3'>If the state is updated directly as in the example above, the component will not rerender since the state is compared shallowly. Additionally, the update may be lost if there are other state changes queued asynchronously using setState.</p>
                        <p className='mb-3'>Another common problem is using the current state/props to update the new state.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code2}></Code>
                        </div>
                        <p className='mb-3'>This will potentially cause issues due to a potential race condition between other state/prop changes and this particular state update. What happens if the props and/or state change before this state update happens?</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold mb-3 mt-4'>The Solution</h2>
                        <p className='mb-3'>The solution for the first example is to always use the <span className='text-error bg-gray-100'>setState</span> function to ensure state changes are properly queued. For the second problem, React provides a different version of setState that takes a function instead of an object.</p>
                        <div className='mb-3'>
                            <Code language='javascript' code={code3}></Code>
                        </div>
                        <p className='mb-3'>This will ensure that the state change happens with the correct version of the previous state and props.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModifyReactStateDirectly;