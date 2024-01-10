import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AppApi = createApi({
  reducerPath: 'AppApi',
  tagTypes: ['Product', 'Attribute'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/api`,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = localStorage.getItem('accessToken');
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //     return headers;
    //   }
    // },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
      providesTags: ['Product'],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ['Product'],
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...product }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
    getAllAttributes: builder.query({
      query: () => 'attributes',
      providesTags: ['Attribute'],
    }),
    getAttributeById: builder.query({
      query: (id) => `attributes/${id}`,
      providesTags: ['Attribute'],
    }),
    createAttribute: builder.mutation({
      query: (attribute) => ({
        url: 'attributes',
        method: 'POST',
        body: attribute,
      }),
      invalidatesTags: ['Attribute'],
    }),
    updateAttribute: builder.mutation({
      query: ({ id, ...attribute }) => ({
        url: `attributes/${id}`,
        method: 'PUT',
        body: attribute,
      }),
      invalidatesTags: ['Attribute'],
    }),
    deleteAttribute: builder.mutation({
      query: (id) => ({
        url: `attributes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Attribute'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAllAttributesQuery,
  useGetAttributeByIdQuery,
  useCreateAttributeMutation,
  useUpdateAttributeMutation,
  useDeleteAttributeMutation,
} = AppApi;
