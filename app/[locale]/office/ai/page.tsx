"use client";

import { useState } from "react";
import OfficeLayout from "../components/OfficeLayout";

type OfficeTask = {
  id: string;
  title: string;
  owner: string;
  priority: string;
  status: string;
  note: string;
  dueDate: string;
  relatedTo: string;
};

type OfficeReminder = {
  id: string;
  title: string;
  owner: string;
  type: string;
  priority: string;
  status: string;
  reminderDate: string;
  relatedTo: string;
  note: string;
};

const aiTools = [
  {
    title: "Email Reply Assistant",
    description:
      "Draft professional replies for customers, suppliers, and internal communication.",
    status: "Mock Active"
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
  const [provider, setProvider] = useState("mock");
  const [taskType, setTaskType] = useState("email-reply");
  const [originalText, setOriginalText] = useState("");
  const [instruction, setInstruction] = useState("");
  const [output, setOutput] = useState(
    "AI output will appear here. Mock mode is active for now."
  );
  const [isLoading, setIsLoading] = useState(false);

  async function handleGenerate() {
    if (!originalText.trim() && !instruction.trim()) {
      alert("Please enter original text or an instruction first.");
      return;
    }

    setIsLoading(true);
    setOutput("Generating...");

    try {
      const response = await fetch("/api/office/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          provider,
          taskType,
          originalText,
          instruction
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setOutput(data.error || "AI request failed.");
        return;
      }

      setOutput(data.output);
    } catch (error) {
      console.error(error);
      setOutput("AI request failed. Please check the server and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleClear() {
    setOriginalText("");
    setInstruction("");
    setOutput("AI output will appear here. Mock mode is active for now.");
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(output);
    alert("Draft copied.");
  }

  function handleCreateTask() {
    if (!output.trim() || output.includes("AI output will appear here")) {
      alert("Please generate an AI output first.");
      return;
    }

    const savedTasks = localStorage.getItem("wangcorp_tasks");
    const currentTasks: OfficeTask[] = savedTasks ? JSON.parse(savedTasks) : [];

    const newTask: OfficeTask = {
      id: `task-${Date.now()}`,
      title: `AI Task - ${taskType}`,
      owner: "Taysun Wang",
      priority: "Medium",
      status: "Today",
      note: output,
      dueDate: "Today",
      relatedTo: "AI Assistant"
    };

    localStorage.setItem(
      "wangcorp_tasks",
      JSON.stringify([newTask, ...currentTasks])
    );

    alert("AI output saved as a task.");
  }

  function handleAddReminder() {
    if (!output.trim() || output.includes("AI output will appear here")) {
      alert("Please generate an AI output first.");
      return;
    }

    const savedReminders = localStorage.getItem("wangcorp_reminders");
    const currentReminders: OfficeReminder[] = savedReminders
      ? JSON.parse(savedReminders)
      : [];

    const newReminder: OfficeReminder = {
      id: `reminder-${Date.now()}`,
      title: `AI Reminder - ${taskType}`,
      owner: "Taysun Wang",
      type: "Follow-up",
      priority: "Medium",
      status: "Today",
      reminderDate: "Today",
      relatedTo: "AI Assistant",
      note: output
    };

    localStorage.setItem(
      "wangcorp_reminders",
      JSON.stringify([newReminder, ...currentReminders])
    );

    alert("AI output saved as a reminder.");
  }

  return (
    <OfficeLayout title="AI Assistant" label="Virtual Office Assistant">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Wang Corp AI Workdesk</h2>
            <p className="office-panel-subtitle">
              The AI Assistant supports daily office work: replying to emails,
              translating messages, summarizing communication, preparing RFQ
              notes, and creating follow-up actions.
            </p>
          </div>

          <button onClick={handleGenerate} disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="office-ai-workspace">
          <div className="office-ai-input-panel">
            <h3>Assistant Input</h3>

            <label>
              AI Provider
              <select
                value={provider}
                onChange={(event) => setProvider(event.target.value)}
              >
                <option value="mock">Mock Provider</option>
                <option value="openai">OpenAI / ChatGPT</option>
                <option value="deepseek">DeepSeek</option>
              </select>
            </label>

            <label>
              Task Type
              <select
                value={taskType}
                onChange={(event) => setTaskType(event.target.value)}
              >
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
                value={originalText}
                onChange={(event) => setOriginalText(event.target.value)}
                placeholder="Paste an email, message, RFQ request, or note here..."
                rows={9}
              />
            </label>

            <label>
              Instruction
              <input
                value={instruction}
                onChange={(event) => setInstruction(event.target.value)}
                type="text"
                placeholder="Example: Write a polite English reply, translate to Chinese, summarize for internal use..."
              />
            </label>

            <div className="office-actions">
              <button onClick={handleGenerate} disabled={isLoading}>
                {isLoading ? "Generating..." : "Generate Draft"}
              </button>
              <button onClick={handleClear}>Clear</button>
            </div>
          </div>

          <div className="office-ai-output-panel">
            <h3>Draft Output</h3>

            <div className="office-ai-output">
              <pre>{output}</pre>
            </div>

            <div className="office-actions">
              <button onClick={handleCopy}>Copy Draft</button>
              <button onClick={handleCreateTask}>Create Task</button>
              <button onClick={handleAddReminder}>Add Reminder</button>
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
          <h2>Provider Strategy</h2>
        </div>

        <div className="office-empty-state">
          The AI Assistant is provider-ready. Mock mode works now. Later we can
          connect OpenAI for global users and DeepSeek for China-side access.
          API keys must stay on the server and must never be exposed in frontend
          code.
        </div>
      </section>
    </OfficeLayout>
  );
}