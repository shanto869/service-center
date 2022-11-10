import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import useTitle from '../../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')

    return (
        <div className='text-center my-12 mx-10 shadow-2xl p-10 rounded-md'>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium  bg-slate-700 text-white">
                    What's Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">
                        <table className="table w-full ">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th></th>
                                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                    <td>Non-relational or distributed database system.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>These databases have fixed or static or predefined schema</td>
                                    <td>They have dynamic schema</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>These databases are not suited for hierarchical data storage.</td>
                                    <td>These databases are best suited for hierarchical data storage.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>These databases are best suited for complex queries.</td>
                                    <td>These databases are not so good for complex queries.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Vertically Scalable.</td>
                                    <td>Horizontally scalable.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.</td>
                                    <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium  bg-slate-700 text-white">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content text-start">
                    <p> <strong>JWT</strong> or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>

                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permission the client has been granted. A JWT is a string made up of three parts, seperated by dots(.) and serialized using based 64. In the most common serialization format, compact serialization, the JWT, the JWT looks something like this: xxx.yyy.zzz</p> <br />
                    <p>Once decoded, you gets two JSON string. 1. The Header 2. The Plyload 3. The Signature</p>
                    <p>The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. </p>
                    <p>The Signature  ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium  bg-slate-700 text-white">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content text-start">
                    <div className="overflow-x-auto">
                        <table className="table w-full ">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>JavaScript</th>
                                    <th>Node.js</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th></th>
                                    <td>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</td>
                                    <td>It's a bridge, open-source Js runtime environment for executing Js on the server.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>It's a programming language, after all. Any browser with a competent browser engine will operate.</td>
                                    <td>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>It's most commonly used on client-side servers.</td>
                                    <td>It's mainly popular on the server-side.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>The node community does not care about JavaScript.</td>
                                    <td>All node projects represent the JavaScript community.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>It's made for creating network-centric apps.</td>
                                    <td>It's made for real-time data-intensive apps that run on multiple platforms.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>It's a new release of the ECMA script that works on the C++-based V8 engine.</td>
                                    <td>C++, C, and JavaScript are used.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>TypedJS, RamdaJS, and other JavaScript frameworks are examples.</td>
                                    <td>Nodejs modules include Lodash and Express. All of these modules must be imported from npm.</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium bg-slate-700 text-white">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content text-start">
                    <strong>NodeJS receives multiple client requests and places them into EventQueue.</strong>
                    <span className='flex align-middle'>

                        <p className=' ml-2'><strong>1.</strong> Iterative - Incoming requests will go on a queue and be processed sequentially in the main loop. A interrupt handler, poll point in the loop, or a separate thread will accept incoming requests and append them to the queue as they arrive.</p>
                    </span> <br />
                    <span className='flex align-middle'>

                        <p className=' ml-2'><strong>2.</strong> Multi-threading - The main loop will accept requests as they arrive and spawn a child thread to deal with it.</p>
                    </span> <br />
                    <span className='flex align-middle'>

                        <p className=' ml-2'><strong>3.</strong> Multi-tasking - At startup the main line code will spawn a number of child processes, either copies of the primary server task or dedicated processor tasks. That number may be fixed or may be auto-ramping to spawn additional children as needed to handle the load. The main loop will then accept requests as they arrive and add them to a queue for one of the child processes either round robin or to the first child that is free. If requests arrive faster than the children can process them the main loop will either queue them for later processing as children free up or ramp up the number of children.</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Blogs;