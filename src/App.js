import './App.css';
import Home from "./screens/home/Home";
import Nav from "./components/Nav/Nav";
import AnimatedCursor from "react-animated-cursor"

function App() {
    return (
        <>
            <AnimatedCursor
                innerSize={10}
                outerSize={30}
                color='255, 255, 255'
                outerAlpha={0.1}
                innerScale={0.7}
                outerScale={3}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />

            <Nav/>
            <Home/>

        </>
    );
}

export default App;
