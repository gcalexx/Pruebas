export class Event {
    constructor(
        public name_event: String,
        public type_event: String,
        public category: String,
        public date_event: Date,
        public address_event: String,
        public description: String,
        public creator: Boolean,
        public images: [{
            _id: String,
            image: String
        }], 
        public assistans: [{
            _id_: String
        }]
    ){}
}