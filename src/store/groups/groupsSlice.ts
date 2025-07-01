import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsSlice = createApi({
    reducerPath: "groupsSlice",
    tagTypes: ['groups'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc",
    }),
    endpoints: (builder) => ({
        getGroups: builder.query<GroupContactsDto[], void>({
            query: () => ({
                url: `/398/h/e6c614d4c59fd9b546fb5abdfb456dd5.json`
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'groups' as const, id })),
                        { type: 'groups', id: 'LIST' },
                        ]
                    : [{ type: 'groups', id: 'LIST' }],
        })
    }),
});

export const {
    useGetGroupsQuery
} = groupsSlice;