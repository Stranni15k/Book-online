export default class lines {
    constructor(data) {
        this.id = data?.id;
        this.price = data?.price || '';
        this.imgsource = data?.imgsource || '';
        this.title = data?.title || '';
        this.name = data?.name || '';
        this.description = data?.description || '';
    }
}