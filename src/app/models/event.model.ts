export interface EventModel {
    title: string;
    img?: string;
    begin: Date;
    to?: Date;
    description?: string;
    icon?: string;
    status?: 'green' | 'red';
}
