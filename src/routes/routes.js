import { 
  Home, 
  Contact, 
  About,
  Services,
  Works,
  NotFound,
  Skills, 
  Testimo,
  Blog,
  Teams,
  Message
} from '../components';
import Content from '../components/Message/Content';


export const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/skills', component: Skills},
  {path: '/service', component: Services},
  {path: '/work', component: Works},
  {path: '/testimonial', component: Testimo},
  {path: '/blog', component: Blog},
  {path: '/team', component: Teams},
  {path: '/contact', component: Contact},
  {path: '/message', component: Message},
  {path: '/message/:id', component: Content},
  {component: NotFound},
]
