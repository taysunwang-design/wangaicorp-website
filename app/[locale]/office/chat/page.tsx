import OfficeLayout from "../components/OfficeLayout";

const chatRooms = [
  {
    name: "Internal Office",
    type: "Office",
    lastMessage: "Daily coordination and internal company discussion.",
    active: true
  },
  {
    name: "Taysun · Isa · Alice",
    type: "Personnel",
    lastMessage: "Core personnel communication room.",
    active: false
  },
  {
    name: "New Client Inquiry",
    type: "Client",
    lastMessage: "Client sourcing discussion will appear here.",
    active: false
  },
  {
    name: "Supplier Coordination",
    type: "Supplier",
    lastMessage: "Supplier introductions and document follow-ups.",
    active: false
  },
  {
    name: "RFQ Discussion",
    type: "RFQ",
    lastMessage: "Quotation and technical clarification chat.",
    active: false
  }
];

const messages = [
  {
    sender: "Taysun Wang",
    time: "09:30",
    text: "This Office Chat will become our internal company communication center."
  },
  {
    sender: "WANG CORP. System",
    time: "09:32",
    text: "Later, each client, supplier, project, and RFQ can have its own chat tab."
  },
  {
    sender: "AI Assistant",
    time: "09:35",
    text: "I will later be able to summarize chats, create tasks, draft replies, and add reminders from conversations."
  }
];

export default function OfficeChatPage() {
  return (
    <OfficeLayout title="Office Chat" label="Virtual Office Communication">
      <section className="office-chat-layout">
        <aside className="office-chat-tabs">
          <div className="office-panel-header">
            <h2>Chat Rooms</h2>
          </div>

          <div className="office-chat-room-list">
            {chatRooms.map((room) => (
              <button
                key={room.name}
                className={room.active ? "office-chat-room active" : "office-chat-room"}
              >
                <div>
                  <strong>{room.name}</strong>
                  <p>{room.lastMessage}</p>
                </div>
                <span>{room.type}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="office-chat-window">
          <div className="office-chat-header">
            <div>
              <h2>Internal Office</h2>
              <p>Company-wide office communication room</p>
            </div>

            <button>New Chat</button>
          </div>

          <div className="office-chat-messages">
            {messages.map((message) => (
              <div className="office-chat-message" key={`${message.sender}-${message.time}`}>
                <div className="office-chat-message-top">
                  <strong>{message.sender}</strong>
                  <span>{message.time}</span>
                </div>

                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="office-chat-composer">
            <input placeholder="Write a message..." />
            <button>Send</button>
          </div>
        </section>

        <aside className="office-chat-sidepanel">
          <div className="office-panel-header">
            <h2>Chat Tools</h2>
          </div>

          <div className="office-actions">
            <button>Summarize Chat</button>
            <button>Create Task</button>
            <button>Add Reminder</button>
            <button>Draft Reply</button>
          </div>

          <div className="office-empty-state">
            Later this side panel can show client details, project status,
            related RFQs, linked documents, and AI-generated summaries.
          </div>
        </aside>
      </section>
    </OfficeLayout>
  );
}