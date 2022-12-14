import React from 'react';

const Blog = () => {
    return (
        <div className='m-4'>
            <h4>What is cors?</h4>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
            <h4>why are you using firebase?What other option do you have to implement othentication?</h4>
            <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Firebase is Google’s mobile application development platform. It has a lot of different products that cover much of what’s needed to build a mobile app. It would take a lot of time to describe the complete set of situations where Firebase can be helpful, so I suggest you start reading the web site to discover what all it can do.1.Cookie-Based authentication 2.Token-Based authentication 3. OpenId 4.SAML</p>
            <h4>How does the private route work?</h4>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticatedThe most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
            <h4>What is node?how does node work?</h4>
            <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
    );
};

export default Blog;