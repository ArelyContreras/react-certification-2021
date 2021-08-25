
import HomePage from '../pages/Home';
import VideoDetailsPage from '../pages/VideoDetails'
import FavoritesPage from '../pages/Favorites';
import FavoritesDetailsPage from '../pages/FavoritesDetails';
import PageNotFound from '../pages/PageNotFound';

const routes =[
  {
    path:'/',
    component: HomePage,
    isPrivate: false,
    propsPassed: 'videos'
  },
  {
    path:'/details/:videoId',
    component: VideoDetailsPage,
    isPrivate: false
  },
  {
    path:'/favorites',
    component: FavoritesPage,
    isPrivate: true
  },
  {
    path:'/favorites/:videoId',
    component: FavoritesDetailsPage,
    isPrivate: true
  },
  {
    path:'/404',
    component: PageNotFound,
    isPrivate: false
  },
  {
    path:'/*',
    component: PageNotFound,
    isPrivate: true
  }
]

export default routes;