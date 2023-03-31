import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
const saveToLocalStorage = (name, data) => {
  localStorage.setItem(
    name,
    JSON.stringify({
      ...data,
    })
  );
};
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const data = {
            accessToken: result.data.accessToken,
            user: {
              email: result.data.user.email,
              id: result.data.user.id,
              name: result.data.user.name,
            },
          };
          console.log(data, " => Line No: 56");
          saveToLocalStorage("auth", { ...data });
          dispatch(
            userLoggedIn({
              ...data,
            })
          );
        } catch (error) {}
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const data = {
            accessToken: result.data.accessToken,
            user: {
              email: result.data.user.email,
              id: result.data.user.id,
              name: result.data.user.name,
            },
          };
          console.log(data, " => Line No: 56");
          saveToLocalStorage("auth", { ...data });
          dispatch(
            userLoggedIn({
              ...data,
            })
          );
        } catch (error) {}
      },
    }),
    isExist: builder.query({
      query: (email) => `/users?email_like=${email}`,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useIsExistQuery } =
  authApi;
