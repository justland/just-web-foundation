---
name: step-down-rule
description: "Place functions in step-down order - main entry first, helpers below the code that uses them. Use when refactoring modules, organizing functions in a file, or writing new utility modules with multiple private functions."
---

# Step-Down Rule

When organizing code with multiple functions, place the main entry point first, then each helper below the code that calls it.

## When to Use This Skill

- Refactoring a file with multiple private/helper functions
- Organizing or reorganizing a module
- Writing new utility modules with more than one function
- Adding new helpers to an existing module

---

## Rule

**Main entry first; each function followed by the functions it directly calls.**

---

## Guidelines

- Constants and imports stay at the top
- The exported or primary function comes next
- Direct helpers follow in order of first use
- Nested helpers appear below their callers
- Readers see the "what" before the "how"

---

## Quick Reference

| Situation | Action |
|-----------|--------|
| Refactoring module | Reorder to step-down |
| New multi-function file | Write in step-down order from the start |
| Adding a helper | Place it below the function that calls it |
