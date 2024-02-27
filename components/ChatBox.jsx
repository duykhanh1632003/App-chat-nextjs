const ChatBox = ({ chat, currentUser }) => {
  const otherMembers = chat?.members?.filter(
    (member) => member._id !== currentUser._id
  );

  const lastMessage =
    chat?.message?.length > 0 && chat?.messages[chat?.messages.length - 1];

  return (
    <div className="chat-box">
      <div className="chat-info">
        {chat?.ipGroup ? (
          <img
            src={chat?.groupPhoto || "/assets/group.jpg"}
            alt="group-photo"
            className="profilePhoto"
          />
        ) : (
          <img
            src={otherMembers[0].profilePhoto || "/assets/person.png"}
            alt="profilePhoto"
            className="profilePhoto"
          />
        )}
        <div className="flex flex-col gap-1">
          {chat?.isGroup ? (
            <p className="text-base-bold">{chat?.name}</p>
          ) : (
            <p className="text-base-bold">{otherMembers[0].username}</p>
          )}

          {!lastMessage && <p className="text-small-bold">Started a chat</p>}
        </div>
      </div>
      <div>
        <p className="text-base-light text-grey-3">{}</p>
      </div>
    </div>
  );
};

export default ChatBox;
