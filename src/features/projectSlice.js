import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  activeMenu: false,
  windowWidth: window.innerWidth,
  warrantyObj: {},
  windowOrder: false,
  descriptionTabsValue: 1,
  newCollectionTabsValue: 0,
  cart: [],
  buyNow: [],
  modalOrderConfirm: true,
  isLoading: false,
  snackbar: false,
  formValue: '',
  tabsReview: 0,
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload
    },
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload
    },
    setWarrantyObj: (state, action) => {
      state.warrantyObj = action.payload
    },
    setDescriptionTabsValue: (state, action) => {
      state.descriptionTabsValue = action.payload
    },
    setNewCollectionTabsValue: (state, action) => {
      state.newCollectionTabsValue = action.payload
    },
    setCart: (state, action) => {
      const findItem = state.cart.find(item =>
        item.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.cart.push({
          ...action.payload,
          count: 1
        })
      }
    },
    setClearCart: (state, action) => {
      state.cart = action.payload;
    },
    setClearBayNow: (state, action) => {
      state.buyNow = action.payload;
    },
    setPlusItem: (state, action) => {
      const findItem = state.cart.find(item => item.id === action.payload);
      if (findItem) findItem.count++;
    },
    setMinusItem: (state, action) => {
      const findItem = state.cart.find(item => item.id === action.payload);
      if (findItem.count > 1) {
        findItem.count--
      } else {
        state.cart = state.cart.filter(item => item.id !== action.payload)
      }
    },
    setRemoveItem: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
    setBayNow: (state, action) => {
      state.buyNow.push(action.payload)
    },
    setModalOrderConfirm: (state, action) => {
      state.modalOrderConfirm = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setSnackBar: (state, action) => {
      state.snackbar = action.payload
    },
    setFormValue: (state, action) => {
      state.formValue = action.payload
    },
    setTabsReview: (state, action) => {
      state.tabsReview = action.payload
    },
  },
})

export const {
  setActiveMenu,
  setWindowWidth,
  setWarrantyObj,
  setDescriptionTabsValue,
  setNewCollectionTabsValue,
  setCart,
  setBayNow,
  setClearBayNow,
  setPlusItem,
  setMinusItem,
  setRemoveItem,
  setIsLoading,
  setClearCart,
  setSnackBar,
  setFormValue,
  setTabsReview
} = projectSlice.actions

export default projectSlice.reducer