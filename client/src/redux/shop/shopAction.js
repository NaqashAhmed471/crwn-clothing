// import { collection, getDocs } from "firebase/firestore";

// import {
//   convertCollectionsSnapshotToMap,
//   db,
// } from "../../firebase/firebase.utils";

import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shopType";

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = collection(db, "collection");
//     dispatch(fetchCollectionsStart());

//     getDocs(collectionRef)
//       .then((snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
