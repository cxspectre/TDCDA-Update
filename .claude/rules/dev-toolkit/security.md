# Security Guidelines

## Mandatory Security Checks

Before ANY commit:
- [ ] No hardcoded secrets (API keys, passwords, tokens)
- [ ] All user inputs validated
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (sanitized HTML)
- [ ] CSRF protection enabled
- [ ] Authentication/authorization verified
- [ ] Rate limiting on all endpoints
- [ ] Error messages don't leak sensitive data

## Secret Management

```
// NEVER: Hardcoded secrets
apiKey = "sk-proj-xxxxx"

// ALWAYS: Environment variables
apiKey = getEnv("OPENAI_API_KEY")

if not apiKey:
  throw Error("OPENAI_API_KEY not configured")
```

Best practices:
- Use `.env` files for local development (never commit)
- Use secret managers in production (Vault, AWS Secrets Manager, etc.)
- Rotate secrets regularly
- Use different secrets per environment

## Security Response Protocol

If security issue found:
1. STOP immediately
2. Use **security-reviewer** agent
3. Fix CRITICAL issues before continuing
4. Rotate any exposed secrets
5. Review entire codebase for similar issues
