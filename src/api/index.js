import http from "./http.js";

export default {
  async getTipcs (page, limit, tab) {
    // return await http.get("https://cnodejs.org/api/v1/topics", {
    //   page,
    //   limit,
    //   tab
    // })
    return await http({
      url: "https://cnodejs.org/api/v1/topics",
      method: "get",
      params: {
        page,
        limit,
        tab
      }
    })
  }
}