// import AIChat from "../components/AIChat";
// import Analytics from "../components/Analytics";
// import FAQ from "../components/FAQ";
// import "./Home.css";

// const Home = () => {
//   return (
//     <>
//       <main>
//         <section className="section-hero">
//           <div className="container grid grid-two-cols">
//             <div className="hero-content">
//               <p>We Debug the Future</p>
//               <h1>Welcome to Faisal Tech Labs</h1>
//               <p>
//                 At Faisal Tech Labs, we specialize in cutting-edge solutions to
//                 empower your business with technology. From AI to web apps, we
//                 craft innovative systems designed for tomorrow's challenges.
//               </p>
//               <div className="btn btn-group">
//                 <a href="/contact">
//                   <button className="btn">connect now</button>
//                 </a>
//                 <a href="/service">
//                   <button className="btn secondary-btn">learn more</button>
//                 </a>
//               </div>
//             </div>

//             {/* Hero images */}
//             <div className="hero-image">
//               <img
//                 src="images/heroFaisalTech.jpg"
//                 alt="hero-img"
//                 width="400"
//                 height="500"
//               />
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* 2nd section */}
//       <Analytics />

//       {/* 3rd section */}
//       <FAQ />

//       {/* 4th section */}
//       <AIChat />

//       {/* 5th section  */}
//       <section className="section-hero">
//         <div className="container grid grid-two-cols">
//           {/* hero images  */}
//           <div className="hero-image hero-image-2">
//             <img
//               src="/images/heroFaisalTech2.jpg"
//               alt="coding together"
//               width="400"
//               height="500"
//             />
//           </div>

//           <div className="hero-content">
//             <p>We are here to help you</p>
//             <h1>Get Started Today</h1>
//             <p>
//               Ready to take the first step towards a more efficient and secure
//               IT infrastructure? Contact us today for a free consultation and
//               let's discuss how Thapa Technical can help your business thrive in
//               the digital age.
//             </p>
//             <div className="btn btn-group">
//               <a href="/contact">
//                 <button className="btn">connect now</button>
//               </a>
//               <a href="/services">
//                 <button className="btn secondary-btn">learn more</button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

import { NavLink } from "react-router-dom";
import AIChat from "../components/AIChat";
import Analytics from "../components/Analytics";
import FAQ from "../components/FAQ";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We Debug the Future</p>
              <h1>Welcome to Faisal Tech Labs</h1>
              <p>
                At Faisal Tech Labs, we specialize in cutting-edge solutions to
                empower your business with technology. From AI to web apps, we
                craft innovative systems designed for tomorrow's challenges.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">connect now</button>
                </NavLink>
                <NavLink to="/service">
                  <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

            {/* Hero images */}
            <div className="hero-image">
              <img
                src="images/heroFaisalTech.jpg"
                alt="hero-img"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />

      {/* 3rd section */}
      <FAQ />

      {/* 4th section */}
      <AIChat />

      {/* 5th section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image hero-image-2">
            <img
              src="/images/heroFaisalTech2.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <NavLink to="/contact">
                <button className="btn">connect now</button>
              </NavLink>
              <NavLink to="/service">
                <button className="btn secondary-btn">learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
