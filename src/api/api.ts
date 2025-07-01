import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import '../__data__/group-contacts.json'

class ContactsApi {

    async getContacts() {
        try {
            const response = await fetch(
                'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json'
            );
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
            const response = await fetch(
                'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/398/h/e6c614d4c59fd9b546fb5abdfb456dd5.json'
            );
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