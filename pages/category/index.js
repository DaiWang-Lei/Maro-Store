import { request } from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leftMenuList: [],
        rightContent: [],
        currentIndex: 0,
        scrollTop: 0
    },
    Cates: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const Cates = wx.getStorageSync('cates')
        if (!Cates) {
            this.getCategorys()
        } else {
            if (Date.now() - Cates.time > 1000 * 10) {
                this.getCategorys()
            } else {
                this.Cates = Cates.data
                let leftMenuList = this.Cates.map(v => v.cat_name)
                let rightContent = this.Cates[0].children
                this.setData({
                    leftMenuList,
                    rightContent
                })
            }
        }
    },

    async getCategorys() {
        // request({ url: '/categories' })
        //     .then((result) => {
        //         this.Cates = result
        //         wx.setStorageSync('cates', { time: Date.now(), data: this.Cates })
        //             // 构造左侧的大菜单数据
        //         let leftMenuList = this.Cates.map(v => v.cat_name)
        //             // 构造右侧
        //             // let rightContent = this.Cates.map(c => c.children)
        //         let rightContent = this.Cates[0].children
        //         this.setData({
        //             leftMenuList,
        //             rightContent
        //         })
        //     })
        const res = await request({ url: '/categories' })
        this.Cates = res
        wx.setStorageSync('cates', { time: Date.now(), data: this.Cates })
            // 构造左侧的大菜单数据
        let leftMenuList = this.Cates.map(v => v.cat_name)
            // 构造右侧
            // let rightContent = this.Cates.map(c => c.children)
        let rightContent = this.Cates[0].children
        this.setData({
            leftMenuList,
            rightContent
        })
    },
    handleLeft(e) {
        let { index } = e.currentTarget.dataset
        let rightContent = this.Cates[index].children
        this.setData({
            currentIndex: index,
            rightContent,
            scrollTop: 0
        })
    }
})