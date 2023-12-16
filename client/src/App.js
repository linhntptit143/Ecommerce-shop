
// import React, { Fragment, useReducer, useState, useEffect } from "react";
// import Routes from "./components";
// import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
// import Chatbot from './components/Chatbot';

// function App() {
//   const [data, dispatch] = useReducer(layoutReducer, layoutState);
//   const [chatbotVisible, setChatbotVisible] = useState(false);
//   const [chatLog, setChatLog] = useState([]);

//   const toggleChatbot = () => {
//     setChatbotVisible(!chatbotVisible);
//   };

//   useEffect(() => {
//     // Lấy lịch sử chat từ localStorage khi component được tạo
//     const storedChatHistory = localStorage.getItem('chatHistory');
//     if (storedChatHistory) {
//       setChatLog(JSON.parse(storedChatHistory));
//     }
//   }, [chatbotVisible]);

//   return (
//     <Fragment>
//       <LayoutContext.Provider value={{ data, dispatch }}>
//         <Routes />
//         {/* Hiển thị Chatbot nếu chatbotVisible là true */}
//         {chatbotVisible && (
//           <Chatbot
//             className="show-chatbot-btn"
//             isVisible={chatbotVisible}
//             onToggle={toggleChatbot}
//           />
//         )}
//       </LayoutContext.Provider>
//       {/* Hiển thị nút hoặc biểu tượng để bật/ẩn Chatbot */}
//       <button className="toggle-chatbot-btn" onClick={toggleChatbot}>
//         {chatbotVisible ? 'Hide Chatbot' : 'Show Chatbot'}
//       </button>
//       {/* Thêm nút ở đây hoặc di chuyển nút từ vị trí hiện tại */}
//     </Fragment>
//   );
// }

// export default App;
// app.js
import React, { Fragment, useReducer, useState, useEffect } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import Chatbot from './components/Chatbot';

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [chatLog, setChatLog] = useState([]);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  useEffect(() => {
    // Lấy lịch sử chat từ localStorage khi component được tạo
    const storedChatHistory = localStorage.getItem('chatHistory');
    if (storedChatHistory) {
      setChatLog(JSON.parse(storedChatHistory));
    }
  }, [chatbotVisible]);

  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
        {/* Hiển thị Chatbot nếu chatbotVisible là true */}
        {chatbotVisible && (
          <Chatbot
            className="show-chatbot-btn"
            isVisible={chatbotVisible}
            onToggle={toggleChatbot}
          />
        )}
      </LayoutContext.Provider>
      {/* Hiển thị nút hoặc biểu tượng để bật/ẩn Chatbot */}
      <button
        className={`toggle-chatbot-btn ${chatbotVisible ? 'hide-chatbot-btn' : ''}`}
        onClick={toggleChatbot}
      >
        {chatbotVisible ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>
      {/* Thêm nút ở đây hoặc di chuyển nút từ vị trí hiện tại */}
    </Fragment>
  );
}

export default App;
