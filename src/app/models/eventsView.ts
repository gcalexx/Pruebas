export class EventsView {
    constructor(
        public _id: String,
        public name_event: String,
        public date_event: String,
        public address_event: String,
        public images: [{
            id_: String,
            image: String
        }]
    ){}
}
