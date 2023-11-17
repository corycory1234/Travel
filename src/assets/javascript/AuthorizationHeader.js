import jsSHA from "jssha";
// 驗證API
export default function getAuthorizationHeader () {
  // AppID 與 AppKEY
  let AppID = "a8plusa8plus-63ed2992-1481-49d8";
  let AppKey = "b7cc2f1c-d41b-4b3c-9784-d8257073afcb";

  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  let HMAC = ShaObj.getHMAC('B64');
  let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
  return { 'Authorization': Authorization, 'X-Date': GMTString };
}