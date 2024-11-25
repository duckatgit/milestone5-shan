import { useOrganizationControllerUpdateOrganization } from "@/src/generated/api/queries";
import { editOrganizationDto } from "./servicesDto";


export const editOrg = async (organizationId: string, data: any) => {
    console.log(data, 'organizationId', organizationId)

    const { mutate }: any = useOrganizationControllerUpdateOrganization()

    mutate({
        body: data,
        path: {
            organizationId: organizationId
        },
    });
}