import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsSlice = createApi({
    reducerPath: "contactsSlice",
    tagTypes: ['contacts'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc",
    }),
    endpoints: (builder) => ({
        getContacts: builder.query<ContactDto[], void>({
            query: () => ({
                url: `/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json`
            }),
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'contacts' as const, id })),
						{ type: 'contacts', id: 'LIST' },
						]
					: [{ type: 'contacts', id: 'LIST' }],
        })
    }),
});

export const {
    useGetContactsQuery
} = contactsSlice;
