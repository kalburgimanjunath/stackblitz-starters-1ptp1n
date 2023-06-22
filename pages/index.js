export default function Home() {
  return (
    <div>
      <section className="black">
        <div>
          <h1>IT Consulting & Staffing</h1>
          <h3>For Engineers,By Engineers</h3>
        </div>
      </section>
      <section className="green">
        <div>
          <h3>Building dynamic software engineering teams since 2007</h3>
          <p>
            Canterr, and our subsidiary Foray, have helped build scores of
            high-powered teams for clients across the US and India. Our firm
            specializes in leveraging our extensive referral networks for
            finding the most high-quality, suitable and dependable candidates
            for you - replacing the highly transactional recruiting model with a
            relationship-driven approach. At Canterr, you won’t find a sales or
            a marketing team. We have grown exclusively through referrals and
            word-of-mouth to 5,000+ consultants across the US and India. Our
            offshore centers in Hyderabad, Bangalore and Chennai each have
            1,000+ software engineers.
          </p>
          <p>
            Our clients (and consultants) value our Contract-to-Hire model -
            clients can invest in and build relationships with our consultants
            as they do with their employees - and hire them when they’re ready.
            Our consultants appreciate our commitment to their long-term growth.
            Our average consultant tenure is 3+ years and clients have stayed
            with us for 2 years or longer.
          </p>
          <p>
            Whether you’re a budding startup or a large multi-national, we will
            not only help you nurture what you create, but also help you make it
            thrive in the world. We bring extensive experience and
            professionalism to every project and customize our services to your
            individual needs.
          </p>
        </div>
      </section>
      <section className="black">
        <div>
          <h1>Areas of Practice</h1>
          <div className="grid grid-cols-2">
            <div>Classic Software Engineering</div>
            <div>
              <p>
                The world of software engineering is ever growing and evolving,
                and we’re not just talking about languages. Our engineering team
                specializes in finding the best talent across front-end
                (NodeJS/React/Angular/jQuery to WordPerfect and CSS), backend
                (Java/Python/Rust), Cloud services (AWS/Azure/GCP), and special
                requirements (e.g. e-commerce search/recommendations for some of
                the largest global firms). We have significant experiences in
                building low-latency, event-driven systems that scale up to
                millions of customers and 10K+ tps. At Canterr, you would be
                rubbing shoulders with the top talent from companies like
                Google, Microsoft and Amazon.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>AI/ML Models & Data Engineering</div>
            <div>
              <p>
                The field of data science, while very promising, is constantly
                in flux and success really depends on having access to the right
                talent. Our data-science teams can bring skills that you need -
                when you need them - to drive efficiency and productivity for
                your teams. We have deep experiences in computer vision, natural
                language processing, deep learning and a disciplined approach to
                launching models in production to drive business value.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>Site Reliability, Data Security & DevSecOps</div>
            <div>
              <p>
                Whether you run an eCommerce website or technology is simply an
                enabler for your brick-and-mortar business, you need to protect
                your data and minimize risk. Our teams provide a comprehensive
                approach for system observability, availability, resiliency, and
                automations to enable your critical business capabilities. Key
                accelerators include IT Agility and Optimization, Penetration
                Testing as a Service (PTAAS), Threat Modeling and Risk Analysis,
                Shift Left and Shift Everywhere. We work with your teams to
                drive end-to-end orchestration and a continuous learning culture
                and accelerate your engineering velocity with improved release
                predictability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="orange">
        <div>
          <h1>
            “We must all obey the great law of change. It is the most powerful
            law of nature.”
          </h1>
          <div>– Edmund Burke</div>
        </div>
      </section>
      <section className="green">
        <div>
          <h1>Be the driver of change. Get in Touch</h1>
          <p>
            Find out how our teams can enable you drive business transformation
            effectively in your organization.
          </p>
          <a href="./contactus">Contact Us</a>
        </div>
      </section>
      <section className="pink">
        <div className="grid-area-main">
          <h1>Testimonials</h1>
          <div className="grid-area1">
            <div>VP of Software Engineering, CapitalOne</div>
            <p>
              “Canterr Team delivered a high-quality product on time under tight
              deadlines, with complete professionalism. I highly recommend
              Canterr to well informed and educated clients who appreciate and
              understand the benefits of a holistic approach to application
              design and development, resulting in minimum cost of development
              and maintenance.”
            </p>
          </div>
          <div className="grid-area2">
            <div>– VP of Software Engineering, Skopos Financial </div>
            <p>
              “The wonderful team of technical experts from Canterr helped us
              deliver an amazing product, which helped us achieve our business
              goals. I am completely pleased with their services and highly
              recommend to any client out there.”
            </p>
          </div>
          <div className="grid-area3">
            <div>– VP of Software Engineering, AllState </div>
            <p>
              “We completed 3 projects with Canterr so far. Highlights of the
              team – technical expertise, professionalism and ownership. Let’s
              solve the problem vs. this is someone else’s problem. I look
              forward to working with them again”{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
