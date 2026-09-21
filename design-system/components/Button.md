# Button

An interactive control that triggers an immediate action, submission, or navigation.

## When to use

- Confirming or submitting a form
- Triggering a primary action on a screen
- Launching a dialog, drawer or destructive flow
- Grouping a decision pair (Cancel / Confirm)

## When NOT to use

- For in-page navigation to another URL — use Link
- For toggling state on/off — use Switch or a selectable control
- When the visual is just decoration with no action

## Anatomy

- Container
- Label
- Leading icon (optional)
- Trailing icon (optional)

## Variants

### variant

| variant | Purpose |
| --- | --- |
| `primary` | Highest-emphasis action; one per view or section. |
| `secondary` | Secondary action paired with a primary. |
| `ghost` | Minimal-chrome action for dense or in-context use. |
| `danger` | Destructive action; highest-emphasis, irreversible or risky. |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |
| `loading` | Work in progress; interaction is paused. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `state` | variant | default, hover, focus, disabled, loading | `default` | |
| `variant` | variant | primary, secondary, ghost, danger | `primary` | |

## Usage example

```tsx
<Button
  state="default"
  variant="primary"
/>
```

## Do

- Lead with a verb in the label
- Use a single primary button per view
- Pair destructive actions with a confirmation
- Match icon meaning to the action

## Don't

- Don't stack multiple primary buttons next to each other
- Don't use a button for plain navigation
- Don't write essay-length labels
- Don't disable without explaining why

## Accessibility

- Reachable with Tab; activated with Enter and Space
- Visible focus ring meeting 3:1 contrast
- Label conveys the action verb ("Save", not "OK")
- Disabled state is announced; never rely on color alone
- Maintain 4.5:1 text/background contrast
