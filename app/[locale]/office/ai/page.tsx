import OfficeLayout from "../components/OfficeLayout";

const aiTools = [
  {
    title: "Email Reply Assistant",
    description:
      "Draft professional replies for customers, suppliers, and internal communication.",
    status: "Planned"
  },
  {
    title: "Email Translator",
    description:
      "Translate business emails between English, Turkish, and Chinese.",
    status: "Planned"
  },
  {
    title: "Message Summarizer",
    description:
      "Summarize long emails, technical messages, meeting notes, and client requests.",
    status: "Planned"
  },
  {
    title: "RFQ Note Creator",
    description:
      "Convert customer requirements into structured RFQ notes for internal tracking.",
    status: "Planned"
  },
  {
    title: "Follow-up Writer",
    description:
      "Create polite follow-up messages for quotations, pending replies, and project updates.",
    status: "Planned"
  },
  {
    title: "Technical Clarification Writer",
    description:
      "Help prepare clear technical clarification messages for industrial projects.",
    status: "Planned"
  }
];

export default function OfficeAIPage() {
  return (
    <OfficeLayout title="AI Assistant" label="Virtual Office Assistant">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Wang Corp AI Workdesk</h2>
            <p className="office-panel-subtitle">
              The AI Assistant will support daily office work: replying to
              emails, translating messages, summarizing communication, preparing
              RFQ notes, and creating follow-up actions.
            </p>
          </div>

          <button>New AI Task</button>
        </div>

        <div className="office-ai-workspace">
          <div className="office-ai-input-panel">
            <h3>Assistant Input</h3>

            <label>
              Task Type
              <select defaultValue="email-reply">
                <option value="email-reply">Email Reply</option>
                <option value="translation">Translation</option>
                <option value="summary">Summary</option>
                <option value="rfq-note">RFQ Note</option>
                <option value="follow-up">Follow-up Message</option>
                <option value="technical">Technical Clarification</option>
              </select>
            </label>

            <label>
              Original Text
              <textarea
                placeholder="Paste an email, message, RFQ request, or note here..."
                rows={9}
              />
            </label>

            <label>
              Instruction
              <input
                type="text"
                placeholder="Example: Write a polite English reply, translate to Chinese, summarize for internal use..."
              />
            </label>

            <div className="office-actions">
              <button>Generate Draft</button>
              <button>Clear</button>
            </div>
          </div>

          <div className="office-ai-output-panel">
            <h3>Draft Output</h3>

            <div className="office-ai-output">
              AI output will appear here later. For now this is a prototype
              interface. The real AI connection will be added through a secure
              server-side API route.
            </div>

            <div className="office-actions">
              <button>Copy Draft</button>
              <button>Create Task</button>
              <button>Add Reminder</button>
            </div>
          </div>
        </div>
      </section>

      <section className="office-content-grid">
        {aiTools.map((tool) => (
          <div className="office-panel" key={tool.title}>
            <div className="office-panel-header">
              <h2>{tool.title}</h2>
              <span className="office-tool-status">{tool.status}</span>
            </div>

            <p className="office-tool-description">{tool.description}</p>
          </div>
        ))}
      </section>

      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <h2>Security Plan</h2>
        </div>

        <div className="office-empty-state">
          The AI Assistant must never expose API keys in frontend code. The
          browser will send requests to Wang Corp secure API routes, and the
          server will communicate with the AI provider. Later this module will
          connect to mail, tasks, reminders, RFQs, and internal company memory.
        </div>
      </section>
    </OfficeLayout>
  );
}