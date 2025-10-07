# Project: AI-Powered Spec-Driven Development Framework

## Project Overview

This project is a framework for "Spec-Driven Development" that leverages an AI agent to enforce a structured workflow for creating new features. The process begins with a detailed feature specification, progresses to planning and task breakdown, and culminates in implementation.

The framework is built around a collection of scripts and templates that automate and standardize the development lifecycle. The core components are:

- **Specification Templates:** Located in `.specify/templates`, these Markdown files provide the structure for feature specifications (`spec-template.md`), implementation plans (`plan-template.md`), and task lists (`tasks-template.md`).
- **Bash Scripts:** Found in `.specify/scripts/bash`, these scripts automate key workflow steps, such as creating new feature branches and setting up the necessary directory structure (`create-new-feature.sh`).
- **AI Agent Integration:** The `.codex` and `.gemini` directories house prompts and commands for the AI agent, indicating a deep integration with an AI assistant like Gemini to guide the development process.
- **Project Constitution:** The `.specify/memory/constitution.md` file establishes the core principles of the project, including "Library-First," "CLI Interface," and a non-negotiable "Test-First" approach.

The project uses Python, with `uv` for package management and `ruff` for linting and formatting, as defined in the `.mise.toml` file. A `.tmuxp.yaml` file is also included to define a consistent development environment using tmux.

## Building and Running

The `.mise.toml` file provides a set of commands for managing the project:

- **Install dependencies:**
  ```bash
  mise run install
  ```
  (or `mise i`)

- **Add a new dependency:**
  ```bash
  mise run add <dependency>
  ```

- **Run the application:**
  ```bash
  mise run run
  ```
  (executes `python main.py`)

- **List dependencies:**
  ```bash
  mise run deps
  ```

- **Run tests:**
  ```bash
  mise run test
  ```
  (runs pytest in the `tests/` directory)

- **Lint the code:**
  ```bash
  mise run lint
  ```
  (runs ruff on the `src/` directory)

- **Format the code:**
  ```bash
  mise run format
  ```
  (formats the `src/` directory with ruff)

## Development Conventions

The project's development conventions are explicitly defined in the `.specify/memory/constitution.md` file. The key principles are:

- **Library-First:** All new features must be developed as standalone libraries.
- **CLI Interface:** Every library must expose its functionality through a command-line interface.
- **Test-First (NON-NEGOTIABLE):** Test-Driven Development (TDD) is mandatory.
- **Integration Testing:** Integration tests are required for new library contracts, changes to existing contracts, inter-service communication, and shared schemas.
- **Observability, Versioning & Breaking Changes, Simplicity:** These principles are also considered core to the project's development philosophy.
