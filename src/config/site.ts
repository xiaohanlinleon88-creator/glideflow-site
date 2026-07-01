export type ModelConfig = {
  id: string;
  name: string;
  provider: string;
  providerLogo: string;
  tier: "home" | "console";
  contextLength?: string;
  tags?: readonly string[];
  description: string;
  bestFor: string;
  inputPrice: number;
  outputPrice: number;
  currency: "USD";
};

export const siteConfig = {
  brandName: "Glideflow",
  domain: "glideflowai.com",
  appUrl: "https://app.glideflowai.com",
  apiBaseUrl: "https://api.glideflowai.com/v1",
  supportEmail: "support@glideflowai.com",
  description:
    "The curated gateway to Chinese AI models. Run DeepSeek, Qwen, and GLM through one OpenAI-compatible API, billed in USD.",
  ctaHref: "https://app.glideflowai.com/register",
  loginHref: "https://app.glideflowai.com/login",
  registerHref: "https://app.glideflowai.com/register",
  docsHref: "/docs",
  termsHref: "/terms",
  privacyHref: "/privacy",
  refundHref: "/refund",
  aupHref: "/aup",
  contactHref: "mailto:support@glideflowai.com",
  models: [
    {
      id: "qwen3.5-plus",
      name: "Qwen3.5 Plus",
      provider: "Qwen/Alibaba",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "home",
      tags: ["Core profit", "Agents", "Chat"],
      description: "The default Qwen model for production assistants, coding tools, and everyday product workflows.",
      bestFor: "Production chat and agents",
      inputPrice: 0.3,
      outputPrice: 1.6,
      currency: "USD"
    },
    {
      id: "qwen3.5-397b-a17b",
      name: "Qwen3.5 397B-A17B",
      provider: "Qwen",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "home",
      tags: ["Premium", "Reasoning", "Assistants"],
      description: "A high-end Qwen option for users who want stronger responses without leaving the same API shape.",
      bestFor: "Premium assistant quality",
      inputPrice: 0.48,
      outputPrice: 3.1,
      currency: "USD"
    },
    {
      id: "qwen3.5-122b-a10b",
      name: "Qwen3.5 122B-A10B",
      provider: "Qwen",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "home",
      tags: ["Complex tasks", "Workflow", "Balanced"],
      description: "A strong Qwen model for heavier prompts, workflow automation, and polished product features.",
      bestFor: "Complex workflows",
      inputPrice: 0.32,
      outputPrice: 2.4,
      currency: "USD"
    },
    {
      id: "qwen3-235b-a22b-instruct",
      name: "Qwen3 235B-A22B Instruct",
      provider: "Qwen",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "home",
      tags: ["Instruct", "Reasoning", "Home"],
      description: "A newer Qwen instruct model for careful answers, planning, and general product intelligence.",
      bestFor: "Instruction following",
      inputPrice: 0.45,
      outputPrice: 1.8,
      currency: "USD"
    },
    {
      id: "qwen3.5-flash",
      name: "Qwen3.5 Flash",
      provider: "Qwen",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "home",
      tags: ["Low cost", "Fast", "Trial"],
      description: "A low-cost entry model for high-volume chat, classification, extraction, and quick prototypes.",
      bestFor: "Low-cost chat",
      inputPrice: 0.1,
      outputPrice: 0.5,
      currency: "USD"
    },
    {
      id: "qwen3.5-35b-a3b",
      name: "Qwen3.5 35B-A3B",
      provider: "Qwen",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "home",
      tags: ["Extraction", "Batch", "Efficient"],
      description: "A compact Qwen option for structured extraction, background jobs, and cost-sensitive agents.",
      bestFor: "Extraction and background jobs",
      inputPrice: 0.16,
      outputPrice: 1.1,
      currency: "USD"
    },
    {
      id: "qwen3.5-27b",
      name: "Qwen3.5 27B",
      provider: "Qwen",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "home",
      tags: ["Balanced", "Automation", "Chat"],
      description: "A balanced model for automation, customer-facing chat, and mid-volume application workloads.",
      bestFor: "Balanced automation",
      inputPrice: 0.22,
      outputPrice: 1.7,
      currency: "USD"
    },
    {
      id: "deepseek-v4-flash",
      name: "DeepSeek V4 Flash",
      provider: "DeepSeek",
      providerLogo: "https://cdn.simpleicons.org/deepseek/34d399",
      tier: "home",
      tags: ["Coding", "Recognized", "Home"],
      description: "A familiar DeepSeek option for coding help, general chat, and developer-facing workflows.",
      bestFor: "Coding and familiar DeepSeek workflows",
      inputPrice: 0.2,
      outputPrice: 0.4,
      currency: "USD"
    },
    {
      id: "deepseek-v4-pro",
      name: "DeepSeek V4 Pro",
      provider: "DeepSeek",
      providerLogo: "https://cdn.simpleicons.org/deepseek/34d399",
      tier: "console",
      tags: ["Coding", "Pro", "Console"],
      description: "A higher-end DeepSeek route for users who need stronger answers while keeping margin intact.",
      bestFor: "Higher accuracy DeepSeek workloads",
      inputPrice: 0.65,
      outputPrice: 1.3,
      currency: "USD"
    },
    {
      id: "qwen3-next-80b-a3b-instruct",
      name: "Qwen3 Next 80B-A3B Instruct",
      provider: "Qwen",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "console",
      tags: ["Instruct", "Console", "Testing"],
      description: "A console model for testing newer Qwen behavior before promoting it into public hero slots.",
      bestFor: "Experimental Qwen routing",
      inputPrice: 0.32,
      outputPrice: 2.2,
      currency: "USD"
    },
    {
      id: "qwen3-30b-a3b-instruct",
      name: "Qwen3 30B-A3B Instruct",
      provider: "Qwen",
      providerLogo: "https://cdn.simpleicons.org/alibabacloud/34d399",
      tier: "console",
      tags: ["Instruct", "Compact", "Agents"],
      description: "A compact instruct model for smaller agents, tool routing, and efficient application logic.",
      bestFor: "Compact agents",
      inputPrice: 0.38,
      outputPrice: 1.6,
      currency: "USD"
    },
    {
      id: "glm-5.2",
      name: "GLM-5.2",
      provider: "Zhipu/Z.ai",
      providerLogo: "/brand/providers/zai.svg",
      tier: "console",
      tags: ["Reasoning", "Chinese", "Console"],
      description: "A console option for users who prefer the GLM family for structured reasoning and Chinese tasks.",
      bestFor: "Chinese and structured reasoning",
      inputPrice: 1.8,
      outputPrice: 5.8,
      currency: "USD"
    },
    {
      id: "minimax-m3",
      name: "MiniMax M3",
      provider: "MiniMax",
      providerLogo: "/brand/providers/minimax.svg",
      tier: "console",
      tags: ["Long tail", "Console", "Apps"],
      description: "A long-tail console option for teams that already know MiniMax and want it behind one key.",
      bestFor: "Long-tail app requests",
      inputPrice: 0.55,
      outputPrice: 2.2,
      currency: "USD"
    },
    {
      id: "kimi-k2.5",
      name: "Kimi K2.5",
      provider: "Moonshot",
      providerLogo: "/brand/providers/moonshot.svg",
      tier: "console",
      tags: ["Research", "Chat", "Console"],
      description: "A Kimi route for research-style chat, longer answers, and users who request Moonshot models.",
      bestFor: "Research style chat",
      inputPrice: 0.9,
      outputPrice: 4.8,
      currency: "USD"
    },
    {
      id: "kimi-k2.6",
      name: "Kimi K2.6",
      provider: "Moonshot",
      providerLogo: "/brand/providers/moonshot.svg",
      tier: "console",
      tags: ["Research", "Higher end", "Console"],
      description: "A higher-priced Kimi option for users who want stronger Moonshot quality in the console.",
      bestFor: "Higher-end Kimi workloads",
      inputPrice: 1.45,
      outputPrice: 6.2,
      currency: "USD"
    },
    {
      id: "kimi-k2.7-code",
      name: "Kimi K2.7 Code",
      provider: "Moonshot",
      providerLogo: "/brand/providers/moonshot.svg",
      tier: "console",
      tags: ["Code", "Moonshot", "Console"],
      description: "A code-focused Kimi option for developers who want Moonshot models available in the same account.",
      bestFor: "Code generation",
      inputPrice: 1.45,
      outputPrice: 6.2,
      currency: "USD"
    },
    {
      id: "hy3-preview",
      name: "Hy3 preview",
      provider: "Tencent Hunyuan",
      providerLogo: "/brand/providers/hunyuan.svg",
      tier: "console",
      tags: ["Preview", "Hunyuan", "Console"],
      description: "A preview Hunyuan route for testing Tencent model quality without changing integrations.",
      bestFor: "Preview testing",
      inputPrice: 0.3,
      outputPrice: 1,
      currency: "USD"
    }
  ] satisfies ModelConfig[]
} as const;

