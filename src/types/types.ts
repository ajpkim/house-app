// Add type definitions matching the DB tables and other important stuff

import { UUID } from "crypto";
import internal from "stream";
import { EnumDeclaration } from "typescript";

export type User = { 
    uuid: UUID;
    name: string;
    email: string;
    room: number;
    birthday: string;
}

export enum TaskType {
    Chore = 'chore',
    General = 'general'
}

export type Task = {
    uuid: UUID;
    task_name: string;
    task_desc: string;
    due_date?: string;
    assignee?: string;
    creator: UUID;
    task_type: TaskType;
}