# Common Patterns

## API Response Format

标准化 API 响应结构：

```
ApiResponse<T> {
  success: boolean
  data: T (optional)
  error: string (optional)
  meta: {
    total: number
    page: number
    limit: number
  } (optional)
}
```

## Repository Pattern

数据访问抽象层：

```
Repository<T> {
  findAll(filters): List<T>
  findById(id): T or null
  create(data): T
  update(id, data): T
  delete(id): void
}
```

## Factory Pattern

对象创建抽象：

```
Factory<T> {
  create(type, config): T
}
```

## Strategy Pattern

可替换的算法/行为：

```
Strategy {
  execute(context): Result
}

Context {
  setStrategy(strategy)
  executeStrategy(): Result
}
```

## Skeleton Projects

When implementing new functionality:
1. Search for battle-tested skeleton projects
2. Use parallel agents to evaluate options:
   - Security assessment
   - Extensibility analysis
   - Relevance scoring
   - Implementation planning
3. Clone best match as foundation
4. Iterate within proven structure
