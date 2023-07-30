import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'
import KakaoMap from './components/KakaoMap.vue'
import WalkDayReport from './components/WalkDayReport.vue'
import FriendList from "./components/FriendList.vue"
import MyPage from "./components/MyPage.vue"
import Alarm from "./components/Alarm.vue"
import WalkMate from "./components/WalkMate.vue"
import StartPage from "./components/StartPage.vue"
import FriendAdd from './components/FriendAdd.vue'
import BadgePage from "./components/BadgePage.vue"
import WalkRecord from "./components/WalkRecord.vue"
import NewWalkRecord from "./components/NewWalkRecord.vue"

import Ranking from "./components/rank/Ranking.vue"
import FamilyRank from './components/rank/FamilyRank.vue'
import FriendRank from './components/rank/FriendRank.vue'
import PetRank from './components/rank/PetRank.vue'



const routes = [
    {
        path: '/',
        name: 'mainpage',
        component: MainPage,
        meta: { showMenu: true }
    },
    {
        path: '/kakaomap',
        component: KakaoMap,
        meta: { showMenu: false }
    },
    {
        path: '/walkdayreport',
        name: 'WalkDayReport',
        component: WalkDayReport,
        props: (route) => ({ timeData: route.params.timeData }),
        meta: { showMenu: false }
    },

    {
        path: "/ranking",
        name: "ranking",
        component: Ranking,
        meta: { showMenu: true }
    },
    {
        path: "/friendlist",
        name: "friendlist",
        component: FriendList,
        meta: { showMenu: true }
    },
    {
        path: "/mypage",
        name: "mypage",
        component: MyPage,
        meta: { showMenu: true }
    },
    {
        path: "/alarm",
        name: "alarm",
        component: Alarm,
        meta: { showMenu: true }
    },
    {
        path: "/walkmate",
        name: "walkmate",
        component: WalkMate,
        meta: { showMenu: false }
    },
    {
        path: "/startpage",
        name: "startpage",
        component: StartPage,
        meta: { showMenu: false }
    },
    {
        path: "/friendadd",
        name: "friendadd",
        component: FriendAdd,
        meta: { showMenu: true }
    },
    {
        path: "/badgepage",
        name: "badgepage",
        component: BadgePage,
        meta: { showMenu: true }
    },
    {
        path: '/rank/family',
        name: 'familyrankpage',
        component: FamilyRank,
        meta: { showMenu: true }
    },
    {
        path: '/rank/friend',
        name: 'frinedrankpage',
        component: FriendRank,
        meta: { showMenu: true }
    },
    {
        path: '/rank/pet',
        name: 'petrankpage',
        component: PetRank,
        meta: { showMenu: true }
    },
    {
        path: '/walkrecord',
        name: 'walkrecord',
        component: WalkRecord,
        meta: { showMenu: true }
    }, 
    {
        path: '/newwalkrecord',
        name: 'newwalkrecord',
        component: NewWalkRecord,
        meta: { showMenu: true }
    }, 
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;