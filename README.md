# Universal Website Makeover Template

A two-phase prompt template for rebuilding a live website as a fast, static, conversion-focused site using Command Code.

- **Phase 1 (Discovery):** Command Code opens the live site with Chrome DevTools MCP, extracts brand colours, logos, page structure, copy, booking links, and map details, and produces a findings document.
- **Phase 2 (Design & Build):** Command Code uses those findings to build the static site (HTML5, CSS3, vanilla JS) with a 95+ Lighthouse target.

## Files

| File | Purpose |
|---|---|
| `reference-this-to-start/universal-website-markdown-phase-01-discovery.md` | Phase 1 prompt: site discovery and brand extraction |
| `reference-this-to-start/universal-website-markdown-phase-02-design-build.md` | Phase 2 prompt: performance, design system, CRO, and page build |

## Prerequisites

- Command Code installed and signed in
- Chrome DevTools MCP connected (Phase 1 needs it to read the live site)
- Node.js/npm available (the skill install step uses `npx skills add`)

## Recommended Models

Model ids come from the Command Code model catalog. Switch models in a session with `/model`, or pass `--model <id>`. Use the effort level shown in parentheses if the model supports it.

### Phase 1: Discovery

Phase 1 needs strong agentic tool use for browsing, DOM and network inspection, and a long, careful audit.

| Tier | Model id | Min plan | Notes |
|---|---|---|---|
| Recommended | `claude-sonnet-5-5` (high) | GOAT | Best balance of speed and intelligence |
| Budget | `gpt-5.6-terra` (high) | Pro | Good tool use at lower cost |
| Budget alternative | `Qwen/Qwen3.8-Max` (high) | Go | Strong agentic coding at a low price |

### Phase 2: Design & Build

Phase 2 is the heaviest code generation, plus visual design decisions.

| Tier | Model id | Min plan | Notes |
|---|---|---|---|
| Recommended | `claude-opus-5-5` (high) | Max | Strongest for design-quality front-end code |
| Balanced | `gpt-6.2-sol` (high) | Pro | Efficient for everyday coding and builds |
| Budget | `moonshotai/Kimi-K2.5` | Go | Described as multimodal frontend coding |

Tip: use the same model for both phases if you want consistent output. Phase 1 is the one where tool reliability matters most.

## How to Use the Template

1. **Create a project folder** for the new client site and copy the two prompt files into it (or keep this template as the starting point).
2. **Start a Command Code session** in that folder and select a Phase 1 model with `/model`.
3. **Run Phase 1** using the example prompt below. Replace the URL with the live site you're rebuilding.
4. **Save the findings.** Phase 1 ends by producing a structured findings document. Keep it in the project, or stay in the same session so Phase 2 can use it.
5. **Switch to a Phase 2 model** with `/model`, then run Phase 2 using the example prompt below.
6. **Review and verify.** Check the generated pages against the live site, run a Lighthouse audit, and confirm the booking links and contact details.

## Example Prompts

### Phase 1

```
Run the Phase 1 discovery from reference-this-to-start/universal-website-markdown-phase-01-discovery.md.

TARGET_URL: https://www.example.com/

Follow every step in that file, using the Chrome DevTools MCP tools to inspect the live site. Save the structured findings document in the project root as findings.md when the audit is complete.
```

### Phase 2

```
Run the Phase 2 design and build from reference-this-to-start/universal-website-markdown-phase-02-design-build.md.

Use the findings from Phase 1 (findings.md) as the source of brand colours, logos, page architecture, copy, booking links, and map details. Build the full static site in the project folder, following the Phase 2 standards for performance, design, CRO, and page structure.
```

## Notes

- Phase 1 ends with a handoff line that names the Phase 2 file. Check that the filename matches the file in `reference-this-to-start/`.
- Model ids and plan requirements can change. Check `/model` in Command Code for the current list.
