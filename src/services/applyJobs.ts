import axios from "axios";

export type ApplyJob =  {
    id: number
    user_id: number
    advertisement_id: number
}

export interface ApplyJobCreate {
    user_id: number
    advertisement_id: number
}

export default class ApplyJobsService  {
    static async create(applyJobCommand: ApplyJobCreate): Promise<ApplyJob[]> {
        try {
            return await axios.post(`http://127.0.0.1:3333/api/apply-jobs`, applyJobCommand);
        } catch (error) {
            console.error('There was an error creating the apply job:', error);
            throw error;
        }
    }
}