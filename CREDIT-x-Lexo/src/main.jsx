import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Example using fetch in React.js

const getAIResponse = async (userQuery) => {
  try {
      const response = await fetch(`http://your-backend-domain:9080/api/ai/${encodeURIComponent(userQuery)}`);
      const data = await response.json();
      return data.answer;
  } catch (error) {
      console.error('Error fetching AI response:', error);
      return "I'm sorry, I couldn't process your request.";
  }
};
