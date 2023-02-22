import React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component {


    render() {
        return (
            <>            <header>
                
                <div
                    className="bg-netural-900 py-20 px-6 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                    <h1 className="mb-6 text-5xl font-bold text-white">Employee Management  System</h1>
                    <Link

                        to ="/create-new-employee"
                        className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white "
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        href="#!"
                        role="button"
                    >Add New Employee </Link>
                </div>
            </header>
            </>

        )
    }
}