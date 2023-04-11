import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
    };
    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは!</h1>
            <ColoredMessage color="blue" message="お元気ですか？"/>
            <ColoredMessage color="pink" message="元気です！"/>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </>
    );
};
