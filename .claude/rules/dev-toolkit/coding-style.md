# Coding Style

## Immutability (CRITICAL)

ALWAYS create new objects, NEVER mutate:

```
// WRONG: Mutation
function updateUser(user, name):
  user.name = name  // MUTATION!
  return user

// CORRECT: Immutability
function updateUser(user, name):
  return copyWith(user, { name: name })
```

## File Organization

MANY SMALL FILES > FEW LARGE FILES:
- High cohesion, low coupling
- 200-400 lines typical, 800 max
- Extract utilities from large modules
- Organize by feature/domain, not by type

## Error Handling

ALWAYS handle errors comprehensively:

```
try:
  result = riskyOperation()
  return result
catch error:
  log("Operation failed:", error)
  throw Error("Detailed user-friendly message")
```

## Input Validation

ALWAYS validate user input:
- Define schema with type constraints
- Validate before processing
- Return clear error messages for invalid input

```
schema = {
  email: string, format=email,
  age: integer, min=0, max=150
}
validated = validate(input, schema)
```

## Code Quality Checklist

Before marking work complete:
- [ ] Code is readable and well-named
- [ ] Functions are small (<50 lines)
- [ ] Files are focused (<800 lines)
- [ ] No deep nesting (>4 levels)
- [ ] Proper error handling
- [ ] No debug statements in production code
- [ ] No hardcoded values
- [ ] No mutation (immutable patterns used)
