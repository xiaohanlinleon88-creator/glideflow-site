export type ModelConfig = {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  inputPrice: number;
  outputPrice: number;
  currency: "USD";
};

export type ComparisonConfig = {
  provider: string;
  model: string;
  inputPrice: number;
  outputPrice: number;
  currency: "USD";
  note: string;
  sourceUrl?: string;
};

export const siteConfig = {
  brandName: "Glideflow",
  domain: "glideflowai.com",
  appUrl: "https://app.glideflowai.com",
  apiBaseUrl: "https://api.glideflowai.com/v1",
  supportEmail: "support@glideflowai.com",
  description:
    "Drop-in OpenAI-compatible API. One key for multiple models, USD billing, and a familiar SDK setup for independent developers.",
  ctaHref: "https://app.glideflowai.com/register",
  loginHref: "https://app.glideflowai.com/login",
  registerHref: "https://app.glideflowai.com/register",
  docsHref: "/docs",
  termsHref: "#",
  models: [
    {
      id: "deepseek-v4-flash",
      name: "DeepSeek V4 Flash",
      description: "A familiar low-friction default for chat, coding helpers, and everyday product features.",
      bestFor: "Default chat and coding",
      inputPrice: 0.14,
      outputPrice: 0.28,
      currency: "USD"
    },
    {
      id: "deepseek-v4-pro",
      name: "DeepSeek V4 Pro",
      description: "A stronger DeepSeek tier for heavier reasoning, debugging, and multi-step product work.",
      bestFor: "Reasoning and debugging",
      inputPrice: 0.44,
      outputPrice: 0.88,
      currency: "USD"
    },
    {
      id: "qwen3.5-flash",
      name: "Qwen3.5 Flash",
      description: "A fast Qwen option for high-volume routing, lightweight agents, and latency-sensitive flows.",
      bestFor: "Fast high-volume tasks",
      inputPrice: 0.08,
      outputPrice: 0.42,
      currency: "USD"
    },
    {
      id: "qwen3.5-plus",
      name: "Qwen3.5 Plus",
      description: "The core value model for multilingual apps, assistants, and production workloads.",
      bestFor: "Core production apps",
      inputPrice: 0.24,
      outputPrice: 1.45,
      currency: "USD"
    },
    {
      id: "qwen3.5-35b-a3b",
      name: "Qwen3.5 35B-A3B",
      description: "A cost-efficient Qwen tier for classification, extraction, routing, and background jobs.",
      bestFor: "Efficient background work",
      inputPrice: 0.13,
      outputPrice: 0.92,
      currency: "USD"
    },
    {
      id: "qwen3.5-27b",
      name: "Qwen3.5 27B",
      description: "Balanced quality and price for everyday app features with longer prompts.",
      bestFor: "Balanced app features",
      inputPrice: 0.18,
      outputPrice: 1.45,
      currency: "USD"
    },
    {
      id: "qwen3.5-122b-a10b",
      name: "Qwen3.5 122B-A10B",
      description: "A stronger mixture-of-experts tier for complex assistants and richer reasoning workloads.",
      bestFor: "Complex assistants",
      inputPrice: 0.24,
      outputPrice: 1.95,
      currency: "USD"
    },
    {
      id: "qwen3.5-397b-a17b",
      name: "Qwen3.5 397B-A17B",
      description: "The premium Qwen option for flagship workflows that need stronger instruction following.",
      bestFor: "Flagship Qwen quality",
      inputPrice: 0.36,
      outputPrice: 2.3,
      currency: "USD"
    }
  ] satisfies ModelConfig[],
  comparison: [
    {
      provider: "Glideflow",
      model: "Qwen3.5 Plus",
      inputPrice: 0.24,
      outputPrice: 1.45,
      currency: "USD",
      note: "Launch price"
    },
    {
      provider: "OpenRouter",
      model: "Qwen3.5 Plus",
      inputPrice: 0.26,
      outputPrice: 1.56,
      currency: "USD",
      note: "Public list price",
      sourceUrl: "https://openrouter.ai/qwen"
    },
    {
      provider: "Glideflow",
      model: "Qwen3.5 397B-A17B",
      inputPrice: 0.36,
      outputPrice: 2.3,
      currency: "USD",
      note: "Launch price"
    },
    {
      provider: "OpenRouter",
      model: "Qwen3.5 397B-A17B",
      inputPrice: 0.385,
      outputPrice: 2.45,
      currency: "USD",
      note: "Public list price",
      sourceUrl: "https://openrouter.ai/qwen"
    },
    {
      provider: "OpenAI",
      model: "GPT-5.5",
      inputPrice: 1.75,
      outputPrice: 14,
      currency: "USD",
      note: "Public list price",
      sourceUrl: "https://platform.openai.com/docs/pricing"
    },
    {
      provider: "Anthropic",
      model: "Claude Sonnet 4.6",
      inputPrice: 3,
      outputPrice: 15,
      currency: "USD",
      note: "Public list price",
      sourceUrl: "https://docs.anthropic.com/en/docs/about-claude/pricing"
    },
    {
      provider: "Google",
      model: "Gemini 2.5 Pro",
      inputPrice: 1.25,
      outputPrice: 10,
      currency: "USD",
      note: "Public list price, lower context tier",
      sourceUrl: "https://ai.google.dev/gemini-api/docs/pricing"
    }
  ] satisfies ComparisonConfig[]
} as const;

export const primaryModel = siteConfig.models[0];

export function formatUsdPerMillion(price: number) {
  const fractionDigits = price >= 10 || Number.isInteger(price) ? 0 : 2;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
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
