export const SOURCES = {
  home: "https://www.ceknpy.ac.in/",
  departments: "https://www.ceknpy.ac.in/departments",
  cse: "https://www.ceknpy.ac.in/departments/computerengineering",
  district: "https://kollam.nic.in/en/public-utility/govt-college-of-engineering-karunagappally/",
  ihrd: "https://ihrd.ac.in/index.php/institutions/engineering-colleges/182-college-of-engineering-karunagappally",
  iedc: "https://www.ceknpy.ac.in/public/iedc",
  foss: "https://www.ceknpy.ac.in/public/foss",
  events: "https://www.ceknpy.ac.in/public/index.php",
  cfra: "https://cfra.dev/",
  wikipedia: "https://en.wikipedia.org/wiki/College_of_Engineering_Karunagappally"
} as const;

export const institution = {
  name: "College of Engineering Karunagappally",
  shortName: "CEK",
  governance: "Under IHRD, Government of Kerala",
  affiliation: "APJ Abdul Kalam Technological University",
  address: ["Thodiyoor P.O., Karunagappally", "Kollam District, Kerala 690523"],
  phone: "0476 2665935",
  phoneNote: "IHRD lists 0476 2666160 (principal) and 0476 2665935 (office); the district portal lists 0476 2665935.",
  email: "principal@ceknpy.ac.in",
  established: "2000 (as stated on the college and IHRD websites)"
};

export type Department = {
  slug: string;
  name: string;
  verified: boolean;
  summary?: string;
  programmes: { name: string; intake?: number; semesters?: number }[];
  note?: string;
};

export const departments: Department[] = [
  { slug: "cse", name: "Computer Science and Engineering", verified: true, summary: "The department website lists undergraduate programmes in computing and states that the B.Tech programme was accredited by NBA through 2025. Confirm current accreditation and intake with the college before relying on them.", programmes: [{ name: "B.Tech Computer Science and Engineering", intake: 120, semesters: 8 }, { name: "B.Tech Artificial Intelligence and Data Science", intake: 60, semesters: 8 }, { name: "Bachelor of Computer Applications", intake: 60, semesters: 6 }], note: "Programme details are transcribed from CEK's published pages; current approval and intake must be reconfirmed." },
  { slug: "ece", name: "Electronics and Communication Engineering", verified: false, programmes: [], note: "Department name appears on the official CEK departments page; detailed profile is pending." },
  { slug: "ee", name: "Electrical Engineering", verified: false, programmes: [], note: "Department name appears on the official CEK departments page; detailed profile is pending." },
  { slug: "me", name: "Mechanical Engineering", verified: false, programmes: [], note: "Department name appears on the official CEK departments page; detailed profile is pending." },
  { slug: "bs", name: "Basic Sciences", verified: false, programmes: [], note: "Department name appears on the official CEK departments page; detailed profile is pending." }
];

