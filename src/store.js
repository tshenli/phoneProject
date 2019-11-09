import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// 使用VUex
Vue.use(Vuex)

function fetch(api, callback) {
    // 返回token值
    let res =  localStorage.getItem("login")
    // 显示加载中
    axios({
        method: "GET",
        url: "http://localhost:8080" + api,
        // token放在headers传递
        headers:{
            token:JSON.parse(res).token
        }
    }).then(res => {  //接口请求成功执行
        let data = null;
        if (res.data.err === 0) {
            data = res.data.data
        }
        callback && callback(data)
    }).catch(err => {  //接口请求失败执行
        console.log('接口请求异常', err)
    }).then(() => {  //不论接口是否成功都执行

    })
}

// 创建一个store仓库
const store = new Vuex.Store({
    state: {
        msg: 'success',
        userinfo: {
            name: "",
            phone: ""
        },
        skillList: [],  //秒杀列表
        courtList: [],   //东家小院列表
        recommendList: [],  //为你推荐列表
        productList: [],  //购物车列表
        cateArr: [],  // 所有品类数据
        curCateGroup: {},   // 用于CateGroup中数据显示
    },
    mutations: {
        // 秒杀商品列表
        updateSkillList(state, payload) {
            state.skillList = payload;
        },
        // 东家小院商品列表
        updateCourtList(state, payload) {
            state.courtList = payload;
        },
        // 为你推荐商品列表
        updateRecommendList(state, payload) {
            state.recommendList = [...state.recommendList, ...payload];
        },
        // 购物车列表
        updateProductList(state, payload) {
            // switch参数表示判断的条件
            switch (payload.type) {
                case 'delete':
                    // 删除订单
                    state.productList.map((ele, idx) => {
                        // 使用时间戳来判断商品的唯一性
                        if (ele.t == payload.item.t) {
                            state.productList.splice(idx, 1)
                            // 找到符合条件的就直接return，不在查询其他数据
                            return
                        }
                    })
                    break;
                case "deleteAll":
                    // 提交购物订单
                    state.productList = []
                    break;
                case "insert":
                    // 添加商品
                    state.productList.push(payload.item)
                    break;
                default:
            }
        },
        // 品类页面中的所有数据
        updateCateArr(state, payload) {
            state.cateArr = payload
            // CateGroup组件中的初始化数据
            state.curCateGroup = payload[0]
        },
        // 更新CateGroup组件中所需要的数据
        updateCurCateGroup(state, payload) {
            state.curCateGroup = state.cateArr[payload]
        }
    },

    actions: {
        // 获取秒杀商品列表数据
        getSkillList(store) {
            fetch('/db/products.json', data => {
                store.commit('updateSkillList', data)
            })
        },
        // 获取东家小院列表
        getCourtList(store) {
            fetch('/db/court.json', data => {
                store.commit('updateCourtList', data)
            })
        },
        // 获取为你推荐列表,通过传入page实现分页功能
        getRecommendList(store) {
            fetch('/db/recommend.json', data => {
                // console.log("当前页数："+page);
                store.commit('updateRecommendList', data)
            })
        },
        // 获取品类页面的数据
        getCates(store) {
            fetch('/db/cates.json', (data) => {
                console.log(data)
                store.commit('updateCateArr', data)
            })
        }
    }
})

export default store