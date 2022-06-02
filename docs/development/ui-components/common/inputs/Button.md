# Tooltip

Wraps children (normally only text) in a stylized button. Uses a [tooltip](../data/Tooltip.md) for accessibility.

## Props

- `children`: Wrapped React node
- `title`: Tooltip text
- `disabled`: Makes button unusable (default = true)
- `onClick`: Function triggered when button is clicked
- `type`: Button type ('button', 'submit' or 'reset') (default = 'button')
- `variant`: Button style variant ('contained', 'outlined' or 'text') (default = 'outlined')

## Usage

```tsx
function MyComponent() {
  return (
    <Button title="Some text that will be displayed on hover">
      <Body1>Some text</Body1>
    </Button>
  );
}
```
