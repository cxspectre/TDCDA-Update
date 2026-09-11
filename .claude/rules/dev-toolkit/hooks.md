# Hooks System

## Hook Types

- **PreToolUse**: Before tool execution (validation, parameter modification)
- **PostToolUse**: After tool execution (auto-format, checks)
- **Stop**: When session ends (final verification)

## Common Hook Examples

### PreToolUse
- **tmux reminder**: Suggests tmux for long-running commands
- **git push review**: Opens editor for review before push
- **doc blocker**: Blocks creation of unnecessary documentation files

### PostToolUse
- **PR creation**: Logs PR URL and CI status
- **Auto-format**: Formats code after edit (language-specific formatter)
- **Lint check**: Runs linter after editing source files
- **Debug statement warning**: Warns about debug statements in edited files

### Stop
- **Debug audit**: Checks all modified files for debug statements before session ends

## Auto-Accept Permissions

Use with caution:
- Enable for trusted, well-defined plans
- Disable for exploratory work
- Never use dangerously-skip-permissions flag
- Configure `allowedTools` in `~/.claude.json` instead

## TodoWrite Best Practices

Use TodoWrite tool to:
- Track progress on multi-step tasks
- Verify understanding of instructions
- Enable real-time steering
- Show granular implementation steps

Todo list reveals:
- Out of order steps
- Missing items
- Extra unnecessary items
- Wrong granularity
- Misinterpreted requirements
