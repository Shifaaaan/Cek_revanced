# CEK Platform

Mobile-first public website rebuild for College of Engineering Karunagappally, using the Laterite & Ledger design direction.

## Current implementation
- Next.js App Router, TypeScript and accessible responsive CSS.
- Public routes: home, about, departments and department details, admissions, campus life, research, notices, people, contact.
- Unverified institutional details are marked pending; no invented notices, student data, or personal faculty contacts are published.
- Portal sign-in is intentionally disabled until a PostgreSQL database, authentication actions, migrations and security tests are configured.

## Local setup
1. Install Node.js 20.12 or later.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. Run `npm run typecheck` and `npm run build` before release.

## Institutional fact-checking
Sources used as starting points:
- https://www.ceknpy.ac.in/
- https://www.ceknpy.ac.in/departments
- https://www.ceknpy.ac.in/departments/computerengineering
- https://kollam.nic.in/en/public-utility/govt-college-of-engineering-karunagappally/
- https://en.wikipedia.org/wiki/College_of_Engineering_Karunagappally

The current phone number and establishment year conflict across sources and must be confirmed by the college. Department details and programme intake can change. Social media posts are leads, not authoritative institutional records; obtain permission for student stories and image use.

## Production blockers
The public website can be built independently, but this is not yet a complete IMS. Database-backed student management, role-based authentication, attendance persistence, audit log viewing, staff/user management and full automated tests remain to be implemented and verified. Do not use this portal placeholder to collect credentials.
