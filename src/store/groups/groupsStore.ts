import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { makeAutoObservable } from "mobx";
import contactsApi from '../../api/api'
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

class Groups {
    public groups: GroupContactsDto[] = []
    private _groupsObservable?: IPromiseBasedObservable<GroupContactsDto[] | undefined>

    constructor() {
        makeAutoObservable(this);
        this.fetchGroups();
    }

    public fetchGroups() {
        this._groupsObservable = fromPromise(
            contactsApi.getGroups().then(res => {
                if (res) {
                    this.groups = res
                }
                return res
            })
        )
    }

    public isLoading() {
        return this._groupsObservable?.state === "pending";
    }

}

export default new Groups()