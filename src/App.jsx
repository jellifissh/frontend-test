const navItems = ["Product", "Solutions", "Developers", "Pricing"];

const capabilities = [
  {
    eyebrow: "Conversation",
    title: "Natural AI dialogue",
    description:
      "Understand intent, keep context, and turn messy human requests into useful answers, because apparently that is now a product category.",
    icon: "✦"
  },
  {
    eyebrow: "Code",
    title: "Code generation",
    description:
      "Generate, explain, refactor, and debug code across modern stacks with context-aware reasoning for teams that prefer shipping over suffering.",
    icon: "</>"
  },
  {
    eyebrow: "Documents",
    title: "Document analysis",
    description:
      "Extract insights from reports, contracts, research, tables, and internal knowledge without turning every employee into a PDF archaeologist.",
    icon: "▤"
  },
  {
    eyebrow: "Multimodal",
    title: "Multimodal understanding",
    description:
      "Reason across text, images, charts, screenshots, and structured data to support richer workflows and less tab-switching chaos.",
    icon: "◈"
  }
];

const scenarios = [
  {
    title: "Personal learning",
    description:
      "Build study plans, explain hard topics, summarize notes, and practice languages with an assistant that does not judge your browser tabs.",
    stat: "4.8x",
    label: "faster concept review"
  },
  {
    title: "Enterprise productivity",
    description:
      "Draft reports, analyze meeting notes, search knowledge bases, and help teams make decisions without drowning in status updates.",
    stat: "32%",
    label: "less routine work"
  },
  {
    title: "Developer tools",
    description:
      "Prototype features, generate tests, review pull requests, and connect AI into products with clean APIs and predictable controls.",
    stat: "2.1B",
    label: "tokens processed daily"
  },
  {
    title: "Support automation",
    description:
      "Resolve common requests, triage tickets, summarize customer context, and escalate edge cases before everyone loses the will to live.",
    stat: "71%",
    label: "ticket deflection"
  }
];

const metrics = [
  ["10M+", "active users"],
  ["99.9%", "platform uptime"],
  ["120+", "countries served"],
  ["4.7B", "monthly API calls"]
];

const trustItems = [
  {
    title: "Security by design",
    description:
      "Enterprise-grade access controls, audit logs, encryption, and deployment patterns for teams that enjoy sleeping occasionally.",
    icon: "⌁"
  },
  {
    title: "Privacy controls",
    description:
      "Granular data settings, workspace policies, and clear boundaries for personal, team, and enterprise usage.",
    icon: "◌"
  },
  {
    title: "Compliance ready",
    description:
      "Designed to support regulated workflows with governance, admin visibility, and lifecycle management.",
    icon: "◆"
  },
  {
    title: "Team collaboration",
    description:
      "Shared workspaces, reusable prompts, project context, and role-based access for actual company work, not demo theatre.",
    icon: "◎"
  }
];

const footerGroups = [
  {
    title: "Product",
    links: ["ChatGPT", "Teams", "Enterprise", "Mobile app", "Integrations"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "News", "Customers", "Contact"]
  },
  {
    title: "Developers",
    links: ["API docs", "SDKs", "Model guide", "Status", "Changelog"]
  },
  {
    title: "Social",
    links: ["X / Twitter", "GitHub", "LinkedIn", "Discord", "YouTube"]
  }
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="ChatGPT home">
      <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-slate-300 bg-slate-950 shadow-sm">
        <div className="relative h-5 w-5 rounded-full border border-white/80">
          <span className="absolute left-1/2 top-[-7px] h-3 w-px -translate-x-1/2 bg-white/80" />
          <span className="absolute bottom-[-7px] left-1/2 h-3 w-px -translate-x-1/2 bg-white/80" />
          <span className="absolute left-[-7px] top-1/2 h-px w-3 -translate-y-1/2 bg-white/80" />
          <span className="absolute right-[-7px] top-1/2 h-px w-3 -translate-y-1/2 bg-white/80" />
        </div>
      </div>
      <span className="text-lg font-semibold tracking-tight text-slate-950">ChatGPT</span>
    </a>
  );
}

function Button({ children, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200";
  const styles =
    variant === "primary"
      ? "bg-slate-950 text-white hover:bg-slate-800 shadow-sm"
      : variant === "dark"
        ? "bg-amber-300 text-slate-950 border border-amber-200 hover:bg-amber-200 shadow-sm"
        : "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50";

  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="glass flex h-16 items-center justify-between rounded-full px-4 sm:px-5">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" className="px-4 py-2.5">
              Sign in
            </Button>
            <Button className="px-4 py-2.5">Get started</Button>
          </div>

          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 md:hidden">
            Menu
          </button>
        </nav>
      </div>
    </header>
  );
}

