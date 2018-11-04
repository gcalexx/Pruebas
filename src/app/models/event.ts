export class Event {
    constructor(
        public name_event: String,
        public type_event: String,
        public category: String,
        public date_event: String,
        public hour_event: String,
        public address_event: String,
        public description: String,
        public images: [{
            id_: String,
            image: String
        }], 
        public assistans: [{
            id_: String
        }]
    ){}
}