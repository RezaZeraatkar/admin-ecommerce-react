import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AppApi = createApi({
  reducerPath: 'AppApi',
  tagTypes: ['Product', 'Attribute'],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8080/api/`,
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
      transformResponse: (response) => {
        const transformed = response.map((product) => {
          return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            color: product.color,
            size: product.size,
            sleeves: product.sleeves,
            stock: product.stock === -1 ? 'Not-Manufactured' : product.stock,
          };
        });

        // Flatten the array
        return transformed.flat() as Product[];
      },
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
      query: () => ({
        url: `attributes`,
        method: 'GET',
      }),
      providesTags: ['Attribute'],
      transformResponse: (response) => {
        const transformed = response.reduce((acc, attribute) => {
          if (!acc[attribute.type]) {
            acc[attribute.type] = [];
          }
          acc[attribute.type].push({
            id: attribute.id,
            value: attribute.title,
          });
          return acc;
        }, {});
        return transformed;
      },
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
