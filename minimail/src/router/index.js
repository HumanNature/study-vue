import Vue from 'vue';
import VueRouter from 'vue-router'
// 懒加载
const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Person = () => import('../views/person/Person.vue')
const Detail = () => import('../views/detail/Detail.vue')

const SetUp = () => import('../views/person/secondarypage/SetUp.vue')
const IndentList = ()=>import('../views/person/secondarypage/IndentSecondaryPage/IndentList.vue')

const About = () => import('../views/person/secondarypage/SetUpSecondaryPage/About.vue')
const AccountSecurity = () => import('../views/person/secondarypage/SetUpSecondaryPage/AccountSecurity.vue')
const CommonProblem = () => import('../views/person/secondarypage/SetUpSecondaryPage/CommonProblem.vue')
const Currency = () => import('../views/person/secondarypage/SetUpSecondaryPage/Currency.vue')
const MessageReceipt = () => import('../views/person/secondarypage/SetUpSecondaryPage/MessageReceipt.vue')
const MyFiles = () => import('../views/person/secondarypage/SetUpSecondaryPage/MyFiles.vue')
const Payment = () => import('../views/person/secondarypage/SetUpSecondaryPage/Payment.vue')
const ReceivingAddress = () => import('../views/person/secondarypage/SetUpSecondaryPage/ReceivingAddress.vue')
const Typeface = () => import('../views/person/secondarypage/SetUpSecondaryPage/Typeface.vue')
// 1.安装插件
Vue.use(VueRouter)
// 2.创建router
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/me',
        component: Person
    },
    {
        path: '/detail/:iid',
        component: Detail
    },
    {
        path: '/SetUp',
        component: SetUp,
    },
    {
        path:'/IndentList',
        component:IndentList
    },
    {   //关于
        path: '/SetUp/About',
        component: About
    },
    {   //账号与安全
        path: '/SetUp/AccountSecurity',
        component: AccountSecurity
    },
    {   //常见问题
        path: '/SetUp/CommonProbleme',
        component: CommonProblem
    },
    {   //通用
        path: '/SetUp/Currency',
        component: Currency
    },
    {   //消息接收
        path: '/SetUp/MessageReceipt',
        component: MessageReceipt
    },
    {   //我的档案
        path: '/SetUp/MyFiles',
        component: MyFiles
    },
    {   //支付设置
        path: '/SetUp/Payment',
        component: Payment
    },
    {   //收货地址
        path: '/SetUp/ReceivingAddress',
        // name:'ReceivingAddress',
        component: ReceivingAddress
    },
    {   //字体设置
        path: '/SetUp/Typeface',
        component: Typeface
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router