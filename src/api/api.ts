import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import '../__data__/group-contacts.json'

class ContactsApi {

    async getContacts() {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })

            const response = await fetch('/contacts.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData: ContactDto[] = await response.json();

            return jsonData ?? []
        } catch (e) {
            console.log(e)
        }
    }

    async getGroups() {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })

            const response = await fetch('/group-contacts.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData: GroupContactsDto[] = await response.json();

            return jsonData
        } catch (e) {
            console.log(e)
        }
    }



}

export default new ContactsApi()