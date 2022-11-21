import "./App.css";
import { useRef } from "react";
function App() {
  const iframeRef = useRef();

  function sendMsg() {
    console.log(iframe.current);
    iframeRef.current.contentWindow.postMessage("2222", "*");
  }
  return (
    <>
      <div>this site contains the iframe for second one</div>
      <iframe
        ref={iframeRef}
        src="https://seconddomain.pages.dev/"
        style={{ display: "none" }}
        onload={sendMsg}
      ></iframe>
    </>
  );
}

export default App;
