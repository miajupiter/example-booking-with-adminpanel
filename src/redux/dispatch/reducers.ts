import api from "../api/api"
import servicesSlice from "../api/features/services/servicesSlice"
import toursSlice from "../api/features/tours/toursSlice"
import userSlice from "../api/features/user/userSlice"

export const reducer = {
  [api.reducerPath]: api.reducer,
  tours: toursSlice,
  services: servicesSlice,
  user: userSlice,
}