type Section = { heading: string; body?: string; pending?: string; links?: { label: string; href: string }[] };
export const pages: Record<string, { title: string; intro: string; sections: Section[] }> = {
  about: {
    title: "About the College",
    intro: "A public engineering institution in Karunagappally, Kollam, Kerala, managed by the Institute of Human Resources Development.",
    sections: [
      { heading: "Governance and recognition", body: "The college and IHRD websites state that CEK is managed by IHRD, approved by AICTE and affiliated to APJ Abdul Kalam Technological University. Older institutional pages also reference CUSAT; the current affiliation statement should be confirmed against current university records.", links: [{ label: "Official CEK website", href: SOURCES.home }, { label: "IHRD institution listing", href: SOURCES.ihrd }] },
      { heading: "History and campus", body: "The college and IHRD describe the institution as established in 2000. Published institutional material describes student professional bodies, an alumni association, campus transport and hostel facilities; current availability should be checked directly with the college.", links: [{ label: "Official college overview", href: "https://www.ceknpy.ac.in/overview" }] },
      { heading: "Leadership", pending: "Confirm the current principal, governing body and office-bearer details with the college office." }
    ]
  },
  admissions: {
    title: "Admissions",
    intro: "Information for applicants considering undergraduate study at CEK.",
    sections: [
      { heading: "Eligibility and process", body: "Admission dates and procedures change each year. Use the current KEAM / LBS and university notifications rather than archived dates or social media reposts.", links: [{ label: "Official CEK website and current notices", href: SOURCES.home }, { label: "Official department list", href: SOURCES.departments }] },
      { heading: "Fees and scholarships", pending: "Current tuition, university fees, scholarships and concession details must be supplied by the competent authority." },
      { heading: "Before applying", body: "Confirm programme availability, eligibility, reservation rules, required documents and deadlines from the current official notification." }
    ]
  },
  "campus-life": {
    title: "Campus & Student Life",
    intro: "Student communities, technical societies and campus activities are an important part of CEK. The links below are official institutional or association sources, not a claim that every group is currently active.",
    sections: [
      { heading: "Student professional bodies", body: "CEK's official pages describe student professional bodies including IEEE, ISTE, CSI and the Innovation and Entrepreneurship Development Cell (IEDC). The college also publishes information about its FOSS Club. Check the linked pages for current activities and contact details.", links: [{ label: "IEDC CEK — official college page", href: SOURCES.iedc }, { label: "FOSS Club — official college page", href: SOURCES.foss }, { label: "CEK events and activities", href: SOURCES.events }, { label: "CFRA — Computer Science student association", href: SOURCES.cfra }] },
      { heading: "Workshops and events", body: "The college's IEDC page reports that ASCEND'26 included AI tools and robotics workshops for school students on 21 February 2026. The official home page has also listed campus events such as Holi 2026 and DAKSHA 2026. These are past activities, not upcoming-event announcements.", links: [{ label: "IEDC activities and event reports", href: SOURCES.iedc }, { label: "Official CEK event listings", href: SOURCES.events }] },
      { heading: "Student stories and social media", pending: "Student-run pages such as Humans of CEK and club social accounts can help identify stories and events, but posts should be verified before publication. Obtain permission before reusing student names, photos, quotes or videos; no social-media images have been copied into this site." },
      { heading: "Facilities", pending: "Confirm current library, hostel, transport, canteen, laboratory, sports and accessibility details with the college office." }
    ]
  },
  research: {
    title: "Research & Innovation",
    intro: "Research, projects and innovation activity across the college community.",
    sections: [
      { heading: "Innovation and entrepreneurship", body: "CEK publishes an IEDC page describing its entrepreneurship and innovation aims and reporting student-facing workshops. For current programmes and opportunities, use the official IEDC page.", links: [{ label: "IEDC CEK", href: SOURCES.iedc }] },
      { heading: "Research areas and projects", pending: "Departments should supply current research themes, funded projects, publications, patents and laboratory details before these are published." }
    ]
  },
  contact: {
    title: "Contact",
    intro: "Contact details cross-checked against the official college, IHRD and Kollam district listings.",
    sections: [
      { heading: "Address", body: "Thodiyoor P.O., Karunagappally, Kollam District, Kerala 690523.", links: [{ label: "Kollam district government listing", href: SOURCES.district }] },
      { heading: "Phone and email", body: "Office: 0476 2665935. Email: principal@ceknpy.ac.in. IHRD lists 0476 2666160 as the principal's number and 0476 2665935 as the office number, which explains the apparent discrepancy across pages.", links: [{ label: "IHRD official institution listing", href: SOURCES.ihrd }, { label: "Kollam district government listing", href: SOURCES.district }] },
      { heading: "Official sources", body: "For announcements, academic details and contact updates, prioritise the college's own website and government listings.", links: [{ label: "CEK official website", href: SOURCES.home }, { label: "IHRD", href: "https://ihrd.ac.in/" }] }
    ]
  }
};