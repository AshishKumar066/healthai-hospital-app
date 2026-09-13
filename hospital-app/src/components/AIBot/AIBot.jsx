import { useState } from "react";
import { Bot, X } from "lucide-react";
import AIChatWindow from "./AIChatWindow";
import "./aiBot.css";

function AIBot() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            {/* AI Chat Window */}
            {isOpen && (
                <div className="ai-chat-wrapper">
                    <AIChatWindow onClose={() => setIsOpen(false)} />
                </div>
            )}

            {/* Floating AI Bot Button */}
            <button
                className={`ai-bot-floating ${isOpen ? "ai-bot-open" : ""}`}
                onClick={toggleChat}
                title={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
                aria-label={
                    isOpen ? "Close AI Assistant" : "Open AI Assistant"
                }
            >
                {isOpen ? (
                    <X size={27} />
                ) : (
                    <Bot size={29} />
                )}

                {!isOpen && (
                    <span className="ai-bot-online-dot"></span>
                )}
            </button>
        </>
    );
}

export default AIBot;