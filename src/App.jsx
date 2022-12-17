import { useEffect } from "react";
import Layout from "../components/Layout";
import Left from "../components/Left";
import Right from "../components/Right";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <Left />
      <Right />
    </Layout>
  );
}

export default App;
