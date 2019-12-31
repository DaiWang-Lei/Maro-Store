// pages/goods_list/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [
            { id: 0, value: "综合", Active: true },
            { id: 1, value: "销量", Active: false },
            { id: 2, value: "价格", Active: false }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options);

    },
    handletabsItemChange(e) {
        // console.log(e.detail.index);
        const { index } = e.detail
        let { tabs } = this.data
        tabs.forEach((v, i) => i === index ? v.Active = true : v.Active = false)

        this.setData({
            tabs
        })
    }

})