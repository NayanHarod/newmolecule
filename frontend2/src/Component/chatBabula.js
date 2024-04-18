const ChatBubble = ({ content, type }) => {
    return (
      <div className={`chat-bubble ${type === "user" ? "user-bubble" : "bot-bubble"}`}>
        {content}
      </div>
    );
  };