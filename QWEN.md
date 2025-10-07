# Project Context: Merchant-Ready IT Services Website

## Project Overview

This is a merchant-ready IT services website project designed specifically to meet the compliance requirements of payment gateways like Easypaisa and JazzCash in Pakistan. The project follows a "Spec-Driven Development" framework that emphasizes structured development with detailed specifications, planning, and task breakdowns.

The website is built using static HTML5 and CSS3 only, following a "Static HTML + CSS only" technical standard as mandated by the project constitution. It's designed to be professional, responsive, SEO-optimized, and compliant with merchant onboarding requirements.

The project uses a specification-driven approach with:
- Detailed feature specifications in the `specs/` directory
- Implementation plans that map to the specifications
- Task lists that break down implementation into manageable phases
- A constitution that defines core principles and compliance requirements

## Project Structure

The main components of the project are:

```
/
├── index.html                    # Main homepage
├── css/
│   └── style.css               # Main stylesheet
├── js/
│   └── main.js                 # JavaScript for contact form
├── assets/
├── specs/                      # Feature specifications and plans
│   └── 001-app-merchant-ready/ # Current feature implementation
├── .specify/                   # Specification framework components
├── .mise.toml                  # Development environment config
├── .tmuxp.yaml                 # Tmux session configuration
└── GEMINI.md                   # Project overview
```

## Current Feature: Merchant-Ready IT Services Website

The current feature in development (`001-app-merchant-ready`) includes:

- **Core Pages**: Home, Services, About, Portfolio, Contact, Checkout, and Policies
- **Compliance Requirements**: PKR pricing, SECP/NTN details, refund/delivery/privacy policies
- **Technical Requirements**: Responsive design, SEO optimization, accessibility compliance
- **Lighthouse Targets**: ≥ 90 for Performance, Accessibility, and SEO scores

## Development Framework

The project follows a structured process with four core constitutional principles:

1. **Vision & Design**: Professional, trustworthy, and compliant design
2. **Content Architecture**: Specific page requirements for merchant approval
3. **SEO & Technical Standards**: Static HTML/CSS with performance targets
4. **Compliance (NON-NEGOTIABLE)**: Strict adherence to payment gateway requirements

## Building and Running

The project uses `mise` for development environment management:

- **Install dependencies**: `mise run install`
- **Run the application**: `mise run run` (though this seems to be for a Python app that's not currently present in the project)
- **Run tests**: `mise run test`
- **Lint code**: `mise run lint`
- **Format code**: `mise run format`

The tmux session is configured with:
- An "editor" window running `nvim`
- A "service" window running `five-server` (for serving the static files)

## Development Conventions

Based on the project constitution:

- **Test-First (NON-NEGOTIABLE)**: TDD approach is mandatory
- **Integration Testing**: Required for new contracts and inter-service communication
- **Static HTML + CSS only**: No JavaScript frameworks allowed
- **Compliance-first**: All features must pass compliance checks
- **Lighthouse Scores**: Target ≥ 90 for Performance, Accessibility, and SEO

## Key Directories and Files

- `specs/001-app-merchant-ready/`: Current feature specification, plan, and tasks
- `.specify/`: Contains the specification-driven development framework
- `.specify/memory/constitution.md`: Core principles and compliance requirements
- `.specify/scripts/bash/`: Automation scripts for the development process
- `.specify/templates/`: Templates for specifications, plans, and tasks
- `.mise.toml`: Development environment configuration
- `css/style.css`: Main stylesheet (to be implemented)
- `js/main.js`: JavaScript for contact form (to be implemented)

## Current Status

The project is in the initial phases of development with:
- A detailed specification for the merchant-ready website
- An implementation plan outlining the technical approach
- A comprehensive task list organized in phases
- A foundation for the file structure (index.html exists but is basic)

The next steps involve implementing the phases outlined in the tasks.md file, starting with setup and homepage development.