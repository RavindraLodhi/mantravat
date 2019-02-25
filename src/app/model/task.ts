export class Task {
    t_type : string;
    t_Category :string;
    t_Name :string;
    t_SDate :Date;
    t_EDate: Date
    t_EstimetedHr :number
    t_Priority:string;
    t_Status: string
    t_parentId: string
    projectId: string
    t_CreateBy: string
    t_Assign: string
    t_LongDescription:string
    attachements: any[]
}