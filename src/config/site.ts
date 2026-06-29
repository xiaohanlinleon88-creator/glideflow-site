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
  ctaHref: "https://app.glideflowai.com",
  loginHref: "https://app.glideflowai.com/login",
  docsHref: "/docs",
  termsHref: "#",
  models: [
    {
      id: "deepseek-chat",
      name: "DeepSeek Chat",
      description: "A strong default for coding help, chat workflows, and everyday product features.",
      bestFor: "Coding and general chat",
      inputPrice: 0.14,
      outputPrice: 0.28,
      currency: "USD"
    },
    {
      id: "deepseek-reasoner",
      name: "DeepSeek Reasoner",
      description: "Step-by-step reasoning for debugging, planning, and harder multi-step tasks.",
      bestFor: "Reasoning and debugging",
      inputPrice: 0.55,
      outputPrice: 2.19,
      currency: "USD"
    },
    {
      id: "qwen-max",
      name: "Qwen Max",
      description: "A capable multilingual model for larger prompts and polished product experiences.",
      bestFor: "Multilingual apps",
      inputPrice: 0.4,
      outputPrice: 1.2,
      currency: "USD"
    },
    {
      id: "glm-4",
      name: "GLM-4",
      description: "A practical low-cost option for prototypes, agents, and high-volume background jobs.",
      bestFor: "Low-cost volume",
      inputPrice: 0.2,
      outputPrice: 0.6,
      currency: "USD"
    }
  ] satisfies ModelConfig[],
  comparison: [
    {
      provider: "Glideflow",
      model: "DeepSeek Chat",
      inputPrice: 0.14,
      outputPrice: 0.28,
      currency: "USD",
      note: "Launch placeholder"
    },
    {
      provider: "Glideflow",
      model: "DeepSeek Reasoner",
      inputPrice: 0.55,
      outputPrice: 2.19,
      currency: "USD",
      note: "Launch placeholder"
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
