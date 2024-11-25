'use client'
import { useUserControllerGetOrganizations, useOrganizationControllerRegister, useOrganizationControllerUpdateOrganization } from "@/src/generated/api/queries";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useDisclosure } from '@mantine/hooks';
import { Table, Button, Modal, TextInput, Menu } from '@mantine/core';
import { CreateOrganizationRequestDto } from "@/src/generated/api/requests";
import { useEffect, useState } from "react";
import { organizationIdStore } from "@/store/store";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

export default function Organization() {
    const [opened, { open, close }] = useDisclosure(false);
    const router = useRouter()

    const [organizationIdState, setOrganizationIdState] = useAtom(organizationIdStore)
    const [editData, setEditData] = useState({})
    const [editable, setEditable] = useState(false)

    useEffect(() => {
        console.log(editable);
    }, [editable])



    const [form, setForm] = useState<CreateOrganizationRequestDto>({
        domain: '',
        organizationName: '',
        organizationIDFileLink: '',
        governmentIDFileLink: ''
    });


    const { data }: any = useUserControllerGetOrganizations();
    const { mutate, isLoading, error }: any = useOrganizationControllerRegister();


    const handleSubmit = () => {
        const payload = {
            domain: form?.domain,
            organizationName: form?.organizationName,
            organizationIDFileLink: form?.organizationIDFileLink,
            governmentIDFileLink: form?.governmentIDFileLink
        };


        if (!payload.domain || !payload.organizationName || !payload.organizationIDFileLink || !payload.governmentIDFileLink) {
            console.log("Error: Missing required fields");
            return;
        }

        mutate({ body: payload });
    };


    const rows = data && data?.organizations?.map((item: any) => (
        <Table.Tr className="cursor-pointer" key={item.name} onClick={() => {
            setOrganizationIdState(item.id)
            router.push(`/orgdetails?id=${item.id}`)
        }}>
            <Table.Td>{item.id}</Table.Td>
            <Table.Td>{item.organizationName}</Table.Td>
            {/* <Table.Td>
                <Menu shadow="md" width={200}>
                    <Menu.Target>
                        <EllipsisVertical size={20} className="cursor-pointer" />
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={() => {
                            setEditable(true)
                            open()
                        }}>
                            Edit
                        </Menu.Item>
                        <Menu.Item>
                            Delete
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Table.Td> */}
        </Table.Tr>
    ));


    return (
        <>
            <div className="w-full h-full mt-10">
                <div className="w-full flex justify-end">
                    <Button onClick={open} className="">Create Organization</Button>
                </div>
                <div>
                    <h2 className="font-semibold text-lg">Organization</h2>
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>id</Table.Th>
                                <Table.Th>name</Table.Th>
                                {/* <Table.Th>action</Table.Th> */}
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </div>
                <Modal opened={opened} onClose={close} title="Create Organization">
                    <TextInput
                        label="Domain"
                        onChange={(e) => {
                            setForm({ ...form, domain: e.target.value });
                            setEditData({ label: "domain", data: e.target.value })
                        }}
                    />
                    <TextInput label="organization Name"
                        onChange={(e) => {
                            setForm({ ...form, organizationName: e.target.value });
                            setEditData({ label: "organizationName", data: e.target.value })
                        }}
                    />
                    <TextInput label="organizationID File Link"
                        onChange={(e) => {
                            setForm({ ...form, organizationIDFileLink: e.target.value });
                            setEditData({ label: "organizationIDFileLink", data: e.target.value })
                        }}
                    />
                    <TextInput label="governmentID File Link"
                        onChange={(e) => {
                            setForm({ ...form, governmentIDFileLink: e.target.value });
                            setEditData({ label: "governmentIDFileLink", data: e.target.value })
                        }}
                    />
                    <Button className="w-full mt-2" disabled={isLoading} onClick={handleSubmit}>Submit</Button>
                </Modal>
            </div>
            <ReactQueryDevtools />
        </>
    );
}
