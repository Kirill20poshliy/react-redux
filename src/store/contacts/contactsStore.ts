import { ContactDto } from "src/types/dto/ContactDto"
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { makeAutoObservable } from "mobx";
import contactsApi from '../../api/api'

class Contacts {
    public contacts: ContactDto[] = []
    private _contactsObservable?: IPromiseBasedObservable<ContactDto[] | undefined>

    constructor() {
        makeAutoObservable(this);
        this.fetchContacts();
    }

    public fetchContacts() {
        this._contactsObservable = fromPromise(
            contactsApi.getContacts().then(res => {
                if (res) {
                    this.contacts = res
                }
                return res
            })
        )
    }

    public isLoading() {
        return this._contactsObservable?.state === "pending";
    }

}

export default new Contacts()