'use client'
import React from 'react'
import { useOrganizationControllerAddUserToOrganization } from "@/src/generated/api/queries";



const Users = () => {

    const { mutate, isLoading, error }: any = useOrganizationControllerAddUserToOrganization();



    return (
        <div>Users</div>
    )
}

export default Users