import React from "react";
import classes from './Software.module.css';

const Software = () => {
    return (
        <div className={classes.main}>
            <aside  className={classes.left}>
                <h1>On this page</h1>
                <a href={"#hello"} >Hello</a>
            </aside>
            <div className={classes.middle}>
                <h1>Software Page</h1>
                <a id="hello"><a href={"#hello"}>Hello</a></a>
                <a id="hello"><a href={"#hello"}>Hello</a></a>
                <a id="hello"><a href={"#hello"}>Hello</a></a>
            </div>
            <aside className={classes.right}>
                <h1>SideBar</h1>
                <a>Contents</a>
                <a>Contents</a>
                <a>Contents</a>
            </aside>
        </div>
    );
};

export default Software;