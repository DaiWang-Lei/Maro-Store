import { request } from '../../request/index.js'
//Page Object
Page({
    data: {
        swiperList: [],
        catesList: [],
        floorList: []
    },
    //options(Object)
    onLoad: function(options) {
        // 1.传统方法，发送ajax请求
        // wx.request({
        //     url: '/home/swiperdata',
        //     success: (result) => {
        //         this.setData({
        //             swiperList: result
        //         })
        //     },
        // });

        // 2.promise方法
        this.getSwiper()
        this.getCates()
        this.getFloor()



    },
    // 获取轮播图的方法
    getSwiper() {
        request({ url: "/home/swiperdata" })
            .then(result => {
                this.setData({
                    swiperList: result
                })
            })
    },
    // 获取分类
    getCates() {
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    catesList: result
                })
            })
    },
    // 获取楼层
    getFloor() {
        request({ url: "/home/floordata" })
            .then(result => {
                this.setData({
                    floorList: result
                })
            })
    }
});