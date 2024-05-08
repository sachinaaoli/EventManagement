import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./Slices/MetaReducer";
import authSlice from "./Slices/LoginSlices"
import UserlistSlice from "./Slices/UserlistSlice";
import AddtoCart from "./Slices/AddtoCart";
import Buy from "./Slices/Buy";

const resetSlices=[
  "authinfo",
  "alluser",
  "AddtoCart",
  "Buy"
];

const rootReducer=createResetMetaReducer(
    "GLOBAL_RESET",
    resetSlices
)(
    combineReducers({
        authinfo: authSlice,
        alluser:UserlistSlice,
        AddtoCart: AddtoCart,
        Buy: Buy,
    })
);

const persistConfig={
    key:"root",
    storage,
    whitelist:resetSlices,
};
export default persistReducer(persistConfig,rootReducer);