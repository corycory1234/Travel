import axios from "axios";

export const token = {
  async getToken () {
    let getToken = "";

    // 1. 放 APP ID、APP KEY
    const parameter = {
      grant_type: "client_credentials",
      client_id: "a8plusa8plus-63ed2992-1481-49d8",
      client_secret: "b7cc2f1c-d41b-4b3c-9784-d8257073afcb"
    };
    
    // 2. headers 夾帶token網址、APP ID、APP KEY
    const headers = {
      method: "post",
      url: "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",
      data: parameter,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    };

    // 3. POST 送出 TOKEN驗證
    await axios( headers) 
      .then((response) => {
        getToken = response.data.access_token;
      })
      .catch((error) => {
        console.log('getToken 發生錯誤', error);
      });

      return getToken;
  },
}