export const primaryModel = siteConfig.models[0];

export function formatUsdPerMillion(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}

export function getApiExamples() {
  const model = primaryModel.id;
  const baseUrl = siteConfig.apiBaseUrl;

  return [
    {
      id: "curl",
      label: "curl",
      language: "bash",
      code: `curl ${baseUrl}/chat/completions \\
  -H "Authorization: Bearer sk-xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${model}",
    "messages": [{"role": "user", "content": "Hello"}]
  }'`
    },
    {
      id: "python",
      label: "Python",
      language: "python",
      code: `from openai import OpenAI

client = OpenAI(
    api_key="sk-xxx",
    base_url="${baseUrl}",
)

r = client.chat.completions.create(
    model="${model}",
    messages=[{"role": "user", "content": "Hello"}],
)

print(r.choices[0].message.content)`
    },
    {
      id: "node",
      label: "Node",
      language: "js",
      code: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "sk-xxx",
  baseURL: "${baseUrl}",
});

const r = await client.chat.completions.create({
  model: "${model}",
  messages: [{ role: "user", content: "Hello" }],
});

console.log(r.choices[0].message.content);`
    }
  ] as const;
}

export function getStreamingExample() {
  return `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "sk-xxx",
  baseURL: "${siteConfig.apiBaseUrl}",
});

const stream = await client.chat.completions.create({
  model: "${primaryModel.id}",
  stream: true,
  messages: [{ role: "user", content: "Write a tiny launch checklist." }],
});

for await (const event of stream) {
  process.stdout.write(event.choices[0]?.delta?.content ?? "");
}`;
}
