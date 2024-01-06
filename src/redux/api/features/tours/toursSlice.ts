import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TourState {
  tours: any[]
  filters: Record<string, any>
}

const initialState: TourState = {
  tours: [],
  filters: {},
}

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    storeProduct: (state, action: PayloadAction<AnyAction>) => {
      if (action.payload) {
        const isItemAlreadyInArray = state.tours.some((tour) => {
          return tour.id === action.payload.id
        })

        if (!isItemAlreadyInArray) {
          state.tours.push(action.payload)
        }
      }
    },
    removeProduct: (state, action: PayloadAction<any>) => {
      if (action.payload) {
        state.tours = state.tours.filter(
          (product) => product.id !== action.payload.id
        )
      }
    },
    resetCart: (state) => {
      state.tours = []
    },
    setFilters: (state, action) => {
      state.filters = action.payload
    },
  },
})

export const { storeProduct, removeProduct, resetCart, setFilters } =
  toursSlice.actions

export default toursSlice.reducer