function HeroVisual() {
  const nodes = [
    { label: "Text", x: "12%", y: "20%" },
    { label: "Vision", x: "72%", y: "18%" },
    { label: "Code", x: "18%", y: "74%" },
    { label: "Data", x: "76%", y: "70%" }
  ];

  return (
    <div className="relative mx-auto mt-12 h-[520px] w-full max-w-[560px] lg:mt-0">
      <div className="absolute inset-0 rounded-[3rem] border border-slate-200 bg-white" />

      <div className="glass absolute left-6 top-8 z-10 w-[72%] rounded-3xl p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-700">
            Live reasoning
          </span>
        </div>

        <div className="space-y-3">
          <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-slate-700">
            Summarize this product report and find the risk factors.
          </div>
          <div className="ml-auto max-w-[86%] rounded-2xl rounded-tr-sm border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800">
            Found 6 risks, 3 revenue drivers, and 2 inconsistent metrics.
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {["Risk", "Revenue", "Action"].map((item, index) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-3">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  0{index + 1}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-950">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass absolute bottom-10 right-4 z-20 w-[76%] overflow-hidden rounded-3xl p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs text-slate-600">assistant.generate()</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
            200 OK
          </span>
        </div>

        <pre className="code-scroll overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 font-mono text-[12px] leading-6 text-slate-300">
{`const response = await chatgpt.create({
  model: "gpt-next",
  input: {
    task: "analyze",
    context: files,
    format: "brief"
  }
});`}
        </pre>
      </div>

      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full hero-orb opacity-90" />

      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />
      <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100" />

      {nodes.map((node) => (
        <div
          key={node.label}
          className="glass-soft absolute z-30 rounded-2xl px-4 py-2 text-xs font-semibold text-slate-700"
          style={{ left: node.x, top: node.y }}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28 lg:pt-44">
      <div className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Next-generation assistant platform for everyone
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[86px]">
            AI that feels lighter,
            <span className="flat-text"> brighter, and faster.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            ChatGPT helps individuals learn faster, developers build smarter, and enterprises
            operate with AI-native workflows. One platform for conversation, reasoning, coding,
            analysis, and automation.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button>Start building free</Button>
            <Button variant="ghost">Explore platform</Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-slate-700">●</span>
              Light workspace experience
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-700">●</span>
              Responsive by default
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-700">●</span>
              Built with React + Tailwind
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function Capabilities() {
  return (
    <section id="product" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product capabilities"
          title="One assistant layer for everyday work and serious systems."
          description="From conversations to code, ChatGPT gives teams a single intelligent interface for turning raw intent into clear output."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="glass-soft card-hover group relative min-h-[300px] overflow-hidden rounded-[2rem] p-6"
            >
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl border border-slate-200 bg-white text-lg font-semibold text-slate-950">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {item.eyebrow}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>

                <div className="mt-8 h-px w-full bg-slate-200" />
                <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
                  <span>Available now</span>
                  <span className="text-slate-700 transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="bg-dot-grid absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Solutions"
            title="Built for the messy, useful, very human work."
            description="Different teams need different workflows. The platform adapts across learning, operations, engineering, and support without forcing everything into the same sad dashboard."
          />

          <div className="glass-soft rounded-[2rem] p-4 sm:p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {scenarios.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-semibold tracking-tight text-slate-950">
                        {item.stat}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        {item.label}
                      </div>
                    </div>
                  </div>
                  <p className="leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center"
              >
                <div className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                  {value}
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Developers() {
  return (
    <section id="developers" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Developers"
            title="APIs that fit real products, not just demo videos."
            description="Use simple endpoints, SDK patterns, structured outputs, streaming responses, and admin controls to bring AI into your own apps."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Streaming responses", "Structured JSON", "Tool calling", "Batch processing"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="mr-2 text-slate-700">✓</span>
                  {item}
                </div>
              )
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button>Read API docs</Button>
            <Button variant="ghost">View SDKs</Button>
          </div>
        </div>

        <div className="glass overflow-hidden rounded-[2.2rem] shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-300" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
            </div>
            <span className="font-mono text-xs text-slate-500">console.chatgpt.dev</span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-950">API request</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  JavaScript
                </span>
              </div>

              <pre className="code-scroll overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-5 font-mono text-[12px] leading-6 text-slate-300">
{`import ChatGPT from "@chatgpt/sdk";

const client = new ChatGPT({
  apiKey: process.env.CHATGPT_API_KEY
});

const result = await client.responses.create({
  model: "gpt-next",
  input: "Create a launch plan for our AI workspace.",
  tools: ["web_search", "file_analysis"],
  stream: true
});

for await (const event of result) {
  render(event.delta);
}`}
              </pre>
            </div>

            <div className="p-5">
              <span className="text-sm font-semibold text-slate-950">Runtime monitor</span>

              <div className="mt-5 space-y-4">
                {[
                  ["Latency", "184ms", "w-[62%]"],
                  ["Token load", "71%", "w-[71%]"],
                  ["Cache hit", "89%", "w-[89%]"]
                ].map(([label, value, width]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-600">{label}</span>
                      <span className="text-slate-700">{value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className={`h-full ${width} rounded-full bg-slate-700`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="text-sm font-semibold text-emerald-900">System healthy</div>
                <p className="mt-2 text-sm leading-6 text-emerald-900/70">
                  All regions operational. 24 active deployments. Zero incidents in the last 7 days.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="font-mono text-xs text-slate-500">latest event</div>
                <div className="mt-2 font-mono text-sm text-slate-800">
                  response.completed · 12ms ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Enterprise trust"
          title="Controls for teams that cannot run on vibes alone."
          description="Security, privacy, compliance, and collaboration are designed into the workspace, not duct-taped on after procurement starts asking questions."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="glass-soft card-hover min-h-[260px] rounded-[2rem] p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white text-xl text-slate-800">
                {item.icon}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingBand() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.7rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Simple plans
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Start free. Scale into team and enterprise plans when your chaos gets organized.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                Flexible plans for personal use, developer APIs, and company-wide AI workspaces.
                Transparent usage, centralized controls, and room to grow.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button>Get started</Button>
              <Button variant="ghost">Contact sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm leading-7 text-slate-600">
              ChatGPT is a next-generation AI assistant platform for individuals, developers,
              and enterprises.
            </p>
            <div className="mt-6 flex gap-3">
              {["X", "GH", "in"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-slate-950">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-600 transition hover:text-slate-950">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ChatGPT. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="transition hover:text-slate-600">
              Terms
            </a>
            <a href="#" className="transition hover:text-slate-600">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="sunrise-theme noise min-h-screen overflow-hidden text-slate-950">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Solutions />
        <Metrics />
        <Developers />
        <Trust />
        <PricingBand />
      </main>
      <Footer />
    </div>
  );
}
