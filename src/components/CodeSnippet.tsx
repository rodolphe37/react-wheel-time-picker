import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const CodeSnippet = () => {
  return (
    <pre style={{textAlign:"left", fontSize:12}}>
      <code className="javascript">
        {`
    import TimePicker from "react-wheel-time-picker";
    function App() {
        const isDarkMode = true/false
        const [hourValue, setHourValue] = useState("00:00");

         const onChange = (timeValue: string) => {
            setHourValue(timeValue);
        };

        return (
            <div className="App">
                <div style={{ width: 150 }}>
                   <TimePicker
                        label="Start hour"
                        isDarkMode={isDarkMode}
                       onChange={onChange}
                        value={hourValue}
                   />
                </div>
            </div>
         );
    }
       export default App;
        `}
      </code>
    </pre>
  );
};

export default CodeSnippet;
