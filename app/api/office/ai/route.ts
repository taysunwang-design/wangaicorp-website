import { NextResponse } from "next/server";

type AIProvider = "mock" | "openai" | "deepseek";

type AIRequestBody = {
  provider?: AIProvider;
  taskType?: string;
  originalText?: string;
  instruction?: string;
};

function createMockResponse({
  taskType,
  originalText,
  instruction
}: AIRequestBody) {
  const cleanTaskType = taskType || "general";
  const cleanInstruction = instruction || "No specific instruction provided.";
  const cleanText = originalText || "No original text provided.";

  return `MOCK AI RESPONSE

Task Type: ${cleanTaskType}

Instruction:
${cleanInstruction}

Draft Output:
Thank you for your message.

We have reviewed the information provided and will evaluate it internally. If any additional clarification is required, we will contact you accordingly.

For internal Wang Corp use, the original message can be summarized as follows:
${cleanText.slice(0, 600)}

Suggested next actions:
1. Review the request internally.
2. Create a task if follow-up is required.
3. Add a reminder if there is a deadline.
4. Link this message to the relevant client, project, RFQ, or document.

Note: This is a mock response. Real AI provider integration will be added later.`;
}

export async function POST(request: Request) {
  try {
    const body: AIRequestBody = await request.json();

    const provider: AIProvider = body.provider || "mock";

    if (!body.originalText && !body.instruction) {
      return NextResponse.json(
        {
          success: false,
          error: "Original text or instruction is required."
        },
        { status: 400 }
      );
    }

    if (provider === "mock") {
      const output = createMockResponse(body);

      return NextResponse.json({
        success: true,
        provider: "mock",
        output
      });
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "This AI provider is not connected yet. Mock mode is currently active."
      },
      { status: 501 }
    );
  } catch (error) {
    console.error("Office AI API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "AI request failed. Please try again."
      },
      { status: 500 }
    );
  }
}