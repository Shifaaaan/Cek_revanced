# CEK Platform

A student-first campus information platform concept for College of Engineering Karunagappally (CEK).

## Current implementation

- Responsive public landing page built with Next.js App Router and TypeScript.
- Campus-oriented navigation for academics, admissions, campus life, and notices.
- Institutional facts are intentionally not presented as verified claims until checked against official sources.
- Student/staff authentication, records, attendance, and the IMS are **not implemented yet**.

## Development

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
```

## Deployment

This repository can be connected to a separate Vercel project. The production deployment should only be considered ready after a successful build and review.

## Important data and security notes

- Do not add real student records, passwords, access tokens, or private contact details to this repository.
- Do not claim official endorsement or accreditation without verification.
- Before building the IMS, define the database schema, role-based authorization, audit logging, session security, retention policy, and a safe account-provisioning workflow.
- Database-backed portal features require a separately provisioned database and environment variables.

## Source references for institutional verification

- Official CEK website: https://www.ceknpy.ac.in/
- Kollam district public utility listing: https://kollam.nic.in/en/public-utility/govt-college-of-engineering-karunagappally/

This project is an independent platform concept. Official affiliation, current institutional facts, notices, and programme details remain pending verification.
