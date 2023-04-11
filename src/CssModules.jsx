import classes from "./css/CssModules.module.css";

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p>CSS Modulesです</p>
            <button>ボタン</button>
        </div>
    );
};