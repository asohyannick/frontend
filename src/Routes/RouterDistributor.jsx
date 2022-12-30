import React, {useState} from 'react'
import {Routes, Route } from 'react-router-dom';
// All components have been imported above here
import {
 Spinner,
 Navbar,
 Accomplishment,
 AnimationCard,
 Animation,
 Accord,
 Achievements,
 Article,
 Aside,
 Buttons,
 Cart,
 CartContainer,
 Classic,
 Collections,
 Congrats,
 Cookies,
 DataCollections,
 DetailPage,
 Enterprise,
 ErrorPages,
 Food,
Form,
Garden,
Grace,
Hero,
Home,
Information,
Legend,
Modal,
Model,
Modern,
Navigator,
Payment,
Products,
Projects,
ReactSlider,
ReactWrapper,
SectionWrapper,
Services,
Shopping,
Sidebar,
Stripe,
Technologies,
Terms,
Statistics,
Income,
Great,
Glorious,
Excellence,
Duties,
Contact,
Card,
About,
Access,
Background,
Avatar,
Worthy,
Happy,
Approval,
Discipline,
Favor,
Success,
SignUp,
Login,
Footer,
} from '../components';
// All pages  are imported below the components above.
import {
  Accounts,
  Automation,
  BlogPage,
  Companion,
  Company,
  Currencies,
  CustomerServices,
  Discount,
  Merits,
  StoryLine,
  Trade,
  Policy,
  Wealth
} from '../pages';
const RouterDistributor = () => {
 const [scrollY, SetScrollY] = useState(0);
 const checkScroll = () => {
  SetScrollY(window.pageYOffset)
 }
React.useEffect(() => {
  const watchScrolling = () => {
    window.addEventListener('scroll', checkScroll);
  }
  watchScrolling();
  return () => {
    watchScrolling()
  }
},[scrollY]);
  return (
    <Routes>
      {/* Components routes  above*/}
      <Route path='/' element={<Home scrollY={scrollY} />} />
      <Route path='/spinner' element={<Spinner/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/accomp' element={<Accomplishment/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/accord' element={<Accord/>}/>
      <Route path='/achieves' element={<Achievements/>}/>
      <Route path='/article' element={<Article/>}/>
      <Route path='/aside' element={<Aside/>}/>
      <Route path='/animation' element={<Animation/>}/>
      <Route path='/animationCard' element={<AnimationCard/>}/>
      <Route path='/buttons' element={<Buttons/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cartContainer' element={<CartContainer/>}/>
      <Route path='/classic' element={<Classic/>}/>
      <Route path='/collections' element={<Collections/>}/>
      <Route path='/congrats' element={<Congrats/>}/>
      <Route path='/cookies' element={<Cookies/>}/>
      <Route path='/dataCollections' element={<DataCollections/>}/>
      <Route path='/detailPage' element={<DetailPage/>}/>
      <Route path='/enterPrise' element={<Enterprise/>}/>
      <Route path='/errorPages' element={<ErrorPages/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/garden' element={<Garden/>}/>
      <Route path='/info' element={<Information/>}/>
      <Route path='/legend' element={<Legend/>}/>
      <Route path='/grace' element={<Grace/>}/>
      <Route path='/hero' element={<Hero/>}/>
      <Route path='/modal' element={<Modal/>}/>
      <Route path='/model' element={<Model/>}/>
      <Route path='/modern' element={<Modern/>}/>
      <Route path='/navigator' element={<Navigator/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/reactSlider' element={<ReactSlider/>}/>
      <Route path='/reactWrapper' element={<ReactWrapper/>}/>
      <Route path='/sectionWrapper' element={<SectionWrapper/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/shopping' element={<Shopping/>}/>
      <Route path='/sidebar' element={<Sidebar/>}/>
      <Route path='/stripe' element={<Stripe/>}/>
      <Route path='/tech' element={<Technologies/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/statistics' element={<Statistics/>}/>
      <Route path='/income' element={<Income/>}/>
      <Route path='/great' element={<Great/>}/>
      <Route path='/glorious' element={<Glorious/>}/>
      <Route path='/excellence' element={<Excellence/>}/>
      <Route path='/duty' element={<Duties/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/access' element={<Access/>}/>
      <Route path='/background' element={<Background/>}/>
      <Route path='/avatar' element={<Avatar/>}/>
      <Route path='/worthy' element={<Worthy/>}/>
      <Route path='/happy' element={<Happy/>}/>
      <Route path='/approval' element={<Approval/>}/>
      <Route path='/discipline' element={<Discipline/>}/>
      <Route path='/favor' element={<Favor/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/footer' element={<Footer/>}/>
      {/* Pages routes  beneath*/}
      <Route path='/accounts' element={<Accounts/>}/>
      <Route path='/automation' element={<Automation/>}/>
      <Route path='/blogPage' element={<BlogPage/>}/>
      <Route path='/companion' element={<Companion/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/currencies' element={<Currencies/>}/>
      <Route path='/customer' element={<CustomerServices/>}/>
      <Route path='/discount' element={<Discount/>}/>
      <Route path='/merits' element={<Merits/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/storyLine' element={<StoryLine/>}/>
      <Route path='/trade' element={<Trade/>}/>
      <Route path='/wealth' element={<Wealth/>}/> 
      <Route path='/accounts' element={<Accounts/>}/>
      <Route path='/accounts' element={<Accounts/>}/>
    </Routes>
  )
}

export default RouterDistributor;
