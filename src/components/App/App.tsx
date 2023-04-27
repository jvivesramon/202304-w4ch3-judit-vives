import Info from "../Info/Info";
import Keyboard from "../Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <>
      <Info />
      <main className="phone">
        <Keyboard />
      </main>
    </>
  );
};

export default App;
