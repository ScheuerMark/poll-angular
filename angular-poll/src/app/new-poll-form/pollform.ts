export interface PollForm {
    title:string;
    options: option[];
    id?: number;
}

export interface option {
    value: string;
    votes?: number;
    id?: number;
}

export interface PollResponse {
    message: string;
    pollId: number;
  }