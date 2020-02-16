export class Session {
    id: string;
    user_id: string;
    pos_words: string[];
    neg_words: string[];
    sleep: number;
    date: string;

    constructor() {
        this.id = '';
        this.user_id = '';
        this.pos_words = [];
        this.neg_words = [];
        this.sleep = 0;
        this.date = ""
    }
}