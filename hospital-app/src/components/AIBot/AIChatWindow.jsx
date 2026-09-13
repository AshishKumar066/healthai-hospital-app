import { useState, useRef, useEffect } from "react";
import {
    Bot,
    Send,
    Sparkles,
    Trash2,
    Minimize2,
} from "lucide-react";

function AIChatWindow({ onClose }) {
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "ai",
            text: "Hello! I'm your HealthAI Assistant. How can I help you today?",
            time: "Now",
        },
    ]);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const getAIResponse = (userMessage) => {
        const text = userMessage.toLowerCase();

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey")
        ) {
            return "Hello! I'm here to help with general health information, doctors, departments and appointments.";
        }

        if (
            text.includes("appointment") ||
            text.includes("book")
        ) {
            return "Sure! You can use the Appointments section to schedule an appointment with an available doctor.";
        }

        if (
            text.includes("doctor") ||
            text.includes("specialist")
        ) {
            return "I can help you find the appropriate department or doctor based on your health concern.";
        }

        if (
            text.includes("fever") ||
            text.includes("headache")
        ) {
            return "For symptoms like fever or headache, it's best to monitor your symptoms and consult a qualified healthcare professional if they persist or become severe.";
        }

        if (
            text.includes("emergency") ||
            text.includes("ambulance") ||
            text.includes("chest pain")
        ) {
            return "If this is a medical emergency, please seek immediate professional medical help or use the Emergency section of HealthAI.";
        }

        return "I'm currently running in demo mode. Soon I'll be connected to the AI service and will be able to provide more intelligent health assistance.";
    };

    const handleSend = (e) => {
        e.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage) {
            return;
        }

        const userMessage = {
            id: Date.now(),
            sender: "user",
            text: trimmedMessage,
            time: "Now",
        };

        setMessages((prev) => [...prev, userMessage]);

        setMessage("");

        // Temporary demo AI response
        setTimeout(() => {
            const aiMessage = {
                id: Date.now() + 1,
                sender: "ai",
                text: getAIResponse(trimmedMessage),
                time: "Now",
            };

            setMessages((prev) => [...prev, aiMessage]);
        }, 700);
    };

    const clearChat = () => {
        setMessages([
            {
                id: Date.now(),
                sender: "ai",
                text: "Hello! I'm your HealthAI Assistant. How can I help you today?",
                time: "Now",
            },
        ]);
    };

    return (
        <div className="ai-chat-window">

            {/* Header */}
            <div className="ai-chat-header">

                <div className="ai-chat-title">

                    <div className="ai-chat-avatar">
                        <Bot size={21} />
                    </div>

                    <div>
                        <strong>HealthAI Assistant</strong>

                        <span>
                            <span className="ai-status-dot"></span>
                            Online
                        </span>
                    </div>

                </div>

                <div className="ai-chat-header-actions">

                    <button
                        onClick={clearChat}
                        title="Clear chat"
                        className="ai-header-btn"
                    >
                        <Trash2 size={17} />
                    </button>

                    <button
                        onClick={onClose}
                        title="Minimize"
                        className="ai-header-btn"
                    >
                        <Minimize2 size={17} />
                    </button>

                </div>

            </div>

            {/* Intro */}
            <div className="ai-chat-intro">

                <div className="ai-intro-icon">
                    <Sparkles size={18} />
                </div>

                <div>
                    <strong>How can I help?</strong>

                    <p>
                        Ask about appointments, doctors,
                        departments or general health information.
                    </p>
                </div>

            </div>

            {/* Messages */}
            <div className="ai-chat-messages">

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`ai-message-row ${msg.sender === "user"
                                ? "user-message-row"
                                : "ai-message-row"
                            }`}
                    >

                        {msg.sender === "ai" && (
                            <div className="message-mini-avatar">
                                <Bot size={15} />
                            </div>
                        )}

                        <div
                            className={`ai-message ${msg.sender === "user"
                                    ? "user-message"
                                    : "bot-message"
                                }`}
                        >
                            <p>{msg.text}</p>
                            <span>{msg.time}</span>
                        </div>

                    </div>
                ))}

                <div ref={messagesEndRef}></div>

            </div>

            {/* Input */}
            <form
                className="ai-chat-input-area"
                onSubmit={handleSend}
            >

                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask HealthAI..."
                />

                <button
                    type="submit"
                    className="ai-send-btn"
                    disabled={!message.trim()}
                >
                    <Send size={18} />
                </button>

            </form>

            {/* Disclaimer */}
            <div className="ai-chat-disclaimer">
                HealthAI provides general information and is not
                a substitute for professional medical advice.
            </div>

        </div>
    );
}

export default AIChatWindow;