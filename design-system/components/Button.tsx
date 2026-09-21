// Auto-generated from the DS Foundations Engine.
// Component: Button  (category: Misc)
// Description: Botón base SCAT. variant: primary (acción principal), secondary (acción secundaria), ghost (acción terciaria), danger (acción destructiva o de bloqueo). state cubre default, hover, focus, disabled y loading. Altura 48px (área táctil ≥44px). Todo el color está bindeado a variables semánticas.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface ButtonProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Your own content, rendered inside the component's root container. */
  children?: React.ReactNode;
  /** Variant. Default: "default" */
  state?: "default" | "hover" | "focus" | "disabled" | "loading";
  /** Variant. Default: "primary" */
  variant?: "primary" | "secondary" | "ghost" | "danger";
}

/**
 * Runtime helper: merges `base` with every `variantOverrides` entry
 * whose `selector` matches the current props. Mirrors the engine's
 * `selectorMatches` semantics so the exported component behaves like
 * the editor preview.
 */
const _mergeOverrides = (
  base: Record<string, any>,
  overrides: Array<{ selector: Record<string, string | boolean>; patch: Record<string, any> }> | undefined,
  ctx: Record<string, any>,
): Record<string, any> => {
  if (!overrides || overrides.length === 0) return base;
  let out = base;
  for (const o of overrides) {
    let match = true;
    for (const k of Object.keys(o.selector)) {
      const sv = o.selector[k];
      const cv = ctx[k];
      if (typeof sv === "boolean") {
        if (cv !== sv) { match = false; break; }
      } else if (cv !== sv) {
        match = false; break;
      }
    }
    if (match) out = { ...out, ...o.patch };
  }
  return out;
};

const _clamp = (n: number, min?: number, max?: number) => {
  if (typeof min === "number" && n < min) return min;
  if (typeof max === "number" && n > max) return max;
  return n;
};

