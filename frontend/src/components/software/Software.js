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
                <a id="hello"><div href={"#hello"}>Hello</div></a>
                <a id="hello"><div href={"#hello"}>Hello</div></a>
                <a id="hello"><div href={"#hello"}>Hello</div></a>
            </div>
            <aside className={classes.right}>
                <a>SideBar</a>
                <a >Contents</a>
                <a>Contents</a>
                <a>Contents</a>
            </aside>
        </div>
    );
};

export default Software;