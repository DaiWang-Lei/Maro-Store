import { request } from '../../request/index.js'
// pages/category/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leftMenuList: [],
        rightContent: [],
        currentIndex: 0
    },
    Cates: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getCategorys()
    },

    getCategorys() {
        request({ url: 'https://api.zbztb.cn/api/public/v1/categories' })
            .then((result) => {
                this.Cates = result.data.message

                // 构造左侧的大菜单数据
                let leftMenuList = this.Cates.map(v => v.cat_name)
                    // 构造右侧
                    // let rightContent = this.Cates.map(c => c.children)
                let rightContent = this.Cates[0].children
                this.setData({
                    leftMenuList,
                    rightContent
                })
            })
    }
})