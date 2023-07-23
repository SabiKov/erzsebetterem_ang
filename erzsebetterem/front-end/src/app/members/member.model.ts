
export class Member {

  public id: number;
  public name: string;
  public startDate: string;
  public endDate: string;
  public status: string;

  constructor(id: number,
              name: string,
              startDate: string,
              endDate: string,
              status: string) {

    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;

  }

}
