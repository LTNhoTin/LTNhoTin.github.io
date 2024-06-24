---
layout: default
---

<!doctype html>
<html lang="en" class="no-js">
<head>
    {% include head.html %}
    <link rel="stylesheet" href="{{ '/assets/css/chatbot.css' | relative_url }}">
</head>
<body class="layout--{{ page.layout | default: layout.layout }}">
    <div class="chatbot-page">
        <div class="sidebar-left">
            <h2>Menu</h2>
            <nav>
                <ul>
                    <li><a href="#">Templates</a></li>
                    <li><a href="#">My Projects</a></li>
                    <li><a href="#">Statistics</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Updates & FAQ</a></li>
                </ul>
            </nav>
        </div>
        <div class="chatbot-container">
            <div class="chatbot-sidebar">
                <div class="sidebar-section">
                    <h2>Chat History</h2>
                    <nav class="sidebar-nav">
                        <div class="chat-history-item"><a href="#">Tokenize Difference: Vietnamese vs. English</a></div>
                        <div class="chat-history-item"><a href="#">Create Web Page Tutorial</a></div>
                    </nav>
                </div>
            </div>
            <div class="chatbot-main">
                <div class="chatbot-header">
                    <h2>LegalBizAI</h2>
                    <p>Welcome to the ChatBot</p>
                </div>
                <div class="model-selection">
                    <label for="model-select">Choose a model:</label>
                    <select id="model-select">
                        <option value="LegalbizAI">LegalbizAI</option>
                        <option value="LegalbizAI_gpt">LegalbizAI_gpt</option>
                    </select>
                </div>
                <div id="chat-window">
                    <div id="output">
                        <div class="bot-message">Hello! I'm Friday.</div>
                    </div>
                </div>
                <div id="input-container">
                    <input id="user-input" type="text" placeholder="Type your message here...">
                    <button><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
            <div class="sample-questions">
                <div class="sidebar-section">
                    <h2>Sample Questions</h2>
                    <ul>
                        <li><a href="#">How to set up a Wi-Fi wireless network?</a></li>
                        <li><a href="#">How to organize your working day effectively?</a></li>
                        <li><a href="#">Tips to improve productivity at work</a></li>
                        <li><a href="#">How does artificial intelligence work?</a></li>
                        <li><a href="#">What can you do?</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ '/assets/js/chatbot.js' | relative_url }}" defer></script>
</body>
</html>
