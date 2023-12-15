import React from "react";

export default function NewDesign() {
    const experiences:{
        date: string,
        position: string,
        organization: string,
        url: string,
        duties: string[],
        tools: string[],
    }[] = [
        {
            date: "JUNE 2022 - PRESENT",
            position: "Senior Fullstack Engineer",
            organization: "EHA Clinics",
            url:"https://ehacare.eha.ng/",
            duties: [
                `Led a team of four developers implementing new 
            features, improving frontend and backend application 
            performance, and fixing bugs`,
                `Worked closely with clients and stakeholders to 
            gather requirements, estimate effort and prioritize 
            tasks`,
                `launched EHACare , an application that enables 
            physicians to manage patient profiles and monitor 
            patient activity through a dashboard. This increased 
            organizational productivity by over 30%.`,
                `launched EHACare Booking , an application used to 
            manage clinician profiles and clinic branches. This 
            improved existing solutions due to their simplicity.`,
                `integrated EHACare with BetterCare , a service used 
            in many medical records.`,
                `wrote AQL queries to perform CRUD operations on 
            the BetterCare server.`,
                `mentored team members, enabling them to achieve 
            professional growth and personal goals.`

            ],
            tools: ["TypeScript", "ReactJs", "NextJs", "FastAPI", "BootStrap",
                "Sass", "Concourse CI/CD", "Docker", "Jest", "React Testing Library"],
        },
        {
            date: "NOV 2020 - MAY 2022",
            position: "Fullstack Engineer",
            organization: "Hackerbay Inc",
            url:"https://oneuptime.com/",
            duties: [
                `enhanced OneUptime by improving the compatible, 
        custom client dashboard and APIs using NodeJs, 
        Express, and MongoDB with a microservices 
        architecture. This improved client relations by over 
        25%.`,
                `migrated the existing Javascript codebase to 
        Typescript. This makes sure that possible bugs are 
        noticed due to type safety.`,
                `improved our code test coverage to above 90%.`,
                `improved automated messaging using Twilio for calls 
        and SMS. This increased our client responsiveness by 
        over 25%.`,
                `Set up a pipeline to deploy Docker images for 
        different operating system architectures.`,
                `worked on real-time notification using a web socket`,
                `Code review and mentoring new developers on 
        software development practices`
            ],
            tools: ["Typescript", "React", "NodeJs", "ExpressJs", "MongoDB",
                "Docker", "Mocha & Chai", "Git", "Trello", "ReactJs", "Microservices",
                "RabbitMQ"],
        },

        {
            date: "JULY 2019 - OCTOBER 2020",
            position: "Fullstack Engineer",
            organization: "Providence Research",
            url:"#",
            duties: [
                `developed the UI for the loan application feature in 
        Astraploris`,
                `built a rest API for the Astrapolaris application for 
        giving out loans to farmers.`,
                `worked with microservices using NodeJs and 
        RabbitMq for service-to-service communication.`,
                `Code Reviews`,

            ],
            tools: ["SpringBoot", "NodeJs", "MySql", "Git", "VueJs",
                "Microservices", "Docker", "Git", "Heroku"],
        },

        {
            date: "FEBRUARY 2019 - JULY 2019",
            position: "Fullstack Engineer",
            organization: "Info-Links",
            url:"#",
            duties: [
                `developed the UI for the loan application feature in 
          Astraploris`,
                `built a rest API for the Astrapolaris application for 
          giving out loans to farmers.`,
                `worked with microservices using NodeJs and 
          RabbitMq for service-to-service communication.`,
                `Code Reviews`,

            ],
            tools: ["React", "NodeJs", "MySQL", "Git", "Jest", "HTML", "CSS"],
        },
    ];

    return (
      <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div id="__next">
          <div className="__variable_20b187 group/spotlight relative">
            <div
              className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
              style={{
                background:
                  "radial-gradient(600px at 679px 150px, rgba(29, 78, 216, 0.15), transparent 80%)",
              }}
            ></div>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <a
                href="#content"
                className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
              ></a>
              <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                      <a href="#">David Adewole</a>
                    </h1>
                    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                      Experienced software engineer
                    </h2>
                    <p className="mt-4 max-w-xs leading-normal">
                      adeoluwadavid@gmail.com
                    </p>
                    <p className="mt-1 max-w-xs leading-normal">
                      +2348102395070
                    </p>
                    <nav
                      className="nav hidden lg:block"
                      aria-label="In-page jump links"
                    >
                      <ul className="mt-16 w-max">
                        <li>
                          <a
                            className="group flex items-center py-3 active"
                            href="#about"
                          >
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                              About
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="group flex items-center py-3"
                            href="#experience"
                          >
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                              Experience
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <ul
                    className="ml-1 mt-8 flex items-center"
                    aria-label="Social media"
                  >
                    <li className="mr-5 text-xs">
                      <a
                        className="block hover:text-slate-200"
                        href="https://github.com/adeoluwadavid"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="GitHub (opens in a new tab)"
                      >
                        <span className="sr-only">Github</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-6 w-6"
                          aria-hidden="true"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="mr-5 text-xs">
                      <a
                        className="block hover:text-slate-200"
                        href="https://www.linkedin.com/in/davidadewole/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="LinkedIn (opens in a new tab)"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                          aria-hidden="true"
                        >
                          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </header>
                <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                  <section
                    id="about"
                    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                    aria-label="About me"
                  >
                    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                        About
                      </h2>
                    </div>
                    <div>
                      <p className="mb-4">
                        Highly skilled full-stack engineer with over 5 years of
                        experience in designing, developing, and maintaining
                        complex web applications. Proficient in multiple
                        programming languages and frameworks, including
                        Javascript/Typescript, Python, NodeJs, Java, and React.
                        I have a proven record of developing and delivering
                        projects on time and within budget.
                      </p>

                      <p>
                        When I’m not at the computer, I’m usually playing
                        football and running tracks
                      </p>
                    </div>
                  </section>
                  <section
                    id="experience"
                    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  >
                    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                        Experience
                      </h2>
                    </div>

                    <div>
                      <ol className="group/list">
                        {experiences.map((each, index) => (
                          <li key={index} className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                              <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                aria-label="2018 to Present"
                              >
                                {each.date}
                              </header>
                              <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                  <div>
                                    <a
                                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                      href={each.url}
                                      target="_blank"
                                      rel="noreferrer noopener"
                                      aria-label="Lead Engineer at Upstatement (opens in a new tab)"
                                    >
                                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                      <span>
                                        <span className="inline-block">
                                          {each.organization}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                              clip-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div>
                                    <div
                                      className="text-slate-500"
                                      aria-hidden="true"
                                    >
                                      {each.position}
                                    </div>
                                  </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                  <ul>
                                    {each.duties.map((duty, index) => (
                                      <li key={index} className="mb-2">
                                        {duty}
                                      </li>
                                    ))}
                                  </ul>
                                </p>

                                <ul
                                  className="mt-2 flex flex-wrap"
                                  aria-label="Technologies used"
                                >
                                  {each.tools.map((tool, index) => (
                                    <li key={index} className="mr-1.5 mt-2">
                                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        {tool}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-12">
                        <a
                          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                          aria-label="View Full Resume"
                          target="_blank"
                          rel="noreferrer noopener"
                          href="/David_Adewole_Resume.pdf"
                        >
                          <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                              View Full
                            </span>
                            <span className="whitespace-nowrap">
                              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                Resume
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </section>
                  <section
                    id="projects"
                    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  ></section>
                  <section
                    id="writing"
                    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  ></section>
                  <footer></footer>
                </main>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
