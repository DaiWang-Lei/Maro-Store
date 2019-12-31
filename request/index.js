export const request = (params) => {
    return new Promise((resolve, reject) => {
        const baseUrl = 'https://api.zbztb.cn/api/public/v1'
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result.data.message);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}