import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/four.jpg';
import five from '../../assets/five.jpg';
import six from '../../assets/six.jpg';
import seven from '../../assets/seven.jpg';
import eight from '../../assets/eight.jpg';
import nine from '../../assets/nine.jpg';
import backend from '../../assets/backend.jpg'
import ux from '../../assets/ux.jpg';
import JS from '../../assets/JS.png';
import JS1 from '../../assets/JS1.png';
import JS2 from '../../assets/JS2.jfif';
import JS3 from '../../assets/JS3.jfif';
import JS4 from '../../assets/JS3.jfif';
import JS5 from '../../assets/JS5.jfif';
import JS6 from '../../assets/JS6.png';
import JS7 from '../../assets/JS7.jfif';
import N1 from '../../assets/N1.png';
import N2 from '../../assets/N2.png';
import N3 from '../../assets/N3.jfif';
import JS8 from '../../assets/JS8.png';
import JS11 from '../../assets/JS11.png';
import JS13 from '../../assets/JS13.png';
import LOVE from '../../assets/LOVE.png';
import { 
  FaPlus,
  FaMinus,
  FaHeart,
  FaThumbsUp,
  FaThumbsDown,
  FaRocket,
  FaRocketchat,
  FaHandPeace,
  FaHandHoldingHeart,
  FaHandshake,
  FaHandHoldingUsd,
  FaHandsHelping,
  FaHandHoldingWater,
  FaHandHoldingMedical,
} from 'react-icons/fa';
const Navbar = ({scrollY}) => {
  return (
    <article>
      <nav className='nav-section-container'>
        <ul className='nav-ui'>

          <li className='nav-ui-items'>
            <Link to='/'>HomePage</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/access'>Access</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/collections'>Collections</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/enterPrise'>EnterPrise</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/payment'>Payments</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/products'>products</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/duty'>Duty</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/discipline'>Discipline</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/accomp'>Accomplishments</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/services'>Services</Link>
          </li>
          <li className='nav-ui-items'>
            <button className='navbar-btn  anima'>
              <Link to='/signUp'>Sign Up</Link>
            </button>
          </li>
          <li className='nav-ui-items'>
            <button className='nav-btn anima'>
              <Link to='/login'>Login</Link>
            </button>
          </li>
          <li className='nav-ui-items'>
            <Link to='/cookies'>Cookies</Link>
          </li>
        </ul>
      </nav>
      <section>
        <header className='navHeader'>
          <h4 className='navTitle'>Best Web Design Trends you will love to know about Coding Addict.</h4>
        </header>
        <main className='navContent'>
          <img src={one} alt='one' width={400} height={400}/>
          <div>
            <h5 className='navTech'>I write and curate content for coding Addict. I hope this blog post is  helpful.
              Are you looking at creating a blog, website or an online store? Bluehost has something for everyone. Get started today.
            </h5>
          </div>
          <img src={two} alt='two' width={400} height={400}/>
          <div>
            <h5 className='navTechies'>
              Teams at TLS Technology consist of highly skilled software developers with years of experience developing unique software for businesses of all sizes worldwide.
              We have top-tier senior software engineers available to help you complete your software development projects swiftly and effectively. Hire a software development team comprising the top 1% of the worldwide IT talent pool. You can rest assured that you will always receive high-quality, innovative solutions as part of your business's digital transformation.
              Increase your company's revenue while cutting costs by 40-60% and reducing the time it takes to bring products to market using high-quality software.
            </h5>
          </div>
          <img src={three} alt='three' width={400} height={400}/>
        </main>
        <h5 className='navNode'>
          These are the modern technologies we use to build the backend.
        </h5>
        <div className='navJSTechies'>
          <img src={N1} alt='N1' width={300} height={300} />
          <img src={N2} alt='N2' width={300} height={300} />
          <img src={N3} alt='N3' width={300} height={300} />
        </div>
        <div className='navJSTechies '>
          <img src={JS8} alt='JS8' width={300} height={300}/>
          <img src={JS11} alt='JS11' width={300} height={300}/>
          <img src={JS13} alt='JS13' width={300} height={300}/>
        </div>
        <div className='navSimplicity'>
          <div className='navCurrency'>
            <img src={backend} alt='backend' width={200} height={200} />
            <h1>HIRE SOFTWARE DEVELOPER</h1>
            <p>
              Teams at TLS Technology consist of highly skilled software developers with years of experience developing unique software for businesses of all sizes worldwide.
              We have top-tier senior software engineers available to help you complete your software development projects swiftly and effectively. Hire a software development team comprising the top 1% of the worldwide IT talent pool. You can rest assured that you will always receive high-quality, innovative solutions as part of your business's digital transformation.
              Increase your company's revenue while cutting costs by 40-60% and reducing the time it takes to bring products to market using high-quality software.
            </p>
            <h4 className='navDesign'>Simplicity of Design</h4>
            <p>
              Many a dollar has gone into creating eye-catching websites over the years. Now the trend has gone toward simplistic design that offers an optimum user experience. Minimalist websites are not only easier to use, but they also load faster and better support embedded multimedia content. Advances in HTML5 and CSS3 make it more feasible than ever to create designs that are both appealing and functional. 
            </p>
          </div>
          <div className='navTrend'>
            <img src={ux} alt='ux' width={200} height={200}/>
            <h4>HIRE BACKEND DEVELOPER</h4>
            <p>
              A solid back-end is usually necessary to effectively manage the various aspects of an app or system. These kinds of reliable and safe back-end development services are available from us. The developers we back can build a robust, secure system from the ground up. Get in touch immediately to have our skilled back-end developers construct your plan.
              Improve Your App's Efficiency by Investing In Back-end Programmers
            </p>
            <p>
              The technological expertise provided by our Back-end experts will help you make a good impression on possible new clients. TLS Technology is a leading back-end development firm in India, assisting businesses in rapidly hiring and deploying dedicated back-end developers. The back-end developers at our company are experts at creating highly functional protocols. In addition, they have extensive practical experience with cutting-edge technology, allowing them to build robust, bespoke server infrastructure for your website or app.
            </p>
            <h4 className='navDesign'>Responsive Design</h4>
            <p>
              Mashable dubbed 2023 as the year of responsive design, and the trend toward responsive web design will continue on into the latter part of the year. Responsive web design utilizes HTML attributes to make websites “flexible” and able to adapt to a variety of devices. The popularity of responsive design came about due to a dramatic shift in web consumption habits. Analyst Mary Meeker, a partner at investment firm KCPB, predicted earlier in the year that mobile internet would overtake desktop internet by infinity. In this age of the mobile web, smart web designers are using responsive design more than ever.
            </p>
          </div>
        </div>
        <div className='navApp'>
          <h2 className='navLike'>App-Like Interfaces</h2>
          <p className='navText'>
            Seeing as the mobile web has skyrocketed in popularity, it’s only natural that desktop versions of websites would begin to mimic app interfaces. This creates continuity between both the mobile and desktop user experience. Desktop interfaces that mimic mobile apps naturally lend themselves well to responsive design projects, so expect to see more of this trend in the coming months.
          </p>
          <div>
            <h4 className='navLike'>Page Transparency</h4>
            <p className='navText'>
              One of the new developments in CSS3 is the ability to adjust the opacity of page elements, which makes for a pretty cool effect. This feature comes in handy when you want to apply transparency without having to combine elements into a single image.
            </p>
          </div>
          <div>
            <h1 className='navLike'>Javascript</h1>
            <div className='navJS'>
              <img src={JS} alt='JS' width={300} height={300}/>
              <img src={JS1} alt='JS1' width={300} height={300} />
              <img src={JS2} alt='JS2' width={300} height={300}/>
            </div>
            <header>
              <h4 className='navLike'>
                In the quest to make websites even more device agnostic, web designers are increasingly opting to use HTML and Javascript/JQuery instead of Flash, which isn’t as flexible. You can do quite a few cool tricks with Javascript. Some trends for this year include:
              </h4>
              <ul>
                <li>
                  <p className='navText'>
                    <strong>Parallax Scrolling:</strong>Parallax scrolling is quite trendy in 2013. It’s when the position of an object or objects on the page are relative to the page’s scroll position. Parallax comes from the Greek word for “change.” A good example is the WordPress Balloons theme, or the website of purse company Bagigia. Parallax scrolling gives the illusion of depth, and can also be used to create a fluid scrolling experience for storytelling websites.
                  </p>
                </li>
                <div>
                  <img src={JS7} alt='JS7' width={300} height={300}/>
                </div>
                <li>
                  <p className='navText'>
                    <strong>Infinite Scrolling:</strong>Infinite scrolling is when the page’s contents automatically load when you get to the bottom of the page. The user doesn’t have to click on anything or reload the page. You might have seen examples of infinite scrolling on your Facebook page or Pinterest boards.
                  </p>
                </li>
                <li>
                  <p className='navText'>
                    <strong>Sliding Panels:</strong>Sliding web page panels are a way for web pages to transition with a sliding panel animation, which is a pretty cool break from the ordinary. You can also use sliding panels to draw attention to a feature within the web page.
                  </p>
                </li>
              </ul>
              <div>
                <span className='navText'>
                  Uses for Javascript aren’t limited to just these. It solves the problems that Flash has with accessibility and SEO, and so it’s become a popular alternative for designing website animations.
                </span>
                <h1>We are are react technicians. Please, hire us.</h1>
                <div className='navJS'>
                  <img src={JS3} alt='JS3' width={300} height={300} />
                  <img src={JS4} alt='JS4' width={300} height={300}/>
                  <img src={JS5} alt='JS5' width={300} height={300}/>
                  <img src={JS6} alt='JS6' width={300} height={300} />
                </div>
              </div>
            </header>
          </div>
        </div>
        <footer className='navFooter'>
          <h4 className='navArea'>Topography</h4>
          <p className='navLine'>
            From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.
          </p>
            <div className='navButtonContainer'>
              <div>
                <div>
                  <img src={four} alt='four' width={500} height={400}/>
                </div>
                <button className='navIcon'>
                  <FaHeart/>
                </button>
                <button className='navIcon'>
                  <FaThumbsUp/>
                </button>
                <button className='navIcon'>
                  <FaThumbsDown/>
                </button>
                <button className='navIcon'>
                  <FaHandHoldingHeart/>
                </button>
                <button className='navIcon'>
                  <FaHandHoldingUsd/>
                </button>
                <button className='navIcon'>
                  <FaHandsHelping/>
                </button>
                <button className='navIcon'>
                  <FaHandHoldingWater/>
                </button>
                <button className='navIcon'>
                  <FaHandPeace/>
                </button>
                <button className='navIcon'>
                  <FaHandshake/>
                </button>
                <button className='navIcon'>
                  <FaHandHoldingMedical/>
                </button>
                <button className='navIcon'>
                  <FaRocket/>
                </button>
              </div>
              <div>
                <div>
                  <img src={five} alt='five' width={500} height={400}/>
                </div>
                <button className='navIcon'>
                  <FaHeart/>
                </button>
                <button className='navIcon'>
                  <FaThumbsUp/>
                </button>
                <button className='navIcon'>
                  <FaThumbsDown/>
                </button>
                <button className='navIcon'>
                  <FaHandHoldingHeart/>
                </button>
                <button className='navIcon'>
                  <FaHandHoldingUsd/>
                </button>
                <button className='navIcon'>
                  <FaHandsHelping/>
                </button>
                <button className='navIcon'>
                  <FaHandHoldingWater/>
                </button>
                <button className='navIcon'>
                  <FaHandPeace/>
                </button>
                <button className='navIcon'>
                  <FaHandshake/>
                </button>
                <button className='navIcon'>
                  <FaHandHoldingMedical/>
                </button>
                <button className='navIcon'>
                  <FaRocket/>
                </button>
              </div>
                <div>
                  <div>
                    <img src={six} alt='six' width={500} height={400}/>
                  </div>
                  <button className='navIcon'>
                    <FaHeart/>
                  </button>
                  <button className='navIcon'>
                    <FaThumbsUp/>
                  </button>
                  <button className='navIcon'>
                    <FaThumbsDown/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingHeart/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingUsd/>
                  </button>
                  <button className='navIcon'>
                    <FaHandsHelping/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingWater/>
                  </button>
                  <button className='navIcon'>
                    <FaHandPeace/>
                  </button>
                  <button className='navIcon'>
                    <FaHandshake/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingMedical/>
                  </button>
                  <button className='navIcon'>
                    <FaRocket/>
                  </button>
                </div>
                <div>
                  <div>
                    <img src={seven} alt='seven' width={500} height={400}/>
                  </div>
                  <button className='navIcon'>
                    <FaHeart/>
                  </button>
                  <button className='navIcon'>
                    <FaThumbsUp/>
                  </button>
                  <button className='navIcon'>
                    <FaThumbsDown/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingHeart/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingUsd/>
                  </button>
                  <button className='navIcon'>
                    <FaHandsHelping/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingWater/>
                  </button>
                  <button className='navIcon'>
                    <FaHandPeace/>
                  </button>
                  <button className='navIcon'>
                    <FaHandshake/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingMedical/>
                  </button>
                  <button className='navIcon'>
                    <FaRocket/>
                  </button>
              </div>
                <div>
                  <div>
                    <img src={eight} alt='eight' width={500} height={400}/>
                  </div>
                  <button className='navIcon'>
                    <FaHeart/>
                  </button>
                  <button className='navIcon'>
                    <FaThumbsUp/>
                  </button>
                  <button className='navIcon'>
                    <FaThumbsDown/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingHeart/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingUsd/>
                  </button>
                  <button className='navIcon'>
                    <FaHandsHelping/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingWater/>
                  </button>
                  <button className='navIcon'>
                    <FaHandPeace/>
                  </button>
                  <button className='navIcon'>
                    <FaHandshake/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingMedical/>
                  </button>
                  <button className='navIcon'>
                    <FaRocket/>
                  </button>
                </div>
                <div>
                  <div>
                    <img src={nine} alt='nine' width={500} height={400}/>
                  </div>
                  <button className='navIcon'>
                    <FaHeart/>
                  </button>
                  <button className='navIcon'>
                    <FaThumbsUp/>
                  </button>
                  <button className='navIcon'>
                    <FaThumbsDown/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingHeart/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingUsd/>
                  </button>
                  <button className='navIcon'>
                    <FaHandsHelping/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingWater/>
                  </button>
                  <button className='navIcon'>
                    <FaHandPeace/>
                  </button>
                  <button className='navIcon'>
                    <FaHandshake/>
                  </button>
                  <button className='navIcon'>
                    <FaHandHoldingMedical/>
                  </button>
                  <button className='navIcon'>
                    <FaRocket/>
                  </button>
                </div>
            </div>
          <p className='navArea'>
            Gone are the days when web designers only had a precious few choices when it came to fonts that show up well on a screen. Today, graphic designers and companies like Adobe have created vast libraries of fonts that render well on any screen. Expect them to become more expressive and larger as screen resolutions have greatly improved to display them. You can also expect to see more creative uses of fonts, including different typeface combinations.
          </p>
        </footer>
        <footer className='navLastFooter'>
          <div>
            <h4>MADE WITH LOVE  FROM CODING ADDICT.</h4>
            <br />
            <br />
            <br />
            <h4>VISIT CODING ADDICT FROM MORE GREAT WEB APPS LIKE THIS AMAZING PROJECT</h4>
            <br />
            <br />
            <button className='navBtn'>
              Source Code
            </button>
          </div>
          <img src={LOVE} alt='LOVE' width={300} height={300}/>
        </footer>
      </section>
    </article>
  );
}

export default Navbar;