export function Button(props: ButtonProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const state = props.state ?? "default";
  const variant = props.variant ?? "primary";

  const _ctx: Record<string, any> = { state: state, variant: variant };
  return (
    <div style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "var(--ds-spacing-sm, 8px)", paddingLeft: "var(--ds-spacing-lg, 16px)", paddingRight: "var(--ds-spacing-lg, 16px)", paddingTop: "var(--ds-spacing-md, 12px)", paddingBottom: "var(--ds-spacing-md, 12px)", position: "relative", boxSizing: "border-box", background: "var(--ds-semanticColors-surface-accent, #2563EB)", borderRadius: "var(--ds-radius-md, 8px)" }, [{ selector: {"state":"hover","variant":"primary"}, patch: { background: "var(--ds-semanticColors-surface-accent-hover, #1D4ED8)" } }, { selector: {"state":"focus","variant":"primary"}, patch: { border: `2px solid ${"var(--ds-semanticColors-border-focus, #3B82F6)"}` } }, { selector: {"state":"disabled","variant":"primary"}, patch: { background: "var(--ds-semanticColors-surface-accent-disabled, #BFDBFE)" } }, { selector: {"state":"loading","variant":"primary"}, patch: { background: "var(--ds-semanticColors-surface-accent-pressed, #1E40AF)" } }, { selector: {"state":"default","variant":"secondary"}, patch: { background: "var(--ds-semanticColors-surface-default, #F9FAFB)", border: `1px solid ${"var(--ds-semanticColors-border-default, #D1D5DB)"}` } }, { selector: {"state":"hover","variant":"secondary"}, patch: { background: "var(--ds-semanticColors-surface-default-hover, #E5E7EB)", border: `1px solid ${"var(--ds-semanticColors-border-strong, #6B7280)"}` } }, { selector: {"state":"focus","variant":"secondary"}, patch: { background: "var(--ds-semanticColors-surface-default, #F9FAFB)", border: `2px solid ${"var(--ds-semanticColors-border-focus, #3B82F6)"}` } }, { selector: {"state":"disabled","variant":"secondary"}, patch: { background: "var(--ds-semanticColors-surface-default-disabled, #F3F4F6)", border: `1px solid ${"var(--ds-semanticColors-border-disabled, #E5E7EB)"}` } }, { selector: {"state":"loading","variant":"secondary"}, patch: { background: "var(--ds-semanticColors-surface-default-pressed, #D1D5DB)", border: `1px solid ${"var(--ds-semanticColors-border-default, #D1D5DB)"}` } }, { selector: {"state":"default","variant":"ghost"}, patch: { background: "#00000000" } }, { selector: {"state":"hover","variant":"ghost"}, patch: { background: "var(--ds-semanticColors-surface-subtle-hover, #D1D5DB)" } }, { selector: {"state":"focus","variant":"ghost"}, patch: { background: "#00000000", border: `2px solid ${"var(--ds-semanticColors-border-focus, #3B82F6)"}` } }, { selector: {"state":"disabled","variant":"ghost"}, patch: { background: "#00000000" } }, { selector: {"state":"loading","variant":"ghost"}, patch: { background: "var(--ds-semanticColors-surface-subtle, #F3F4F6)" } }, { selector: {"state":"default","variant":"danger"}, patch: { background: "var(--ds-semanticColors-surface-error, #DC2626)" } }, { selector: {"state":"hover","variant":"danger"}, patch: { background: "var(--ds-semanticColors-surface-error-hover, #B91C1C)" } }, { selector: {"state":"focus","variant":"danger"}, patch: { background: "var(--ds-semanticColors-surface-error, #DC2626)", border: `2px solid ${"var(--ds-semanticColors-border-focus, #3B82F6)"}` } }, { selector: {"state":"disabled","variant":"danger"}, patch: { background: "var(--ds-semanticColors-surface-error-disabled, #FECACA)" } }, { selector: {"state":"loading","variant":"danger"}, patch: { background: "var(--ds-semanticColors-surface-error-pressed, #991B1B)" } }], _ctx) as React.CSSProperties} onClick={(e) => props.onClick?.(e)}>
      <div style={({ alignItems: "flex-start", justifyContent: "flex-start", gap: "0px", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "24px", height: "24px", flexShrink: 0, position: "relative", boxSizing: "border-box", borderRadius: "0px" }) as React.CSSProperties}>
        <span style={_mergeOverrides({ display: "inline-flex", width: "16px", height: "11px", color: "currentColor", flexShrink: 0 }, [{ selector: {"state":"loading","variant":"primary"}, patch: {  } }, { selector: {"state":"default","variant":"secondary"}, patch: {  } }, { selector: {"state":"hover","variant":"secondary"}, patch: {  } }, { selector: {"state":"focus","variant":"secondary"}, patch: {  } }, { selector: {"state":"disabled","variant":"secondary"}, patch: {  } }, { selector: {"state":"loading","variant":"secondary"}, patch: {  } }, { selector: {"state":"default","variant":"ghost"}, patch: {  } }, { selector: {"state":"hover","variant":"ghost"}, patch: {  } }, { selector: {"state":"focus","variant":"ghost"}, patch: {  } }, { selector: {"state":"disabled","variant":"ghost"}, patch: {  } }, { selector: {"state":"loading","variant":"ghost"}, patch: {  } }, { selector: {"state":"disabled","variant":"danger"}, patch: {  } }, { selector: {"state":"loading","variant":"danger"}, patch: {  } }], _ctx) as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>` }} />
      </div>
      <span style={_mergeOverrides({ color: "var(--ds-semanticColors-content-on-accent, #F9FAFB)", fontFamily: "Inter", fontSize: "16px", fontWeight: "Semi Bold", lineHeight: 24, letterSpacing: "0px", textAlign: "left" }, [{ selector: {"state":"disabled","variant":"primary"}, patch: { color: "var(--ds-semanticColors-content-on-accent-disabled, #F9FAFB)" } }, { selector: {"state":"loading","variant":"primary"}, patch: {  } }, { selector: {"state":"default","variant":"secondary"}, patch: { color: "var(--ds-semanticColors-content-default, #111827)" } }, { selector: {"state":"hover","variant":"secondary"}, patch: { color: "var(--ds-semanticColors-content-default, #111827)" } }, { selector: {"state":"focus","variant":"secondary"}, patch: { color: "var(--ds-semanticColors-content-default, #111827)" } }, { selector: {"state":"disabled","variant":"secondary"}, patch: { color: "var(--ds-semanticColors-content-disabled, #9CA3AF)" } }, { selector: {"state":"loading","variant":"secondary"}, patch: { color: "var(--ds-semanticColors-content-default, #111827)" } }, { selector: {"state":"default","variant":"ghost"}, patch: { color: "var(--ds-semanticColors-content-accent, #2563EB)" } }, { selector: {"state":"hover","variant":"ghost"}, patch: { color: "var(--ds-semanticColors-content-accent, #2563EB)" } }, { selector: {"state":"focus","variant":"ghost"}, patch: { color: "var(--ds-semanticColors-content-accent, #2563EB)" } }, { selector: {"state":"disabled","variant":"ghost"}, patch: { color: "var(--ds-semanticColors-content-disabled, #9CA3AF)" } }, { selector: {"state":"loading","variant":"ghost"}, patch: { color: "var(--ds-semanticColors-content-accent, #2563EB)" } }, { selector: {"state":"default","variant":"danger"}, patch: { color: "var(--ds-semanticColors-content-on-error, #F9FAFB)" } }, { selector: {"state":"hover","variant":"danger"}, patch: { color: "var(--ds-semanticColors-content-on-error, #F9FAFB)" } }, { selector: {"state":"focus","variant":"danger"}, patch: { color: "var(--ds-semanticColors-content-on-error, #F9FAFB)" } }, { selector: {"state":"disabled","variant":"danger"}, patch: { color: "var(--ds-semanticColors-content-disabled, #9CA3AF)" } }, { selector: {"state":"loading","variant":"danger"}, patch: { color: "var(--ds-semanticColors-content-on-error, #F9FAFB)" } }], _ctx) as React.CSSProperties}>{"Etiqueta"}</span>
      {props.children}
    </div>
  );
}

export default Button;
