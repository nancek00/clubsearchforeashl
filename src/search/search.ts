
import { set as rSet } from 'ramda'

export const testRSet = () => {
    console.log("rset:",rSet);

}


const defaultConfig = {
    method: 'GET',
    headers: {
      'Referer': 'techsistance.com'
    }
}

const addUrlParam = k => v => obj => {
    obj[k] = v
  }
  
  
  // Hocey Domain
  const addClubNameToUrl = addUrlParam("clubName")
  const addPlatformTOUrl = addUrlParam("platform")
  const createUrlParamFromArr = arr => encodeURI(arr.join("="))
  
  const queryParameters = {}
  
  addClubNameToUrl("respect")(queryParameters);
  addPlatformTOUrl("ps4")(queryParameters);
  console.log("test",queryParameters);
  
  
//   const queryString = "?" + Object.entries(queryParameters).map(createUrlParamFromArr).join("&")
  